# nvidia-snatcher [![ci](https://github.com/jef/nvidia-snatcher/workflows/ci/badge.svg)](https://github.com/jef/nvidia-snatcher/actions?query=workflow%3Aci)

[FAQ](#FAQ) | [Discord](https://discord.gg/3duFzwk) | [Issues](https://github.com/jef/nvidia-snatcher/issues) | [Wiki](https://github.com/jef/nvidia-snatcher/wiki)

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

| | **Best Buy** | **B&H** | **Newegg** | **Nvidia** |
|:---:|:---:|:---:|:---:|:---:|
| **3070**|  |  |  |  |
| **3080** | `✔` | `✔` | `ℹ` | `✔` |
| **3090** |  |  |  |  |

> :point_right: (`ℹ`) Work in progress. Catchpa problems are intermittent. Use if you'd like, but expect problems.

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

There is not much to configure (as of now), but there are some options that you can choose to utilize.

First, you're going to need to copy the `.env.example` to `.env`. The current options are:

| **Environment variable** | **Description** |
|:---:|:---:|
| `EMAIL_USERNAME` | Gmail address; e.g. `jensen.robbed.us@gmail.com` |
| `EMAIL_PASSWORD` | Gmail password; see below if you have MFA |
| `STORES` | List of [stores](#Supported-stores) you want to be scraped; optional, default: `nvidia` |
| `TIMEOUT` | Navigation Timeout in milliseconds (0 for infinite, 60000 for 1min) optional, default: `0` |

> :point_right: If you have multi-factor authentication (MFA), you will need to create an [app password](https://myaccount.google.com/apppasswords) and use this instead of your Gmail password.

#### Supported stores

| **Store name** | **Store name environment variable** |
|:---:|:---:|
| Best Buy | `bestbuy`|
| B&H | `bandh`|
| EVGA | `evga`|
| Newegg | `newegg`|
| Nvidia | `nvidia`|

> :point_right: Look at [`.env.example`](.env.example) for an example for `.env`.

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
