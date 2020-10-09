import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import Mail from 'nodemailer/lib/mailer';
import {config} from '../config';
import {transporter} from './email';

if (config.notifications.phone.number && !config.notifications.email.username) {
	logger.warn('✖ in order to receive sms alerts, email notifications must also be configured');
}

const [email, phone] = [config.notifications.email, config.notifications.phone];

export function sendSms(link: Link, store: Store) {
	if (phone.number) {
		logger.debug('↗ sending sms');
		const carrier = phone.carrier;

		if (carrier && phone.availableCarriers.has(carrier)) {
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
					logger.error('✖ couldn\'t send sms', error);
				} else {
					logger.info('✔ sms sent');
				}
			});
		}
	}
}

function generateAddress() {
	const carrier = phone.carrier;

	if (carrier && phone.availableCarriers.has(carrier)) {
		return [phone.number, phone.availableCarriers.get(carrier)].join('@');
	}

	logger.error('✖ unknown carrier', carrier);
}
