# Captcha

A mechanism has been implemented to allow users to interactively handle captcha challenges without being directly connected to their streetmerchant instance. This works by sending the captcha challenge to the user directly via their preferred messaging service and waiting for their response, which is then input to the captcha page, allowing streetmerchant to proceed with its processing. 

???+ attention
    This implementation has only been tested/used on Amazon sites. Please submit an issue if you're facing captcha on other stores so we can get it integrated.

## How to use

To use this feature, you will have to set up a bot user on your desired messaging service (see the [FAQ](#how-do-i-obtain-a-token-for) for more help). Once that's complete and you have the token for the bot, simply configure the variables shown below and then start your streetmerchant instance.

???+ attention 
    When a DM is received, you must reply to the message directly. In Slack, this is done by clicking the "reply to thread" button on the bot's DM, and sending a response in the thread panel that appears. In Discord, you simply click "Reply" on the bot's DM and type your response in the input field (you will see "Replying to [bot user name]" above the input field).

    If you send a reply back to the bot without associating the response to a message as described above, the bot will not receive the input.

    Please make use of the [testing command below](#testing) to get the hang of how this works.

## Testing

You can test your notification configuration by running `npm run test:captcha`.

???+ info
    The test command will use the values from the dotenv configuration file, including timeout and poll interval.

## Configuration variables

| Environment variable | Description |
|---|---|
| `CAPTCHA_HANDLER_CAPTURE_TYPE` | Global override of [Capture type](#capture-types) to use for the captcha handler. Default: `link` (if not set in store) |
| `CAPTCHA_HANDLER_POLL_INTERVAL` | Interval (in seconds) at which streetmerchant will check if the user has responded. Default: `5` |
| `CAPTCHA_HANDLER_RESPONSE_TIMEOUT` | Timeout (in seconds) duration, after which streetmerchant will assume the user is unavailable and continue to the next page. Default: `300` (5 minutes) |
| `CAPTCHA_HANDLER_SERVICE` | [Supported messaging service](#supported-messaging-services) to use for the captcha handler |
| `CAPTCHA_HANDLER_TOKEN` | Token to identify the bot user of the selected messaging service. See the [FAQ](#how-do-I-obtain-a-token-for) for information on where to obtain this. |
| `CAPTCHA_HANDLER_USER_ID` | ID representing _your account_ in the selected messaging service. The account specified here will receive the bot's DMs. See the [FAQ](#how-do-i-obtain-my-user-id-for) for information on where to obtain this. |

???+ info
    The poll interval is 5 seconds so that the bot doesn't get rate-limited trying to check for responses (plus let's be honest, it's only 5 seconds at most).

???+ info
    While you can obviously adjust the response timeout to your liking, setting it to a high value is better. If you set it too low, you likely won't have time to respond before the bot moves on, and you will also get bombarded with DM notifications. If your bot runs into captcha pages without solving them, it will start to get flagged more frequently and eventually only get captcha pages. It's better to set a high timeout and solve it once, even if it stops the processing for a few minutes, rather than have to deal with multiple captchas anyway, but that's your call to make.

## Capture types

| Type | Description |
|---|---|
| `image` | Captures a screenshot of the defined challenge element. This screenshot is temporarily stored in the streetmerchant directory while the interactive handler does its work, after which the bot will attempt to clean the file up. |
| `link` | Extracts the URL from the `src` property of the defined challenge element, which is then sent to the user. Most modern chat applications will attempt to unfurl this URL automatically and display the image, so it should be mostly the same experience as using `image`. |

???+ info
    For the dotenv file, this is a global override and will most likely not need to be set, as this will be set per-store by other maintainers. That said, if you do need to set it, see the [FAQ](#which-capture-type-should-i-use) for guidance on which type to use.

## Supported messaging services

| Service | Environment variable |
|---|---|
| Discord | `discord` |
| Slack | `slack` |

## FAQ

### How do I obtain my user ID for...?

#### Slack

In the top-right corner of the app, click your avatar and select "View Profile" from the dropdown. In the profile pane that appears, click the More button (3 dots) and then click "Copy member ID" from the dropdown.

???+ attention
    You have to use the desktop or web app to get this ID.

#### Discord

You have to enable Developer Mode in the Advanced settings. Once that's enabled, you can simply right-click your avatar in a thread or the member's list (on right side of screen) and click "Copy ID."

### How do I obtain a token for...?

#### Slack

Create an app [here](https://api.slack.com/apps) and copy the token you get once the setup is complete. Put the token in the dotenv file.

???+ info
    The app will need `chat:write`, `im:history`, `im:write`, `files:write`, and `reactions:write` permissions.

#### Discord

Create an app [here](https://discord.com/developers/applications) and copy the token, client ID, and permissions integer (I used `518208`). Then use the url [here](https://discord.com/developers/docs/topics/oauth2#bot-authorization-flow-url-example), replacing the `client_id` and `permissions` values with your own to add the bot to your server. Paste the token into your dotenv file.

### The bot didn't send a message when it detected a captcha page.

That isn't a question. This is an FAQ.

### The bot didn't send a message when it detected a captcha page?

Much better. This could either be a configuration error in streetmerchant (not completed, wrong values, etc) or the bot user isn't configured correctly in your messaging service. Double-check the configuration variables you've entered and use `npm run test:captcha` to help find out the root cause.

### Why are the bot images coming through broken?

This can depend on the capture type you are using as well as some other settings. If you are running in low bandwidth mode, disable it to ensure captcha images load. You can also try changing the capture type `link` or `image` to see if a different setting works. Otherwise, file an issue.

### Which capture type should I use?

tl;dr - Neither approach offers a totally perfect solution. The `image` type is generally more robust, but can falter to image upload limits. The `link` type is higher quality, but is easier for stores to lock down.

The choice between `image` and `link` capture types should mostly be unnecessary, but there are times where one will be required over the other. 

First, if a store gets wise to the fact that their captcha images are being accessed outside their store/captcha pages, they may either block access or embed the images directly in the page, in which case `link` will not work as there will be no usable URL. Additionally a store may implement captcha in a way that a single URL is not sufficient, in which case `link` will also not be useful.

Second, messaging services do not offer unlimited upload and storage of files. If you find that you've hit a quota, you may want to set the dotenv to `link`, as long as the first point above is not working against you. If so, you can explore using another messaging service for the remainder of the quota period or find another way to increase your quota. If either of those options are non-starters, you will have to pursue one of the [old-school workarounds in the troubleshooting guide](../help/troubleshoot#captcha-issues).

Finally, there are some usability caveats with either case that may just not be to your liking. The `image` type can sometimes be offset from the actual content (though this has only been observed in testing, not in "actual" usage). The `link` type will not succumb to this as you'll be linking to the original file. However, the `link` type will not automatically be unfurled all the time, which means extra clicks will be necessary to solve the captcha.

### The bot doesn't do anything when I respond to the message and eventually times out. What's happening?

When streetmerchant sends a message via Slack/Discord, it keeps a reference to that message and listens only for direct replies to it until either a response is obtained or the timeout threshold is reached. This allows the interactive captcha process to be used with multiple concurrent streetmerchant instances. Please review the warning in the [How to use](#how-to-use) section, which discusses specifically how to respond to the bot for a successful interaction.

### Why isn't captcha being detected on some of the stores I'm monitoring?

Captcha is detected by looking for elements on the page that someone has defined in the streetmerchant code. These elements can change over time, or something else could be going on. Either way, submit an issue and we can look into it.

### Does the interactive captcha handler process work on every store?

Not yet. It's only implemented for a subset of stores. If you're facing captchas (detected or not) that aren't being handled, submit an issue and we can work on integrating it.

### Does this work against (insert captcha implementation here)?

Not likely (yet). There are a plethora of captcha implementations that retailers can utilize to protect their sites. Any store can pick from existing captcha solutions, make their own, and obviously change it at any time.