import {Config} from './config';

export function getSleepTime() {
	return Config.browser.minSleep + (Math.random() * (Config.browser.maxSleep - Config.browser.minSleep));
}

export async function delay(ms: number) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}
