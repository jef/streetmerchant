import {getCaptchaInputAsync} from '../../src/messaging';

(async () => {
  await getCaptchaInputAsync(
    'test https://images-na.ssl-images-amazon.com/captcha/kwizfixk/Captcha_xpdfshjvsb.jpg',
    30
  );
})();
