import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import {Config} from '../config';
import {Logger} from '../logger';

const subject = 'NVIDIA - BUY NOW';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: Config.notifications.email.username,
		pass: Config.notifications.email.password
	}
});

const mailOptions: Mail.Options = {
	from: Config.notifications.email.username,
	to: Config.notifications.email.username,
	subject
};

export default function sendEmail(text: string) {
	mailOptions.text = text;

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			Logger.error(error);
		} else {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			Logger.info(`✔ email sent: ${info.response}`);
		}
	});
}
