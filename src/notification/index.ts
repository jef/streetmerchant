import {Config} from '../config';
import sendEmail from './email';
import sendSlaskMessage from './slack';


export default function sendNotification(cartUrl: string) {
	if (Config.notificationMethods.toLocaleLowerCase().includes('email')) {
		sendEmail(cartUrl);
	}
	
	if (Config.notificationMethods.toLocaleLowerCase().includes('slack')) {
		sendSlaskMessage(cartUrl);
	}
}