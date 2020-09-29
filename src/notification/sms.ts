import {Link, Store} from '../store/model';
import {Logger, Print} from '../logger';
import {Config} from '../config';
import Mail from 'nodemailer/lib/mailer';
import nodemailer from 'nodemailer';

if (Config.notifications.phone.numbers && !Config.notifications.email.username) {
	Logger.warn('✖ in order to recieve sms alerts, email notifications must also be configured');
}

const [email, phone] = [Config.notifications.email, Config.notifications.phone];

const transporter = nodemailer.createTransport({
	auth: {
		pass: email.password,
		user: email.username
	},
	service: 'gmail'
});
export function sendSMS(link: Link, store: Store, carrier: string, number: string) {
	const address = generateAddress(carrier, number);
	const mailOptions: Mail.Options = {
		attachments: link.screenshot ? [
			{
				filename: link.screenshot,
				path: `./${link.screenshot}`
			}
		] : undefined,
		from: email.username,
		subject: Print.inStock(link, store, false, true),
		text: link.cartUrl ? link.cartUrl : link.url,
		to: address
	};
	transporter.sendMail(mailOptions, error => {
		if (error) {
			Logger.error('✖ couldn\'t send sms', error);
		} else {
			Logger.info(`✔ sms sent to: ${address}`);
		}
	});
}

function generateAddress(carrier: string, number: string) {
	if (carrier && phone.availableCarriers.has(carrier)) {
		return [number, phone.availableCarriers.get(carrier)].join('@').concat(';');
	}
	Logger.error('✖ unknown carrier', carrier);
}
