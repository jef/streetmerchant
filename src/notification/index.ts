import {Config} from '../config';
import sendEmail from './email';
import sendSMS from './sms';

export default function sendNotification(cartUrl: string) {
	if (Config.notifications.email) {
		sendEmail(cartUrl);
	}

	if (Config.phone.enable) {
		if (Config.phone.number && Config.phone.carrier && Config.availableCarriers.includes(Config.phone.carrier.toLowerCase())) {
			sendSMS(cartUrl);
		}
	}
}
