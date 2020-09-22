import {Config} from '../config';
import {Link} from '../store/model';
import {Logger} from '../logger';
import Mail from 'nodemailer/lib/mailer';
import nodemailer from 'nodemailer';

const email = Config.notifications.email;
const subject = 'NVIDIA - BUY NOW';

const transporter = nodemailer.createTransport({
	auth: {
		pass: email.password,
		user: email.username
	},
	service: 'gmail'
});

const mailOptions: Mail.Options = {
	from: email.username,
	subject,
	to: email.username
};

export function sendEmail(cartUrl: string, link: Link) {
	mailOptions.text = cartUrl;

	if (link.screenshot) {
		mailOptions.attachments = [
			{
				filename: link.screenshot,
				path: `./${link.screenshot}`
			}
		];
	}

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			Logger.error(error);
		} else {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			Logger.info(`↗ email sent: ${info.response}`);
		}
	});
}
