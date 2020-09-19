import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import {Config} from '../config';
import {Logger} from '../logger';

const subject = 'NVIDIA - BUY NOW';

enum carrierAddress {
	sprint = 'messaging.sprintpcs.com',
	verizon = 'vtext.com',
	tmobile = 'tmomail.net',
	att = 'txt.att.net',
	google = 'msg.fi.google.com'
}

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: Config.notifications.email.username,
		pass: Config.notifications.email.password
	}
});

const mailOptions: Mail.Options = {
	from: Config.notifications.email.username,
	to: generateAddress(),
	subject
};

export default function sendSMS(text: string) {
	mailOptions.text = text;

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			Logger.error(error);
		} else {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			Logger.info(`✔ sms sent: ${info.response}`);
		}
	});
}

function generateAddress() {
	let carrier = Config.notifications.phone.carrier?.toLowerCase();
	if (carrier && Object.keys(carrierAddress).includes(carrier)) {
		// @ts-expect-error
		return [Config.notifications.phone.number, carrierAddress[carrier]].join('@');
	}
}
