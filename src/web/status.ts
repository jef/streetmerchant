import {config} from '../config';
import {filterStoreLink} from '../store/filter';
import {Link, Series, getStores} from '../store/model';

export type MatrixCellStatus =
  | 'idle'
  | 'checking'
  | 'out_of_stock'
  | 'in_stock'
  | 'error'
  | 'unsupported';

type StatusEntry = {
  lastCheckedAt?: number;
  lastUpdatedAt?: number;
  productCount: number;
  status: MatrixCellStatus;
  url?: string;
};

const statusMap = new Map<string, StatusEntry>();

function getKey(storeName: string, series: Series) {
  return `${storeName}::${series}`;
}

function getSelectedStoreEntries() {
  return [...getStores().entries()];
}

function getFilteredLinksForStore(storeName: string) {
  const store = getStores().get(storeName);
  if (!store) {
    return [] as Link[];
  }

  return store.links.filter((link: Link) => filterStoreLink(link));
}

export function getSelectedSeriesMatrix() {
  if (config.store.showOnlySeries.length > 0) {
    return [...config.store.showOnlySeries].sort() as Series[];
  }

  const selected = new Set<Series>();

  for (const [storeName] of getSelectedStoreEntries()) {
    for (const link of getFilteredLinksForStore(storeName)) {
      selected.add(link.series);
    }
  }

  return [...selected].sort() as Series[];
}

export function initializeStatusMap() {
  const selectedSeries = getSelectedSeriesMatrix();
  const selectedStores = getSelectedStoreEntries().map(
    ([storeName]) => storeName
  );

  for (const storeName of selectedStores) {
    const links = getFilteredLinksForStore(storeName);

    for (const series of selectedSeries) {
      const key = getKey(storeName, series);
      const supportedLinks = links.filter(
        (link: Link) => link.series === series
      );
      const existing = statusMap.get(key);

      statusMap.set(key, {
        lastCheckedAt: existing?.lastCheckedAt,
        lastUpdatedAt: existing?.lastUpdatedAt,
        productCount: supportedLinks.length,
        status: existing?.status ?? 'idle',
        url:
          existing?.url ??
          supportedLinks.find((link: Link) => link.cartUrl)?.cartUrl ??
          supportedLinks[0]?.url,
      });
    }
  }

  for (const key of [...statusMap.keys()]) {
    const [storeName, series] = key.split('::');
    if (
      !selectedStores.includes(storeName) ||
      !selectedSeries.includes(series as Series)
    ) {
      statusMap.delete(key);
    }
  }
}

function ensureEntry(storeName: string, link: Link): StatusEntry {
  const key = getKey(storeName, link.series);
  const existing = statusMap.get(key);
  if (existing) {
    if (!existing.url) {
      existing.url = link.cartUrl ?? link.url;
    }
    return existing;
  }

  const created: StatusEntry = {
    lastCheckedAt: undefined,
    lastUpdatedAt: undefined,
    productCount: 1,
    status: 'idle',
    url: link.cartUrl ?? link.url,
  };
  statusMap.set(key, created);
  return created;
}

export function markStatusChecking(storeName: string, link: Link) {
  const entry = ensureEntry(storeName, link);
  entry.lastCheckedAt = Date.now();
  entry.lastUpdatedAt = Date.now();
  entry.status = 'checking';
}

export function markStatusResult(
  storeName: string,
  link: Link,
  status: Extract<MatrixCellStatus, 'out_of_stock' | 'in_stock' | 'error'>
) {
  const entry = ensureEntry(storeName, link);
  entry.lastCheckedAt = Date.now();
  entry.lastUpdatedAt = Date.now();
  entry.url = link.cartUrl ?? link.url;
  entry.status = status;
}

export function getMatrixStatus() {
  initializeStatusMap();

  const selectedStores = getSelectedStoreEntries().map(
    ([storeName]) => storeName
  );
  const selectedSeries = getSelectedSeriesMatrix();

  return {
    generatedAt: Date.now(),
    stores: selectedStores,
    series: selectedSeries,
    cells: selectedSeries.map(series => {
      return {
        series,
        stores: selectedStores.map(storeName => {
          const entry = statusMap.get(getKey(storeName, series)) ?? {
            productCount: 0,
            status: 'unsupported' as MatrixCellStatus,
          };

          return {
            lastCheckedAt: entry.lastCheckedAt ?? null,
            lastUpdatedAt: entry.lastUpdatedAt ?? null,
            productCount: entry.productCount,
            status: entry.status,
            store: storeName,
            url: entry.url ?? null,
          };
        }),
      };
    }),
    summary: {
      selectedSeries: selectedSeries.length,
      selectedStores: selectedStores.length,
      webPortEnabled: Boolean(process.env.WEB_PORT),
      openBrowser: config.browser.open,
    },
  };
}
