import {Link, Store} from './store/model';
import winston, {format} from 'winston';
import {Config} from './config';

const prettyJson = format.printf(info => {
	const timestamp = new Date().toLocaleTimeString();

	if (typeof info.message === 'object') {
		info.message = JSON.stringify(info.message, null, 4);
	}

	return `[${timestamp}] ${info.level} :: ${info.message}`;
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
	captcha(link: Link, store: Store): string {
		return `✖ [${store.name}] [${link.brand} (${link.series})] ${link.model} :: CAPTCHA`;
	},
	inStock(link: Link, store: Store): string {
		return `🚀🚨 [${store.name}] [${link.brand} (${link.series})] ${link.model} :: IN STOCK 🚨🚀`;
	},
	outOfStock(link: Link, store: Store): string {
		return `✖ [${store.name}] [${link.brand} (${link.series})] ${link.model} :: OUT OF STOCK`;
	},
	rateLimit(link: Link, store: Store): string {
		return `✖ [${store.name}] [${link.brand} (${link.series})] ${link.model} :: RATE LIMIT EXCEEDED`;
	}
};
