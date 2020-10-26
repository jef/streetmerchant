import {banner} from './banner';

console.info(banner);

import {config as config_} from 'dotenv';
import path from 'path';

config_({path: path.resolve(__dirname, '../.env')});

/**
 * Returns environment variable, given array, or default array.
 *
 * @param environment Interested environment variable.
 * @param array Default array. If not set, is `[]`.
 */
function envOrArray(environment: string | undefined, array?: string[]): string[] {
	return (environment ? (
		environment.includes('\n') ? environment.split('\n') : environment.split(',')
	) : (array ?? [])).map(s => s.trim());
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

/**
 * Returns environment variable, given number, or default number,
 * while handling .env input errors for a Min/Max pair.
 * .env errors handled:
 * - Min/Max swapped (Min larger than Max, Max smaller than Min)
 * - Min larger than default Max when no Max defined
 * - Max smaller than default Min when no Min defined
 *
 * @param environmentMin Min environment variable of Min/Max pair.
 * @param environmentMax Max environment variable of Min/Max pair.
 * @param number Default number. If not set, is `0`.
 */
function envOrNumberMin(environmentMin: string | undefined, environmentMax: string | undefined, number?: number) {
	if (environmentMin || environmentMax) {
		if (environmentMin && environmentMax) {
			return Number(Number(environmentMin) < Number(environmentMax) ? environmentMin : environmentMax);
		}

		if (environmentMax) {
			return Number(environmentMax) < (number ?? 0) ? Number(environmentMax) : (number ?? 0);
		}

		if (environmentMin) {
			return Number(environmentMin);
		}
	}

	return number ?? 0;
}

/**
 * Returns environment variable, given number, or default number,
 * while handling .env input errors for a Min/Max pair.
 * .env errors handled:
 * - Min/Max swapped (Min larger than Max, Max smaller than Min)
 * - Min larger than default Max when no Max defined
 * - Max smaller than default Min when no Min defined
 *
 * @param environmentMin Min environment variable of Min/Max pair.
 * @param environmentMax Max environment variable of Min/Max pair.
 * @param number Default number. If not set, is `0`.
 */
function envOrNumberMax(environmentMin: string | undefined, environmentMax: string | undefined, number?: number) {
	if (environmentMin || environmentMax) {
		if (environmentMin && environmentMax) {
			return Number(Number(environmentMin) < Number(environmentMax) ? environmentMax : environmentMax);
		}

		if (environmentMin) {
			return Number(environmentMin) > (number ?? 0) ? Number(environmentMin) : (number ?? 0);
		}

		if (environmentMax) {
			return Number(environmentMax);
		}
	}

	return number ?? 0;
}

const browser = {
	isHeadless: envOrBoolean(process.env.HEADLESS),
	isIncognito: envOrBoolean(process.env.INCOGNITO, false),
	isTrusted: envOrBoolean(process.env.BROWSER_TRUSTED, false),
	lowBandwidth: envOrBoolean(process.env.LOW_BANDWIDTH, false),
	maxBackoff: envOrNumberMax(process.env.PAGE_BACKOFF_MIN, process.env.PAGE_BACKOFF_MAX, 3600000),
	maxSleep: envOrNumberMax(process.env.PAGE_SLEEP_MIN, process.env.PAGE_SLEEP_MAX, 10000),
	minBackoff: envOrNumberMin(process.env.PAGE_BACKOFF_MIN, process.env.PAGE_BACKOFF_MAX, 10000),
	minSleep: envOrNumberMin(process.env.PAGE_SLEEP_MIN, process.env.PAGE_SLEEP_MAX, 5000),
	open: envOrBoolean(process.env.OPEN_BROWSER)
};

const docker = envOrBoolean(process.env.DOCKER);

const logLevel = envOrString(process.env.LOG_LEVEL, 'info');

const notifications = {
	desktop: process.env.DESKTOP_NOTIFICATIONS === 'true',
	discord: {
		notifyGroup: envOrArray(process.env.DISCORD_NOTIFY_GROUP),
		webHookUrl: envOrArray(process.env.DISCORD_WEB_HOOK)
	},
	email: {
		password: envOrString(process.env.EMAIL_PASSWORD),
		smtpAddress: envOrString(process.env.SMTP_ADDRESS),
		smtpPort: envOrNumber(process.env.SMTP_PORT, 25),
		to: envOrString(process.env.EMAIL_TO, envOrString(process.env.EMAIL_USERNAME)),
		username: envOrString(process.env.EMAIL_USERNAME)
	},
	mqtt: {
		broker: envOrString(process.env.MQTT_BROKER_ADDRESS),
		clientId: envOrString(process.env.MQTT_CLIENT_ID),
		password: envOrString(process.env.MQTT_PASSWORD),
		port: envOrNumber(process.env.MQTT_BROKER_PORT, 1883),
		qos: envOrNumber(process.env.MQTT_QOS, 0),
		topic: envOrString(process.env.MQTT_TOPIC, 'nvidia-snatcher/alert'),
		username: envOrString(process.env.MQTT_USERNAME)
	},
	pagerduty: {
		integrationKey: envOrString(process.env.PAGERDUTY_INTEGRATION_KEY),
		severity: envOrString(process.env.PAGERDUTY_SEVERITY, 'info')
	},
	phone: {
		availableCarriers: new Map([
			['att', 'txt.att.net'],
			['attgo', 'mms.att.net'],
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
	pushbullet: envOrString(process.env.PUSHBULLET),
	pushover: {
		priority: envOrNumber(process.env.PUSHOVER_PRIORITY),
		token: envOrString(process.env.PUSHOVER_TOKEN),
		username: envOrString(process.env.PUSHOVER_USER)
	},
	slack: {
		channel: envOrString(process.env.SLACK_CHANNEL),
		token: envOrString(process.env.SLACK_TOKEN)
	},
	telegram: {
		accessToken: envOrString(process.env.TELEGRAM_ACCESS_TOKEN),
		chatId: envOrArray(process.env.TELEGRAM_CHAT_ID)
	},
	twilio: {
		accountSid: envOrString(process.env.TWILIO_ACCOUNT_SID),
		authToken: envOrString(process.env.TWILIO_AUTH_TOKEN),
		from: envOrString(process.env.TWILIO_FROM_NUMBER),
		to: envOrString(process.env.TWILIO_TO_NUMBER)
	},
	twitch: {
		accessToken: envOrString(process.env.TWITCH_ACCESS_TOKEN),
		channel: envOrString(process.env.TWITCH_CHANNEL),
		clientId: envOrString(process.env.TWITCH_CLIENT_ID),
		clientSecret: envOrString(process.env.TWITCH_CLIENT_SECRET),
		refreshToken: envOrString(process.env.TWITCH_REFRESH_TOKEN)
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
	screenshot: envOrBoolean(process.env.SCREENSHOT),
	timeout: envOrNumber(process.env.PAGE_TIMEOUT, 30000),
	userAgents: envOrArray(process.env.USER_AGENT, ['Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36']),
	width: 1920
};

const proxy = {
	address: envOrString(process.env.PROXY_ADDRESS),
	port: envOrNumber(process.env.PROXY_PORT, 80)
};

// Check for deprecated configuration values
if (process.env.MAX_PRICE) {
	console.warn('ℹ MAX_PRICE is deprecated, please use MAX_PRICE_SERIES_{{series}}');
}

const store = {
	country: envOrString(process.env.COUNTRY, 'usa'),
	maxPrice: {
		series: {
			3070: envOrNumber(process.env.MAX_PRICE_SERIES_3070),
			3080: envOrNumber(process.env.MAX_PRICE_SERIES_3080),
			3090: envOrNumber(process.env.MAX_PRICE_SERIES_3090)
		}
	},
	microCenterLocation: envOrArray(process.env.MICROCENTER_LOCATION, ['web']),
	showOnlyBrands: envOrArray(process.env.SHOW_ONLY_BRANDS),
	showOnlyModels: envOrArray(process.env.SHOW_ONLY_MODELS).map(entry => {
		const [name, series] = entry.match(/[^:]+/g) ?? [];
		return {
			name: envOrString(name),
			series: envOrString(series)
		};
	}),
	showOnlySeries: envOrArray(process.env.SHOW_ONLY_SERIES, ['3070', '3080', '3090']),
	stores: envOrArray(process.env.STORES, ['nvidia']).map(entry => {
		const [name, minPageSleep, maxPageSleep] = entry.match(/[^:]+/g) ?? [];
		return {
			maxPageSleep: envOrNumberMax(minPageSleep, maxPageSleep, browser.maxSleep),
			minPageSleep: envOrNumberMin(minPageSleep, maxPageSleep, browser.minSleep),
			name: envOrString(name)
		};
	})
};

export const defaultStoreData = {
	maxPageSleep: browser.maxSleep,
	minPageSleep: browser.minSleep
};

export const config = {
	browser,
	docker,
	logLevel,
	notifications,
	nvidia,
	page,
	proxy,
	store
};

export function setConfig(newConfig: any) {
	const writeConfig = config as any;
	for (const key of Object.keys(newConfig)) {
		writeConfig[key] = newConfig[key];
	}
}
