"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableBlockerInPage = exports.enableBlockerInPage = exports.adBlocker = void 0;
const puppeteer_extra_plugin_adblocker_1 = require("puppeteer-extra-plugin-adblocker");
exports.adBlocker = new puppeteer_extra_plugin_adblocker_1.PuppeteerExtraPluginAdblocker({
    blockTrackers: true,
});
async function enableBlockerInPage(page) {
    const blockerObject = await exports.adBlocker.getBlocker();
    if (blockerObject.isBlockingEnabled(page)) {
        return;
    }
    await blockerObject.enableBlockingInPage(page);
}
exports.enableBlockerInPage = enableBlockerInPage;
async function disableBlockerInPage(page) {
    const blockerObject = await exports.adBlocker.getBlocker();
    if (!blockerObject.isBlockingEnabled(page)) {
        return;
    }
    await blockerObject.disableBlockingInPage(page);
}
exports.disableBlockerInPage = disableBlockerInPage;
//# sourceMappingURL=adblocker.js.map