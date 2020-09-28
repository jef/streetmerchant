import {banner} from './banner';
console.log(banner);

import {config} from 'dotenv';
import path from 'path';

config({path: path.resolve(__dirname, '../.env')});

/**
 * Returns environment variable, given array, or default array.
 *
 * @param environment Interested environment variable.
 * @param array Default array. If not set, is `[]`.
 */
function envOrArray(environment: string | undefined, array?: string[]): string[] {
	return environment ? environment.split(',') : (array ?? []);
}

/**
 * Returns environment variable, given boolean, or default boolean.
 *
 * @param environment Interested environment variable.
 * @param boolean Default boolean. If not set, is `true`.
 */
function envOrBoolean(environment: string | undefined, boolean?: boolean): boolean {
	return environment ? environment === 'true' : (boolean ?? true);
}

/**
 * Returns environment variable, given string, or default string.
 *
 * @param environment Interested environment variable.
 * @param string Default string. If not set, is `''`.
 */
function envOrString(environment: string | undefined, string?: string): string {
	return environment ? environment : (string ?? '');
}

/**
 * Returns environment variable, given number, or default number.
 *
 * @param environment Interested environment variable.
 * @param number Default number. If not set, is `0`.
 */
function envOrNumber(environment: string | undefined, number?: number): number {
	return environment ? Number(environment) : (number ?? 0);
}

const browser = {
	isHeadless: envOrBoolean(process.env.HEADLESS),
	isTrusted: envOrBoolean(process.env.BROWSER_TRUSTED, false),
	lowBandwidth: envOrBoolean(process.env.LOW_BANDWIDTH, false),
	maxBackoff: envOrNumber(process.env.PAGE_BACKOFF_MAX, 3600000),
	maxSleep: envOrNumber(process.env.PAGE_SLEEP_MAX, 10000),
	minBackoff: envOrNumber(process.env.PAGE_BACKOFF_MIN, 10000),
	minSleep: envOrNumber(process.env.PAGE_SLEEP_MIN, 5000),
	open: envOrBoolean(process.env.OPEN_BROWSER)
};

const logLevel = envOrString(process.env.LOG_LEVEL, 'info');

const notifications = {
	desktop: process.env.DESKTOP_NOTIFICATIONS === 'true',
	discord: {
		notifyGroup: envOrArray(process.env.DISCORD_NOTIFY_GROUP),
		webHookUrl: envOrArray(process.env.DISCORD_WEB_HOOK)
	},
	email: {
		password: envOrString(process.env.EMAIL_PASSWORD),
		to: envOrString(process.env.EMAIL_TO, envOrString(process.env.EMAIL_USERNAME)),
		username: envOrString(process.env.EMAIL_USERNAME)
	},
	phone: {
		availableCarriers: new Map([
			['att', 'txt.att.net'],
			['bell', 'txt.bell.ca'],
			['fido', 'fido.ca'],
			['google', 'msg.fi.google.com'],
			['koodo', 'msg.koodomobile.com'],
			['mint', 'mailmymobile.net'],
			['rogers', 'pcs.rogers.com'],
			['sprint', 'messaging.sprintpcs.com'],
			['telus', 'msg.telus.com'],
			['tmobile', 'tmomail.net'],
			['verizon', 'vtext.com'],
			['virgin', 'vmobl.com'],
			['virgin-ca', 'vmobile.ca']
		]),
		carrier: envOrString(process.env.PHONE_CARRIER),
		number: envOrString(process.env.PHONE_NUMBER)
	},
	playSound: envOrString(process.env.PLAY_SOUND),
	pushBulletApiKey: envOrString(process.env.PUSHBULLET),
	pushover: {
		priority: envOrString(process.env.PUSHOVER_PRIORITY),
		token: envOrString(process.env.PUSHOVER_TOKEN),
		username: envOrString(process.env.PUSHOVER_USER)
	},
	slack: {
		channel: envOrString(process.env.SLACK_CHANNEL),
		token: envOrString(process.env.SLACK_TOKEN)
	},
	telegram: {
		accessToken: envOrString(process.env.TELEGRAM_ACCESS_TOKEN),
		chatId: envOrString(process.env.TELEGRAM_CHAT_ID)
	},
	twilio: {
		accountSid: envOrString(process.env.TWILIO_ACCOUNT_SID),
		authToken: envOrString(process.env.TWILIO_AUTH_TOKEN),
		from: envOrString(process.env.TWILIO_FROM_NUMBER),
		to: envOrString(process.env.TWILIO_TO_NUMBER)
	},
	twitter: {
		accessTokenKey: envOrString(process.env.TWITTER_ACCESS_TOKEN_KEY),
		accessTokenSecret: envOrString(process.env.TWITTER_ACCESS_TOKEN_SECRET),
		consumerKey: envOrString(process.env.TWITTER_CONSUMER_KEY),
		consumerSecret: envOrString(process.env.TWITTER_CONSUMER_SECRET),
		tweetTags: envOrString(process.env.TWITTER_TWEET_TAGS)
	}
};

const nvidia = {
	addToCardAttempts: envOrNumber(process.env.NVIDIA_ADD_TO_CART_ATTEMPTS, 10),
	sessionTtl: envOrNumber(process.env.NVIDIA_SESSION_TTL, 60000)
};

const page = {
	height: 1080,
	inStockWaitTime: envOrNumber(process.env.IN_STOCK_WAIT_TIME),
	navigationTimeout: envOrNumber(process.env.PAGE_TIMEOUT, 30000),
	screenshot: envOrBoolean(process.env.SCREENSHOT),
	userAgent: envOrString(process.env.USER_AGENT, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'),
	width: 1920
};

const proxy = {
	address: envOrString(process.env.PROXY_ADDRESS, ''),
	port: envOrNumber(process.env.PROXY_PORT, 80)
};

const store = {
	country: envOrString(process.env.COUNTRY, 'usa'),
	microCenterLocation: envOrString(process.env.MICROCENTER_LOCATION, 'web'),
	showOnlyBrands: envOrArray(process.env.SHOW_ONLY_BRANDS),
	showOnlyModels: envOrArray(process.env.SHOW_ONLY_MODELS),
	showOnlySeries: envOrArray(process.env.SHOW_ONLY_SERIES, ['3070', '3080', '3090']),
	stores: envOrArray(process.env.STORES, ['nvidia'])
};

export const Config = {
	browser,
	logLevel,
	notifications,
	nvidia,
	page,
	proxy,
	store
};
