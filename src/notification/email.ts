import {Link, Store} from '../store/model';
import {Logger, Print} from '../logger';
import {Config} from '../config';
import Mail from 'nodemailer/lib/mailer';
import nodemailer from 'nodemailer';

const email = Config.notifications.email;

const transporter = nodemailer.createTransport({
	auth: {
		pass: email.password,
		user: email.username
	},
	service: 'gmail'
});

export function sendEmail(link: Link, store: Store) {
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
			Logger.error('✖ couldn\'t send email', error);
		} else {
			Logger.info('✔ email sent');
		}
	});
}
