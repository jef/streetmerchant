import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import Mail from 'nodemailer/lib/mailer';
import {config} from '../config';
import {transporter} from './email';

if (config.notifications.phone.number && !config.notifications.email.username) {
	logger.warn('✖ in order to receive sms alerts, email notifications must also be configured');
}

const [email, phone] = [config.notifications.email, config.notifications.phone];

if (phone.carrier.length !== 1 && (phone.carrier.length !== phone.number.length)) {
	logger.warn('✖ the numbers of carriers has to be one or match the number of phone numbers');
}

export function sendSms(link: Link, store: Store) {
	if (phone.number.length > 0 && phone.carrier.length > 0) {
		logger.debug('↗ sending sms');
		const carrier = phone.carrier[0].trim();

		const mailOptions: Mail.Options = {
			attachments: link.screenshot ? [
				{
					filename: link.screenshot,
					path: `./${link.screenshot}`
				}
			] : undefined,
			from: email.username,
			subject: Print.inStock(link, store, false, true),
			text: link.cartUrl ? link.cartUrl : link.url
		};

		if (phone.carrier.length === 1) {
			if (carrier && phone.availableCarriers.has(carrier)) {
				for (const number of phone.number) {
					mailOptions.to = generateAddress(phone.carrier[0], number);
					sendMail(mailOptions);
				}
			}
		} else {
			for (let i = 0; i < phone.number.length; i++) {
				if (phone.carrier[i] && phone.availableCarriers.has(phone.carrier[i].trim())) {
					mailOptions.to = generateAddress(phone.carrier[i], phone.number[i]);
					sendMail(mailOptions);
				}
			}
		}
	}
}

function generateAddress(carrier: string, number: string) {
	carrier = carrier.trim();
	number = number.trim();

	if (carrier && phone.availableCarriers.has(carrier)) {
		return [number, phone.availableCarriers.get(carrier)].join('@');
	}

	logger.error('✖ unknown carrier', carrier);
}

function sendMail(mailOptions: Mail.Options) {
	transporter.sendMail(mailOptions, error => {
		if (error) {
			logger.error('✖ couldn\'t send sms', error);
		} else {
			logger.info('✔ sms sent');
		}
	});
}
