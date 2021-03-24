import { Link, Store } from '../store/model';
import Mail from 'nodemailer/lib/mailer';
export declare const transporter: Mail;
export declare function sendEmail(link: Link, store: Store): void;
