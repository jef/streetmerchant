# Notification

You can test your notification configuration by running `npm run test:notification`.

## Apple Push Notification Service

| Environment variable | Description |
|---|---|
| `APNS_AUTHKEY` | Path to authkey on users machine |
| `APNS_BUNDLEID` | iOS app bundle id |
| `APNS_DEVICETOKEN` | iOS device token|
| `APNS_KEYID` | Apple developer's key id |
| `APNS_PRODUCTION` | true/false for production |
| `APNS_TEAMID` | Apple developer's team id |

Change your notification alert/payload/etc in apns.ts in the note object.
Refer to https://github.com/node-apn/node-apn for config options.

## Desktop

| Environment variable | Description |
|---|---|
| `DESKTOP_NOTIFICATIONS` | Display desktop notifications using [node-notifier](https://www.npmjs.com/package/node-notifier). |
| `PLAY_SOUND` | Play this sound notification if a product is found. Relative path accepted, valid formats: wav, mp3, flac, E.g.: `path/to/notification.wav`, [free sounds available](https://notificationsounds.com/) |
| `SOUND_PLAYER` | Override the default sound player using the specified executable. |

???+ attention
    If you're on Windows, you must have the proper library to run.

## Discord

| Environment variable | Description |
|:---:|---|
| `DISCORD_NOTIFY_GROUP` | Discord group you would like to notify |
| `DISCORD_NOTIFY_GROUP_3060` | Discord group to notify on 3060 stock |
| `DISCORD_NOTIFY_GROUP_3060TI` | Discord group to notify on 3060 Ti stock |
| `DISCORD_NOTIFY_GROUP_3070` | Discord group to notify on 3070 stock |
| `DISCORD_NOTIFY_GROUP_3080` | Discord group to notify on 3080 stock |
| `DISCORD_NOTIFY_GROUP_3080TI` | Discord group to notify on 3080 Ti stock |
| `DISCORD_NOTIFY_GROUP_3090` | Discord group to notify on 3090 stock |
| `DISCORD_NOTIFY_GROUP_RYZEN5600` | Discord group to notify on 5600X stock |
| `DISCORD_NOTIFY_GROUP_RYZEN5800` | Discord group to notify on 5800X stock |
| `DISCORD_NOTIFY_GROUP_RYZEN5900` | Discord group to notify on 5900X stock |
| `DISCORD_NOTIFY_GROUP_RYZEN5950` | Discord group to notify on 5950X stock |
| `DISCORD_NOTIFY_GROUP_DARKHERO` | Discord group to notify on Dark Hero stock |
| `DISCORD_NOTIFY_GROUP_CORSAIR_SF` | Discord group to notify on Corsair SF stock |
| `DISCORD_NOTIFY_GROUP_SONYPS5C` | Discord group to notify on Sony PS5 stock |
| `DISCORD_NOTIFY_GROUP_SONYPS5DE` | Discord group to notify on Sony PS5 Digital stock |
| `DISCORD_NOTIFY_GROUP_XBOXSX` | Discord group to notify on Xbox Series X stock |
| `DISCORD_NOTIFY_GROUP_XBOXSS` | Discord group to notify on Xbox Series S stock |
| `DISCORD_NOTIFY_GROUP_TEST` | Discord group to notify on test stock |
| `DISCORD_WEB_HOOK` | Discord Web Hook URL. Can be comma separated. Use whole webhook URL |

???+ note
    All groups can be comma separated. `DISCORD_NOTIFY_GROUP` is always used if set.

    - If you're using a role, please use `<@&2834729847239842>`
    - If you're using a user, please use `<@2834729847239842>`

## Email and SMS

Default provider is Gmail. If you use a different email provider, you must provide SMTP settings.

| Environment variable | Description |
|:---:|---|
| `EMAIL_PASSWORD` | Email password. (See below for Gmail MFA users) |
| `EMAIL_TO` | Destination Email. Defaults to username if not set. Can be comma separated |
| `EMAIL_USERNAME` | Email address |
| `PHONE_CARRIER` | [Supported carriers](#supported-carriers) for SMS. E.g.: `att` or `att,verizon,google`, email configuration required. If multiple phone numbers are listed, enter a carrier for each phone number |
| `PHONE_NUMBER` | 10 digit phone number(s). E.g.: `1234567890` or `1234567890,0987654321,11112223333`, email configuration required |
| `SMTP_ADDRESS` | IP Address or FQDN of SMTP server |
| `SMTP_PORT` | TCP Port number on which the smtp server is listening for connections. Default: `25` |

???+ attention
    If you use Gmail and have multi-factor authentication (MFA), you will need to create an [app password](https://myaccount.google.com/apppasswords) and use this instead of your Gmail password.

### Supported carriers

| Carrier | Environment variable |
|:---:|:---:|
| AT&T | `att` |
| AT&T Prepaid | `attgo` |
| Bell | `bell` |
| Fido | `fido` |
| Google | `google`|
| Koodo | `koodo` |
| Mint | `mint`|
| Rogers | `rogers` |
| Sprint | `sprint`|
| Telus | `telus`|
| T-Mobile | `tmobile`|
| USCC | `uscc`|
| Verizon | `verizon`|
| Virgin | `virgin`|
| Virgin (CA) | `virgin-ca`|
| Visible | `visible`|

## Gotify

| Environment variable | Description |
|:---:|---|
| `GOTIFY_PRIORITY` | Message Priority |
| `GOTIFY_TOKEN` | Application token |
| `GOTIFY_URL` | Gotify's URL, e.g. `https://push.example.com` |

## MQTT

| Environment variable | Description |
|:---:|---|
| `MQTT_BROKER_ADDRESS` | IP address or URL of MQTT Broker, e.g.: `192.168.1.xxx` or `broker.hivemq.com` |
| `MQTT_BROKER_PORT` | Network port of MQTT Broker. Default: `1883` |
| `MQTT_CLIENT_ID` | Unique Client ID (only if required by MQTT Broker), typically not required when only publishing alerts |
| `MQTT_PASSWORD` | MQTT password - only use with MQTT brokers on private networks, if required. Will not be sent over public networks for safety |
| `MQTT_QOS` | QoS level for published alerts to broker (https://www.npmjs.com/package/mqtt#about-qos). Default: `0`, Can be `0`, `1`, or `2` |
| `MQTT_TOPIC` | Topic to publish alerts to. Can include `%store%`, `%series%`, `%brand%`, `%model%` for dynamic topics. Default: `streetmerchant/alert`. E.g.: `nv-alert/%store%/%series%/%brand%/%model%/alert` |
| `MQTT_USERNAME` | MQTT username - (only if required by MQTT Broker) |

## PagerDuty

Obtained in PagerDuty - <Service you want to use> - Integrations

| Environment variable | Description |
|:---:|---|
| `PAGERDUTY_INTEGRATION_KEY` | PagerDuty Events API v2 Integration Key. |
| `PAGERDUTY_SEVERITY` | Severity of PagerDuty events |

## Philips Hue

Generate required keys using [instructions](https://developers.meethue.com/develop/get-started-2/). This will be used for both LAN and cloud access over the official Remote Hue API.

For cloud only usage, instructions to generate are located [here](https://developers.meethue.com/develop/hue-api/remote-authentication/).

> :point_right: Here's a [video demonstration](https://vimeo.com/476083242).

| Environment variable | Description |
|:---:|---|
| `PHILIPS_HUE_API_KEY` | Hue Bridge API Key |
| `PHILIPS_HUE_LAN_BRIDGE_IP` | LAN IP Address of your Hue Bridge. LAN only, e.g. `192.168.x.x` |
| `PHILIPS_HUE_LIGHT_IDS` | Light IDs. All lights if not supplied. Can be comma separated, e.g.: `1,2`. See Hue App -> About for IDs |
| `PHILIPS_HUE_LIGHT_COLOR` | Color in RGB Format. Nvidia green if not supplied. Can be comma separated, e.g.: `255,255,255` |
| `PHILIPS_HUE_LIGHT_PATTERN` | Lights will flash for 30 seconds if `blink` is given |
| `PHILIPS_HUE_CLOUD_ACCESS_TOKEN` | Cloud Access Token. Cloud only |
| `PHILIPS_HUE_CLOUD_REFRESH_TOKEN` | Cloud Refresh Token. Cloud only |
| `PHILIPS_HUE_CLOUD_CLIENT_ID` | Cloud Client ID. Cloud only |
| `PHILIPS_HUE_CLOUD_CLIENT_SECRET` | Cloud Client Secret. Cloud only |

## Pushbullet

Generate token at [pushbullet.com/#settings/account](https://pushbullet.com/#settings/account).

| Environment variable | Description |
|:---:|---|
| `PUSHBULLET` | API key |

## Pushover

Generate token at [pushover.net/apps/build](https://pushover.net/apps/build).

API Documentation: [pushover.net/api](https://pushover.net/api)

| Environment variable | Description | Required
|:---:|---|---|
| `PUSHOVER_EXPIRE` | How many seconds your notification will continue to be retried for (every `PUSHOVER_RETRY` seconds) | false |
| `PUSHOVER_DEVICE` | Devices to send notificaiton to. Blank will send to all registered devices. | false |
| `PUSHOVER_PRIORITY` | Message priority | false |
| `PUSHOVER_RETRY` | How often (in seconds) the Pushover servers will send the same notification to the user | false |
| `PUSHOVER_SOUND` | Message sound |
| `PUSHOVER_TOKEN` | Application API token | true |
| `PUSHOVER_USER` | User key | true |

???+ note
    `PUSHOVER_EXPIRE` and `PUSHOVER_RETRY` are only used when `PUSHOVER_PRIORITY="2"`

## Redis

| Environment variable | Description |
|:---:|---|
| `REDIS_URL` | Connection string in format (redis://[username]:[password]@[host][:port]/[database-id]) (redis://localhost:6379/1) |

## Slack

| Environment variable | Description |
|:---:|---|
| `SLACK_CHANNEL` | Channel for posting |
| `SLACK_TOKEN` | API token |

## Telegram

| Environment variable | Description |
|:---:|---|
| `TELEGRAM_ACCESS_TOKEN` | Access token |
| `TELEGRAM_CHAT_ID` | Chat ID. Can be comma separated, e.g.: `123456789,987654321` |

## Twilio

Token generation can be found at [twilio.com/console](https://twilio.com/console).

| Environment variable | Description |
|:---:|---|
| `TWILIO_ACCOUNT_SID` | Account SID |
| `TWILIO_AUTH_TOKEN` | Auth Token |
| `TWILIO_FROM_NUMBER` | Provided phone number to send messages from |
| `TWILIO_TO_NUMBER` | Mobile number to send SMS to |

???+ note
    Include country codes in phone numbers. Example: `+4401234567890`

## Twitter

Generate all Twitter keys at [developer.twitter.com](https://developer.twitter.com).

| Environment variable | Description |
|:---:|---|
| `TWITTER_ACCESS_TOKEN_KEY` | Twitter Token Key |
| `TWITTER_ACCESS_TOKEN_SECRET` | Twitter Token Secret |
| `TWITTER_CONSUMER_KEY` | Twitter Consumer Key |
| `TWITTER_CONSUMER_SECRET` | Twitter Consumer Secret |
| `TWITTER_TWEET_TAGS` | List of hashtags to append to the tweet message, e.g.: `#nvidia #nvidiastock` |

## Twitch

Instructions on how to set up tokens can be found at [d-fischer.github.io/twitch-chat-client/docs/examples/basic-bot](https://d-fischer.github.io/twitch-chat-client/docs/examples/basic-bot).

| Environment variable | Description |
|:---:|---|
| `TWITCH_CLIENT_ID` | Twitch client ID |
| `TWITCH_CLIENT_SECRET`| Twitch client secret |
| `TWITCH_ACCESS_TOKEN` | Twitch access token |
| `TWITCH_REFRESH_TOKEN` | Twitch refresh token |
| `TWITCH_CHANNEL` | Twitch channel |

## StreamLabs

Instructions on how to set up tokens can be found at [dev.streamlabs.com](https://dev.streamlabs.com/docs/register-your-application).
You don't need to submit your application for review, just whitelist yourself!

| Environment variable | Description |
|:---:|---|
| `STREAMLABS_ACCESS_TOKEN` | StreamLabs access token |
| `STREAMLABS_TYPE` | StreamLabs alert type |
| `STREAMLABS_IMAGE`| Custom image to display. Leave it blank for default |
| `STREAMLABS_SOUND` | Custom image to play. Leave it blank for default |
| `STREAMLABS_DURATION` | StreamLabs alert duration (in milliseconds) |

## Free mobile SMS notifications API

For the customers of Free carrier.

Activate the notification service at mobile.free.fr/account/mes-options (option "Notifications par SMS").
Copy the API key generated with the service activation.

| Environment variable | Description |
|:---:|---|
| `FREEMOBILE_ID` | User ID to log into mobile.free.fr |
| `FREEMOBILE_API_KEY` | API key generated with your notification option activation |

Note: here you do not need to give neither your password nor phone number.
