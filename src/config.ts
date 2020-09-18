import {resolve} from 'path';
import {config} from 'dotenv';

config({path: resolve(__dirname, '../.env')});

const email = {
	username: process.env.EMAIL_USERNAME,
	password: process.env.EMAIL_PASSWORD
};

const notifications = {
	email: email.username && email.password
};

const page = {
	height: 1920,
	userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
	width: 1080,
	navigationTimeout: 0
};

if (process.env.NS_TIMEOUT) {
	page.navigationTimeout = Number(process.env.TIMEOUT);
} else {
	page.navigationTimeout = 0; // Change default Navigation Timeout here or set the environment variable
}

const stores = process.env.STORES ?? 'nvidia';

export const Config = {
	email,
	notifications,
	page,
	rateLimitTimeout: 5000,
	stores
};
