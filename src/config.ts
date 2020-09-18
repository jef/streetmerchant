import {resolve} from 'path';
import {config} from 'dotenv';

config({path: resolve(__dirname, '../.env')});

const email = {
	username: process.env.EMAIL_USERNAME,
	password: process.env.EMAIL_PASSWORD,
	test: process.env.EMAIL_TEST ?? 'false'
};

const phone = {
	number: process.env.PHONE_NUMBER,
	carrier: process.env.CARRIER
};

const notifications = {
	email: email.username && email.password
};

const page = {
	height: 1920,
	userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
	width: 1080
};

const stores = process.env.STORES ?? 'nvidia';

const slack = {
	channel: process.env.SLACK_CHANNEL,
	token: process.env.SLACK_TOKEN
};

/**
 * This will only work in US! Further info is needed for other carriers/countries
 */
const availableCarriers = ['sprint', 'verizon', 'tmobile', 'att'];

export const Config = {
	email,
	phone,
	notifications,
	page,
	rateLimitTimeout: 5000,
	stores,
	slack,
	availableCarriers
};
