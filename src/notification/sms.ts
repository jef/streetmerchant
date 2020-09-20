import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import {Config} from '../config';
import {Logger} from '../logger';

const subject = 'NVIDIA - BUY NOW';
const [email, phone] = [Config.notifications.email, Config.notifications.phone];

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: email.username,
		pass: email.password
	}
});

const mailOptions: Mail.Options = {
	from: Config.notifications.email.username,
	to: generateAddress(),
	subject
};

export function sendSMS(text: string) {
	mailOptions.text = text;

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			Logger.error(error);
		} else {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			Logger.info(`↗ sms sent: ${info.response}`);
		}
	});
}

function generateAddress() {
	const carrier = phone.carrier.toLowerCase();
	if (carrier && phone.availableCarriers.has(carrier)) {
		return [phone.number, phone.availableCarriers.get(carrier)].join('@');
	}
}
