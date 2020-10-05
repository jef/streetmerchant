import {Link, Series, Store} from './model';
import {Print, logger} from '../logger';
import {Browser} from 'puppeteer';
import cheerio from 'cheerio';
import {filterSeries} from './filter';
import {usingResponse} from '../util';

function addNewLinks(store: Store, links: Link[], series: Series) {
	if (links.length === 0) {
		logger.warn(Print.message('NO STORE LINKS FOUND', series, store, true));

		return;
	}

	const existingUrls = new Set(store.links.map(link => link.url));
	const newLinks = links.filter(link => !existingUrls.has(link.url));

	if (newLinks.length === 0) {
		return;
	}

	logger.info(Print.message(`FOUND ${newLinks.length} STORE LINKS`, series, store, true));
	logger.debug(JSON.stringify(newLinks, null, 2));

	store.links = store.links.concat(newLinks);
}

export async function fetchLinks(store: Store, browser: Browser) {
	if (!store.linksBuilder) {
		return;
	}

	const promises: Array<Promise<void>> = [];

	for (let {series, url} of store.linksBuilder.urls) {
		if (!filterSeries(series)) {
			continue;
		}

		logger.debug(Print.message('DETECTING STORE LINKS', series, store, true));

		if (!Array.isArray(url)) {
			url = [url];
		}

		url.map(x => promises.push(usingResponse(browser, x, async response => {
			const text = await response?.text();

			if (!text) {
				logger.error(Print.message('NO RESPONSE', series, store, true));
				return;
			}

			const docElement = cheerio.load(text).root();
			const links = store.linksBuilder!.builder(docElement, series);

			addNewLinks(store, links, series);
		})));
	}

	await Promise.all(promises);
}
