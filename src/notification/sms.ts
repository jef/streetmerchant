import {Config} from '../config';
import {Link} from '../store/model';
import {Logger} from '../logger';
import Mail from 'nodemailer/lib/mailer';
import nodemailer from 'nodemailer';

const subject = 'NVIDIA - BUY NOW';
const [email, phone] = [Config.notifications.email, Config.notifications.phone];

const transporter = nodemailer.createTransport({
	auth: {
		pass: email.password,
		user: email.username
	},
	service: 'gmail'
});

const mailOptions: Mail.Options = {
	from: Config.notifications.email.username,
	subject,
	to: generateAddress()
};

export function sendSMS(text: string, link: Link) {
	mailOptions.text = text;

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
