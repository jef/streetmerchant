import {handleCaptchaAsync} from '../../src/store/captcha-handler';
import {getTestStore, launchTestBrowser} from '../util';

const store = getTestStore();
// uncomment to test global default capture type setting
// if (store.labels.captchaHandler) store.labels.captchaHandler.captureType = '';

(async () => {
  const browser = await launchTestBrowser();
  const page = await browser.newPage();
  page.goto(store.links[1].url, {waitUntil: 'networkidle0'});
  await page.waitForSelector(store.labels.captchaHandler!.challenge);
  await handleCaptchaAsync(page, store);
  await browser.close();
})();
