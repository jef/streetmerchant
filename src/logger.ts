import {Link, Store} from './store/model';
import chalk from 'chalk';
import {config} from './config';
import winston from 'winston';

const prettyJson = winston.format.printf(info => {
	const timestamp = new Date().toLocaleTimeString();

	if (typeof info.message === 'object') {
		info.message = JSON.stringify(info.message, null, 4);
	}

	if (info.meta) {
		return chalk.grey(`[${timestamp}]`) + ` ${info.level} ` + chalk.grey('::') + ` ${info.message} ${chalk.magenta(JSON.stringify(info.meta, null, 2))}`;
	}

	return chalk.grey(`[${timestamp}]`) + ` ${info.level} ` + chalk.grey('::') + ` ${info.message}`;
});

export const logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.prettyPrint(),
		winston.format.splat(),
		winston.format.simple(),
		prettyJson
	),
	level: config.logLevel,
	transports: [new winston.transports.Console({})]
});

export const Print = {
	backoff(link: Link, store: Store, parameters: {delay: number; statusCode: number}, color?: boolean): string {
		if (color) {
			return '✖ ' + buildProductString(link, store, true) + ' :: ' + chalk.yellow(`BACKOFF DELAY status=${parameters.statusCode} delay=${parameters.delay}`);
		}

		return `✖ ${buildProductString(link, store)} :: BACKOFF DELAY status=${parameters.statusCode} delay=${parameters.delay}`;
	},
	badStatusCode(link: Link, store: Store, statusCode: number, color?: boolean): string {
		if (color) {
			return '✖ ' + buildProductString(link, store, true) + ' :: ' + chalk.yellow(`STATUS CODE ERROR ${statusCode}`);
		}

		return `✖ ${buildProductString(link, store)} :: STATUS CODE ERROR ${statusCode}`;
	},
	bannedSeller(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return '✖ ' + buildProductString(link, store, true) + ' :: ' + chalk.yellow('BANNED SELLER');
		}

		return `✖ ${buildProductString(link, store)} :: BANNED SELLER`;
	},
	captcha(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return '✖ ' + buildProductString(link, store, true) + ' :: ' + chalk.yellow('CAPTCHA');
		}

		return `✖ ${buildProductString(link, store)} :: CAPTCHA`;
	},
	inStock(link: Link, store: Store, color?: boolean, sms?: boolean): string {
		const productString = `${buildProductString(link, store)} :: IN STOCK`;

		if (color) {
			return chalk.bgGreen.white.bold(`🚀🚨 ${productString} 🚨🚀`);
		}

		if (sms) {
			return productString;
		}

		return `🚀🚨 ${productString} 🚨🚀`;
	},
	inStockWaiting(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return 'ℹ ' + buildProductString(link, store, true) + ' :: ' + chalk.yellow('IN STOCK, WAITING');
		}

		return `ℹ ${buildProductString(link, store)} :: IN STOCK, WAITING`;
	},
	maxPrice(link: Link, store: Store, price: number, maxPrice: number, color?: boolean): string {
		if (color) {
			return '✖ ' + buildProductString(link, store, true) + ' :: ' +	chalk.yellow(`PRICE ${price} EXCEEDS LIMIT ${maxPrice}`);
		}

		return `✖ ${buildProductString(link, store)} :: PRICE ${price} EXCEEDS LIMIT ${maxPrice}`;
	},
	message(message: string, topic: string, store: Store, color?: boolean): string {
		if (color) {
			return '✖ ' + buildSetupString(topic, store, true) + ' :: ' + chalk.yellow(message);
		}

		return `✖ ${buildSetupString(topic, store)} :: ${message}`;
	},
	noResponse(link: Link, store: Store, color?: boolean): string {
		if (color) {
			return '✖ ' + buildProductString(link, store, true) + ' :: ' + chalk.yellow('NO RESPONSE');
		}

		return `✖ ${buildProductString(link, store)} :: NO RESPONSE`;
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

function buildSetupString(topic: string, store: Store, color?: boolean): string {
	if (color) {
		return chalk.cyan(`[${store.name}]`) + chalk.grey(` [setup (${topic})]`);
	}

	return `[${store.name}] [setup (${topic})]`;
}

function buildProductString(link: Link, store: Store, color?: boolean): string {
	if (color) {
		return chalk.cyan(`[${store.name}]`) + chalk.grey(` [${link.brand} (${link.series})] ${link.model}`);
	}

	return `[${store.name}] [${link.brand} (${link.series})] ${link.model}`;
}
