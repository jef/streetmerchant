import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import Mail from 'nodemailer/lib/mailer';
import {config} from '../config';
import nodemailer from 'nodemailer';

const email = config.notifications.email;

const transporter = nodemailer.createTransport({
	auth: {
		pass: email.password,
		user: email.username
	},
	service: 'gmail'
});

export function sendEmail(link: Link, store: Store) {
	if (email.username && email.password) {
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
