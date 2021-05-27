# Troubleshoot

## Captcha issues

???+ info
    A new interactive captcha handler has been implemented. You can learn more about how to use it [here](../reference/captcha.md)! Otherwise, feel free to still try the below options.

### Option 1

If you're running into problems, try running in headful mode: `HEADLESS="false"`.

This will open a browser and run streetmerchant. Note that this isn't a great solution for those running in a headless environment, i.e.: VPS, cloud, docker. Instead, it would be a good solution for those running on separate computer that won't be blocked by running in the background.

### Option 2

As a last case scenario, use `PUPPETEER_EXECUTABLE_PATH`. This will use your computer's Chrome browser. You can run this is headless or headful mode.

> From the puppeteer doc:
>
> `PUPPETEER_EXECUTABLE_PATH` - specify an executable path to be used in `puppeteer.launch`. See [puppeteer.launch([options])](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#puppeteerlaunchoptions) on how the executable path is inferred. **BEWARE**: Puppeteer is only [guaranteed to work](https://github.com/puppeteer/puppeteer/#q-why-doesnt-puppeteer-vxxx-work-with-chromium-vyyy) with the bundled Chromium, use at your own risk.

For example:

`dotenv`:

```
PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable
```

This will vary depending on your operating system and install path. Please use full paths.

## macOS code signing

If you're getting a popup like this:

![image](https://user-images.githubusercontent.com/12074633/93616357-a36bf180-f9a2-11ea-82fa-da2a44807802.png)

Then run this command:

```sh
sudo codesign --force --deep --sign - ./node_modules/puppeteer/.local-chromium/mac-800071/chrome-mac/Chromium.app
```

???+ tip
    The `mac-800071` may be different on your machine, so I would start from `./node_modules/puppeteer/.local-chromium` and auto complete from there.
