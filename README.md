# nvidia-snatcher [![ci](https://github.com/jef/nvidia-snatcher/workflows/ci/badge.svg)](https://github.com/jef/nvidia-snatcher/actions?query=workflow%3Aci) [![discord](https://img.shields.io/discord/756303724095471617.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/Cyc7nrz)

[FAQ](#FAQ) | [Issues](https://github.com/jef/nvidia-snatcher/issues) | [Wiki](https://github.com/jef/nvidia-snatcher/wiki)

The purpose of this bot is to get an Nvidia card. It tries multiple things to do that.

- Currently, `nvidia-snatcher` is not capable of purchasing a card for you
- Scrapes multiple websites for patterns of being stocked
    - API requests are a work in progress (very soon)
- Opens browser when stock is available
- Sends an email to you when stock is avaiable (must have Gmail)

<details>
<summary>What you may see if you're lucky</summary>

```sh
2020-09-18T07:06:28.535Z info :: ✖ [nvidia] nvidia founders edition is still out of stock
2020-09-18T07:06:31.241Z info :: ✖ [nvidia] nvidia founders edition is still out of stock
2020-09-18T07:06:34.212Z info :: ✖ [bestbuy] nvidia founder edition is still out of stock
2020-09-18T07:06:39.878Z info :: ✖ [bandh] gigabyte black is still out of stock
2020-09-18T07:06:43.236Z info :: ✖ [bestbuy] gigabyte black is still out of stock
2020-09-18T07:06:43.318Z info :: ↗ trying stores again
2020-09-18T07:06:43.318Z info :: 🚀🚀🚀 [nvidia] nvidia founders edition IN STOCK 🚀🚀🚀
2020-09-18T07:06:43.318Z info :: https://store.nvidia.com/store/nvidia/en_US/buy/productID.5438481700/clearCart.yes/nextPage.QuickBuyCartPage
```

</details>

> :point_right: You may get false positives from time to time, so I apologize for that. The library currently waits for all calls to be completed before parsing, but sometimes this can have unknown behavior. Patience is a virtue :)

| | **Adorama** | **Amazon** | **ASUS** | **EVGA** | **Best Buy** | **B&H** | **Micro Center** | **Newegg** | **Nvidia** |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **3070**| | | | | | | | | |
| **3080** | `✔` | `✔` | `✔` | `✔` | `✔` | `✔` | `✔` | `✔` | `✔` |
| **3090** | | | | | | | | | |

## Installation and prerequisites

Linux, macOS, and Windows are all capable operating systems.

You do not need any computer skills, smarts, or anything of that nature. You are very capable as you have made it this far. Some basic understanding how a terminal, git, and or Node.js is a bonus, but that does not limit you to getting `nvidia-snatcher` running!

### Quick overview

- [Node.js 14](https://nodejs.org/en/)
- [git](https://git-scm.com/)
- Clone this project `git clone https://github.com/jef/nvidia-snatcher.git`
- Run `npm install`
- Copy `.env.example` to a new file `.env` and edit the `.env` file to your liking using your [favorite text editor](https://code.visualstudio.com/)
    - More on this in [customization](#Customization)
- Run `npm run start` to start

At any point you want the program to stop, use <kbd>Ctrl</kbd> + <kbd>C</kbd>.

> :point_right: Please visit the [wiki](https://github.com/jef/nvidia-snatcher/wiki) if you need more help with installation.

### Customization

To customize `nvidia-snatcher`, make a copy of `.env-example` as `.env` and make any changes to your liking. _Note that all environment variables are **optional**._

Here is a list of variables that you can use to customize your newly copied `.env` file:

| **Environment variable** | **Description** | **Notes** |
|:---:|---|---|
| `DISCORD_NOTIFY_GROUP` | Discord group you would like to notify; optional | E.g.: @here |
| `DISCORD_WEB_HOOK` | Discord Web Hook URL |
| `EMAIL_USERNAME` | Gmail address | E.g.: `jensen.robbed.us@gmail.com` |
| `EMAIL_PASSWORD` | Gmail password | See below if you have MFA | 
| `HEADLESS` | Puppeteer to run headless or not | Debugging related, default: `true` |
| `LOG_LEVEL` | [Logging levels](https://github.com/winstonjs/winston#logging-levels) | Debugging related, default: `info` |
| `OPEN_BROWSER` | Toggle for whether or not the browser should open when item is found | Default: `true` |
| `PAGE_TIMEOUT` | Navigation Timeout in milliseconds | `0` for infinite, default: `30000` |
| `PHONE_NUMBER` | 10 digit phone number | E.g.: `1234567890`, email configuration required |
| `PHONE_CARRIER` | [Supported carriers](#supported-carriers) for SMS | Email configuration required |
| `PLAY_SOUND` | Play this sound notification if a card is found | E.g.: `path/to/notification.wav`, relative path accepted, valid formats: wav, mp3, flac, [free sounds available](https://notificationsounds.com/) |
| `PUSHOVER_TOKEN` | Pushover access token | Generate at https://pushover.net/apps/build |
| `PUSHOVER_USERNAME` | Pushover username |
| `PAGE_SLEEP_MIN` | Minimum sleep time between queries of the same store | Default: `5000` |
| `PAGE_SLEEP_MAX` | Maximum sleep time between queries of the same store | Default: `10000` |
| `SHOW_ONLY_BRANDS` | Filter to show specified brands | Comma separated, E.g.: `evga,zotac` |
| `SHOW_ONLY_SERIES` | Filter to show specified series | Comma separated, E.g.: `3080` |
| `SLACK_CHANNEL` | Slack channel for posting | E.g., `update`, no need for `#` |
| `SLACK_TOKEN` | Slack API token |
| `STORES` | [Supported stores](#supported-stores) you want to be scraped | Comma separated, default: `nvidia` |
| `SCREENSHOT` | Capture screenshot of page if a card is found | Default: `true` |
| `TELEGRAM_ACCESS_TOKEN` | Telegram access token |
| `TELEGRAM_CHAT_ID` | Telegram chat ID |
| `USER_AGENT` | Custom User-Agent header for HTTP requests | Default: `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36` |

> :point_right: If you have multi-factor authentication (MFA), you will need to create an [app password](https://myaccount.google.com/apppasswords) and use this instead of your Gmail password.

> :point_right: You can find your computer's user agent by [searching google for "my user agent"](http://google.com/search?q=my+user+agent)

> :point_right: You can test your notification configuration by running `npm run test:notification`.

#### Supported stores

| **Stores** | **Environment variable** |
|:---:|:---:|
| Adorama | `adorama`|
| Amazon | `amazon`|
| Amazon.ca | `amazon-ca`|
| ASUS | `asus` |
| Best Buy | `bestbuy`|
| B&H | `bandh`|
| EVGA | `evga`|
| Micro Center | `microcenter`|
| Newegg | `newegg`|
| Nvidia | `nvidia`|

#### Supported carriers

| **Carrier** | **Environment variable** | **Notes** |
|:---:|:---:|:---:|
| AT&T | `att`| |
| Google | `google`| |
| Mint | `mint`| |
| Sprint | `sprint`| |
| Telus | `telus`| |
| T-Mobile | `tmobile`| |
| Verizon | `verizon`| Works with Visible |

## FAQ

**Q: What's Node.js and how do I install it?** Visit [their website](https://nodejs.org/en/) and download and install it. Very straight forward. Otherwise, Google more information related to your system needs.

**Q: Will this harm my computer?** No.

**Q: Have you gotten a card yet?** No. :cry:

**Q: Will I get banned from of the stores?** Perhaps, but getting a card is a nice outcome.

**Q: I got a problem and need help!** File an [issue](https://github.com/jef/nvidia-snatcher/issues/new/choose), I'll do my best to get to you. I work a full time job and this is only a hobby of mine.

**Q: I'd love to contribute, how do I do that?** Make a [pull request](https://github.com/jef/nvidia-snatcher/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc)! All contributions are welcome.

**Q: Why do I have to download all this stuff just to get this bot working?** Well, I would rather you didn't either. See [#11](https://github.com/jef/nvidia-snatcher/issues/11).

### Acknowledgements

Thanks to the great contributors that make this project possible

Special shout to initial developers:

- [@andirew](https://github.com/andirew)
- [@davidlbowman](https://github.com/davidlbowman)
- [@fuckingrobot](https://github.com/fuckingrobot)
- [@ioncaza](https://github.com/IonCaza)
- [@malbert69](https://github.com/malbert69)
