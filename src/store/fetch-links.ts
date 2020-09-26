import {Link, Series, Store} from './model';
import {Logger, Print} from '../logger';
import {Browser} from 'puppeteer';
import cheerio from 'cheerio';
import {filterSeries} from './filter';
import {usingResponse} from '../util';

function addNewLinks(store: Store, links: Link[], series: Series) {
	if (links.length === 0) {
		Logger.error(Print.message('NO STORE LINKS FOUND', series, store, true));

		return;
	}

	const existingUrls = new Set(store.links.map(link => link.url));
	const newLinks = links.filter(link => !existingUrls.has(link.url));

	if (newLinks.length === 0) {
		return;
	}

	Logger.info(Print.message(`FOUND ${newLinks.length} STORE LINKS`, series, store, true));
	Logger.debug(JSON.stringify(newLinks, null, 2));

	store.links = store.links.concat(newLinks);
}

export async function fetchLinks(store: Store, browser: Browser) {
	if (!store.linksBuilder) {
		return;
	}

	const promises = [];

	for (const {series, url} of store.linksBuilder.urls) {
		if (!filterSeries(series)) {
			continue;
		}

		Logger.info(Print.message('DETECTING STORE LINKS', series, store, true));

		promises.push(usingResponse(browser, url, async response => {
			const text = await response?.text();

			if (!text) {
				Logger.error(Print.message('NO RESPONSE', series, store, true));
				return;
			}

			const docElement = cheerio.load(text).root();
			const links = store.linksBuilder!.builder(docElement, series);

			addNewLinks(store, links, series);
		}));
	}

	await Promise.all(promises);
}
