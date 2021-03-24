"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSms = void 0;
const logger_1 = require("../logger");
const config_1 = require("../config");
const email_1 = require("./email");
const { email, phone } = config_1.config.notifications;
if (phone.number.length > 0 && (!email.username || !email.password)) {
    logger_1.logger.warn('✖ in order to receive sms alerts, email notifications must also be configured');
}
if (phone.carrier.length !== phone.number.length) {
    logger_1.logger.warn('✖ the number of carriers must match the number of phone numbers', { carrier: phone.carrier, number: phone.number });
}
function sendSms(link, store) {
    for (let i = 0; i < Math.max(phone.number.length, phone.carrier.length); i++) {
        const currentNumber = phone.number[i];
        const currentCarrier = phone.carrier[i];
        if (!currentNumber) {
            logger_1.logger.error(`✖ ${currentCarrier} is not associated with a number`);
            continue;
        }
        else if (!currentCarrier) {
            logger_1.logger.error(`✖ ${currentNumber} is not associated with a carrier`);
            continue;
        }
        if (!phone.availableCarriers.has(currentCarrier)) {
            logger_1.logger.error(`✖ unknown carrier ${currentCarrier}`);
            continue;
        }
        logger_1.logger.debug('↗ sending sms');
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
            subject: logger_1.Print.inStock(link, store, false, true),
            text: link.cartUrl ? link.cartUrl : link.url,
            to: generateAddress(currentNumber, currentCarrier),
        };
        email_1.transporter.sendMail(mailOptions, error => {
            if (error) {
                logger_1.logger.error(`✖ couldn't send sms to ${currentNumber} for carrier ${currentCarrier}`, error);
            }
            else {
                logger_1.logger.info('✔ sms sent');
            }
        });
    }
}
exports.sendSms = sendSms;
function generateAddress(number, carrier) {
    if (carrier && phone.availableCarriers.has(carrier)) {
        return [number, phone.availableCarriers.get(carrier)].join('@');
    }
    return '';
}
//# sourceMappingURL=sms.js.map