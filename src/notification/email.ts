import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import Mail from 'nodemailer/lib/mailer';
import {config} from '../config';
import nodemailer from 'nodemailer';

const email = config.notifications.email;

const transportOptions: any = {};

if (email.username && (email.password || email.smtpAddress)) {
	transportOptions.auth = {};
	transportOptions.auth.user = email.username;
	transportOptions.auth.pass = email.password;
}

if (email.smtpAddress) {
	transportOptions.host = email.smtpAddress;
	transportOptions.port = email.smtpPort;
} else {
	transportOptions.service = 'gmail';
}

export const transporter = nodemailer.createTransport({
	...transportOptions
});

export function sendEmail(link: Link, store: Store) {
	if (email.username && (email.password || email.smtpAddress)) {
		logger.debug('↗ sending email');

		const mailOptions: Mail.Options = {
			attachments: link.screenshot ? [
				{
					filename: link.screenshot,
					path: `./${link.screenshot}`
				}
			] : undefined,
			from: email.username,
			subject: Print.inStock(link, store),
			text: link.cartUrl ? link.cartUrl : link.url,
			to: email.to
		};

		transporter.sendMail(mailOptions, error => {
			if (error) {
				logger.error('✖ couldn\'t send email', error);
			} else {
				logger.info('✔ email sent');
			}
		});
	}
}
