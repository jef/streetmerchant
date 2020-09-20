import {resolve} from 'path';
import {config} from 'dotenv';

config({path: resolve(__dirname, '../.env')});

const notifications = {
	email: {
		username: process.env.EMAIL_USERNAME ?? '',
		password: process.env.EMAIL_PASSWORD ?? ''
	},
	phone: {
		availableCarriers: new Map([
			['att', 'txt.att.net'],
			['google', 'msg.fi.google.com'],
			['mint', 'mailmymobile.net'],
			['sprint', 'messaging.sprintpcs.com'],
			['telus', 'msg.telus.com'],
			['tmobile', 'tmomail.net'],
			['verizon', 'vtext.com']
		]),
		carrier: process.env.PHONE_CARRIER ?? '',
		number: process.env.PHONE_NUMBER ?? ''
	},
	playSound: process.env.PLAY_SOUND ?? 'false',
	pushover: {
		token: process.env.PUSHOVER_TOKEN,
		user: process.env.PUSHOVER_USER
	},
	slack: {
		channel: process.env.SLACK_CHANNEL ?? '',
		token: process.env.SLACK_TOKEN ?? ''
	},
	telegram: {
		accessToken: process.env.TELEGRAM_ACCESS_TOKEN ?? '',
		chatId: process.env.TELEGRAM_CHAT_ID ?? ''
	},
	test: process.env.NOTIFICATION_TEST ?? 'false'
};

const page = {
	capture: process.env.SCREENSHOT ?? 'true',
	width: 1920,
	height: 1080,
	navigationTimeout: Number(process.env.PAGE_TIMEOUT) ?? 30000,
	userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
};

const openBrowser = process.env.OPEN_BROWSER ?? 'true';
const rateLimitTimeout = Number(process.env.RATE_LIMIT_TIMEOUT) ?? 5000;
const stores = process.env.STORES ? process.env.STORES.split(',') : ['nvidia'];
const showOnlyBrands = process.env.SHOW_ONLY_BRANDS ? process.env.SHOW_ONLY_BRANDS.split(',') : [];

export const Config = {
	notifications,
	rateLimitTimeout,
	page,
	stores,
	openBrowser,
	showOnlyBrands
};
