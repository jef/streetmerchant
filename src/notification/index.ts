import {Config} from '../config';
import sendEmail from './email';

export default function sendNotification(cartUrl: string) {
	if (Config.notifications.email) {
		sendEmail(cartUrl);
	}
}
