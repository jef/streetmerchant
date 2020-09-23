import {Link, Store} from './store/model';
import winston, {format} from 'winston';
import {Config} from './config';
import colors from 'colors'; // eslint-disable-line no-restricted-imports

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
		return colors.cyan(`✖ [${store.name}]`) + colors.grey(` [${link.brand} (${link.series})] ${link.model}`) + colors.yellow(' :: CAPTCHA');
	},
	inStock(link: Link, store: Store): string {
		return colors.cyan(`✖ [${store.name}]`) + colors.grey(` [${link.brand} (${link.series})] ${link.model}`) + colors.green.bold(' :: IN STOCK 🚨🚀');
	},
	outOfStock(link: Link, store: Store): string {
		return colors.cyan(`✖ [${store.name}]`) + colors.grey(` [${link.brand} (${link.series})] ${link.model}`) + colors.red(' :: OUT OF STOCK');
	},
	rateLimit(link: Link, store: Store): string {
		return colors.cyan(`✖ [${store.name}]`) + colors.grey(` [${link.brand} (${link.series})] ${link.model}`) + colors.yellow(' :: RATE LIMIT EXCEEDED');
	}
};
