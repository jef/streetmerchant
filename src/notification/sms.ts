import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import Mail from 'nodemailer/lib/mailer';
import {config} from '../config';
import {transporter} from './email';

const [email, phone] = [config.notifications.email, config.notifications.phone];

if (phone.number.length > 0 && (!email.username || !email.password)) {
	logger.warn(
		'✖ in order to receive sms alerts, email notifications must also be configured'
	);
}

if (phone.carrier.length !== phone.number.length) {
	logger.warn(
		'✖ the number of carriers must match the number of phone numbers',
		{carrier: phone.carrier, number: phone.number}
	);
}

export function sendSms(link: Link, store: Store) {
	for (
		let i = 0;
		i < Math.max(phone.number.length, phone.carrier.length);
		i++
	) {
		const currentNumber = phone.number[i];
		const currentCarrier = phone.carrier[i];

		if (!currentNumber) {
			logger.error(`✖ ${currentCarrier} is not associated with a number`);
			continue;
		} else if (!currentCarrier) {
			logger.error(`✖ ${currentNumber} is not associated with a carrier`);
			continue;
		}

		if (!phone.availableCarriers.has(currentCarrier)) {
			logger.error(`✖ unknown carrier ${currentCarrier}`);
			continue;
		}

		logger.debug('↗ sending sms');

		const mailOptions: Mail.Options = {
			attachments: link.screenshot
				? [
						{
							filename: link.screenshot,
							path: `./${link.screenshot}`
						}
				  ]
				: undefined,
			from: email.username,
			subject: Print.inStock(link, store, false, true),
			text: link.cartUrl ? link.cartUrl : link.url,
			to: generateAddress(currentNumber, currentCarrier)
		};

		transporter.sendMail(mailOptions, (error) => {
			if (error) {
				logger.error(
					`✖ couldn't send sms to ${currentNumber} for carrier ${currentCarrier}`,
					error
				);
			} else {
				logger.info('✔ sms sent');
			}
		});
	}
}

function generateAddress(number: string, carrier: string) {
	if (carrier && phone.availableCarriers.has(carrier)) {
		return [number, phone.availableCarriers.get(carrier)].join('@');
	}
}
