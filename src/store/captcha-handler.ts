import {Page} from 'puppeteer';
import {config} from '../config';
import {Store} from './model';
import {logger} from '../logger';
import {delay, deleteFile} from '../util';
import {
  getCaptchaInputAsync,
  sendDMAsync,
  DMPayload,
  CaptchaPayload,
} from '../messaging';

const DefaultCaptureType = 'link';

/**
 * Handles process of obtaining captcha challenge from page and getting
 * solution response from user
 * @param page browser Page object
 * @param store streetmerchant store configuration object
 * @returns true if solution obtained and submitted, false otherwise
 */
export async function handleCaptchaAsync(
  page: Page,
  store: Store
): Promise<boolean> {
  // get captcha challenge
  let processingFailed = false;
  let captchaPayload: CaptchaPayload | undefined = undefined;
  try {
    captchaPayload = await getCaptchaPayloadAsync(page, store);
  } catch (error: unknown) {
    logger.error('unable to get captcha challenge', error);
    processingFailed = true;
  }

  // send the user a DM notification as a courtesy, so they can check in on SM
  if (processingFailed || !captchaPayload) {
    const captchaFailedMessage: DMPayload = {
      content: `captcha detected on [${page.url()}] but unable to get captcha challenge`,
      type: 'text',
    };
    await sendDMAsync(config.captchaHandler.service, captchaFailedMessage);
    return false;
  }

  const response = await getCaptchaInputAsync(captchaPayload);

  if (captchaPayload.type === 'image') deleteFile(captchaPayload.content);
  if (!response) return false;
  const submitted = await enterCaptchaResponseAsync(response, page, store);
  if (submitted) await delay(3000);
  return submitted;
}

/**
 * Gathers captcha challenge from page and prepares payload to send to user
 * @param page browser Page object
 * @param store streetmerchant store configuration object
 * @returns captcha payload to send via DM
 */
async function getCaptchaPayloadAsync(
  page: Page,
  store: Store
): Promise<CaptchaPayload | undefined> {
  const challengeElementSelector =
    store.labels.captchaHandler?.challenge || 'img';
  const challengeFileName = `captcha-${Date.now()}.png`;
  let captchaPayload: CaptchaPayload | undefined = undefined;
  const captureType =
    config.captchaHandler.captureType ||
    store.labels.captchaHandler?.captureType ||
    DefaultCaptureType;
  logger.debug(
    `capture types
    global default: '${DefaultCaptureType}'
    store: '${store.labels.captchaHandler?.captureType}'
    override (dotenv): '${config.captchaHandler.captureType}'`
  );
  logger.debug(`using '${captureType}' capture method`);
  const challengeElement = await page.$(challengeElementSelector);
  switch (captureType.toLowerCase()) {
    case 'image':
      await challengeElement?.screenshot({path: challengeFileName});
      captchaPayload = {
        content: challengeFileName,
        type: 'image',
      };
      break;
    case 'link':
      captchaPayload = {
        content: await challengeElement?.evaluate(img => img.src),
        type: 'text',
      };
      break;
    default:
      logger.error(`unknown captcha capture type: ${captureType}`);
  }
  return captchaPayload;
}

/**
 * Enters the response into the configured input fields and submits the form
 * @param response captcha challenge solution entered by user
 * @param page browser Page object
 * @param store streetmerchant store configuration object
 * @returns true if successfully submitted, false otherwise
 */
async function enterCaptchaResponseAsync(
  response: string,
  page: Page,
  store: Store
): Promise<boolean> {
  const inputElementSelector = store.labels.captchaHandler?.input || 'input';
  const submitElementSelector =
    store.labels.captchaHandler?.submit || 'button[type="submit"]';
  const result = await page.evaluate(
    (inputSelector, submitSelector, response) => {
      const inputElement = document.querySelector<HTMLInputElement>(
        inputSelector
      );
      if (!inputElement) return false;
      inputElement.value = response;
      const submitElement = document.querySelector<HTMLButtonElement>(
        submitSelector
      );
      if (!submitElement) return false;
      submitElement.click();
      return true;
    },
    inputElementSelector,
    submitElementSelector,
    response
  );
  return result;
}
