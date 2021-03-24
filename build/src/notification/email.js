"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = exports.transporter = void 0;
const logger_1 = require("../logger");
const config_1 = require("../config");
const nodemailer_1 = __importDefault(require("nodemailer"));
const { email } = config_1.config.notifications;
const transportOptions = {};
if (email.username && (email.password || email.smtpAddress)) {
    transportOptions.auth = {};
    transportOptions.auth.user = email.username;
    transportOptions.auth.pass = email.password;
}
if (email.smtpAddress) {
    transportOptions.host = email.smtpAddress;
    transportOptions.port = email.smtpPort;
}
else {
    transportOptions.service = 'gmail';
}
exports.transporter = nodemailer_1.default.createTransport({
    ...transportOptions,
});
function sendEmail(link, store) {
    if (email.username && (email.password || email.smtpAddress)) {
        logger_1.logger.debug('↗ sending email');
        const mailOptions = {
            attachments: link.screenshot
                ? [
                    {
                        filename: link.screenshot,
                        path: `./${link.screenshot}`,
                    },
                ]
                : undefined,
            from: email.username,
            subject: logger_1.Print.inStock(link, store),
            text: logger_1.Print.productInStock(link),
            to: email.to,
        };
        exports.transporter.sendMail(mailOptions, error => {
            if (error) {
                logger_1.logger.error("✖ couldn't send email", error);
            }
            else {
                logger_1.logger.info('✔ email sent');
            }
        });
    }
}
exports.sendEmail = sendEmail;
//# sourceMappingURL=email.js.map