import {resolve} from 'path';
import {config} from 'dotenv';

config({path: resolve(__dirname, '../.env')});

const notifications = {
	email: {
		username: process.env.EMAIL_USERNAME ?? '',
		password: process.env.EMAIL_PASSWORD ?? ''
	},
	slack: {
		channel: process.env.SLACK_CHANNEL ?? '',
		token: process.env.SLACK_TOKEN ?? ''
	},
	test: process.env.NOTIFICATION_TEST ?? 'false'
};

const page = {
	height: 1920,
	navigationTimeout: Number(process.env.PAGE_TIMEOUT) ?? 30000,
	userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
	width: 1080
};

const rateLimitTimeout = Number(process.env.RATE_LIMIT_TIMEOUT) ?? 5000;

const stores = process.env.STORES ?? 'nvidia';

export const Config = {
	notifications,
	rateLimitTimeout,
	page,
	stores
};
