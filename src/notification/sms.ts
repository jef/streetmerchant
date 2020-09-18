import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import {Config} from '../config';
import {Logger} from '../logger';

const subject = 'NVIDIA - BUY NOW';

enum carrierAddress {
	sprint = 'messaging.sprintpcs.com',
	verizon = 'vtext.com',
	tmobile = 'tmomail.net',
	att = 'txt.att.net'
}

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: Config.email.username,
		pass: Config.email.password
	}
});

const mailOptions: Mail.Options = {
	from: Config.email.username,
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
			Logger.info(`✔ email sent: ${info.response}`);
		}
	});
}

function generateAddress() {
	for (const carrier of Object.keys(carrierAddress)) {
		if (Config.phone.carrier && carrier === Config.phone.carrier.toLowerCase()) {
			// @ts-expect-error
			return [Config.phone.number, carrierAddress[carrier]].join('@');
		}
	}
}
