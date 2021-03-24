"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPagerDutyNotification = void 0;
const logger_1 = require("../logger");
const node_pagerduty_1 = __importDefault(require("node-pagerduty"));
const config_1 = require("../config");
const pd = new node_pagerduty_1.default('');
function sendPagerDutyNotification(link, store) {
    if (config_1.config.notifications.pagerduty.integrationKey) {
        logger_1.logger.debug('↗ sending pagerduty message');
        const links = [{ href: link.url, text: 'Visit Store' }];
        if (link.cartUrl) {
            links.push({
                href: link.cartUrl,
                text: 'Add to Cart',
            });
        }
        pd.events.sendEvent({
            dedup_key: link.url,
            event_action: 'trigger',
            payload: {
                links,
                severity: config_1.config.notifications.pagerduty.severity,
                source: store.name,
                summary: logger_1.Print.inStock(link, store),
            },
            routing_key: config_1.config.notifications.pagerduty.integrationKey,
        });
    }
}
exports.sendPagerDutyNotification = sendPagerDutyNotification;
//# sourceMappingURL=pagerduty.js.map