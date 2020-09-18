import {Config} from '../config';
import sendEmail from './email';
import sendSlaskMessage from './slack';
import sendSMS from './sms';

export default function sendNotification(cartUrl: string) {
	if (Config.notificationMethods.toLocaleLowerCase().includes('email')) {
		sendEmail(cartUrl);
	}

	if (Config.notificationMethods.toLocaleLowerCase().includes('slack')) {
		sendSlaskMessage(cartUrl);
	}

	if (Config.phone.enable) {
		if (Config.phone.number && Config.phone.carrier && Config.availableCarriers.includes(Config.phone.carrier.toLowerCase())) {
			sendSMS(cartUrl);
		}
	}
}
