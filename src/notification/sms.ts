import {Link, Store} from '../store/model';
import {Logger, Print} from '../logger';
import {Config} from '../config';
import Mail from 'nodemailer/lib/mailer';
import {transporter} from './email';

if (Config.notifications.phone.number && !Config.notifications.email.username) {
	Logger.warn('✖ in order to recieve sms alerts, email notifications must also be configured');
}

const [email, phone] = [Config.notifications.email, Config.notifications.phone];

export function sendSMS(link: Link, store: Store) {
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
		to: generateAddress()
	};

	transporter.sendMail(mailOptions, error => {
		if (error) {
			Logger.error('✖ couldn\'t send sms', error);
		} else {
			Logger.info('✔ sms sent');
		}
	});
}

function generateAddress() {
	const carrier = phone.carrier;

	if (carrier && phone.availableCarriers.has(carrier)) {
		return [phone.number, phone.availableCarriers.get(carrier)].join('@');
	}

	Logger.error('✖ unknown carrier', carrier);
}
