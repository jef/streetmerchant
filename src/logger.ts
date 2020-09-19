import winston, {format} from 'winston';

const dateObject = new Date();
const timeOf = dateObject.toLocaleTimeString();

const prettyJson = format.printf(info => {
	if (typeof info.message === 'object') {
		info.message = JSON.stringify(info.message, null, 4);
	}

	return `${info.level} :: ${info.message} @${timeOf}`;
});

export const Logger = winston.createLogger({
	level: process.env.LOG_LEVEL ?? 'info',
	format: format.combine(
		format.colorize(),
		format.prettyPrint(),
		format.splat(),
		format.simple(),
		prettyJson
	),
	transports: [
		new winston.transports.Console({})
	]
});
