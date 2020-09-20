import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import {Config} from '../config';
import {Logger} from '../logger';

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

export function sendEmail(cartUrl: string) {
	mailOptions.text = cartUrl;

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			Logger.error(error);
		} else {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			Logger.info(`↗ email sent: ${info.response}`);
		}
	});
}
