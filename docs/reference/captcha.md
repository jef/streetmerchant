# Captcha

A mechanism has been implemented to allow users to interactively handle captcha challenges without being directly connected to their streetmerchant instance. This works by sending the captcha challenge to the user directly via their preferred messaging service and waiting for their response, which is then input to the captcha page, allowing streetmerchant to proceed with its processing. 

???+ attention
    This implementation has only been tested/used on Amazon (North America). Please submit an issue if you're facing captcha on other stores so we can get it integrated.

## How to use

To use this feature, you will have to set up a bot user on your desired messaging service (see the [FAQ](#how-do-I-obtain-a-token-for) for more help). Once that's complete and you have the token for the bot, simply configure the variables shown below and then start your streetmerchant instance.

???+ attention 
    When a DM is received, you must reply to the message directly. In Slack, this is done by clicking the "reply to thread" button on the bot's DM, and sending a response in the thread panel that appears. In Discord, you simply click "Reply" on the bot's DM and type your response in the input field (you will see "Replying to [bot user name]" above the input field).

    If you send a reply back to the bot without associating the response to a message as described above, the bot will not receive the input.

    Please make use of the [testing command below](#testing) to get the hang of how this works.

## Testing

You can test your notification configuration by running `npm run test:captcha`.

???+ info
    The test command will allow the user up to 30 seconds to enter a response before timing out. This is not directly configurable.

## Configuration variables

| Environment variable | Description |
|---|---|
| `CAPTCHA_HANDLER_POLL_INTERVAL` | Interval (in seconds) at which streetmerchant will check if the user has responded. Default: `5` |
| `CAPTCHA_HANDLER_RESPONSE_TIMEOUT` | Timeout (in seconds) duration, after which streetmerchant will assume the user is unavailable and continue to the next page. Default: `300` (5 minutes) |
| `CAPTCHA_HANDLER_SERVICE` | [Supported messaging service](#supported-messaging-services) to use for the captcha handler |
| `CAPTCHA_HANDLER_TOKEN` | Token to identify the bot user of the selected messaging service. See the [FAQ](#how-do-I-obtain-a-token-for) for information on where to obtain this. |
| `CAPTCHA_HANDLER_USER_ID` | ID representing _your account_ in the selected messaging service. The account specified here will receive the bot's DMs. See the [FAQ](#how-do-I-obtain-my-user-ID-for) for information on where to obtain this. |

???+ info
    The poll interval is 5 seconds so that the bot doesn't get rate-limited trying to check for responses (plus let's be honest, it's only 5 seconds at most).

???+ info
    While you can obviously adjust the response timeout to your liking, setting it to a high value is better. If you set it too low, you likely won't have time to respond before the bot moves on, and you will also get bombarded with DM notifications. If your bot runs into captcha pages without solving them, it will start to get flagged more frequently and eventually only get captcha pages. It's better to set a high timeout and solve it once, even if it stops the processing for a few minutes, rather than have to deal with multiple captchas anyway, but that's your call to make.

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
    The app will need `chat:write`, `im:history`, `im:write`, and `reactions:write` permissions.

#### Discord

Create an app [here](https://discord.com/developers/applications) and copy the token, client ID, and permissions integer (I used `518208`). Then use the url [here](https://discord.com/developers/docs/topics/oauth2#bot-authorization-flow-url-example), replacing the `client_id` and `permissions` values with your own to add the bot to your server. Paste the token into your dotenv file.

### The bot didn't send a message when I got a captcha page.

That isn't a question. This is an FAQ.

### The bot didn't send a message when I got a captcha page?

Much better. This could either be a configuration error in streetmerchant (not completed, wrong values, etc) or the bot user isn't configured correctly in your messaging service. Double-check the configuration variables you've entered and use `npm run test:captcha` to help find out the root cause.

### The bot doesn't do anything when I respond to the message and eventually times out. What's happening?

When streetmerchant sends a message via Slack/Discord, it keeps a reference to that message and listens only for direct replies to it until either a response is obtained or the timeout threshold is reached. This allows the interactive captcha process to be used with multiple concurrent streetmerchant instances. Please review the warning in the [How to use](#how-to-use) section, which discusses specifically how to respond to the bot for a successful interaction.

### Why isn't captcha being detected on some of the stores I'm monitoring?

Not sure, but we'll want to get that fixed! Submit an issue and we can look into it.

### Will this work on every store's captcha system?

Not likely. There are a plethora of captcha implementations that retailers can utilize to protect their sites. As of this writing, the interactive captcha handler has only been tested/used for Amazon (North America), and this is where the vast majority of captcha complaints come from. Any other store can implement a different captcha approach, and even Amazon can change their captcha at any time. All that said, if you're running into captcha issues with a store, submit an issue so we can work on a solution and getting it integrated, if possible.