declare module 'puppeteer-extra-plugin-block-resources' {
	import {PuppeteerExtraPlugin} from 'puppeteer-extra';

	export type ResourceType =
		'document' |
		'eventsource' |
		'fetch' |
		'font' |
		'image' |
		'manifest' |
		'media' |
		'other' |
		'script' |
		'stylesheet' |
		'texttrack' |
		'websocket' |
		'xhr';

	export interface Options {
		availableTypes?: Set<ResourceType>;
		blockedTypes?: Set<ResourceType>;
	}

	export default function (options?: Options): PuppeteerExtraPlugin;
}
