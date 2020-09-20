import {resolve} from 'path';
import {config} from 'dotenv';

config({path: resolve(__dirname, '../.env')});

const browser = {
	isHeadless: process.env.HEADLESS ? process.env.HEADLESS === 'true' : true,
	open: process.env.OPEN_BROWSER === 'true',
	rateLimitTimeout: process.env.RATE_LIMIT_TIMEOUT ? Number(process.env.RATE_LIMIT_TIMEOUT) : 5000
};

const logLevel = process.env.LOG_LEVEL ?? 'info';

const notifications = {
	discord: {
		notifyGroup: process.env.DISCORD_NOTIFY_GROUP ?? '',
		webHookUrl: process.env.DISCORD_WEB_HOOK ?? ''
	},
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
	playSound: process.env.PLAY_SOUND ?? '',
	pushover: {
		token: process.env.PUSHOVER_TOKEN ?? '',
		user: process.env.PUSHOVER_USER ?? ''
	},
	slack: {
		channel: process.env.SLACK_CHANNEL ?? '',
		token: process.env.SLACK_TOKEN ?? ''
	},
	telegram: {
		accessToken: process.env.TELEGRAM_ACCESS_TOKEN ?? '',
		chatId: process.env.TELEGRAM_CHAT_ID ?? ''
	},
	test: process.env.NOTIFICATION_TEST === 'true'
};

const page = {
	capture: process.env.SCREENSHOT === 'true',
	width: 1920,
	height: 1080,
	navigationTimeout: Number(process.env.PAGE_TIMEOUT) ?? 30000,
	userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
};

const store = {
	showOnlyBrands: process.env.SHOW_ONLY_BRANDS ? process.env.SHOW_ONLY_BRANDS.split(',') : [],
	stores: process.env.STORES ? process.env.STORES.split(',') : ['nvidia']
};

export const Config = {
	browser,
	logLevel,
	notifications,
	page,
	store
};
