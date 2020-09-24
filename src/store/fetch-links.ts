import {Logger, Print} from '../logger';
import {Browser} from 'puppeteer';
import {Store} from './model';
import cheerio from 'cheerio';
import {filterSeries} from './filter';
import {usingResponse} from '../util';

export async function fetchLinks(store: Store, browser: Browser) {
	if (!store.linksBuilder) {
		return;
	}

	/* eslint-disable no-await-in-loop */
	for (const {series, url} of store.linksBuilder.urls) {
		if (!filterSeries(series)) {
			continue;
		}

		Logger.info(Print.message('DETECTING STORE LINKS', series, store, true));
		await usingResponse(browser, url, async response => {
			if (!response) {
				Logger.error(Print.message('REQUEST FAILED', series, store, true));
				return;
			}

			const text = await response.text();
			if (!text) {
				Logger.error(Print.message('EMPTY RESPONSE', series, store, true));
				return;
			}

			const docElement = cheerio.load(text).root();
			const links = store.linksBuilder!.builder(docElement, series);
			Logger.info(Print.message(`FOUND ${links.length} ITEMS`, series, store, true));
			Logger.debug(JSON.stringify(links, null, 2));
			store.links = store.links.concat(links);
		});
	}
	/* eslint-enable no-await-in-loop */
}
