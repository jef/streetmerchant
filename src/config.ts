import {config} from 'dotenv';
import path from 'path';

config({path: path.resolve(__dirname, '../.env')});

const browser = {
	isHeadless: process.env.HEADLESS ? process.env.HEADLESS === 'true' : true,
	isTrusted: process.env.BROWSER_TRUSTED ? process.env.BROWSER_TRUSTED === 'true' : false,
	maxSleep: Number(process.env.PAGE_SLEEP_MAX ?? 10000),
	minSleep: Number(process.env.PAGE_SLEEP_MIN ?? 5000),
	open: process.env.OPEN_BROWSER ? process.env.OPEN_BROWSER === 'true' : true
};

const logLevel = process.env.LOG_LEVEL ?? 'info';

const notifications = {
	desktop: process.env.DESKTOP_NOTIFICATIONS === 'true',
	discord: {
		notifyGroup: process.env.DISCORD_NOTIFY_GROUP ?? '',
		webHookUrl: process.env.DISCORD_WEB_HOOK ?? ''
	},
	email: {
		password: process.env.EMAIL_PASSWORD ?? '',
		username: process.env.EMAIL_USERNAME ?? ''
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
	pushBulletApiKey: process.env.PUSHBULLET ?? '',
	pushover: {
		token: process.env.PUSHOVER_TOKEN ?? '',
		username: process.env.PUSHOVER_USER ?? ''
	},
	slack: {
		channel: process.env.SLACK_CHANNEL ?? '',
		token: process.env.SLACK_TOKEN ?? ''
	},
	telegram: {
		accessToken: process.env.TELEGRAM_ACCESS_TOKEN ?? '',
		chatId: process.env.TELEGRAM_CHAT_ID ?? ''
	},
	test: process.env.NOTIFICATION_TEST === 'true',
	twitter: {
		accessTokenKey: process.env.TWITTER_ACCESS_TOKEN_KEY ?? '',
		accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET ?? '',
		consumerKey: process.env.TWITTER_CONSUMER_KEY ?? '',
		consumerSecret: process.env.TWITTER_CONSUMER_SECRET ?? '',
		tweetTags: process.env.TWITTER_TWEET_TAGS ?? ''
	}
};

const page = {
	capture: process.env.SCREENSHOT ? process.env.SCREENSHOT === 'true' : 'true',
	height: 1080,
	inStockWaitTime: Number(process.env.IN_STOCK_WAIT_TIME ?? 0),
	navigationTimeout: Number(process.env.PAGE_TIMEOUT ?? 30000),
	userAgent: process.env.USER_AGENT ?? 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
	width: 1920
};

const store = {
	country: process.env.COUNTRY ?? 'usa',
	showOnlyBrands: process.env.SHOW_ONLY_BRANDS ? process.env.SHOW_ONLY_BRANDS.split(',') : [],
	showOnlySeries: process.env.SHOW_ONLY_SERIES ? process.env.SHOW_ONLY_SERIES.split(',') : ['3070', '3080', '3090'],
	stores: process.env.STORES ? process.env.STORES.split(',') : ['nvidia']
};

export const Config = {
	browser,
	logLevel,
	notifications,
	page,
	store
};
