import {storeList} from '../src/store/model/index';

// First get the grouped and deduplicated data
const groupedByBrandAndModel = [...storeList]
  .map(storeInfo => storeInfo[1])
  .flatMap(store => store.links || [])
  .reduce((groupMap, link) => {
    const key = `${link.brand}`;
    if (!groupMap.has(key)) {
      groupMap.set(key, new Set());
    }
    groupMap.get(key)!.add(link.model);
    return groupMap;
  }, new Map<string, Set<string>>());

// Convert to sorted table format
const sortedEntries = [...groupedByBrandAndModel.entries()]
  .sort(([brandA], [brandB]) => brandA.localeCompare(brandB))
  .map(([brand, modelSet]) => {
    const sortedModels = [...modelSet].sort().join('`, `');
    return `| \`${brand}\` | \`${sortedModels}\` |`;
  });

// Create table header and combine with data
const tableHeader = '| Brand | Model |';
const headerSeparator = '|:---:|---|';
const formattedTable = [tableHeader, headerSeparator, ...sortedEntries].join(
  '\n'
);

console.log(formattedTable);
