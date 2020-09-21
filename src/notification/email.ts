import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import {Config} from '../config';
import {Logger} from '../logger';
import {Link} from '../store/model';

const email = Config.notifications.email;
const subject = 'NVIDIA - BUY NOW';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: email.username,
		pass: email.password
	}
});

const mailOptions: Mail.Options = {
	from: email.username,
	to: email.username,
	subject
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
