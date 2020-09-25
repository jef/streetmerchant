import {Link, Store} from './store/model';
import winston, {format} from 'winston';
import {Config} from './config';
import chalk from 'chalk';

const prettyJson = format.printf(info => {
	const timestamp = new Date().toLocaleTimeString();

	if (typeof info.message === 'object') {
		info.message = JSON.stringify(info.message, null, 4);
	}

	return chalk.grey(`[${timestamp}]`) + ` ${info.level} ` + chalk.grey('::') + ` ${info.message}`;
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
			return '✖ ' + buildProductString(link, store, true) + ' :: ' + chalk.yellow('CAPTCHA');
		}

		return `✖ ${buildProductString(link, store)} :: CAPTCHA`;
	},
	inStock(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return chalk.bgGreen.white.bold(`🚀🚨 ${buildProductString(link, store, false)} :: IN STOCK 🚨🚀`);
		}

		return `🚀🚨 ${buildProductString(link, store)} :: IN STOCK 🚨🚀`;
	},
	inStockWaiting(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return 'ℹ ' + buildProductString(link, store, true) + ' :: ' + chalk.yellow('IN STOCK, WAITING');
		}

		return `ℹ ${buildProductString(link, store)} :: IN STOCK, WAITING`;
	},
	outOfStock(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return '✖ ' + buildProductString(link, store, true) + ' :: ' + chalk.red('OUT OF STOCK');
		}

		return `✖ ${buildProductString(link, store)} :: OUT OF STOCK`;
	},
	rateLimit(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return '✖ ' + buildProductString(link, store, true) + ' :: ' + chalk.yellow('RATE LIMIT EXCEEDED');
		}

		return `✖ ${buildProductString(link, store)} :: RATE LIMIT EXCEEDED`;
	}
};

function buildProductString(link: Link, store: Store, color?: boolean): string {
	if (color) {
		return chalk.cyan(`[${store.name}]`) + chalk.grey(` [${link.brand} (${link.series})] ${link.model}`);
	}

	return `[${store.name}] [${link.brand} (${link.series})] ${link.model}`;
}
