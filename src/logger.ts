import {Link, Store} from './store/model';
import winston, {format} from 'winston';
import {Config} from './config';
import colors from 'colors'; // eslint-disable-line no-restricted-imports

const prettyJson = format.printf(info => {
	const timestamp = new Date().toLocaleTimeString();

	if (typeof info.message === 'object') {
		info.message = JSON.stringify(info.message, null, 4);
	}

	return colors.grey(`[${timestamp}]`) + ` ${info.level} ` + colors.grey('::') + ` ${info.message}`;
});

export const Logger = winston.createLogger({
	format: format.combine(
		format.colorize(),
		format.prettyPrint(),
		format.splat(),
		format.simple(),
		prettyJson
	),
	level: Config.logLevel,
	transports: [new winston.transports.Console({})]
});

export const Print = {
	captcha(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return '✖ ' + buildProductString(link, store, true) + ' :: ' + colors.yellow('CAPTCHA');
		}

		return `✖ ${buildProductString(link, store)} :: CAPTCHA`;
	},
	inStock(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return colors.rainbow(`🚀🚨 ${buildProductString(link, store, true)} :: IN STOCK 🚨🚀`);
		}

		return `🚀🚨 ${buildProductString(link, store)} :: IN STOCK 🚨🚀`;
	},
	outOfStock(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return '✖ ' + buildProductString(link, store, true) + ' :: ' + colors.red('OUT OF STOCK');
		}

		return `✖ ${buildProductString(link, store)} :: OUT OF STOCK`;
	},
	rateLimit(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return '✖ ' + buildProductString(link, store, true) + ' :: ' + colors.yellow('RATE LIMIT EXCEEDED');
		}

		return `✖ ${buildProductString(link, store)} :: RATE LIMIT EXCEEDED`;
	}
};

function buildProductString(link: Link, store: Store, color?: boolean): string {
	if (color) {
		return colors.cyan(`[${store.name}]`) + colors.grey(` [${link.brand} (${link.series})] ${link.model}`);
	}

	return `[${store.name}] [${link.brand} (${link.series})] ${link.model}`;
}
