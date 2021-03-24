"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setConfig = exports.config = exports.defaultStoreData = void 0;
const fs_1 = require("fs");
const banner_1 = require("./banner");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const console = __importStar(require("console"));
if (process.env.npm_config_conf) {
    if (fs_1.existsSync(path_1.default.resolve(__dirname, '../../' + process.env.npm_config_conf))) {
        dotenv_1.default.config({
            path: path_1.default.resolve(__dirname, '../../' + process.env.npm_config_conf),
        });
    }
    else {
        dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
    }
}
else if (fs_1.existsSync(path_1.default.resolve(__dirname, '../../dotenv'))) {
    dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../dotenv') });
}
else {
    dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
}
console.info(banner_1.banner.render(envOrBoolean(process.env.ASCII_BANNER, false), envOrString(process.env.BANNER_COLOR, '#808080')));
/**
 * Returns environment variable, given array, or default array.
 *
 * @param environment Interested environment variable.
 * @param array Default array. If not set, is `[]`.
 */
function envOrArray(environment, array) {
    return (environment
        ? environment.includes('\n')
            ? environment.split('\n')
            : environment.split(',')
        : array !== null && array !== void 0 ? array : []).map(s => s.trim());
}
/**
 * Returns environment variable, given boolean, or default boolean.
 *
 * @param environment Interested environment variable.
 * @param boolean Default boolean. If not set, is `true`.
 */
function envOrBoolean(environment, boolean) {
    return environment ? environment === 'true' : boolean !== null && boolean !== void 0 ? boolean : true;
}
/**
 * Returns environment variable, given string, or default string.
 *
 * @param environment Interested environment variable.
 * @param string Default string. If not set, is `''`.
 */
function envOrString(environment, string) {
    return environment ? environment : string !== null && string !== void 0 ? string : '';
}
/**
 * Returns environment variable, given number, or default number.
 *
 * @param environment Interested environment variable.
 * @param number Default number. If not set, is `0`.
 */
function envOrNumber(environment, number) {
    return environment ? Number(environment) : number !== null && number !== void 0 ? number : 0;
}
/**
 * Returns environment variable, given number, or default number,
 * while handling dotenv input errors for a Min/Max pair.
 * dotenv errors handled:
 * - Min/Max swapped (Min larger than Max, Max smaller than Min)
 * - Min larger than default Max when no Max defined
 * - Max smaller than default Min when no Min defined
 *
 * @param environmentMin Min environment variable of Min/Max pair.
 * @param environmentMax Max environment variable of Min/Max pair.
 * @param number Default number. If not set, is `0`.
 */
function envOrNumberMin(environmentMin, environmentMax, number) {
    if (environmentMin || environmentMax) {
        if (environmentMin && environmentMax) {
            return Number(Number(environmentMin) < Number(environmentMax)
                ? environmentMin
                : environmentMax);
        }
        if (environmentMax) {
            return Number(environmentMax) < (number !== null && number !== void 0 ? number : 0)
                ? Number(environmentMax)
                : number !== null && number !== void 0 ? number : 0;
        }
        if (environmentMin) {
            return Number(environmentMin);
        }
    }
    return number !== null && number !== void 0 ? number : 0;
}
/**
 * Returns environment variable, given number, or default number,
 * while handling dotenv input errors for a Min/Max pair.
 * dotenv errors handled:
 * - Min/Max swapped (Min larger than Max, Max smaller than Min)
 * - Min larger than default Max when no Max defined
 * - Max smaller than default Min when no Min defined
 *
 * @param environmentMin Min environment variable of Min/Max pair.
 * @param environmentMax Max environment variable of Min/Max pair.
 * @param number Default number. If not set, is `0`.
 */
function envOrNumberMax(environmentMin, environmentMax, number) {
    if (environmentMin || environmentMax) {
        if (environmentMin && environmentMax) {
            return Number(Number(environmentMin) < Number(environmentMax)
                ? environmentMax
                : environmentMax);
        }
        if (environmentMin) {
            return Number(environmentMin) > (number !== null && number !== void 0 ? number : 0)
                ? Number(environmentMin)
                : number !== null && number !== void 0 ? number : 0;
        }
        if (environmentMax) {
            return Number(environmentMax);
        }
    }
    return number !== null && number !== void 0 ? number : 0;
}
function loadProxyList(filename) {
    try {
        return fs_1.readFileSync(`${filename}.proxies`)
            .toString()
            .trim()
            .split('\n')
            .map(x => x.trim());
    }
    catch (_a) {
        return undefined;
    }
}
const browser = {
    isHeadless: envOrBoolean(process.env.HEADLESS),
    isIncognito: envOrBoolean(process.env.INCOGNITO, false),
    isTrusted: envOrBoolean(process.env.BROWSER_TRUSTED, false),
    lowBandwidth: envOrBoolean(process.env.LOW_BANDWIDTH, false),
    maxBackoff: envOrNumberMax(process.env.PAGE_BACKOFF_MIN, process.env.PAGE_BACKOFF_MAX, 3600000),
    maxSleep: envOrNumberMax(process.env.PAGE_SLEEP_MIN, process.env.PAGE_SLEEP_MAX, 10000),
    minBackoff: envOrNumberMin(process.env.PAGE_BACKOFF_MIN, process.env.PAGE_BACKOFF_MAX, 10000),
    minSleep: envOrNumberMin(process.env.PAGE_SLEEP_MIN, process.env.PAGE_SLEEP_MAX, 5000),
    open: envOrBoolean(process.env.OPEN_BROWSER),
    userAgent: '',
};
const docker = envOrBoolean(process.env.DOCKER, false);
const logLevel = envOrString(process.env.LOG_LEVEL, 'info');
const notifications = {
    desktop: process.env.DESKTOP_NOTIFICATIONS === 'true',
    apns: {
        apnsAuthKey: envOrString(process.env.APNS_AUTHKEY),
        apnsKeyId: envOrString(process.env.APNS_KEYID),
        apnsTeamId: envOrString(process.env.APNS_TEAMID),
        apnsProduction: envOrBoolean(process.env.APNS_PRODUCTION),
        apnsDeviceToken: envOrString(process.env.APNS_DEVICETOKEN),
        apnsBundleId: envOrString(process.env.APNS_BUNDLEID),
    },
    discord: {
        notifyGroup: envOrArray(process.env.DISCORD_NOTIFY_GROUP),
        notifyGroupSeries: {
            3060: envOrArray(process.env.DISCORD_NOTIFY_GROUP_3060),
            '3060ti': envOrArray(process.env.DISCORD_NOTIFY_GROUP_3060TI),
            3070: envOrArray(process.env.DISCORD_NOTIFY_GROUP_3070),
            3080: envOrArray(process.env.DISCORD_NOTIFY_GROUP_3080),
            3090: envOrArray(process.env.DISCORD_NOTIFY_GROUP_3090),
            'captcha-deterrent': [],
            darkhero: envOrArray(process.env.DISCORD_NOTIFY_GROUP_DARKHERO),
            rx6800: envOrArray(process.env.DISCORD_NOTIFY_GROUP_RX6800),
            rx6800xt: envOrArray(process.env.DISCORD_NOTIFY_GROUP_RX6800XT),
            rx6900xt: envOrArray(process.env.DISCORD_NOTIFY_GROUP_RX6900XT),
            ryzen5600: envOrArray(process.env.DISCORD_NOTIFY_GROUP_RYZEN5600),
            ryzen5800: envOrArray(process.env.DISCORD_NOTIFY_GROUP_RYZEN5800),
            ryzen5900: envOrArray(process.env.DISCORD_NOTIFY_GROUP_RYZEN5900),
            ryzen5950: envOrArray(process.env.DISCORD_NOTIFY_GROUP_RYZEN5950),
            sf: envOrArray(process.env.DISCORD_NOTIFY_GROUP_CORSAIR_SF),
            sonyps5c: envOrArray(process.env.DISCORD_NOTIFY_GROUP_SONYPS5C),
            sonyps5de: envOrArray(process.env.DISCORD_NOTIFY_GROUP_SONYPS5DE),
            'test:series': envOrArray(process.env.DISCORD_NOTIFY_GROUP_TEST),
            xboxss: envOrArray(process.env.DISCORD_NOTIFY_GROUP_XBOXSS),
            xboxsx: envOrArray(process.env.DISCORD_NOTIFY_GROUP_XBOXSX),
        },
        webhooks: envOrArray(process.env.DISCORD_WEB_HOOK),
    },
    email: {
        password: envOrString(process.env.EMAIL_PASSWORD),
        smtpAddress: envOrString(process.env.SMTP_ADDRESS),
        smtpPort: envOrNumber(process.env.SMTP_PORT, 25),
        to: envOrString(process.env.EMAIL_TO, envOrString(process.env.EMAIL_USERNAME)),
        username: envOrString(process.env.EMAIL_USERNAME),
    },
    mqtt: {
        broker: envOrString(process.env.MQTT_BROKER_ADDRESS),
        clientId: envOrString(process.env.MQTT_CLIENT_ID),
        password: envOrString(process.env.MQTT_PASSWORD),
        port: envOrNumber(process.env.MQTT_BROKER_PORT, 1883),
        qos: envOrNumber(process.env.MQTT_QOS, 0),
        topic: envOrString(process.env.MQTT_TOPIC, 'streetmerchant/alert'),
        username: envOrString(process.env.MQTT_USERNAME),
    },
    pagerduty: {
        integrationKey: envOrString(process.env.PAGERDUTY_INTEGRATION_KEY),
        severity: envOrString(process.env.PAGERDUTY_SEVERITY, 'info'),
    },
    philips_hue: {
        accessToken: envOrString(process.env.PHILIPS_HUE_CLOUD_ACCESS_TOKEN),
        apiKey: envOrString(process.env.PHILIPS_HUE_API_KEY),
        bridgeIp: envOrString(process.env.PHILIPS_HUE_LAN_BRIDGE_IP),
        clientId: envOrString(process.env.PHILIPS_HUE_CLOUD_CLIENT_ID),
        clientSecret: envOrString(process.env.PHILIPS_HUE_CLOUD_CLIENT_SECRET),
        lightColor: envOrString(process.env.PHILIPS_HUE_LIGHT_COLOR),
        lightIds: envOrString(process.env.PHILIPS_HUE_LIGHT_IDS),
        lightPattern: envOrString(process.env.PHILIPS_HUE_LIGHT_PATTERN),
        refreshToken: envOrString(process.env.PHILIPS_HUE_CLOUD_REFRESH_TOKEN),
        remoteApiUsername: envOrString(process.env.PHILIPS_HUE_API_KEY),
    },
    phone: {
        availableCarriers: new Map([
            ['att', 'txt.att.net'],
            ['attgo', 'mms.att.net'],
            ['bell', 'txt.bell.ca'],
            ['fido', 'fido.ca'],
            ['google', 'msg.fi.google.com'],
            ['koodo', 'msg.koodomobile.com'],
            ['mint', 'mailmymobile.net'],
            ['rogers', 'pcs.rogers.com'],
            ['sprint', 'messaging.sprintpcs.com'],
            ['telus', 'msg.telus.com'],
            ['tmobile', 'tmomail.net'],
            ['uscc', 'mms.uscc.net'],
            ['verizon', 'vtext.com'],
            ['virgin', 'vmobl.com'],
            ['virgin-ca', 'vmobile.ca'],
            ['visible', 'vtext.com'],
        ]),
        carrier: envOrArray(process.env.PHONE_CARRIER),
        number: envOrArray(process.env.PHONE_NUMBER),
    },
    playSound: envOrString(process.env.PLAY_SOUND),
    pushbullet: envOrString(process.env.PUSHBULLET),
    pushover: {
        expire: envOrNumber(process.env.PUSHOVER_EXPIRE),
        priority: envOrNumber(process.env.PUSHOVER_PRIORITY),
        retry: envOrNumber(process.env.PUSHOVER_RETRY),
        token: envOrString(process.env.PUSHOVER_TOKEN),
        username: envOrString(process.env.PUSHOVER_USER),
    },
    redis: {
        url: envOrString(process.env.REDIS_URL),
    },
    slack: {
        channel: envOrString(process.env.SLACK_CHANNEL),
        token: envOrString(process.env.SLACK_TOKEN),
    },
    smartthings: {
        token: envOrString(process.env.SMARTTHINGS_TOKEN),
        device: envOrString(process.env.SMARTTHINGS_SWITCH_LABEL),
    },
    soundPlayer: envOrString(process.env.SOUND_PLAYER),
    telegram: {
        accessToken: envOrString(process.env.TELEGRAM_ACCESS_TOKEN),
        chatId: envOrArray(process.env.TELEGRAM_CHAT_ID),
    },
    twilio: {
        accountSid: envOrString(process.env.TWILIO_ACCOUNT_SID),
        authToken: envOrString(process.env.TWILIO_AUTH_TOKEN),
        from: envOrString(process.env.TWILIO_FROM_NUMBER),
        to: envOrString(process.env.TWILIO_TO_NUMBER),
    },
    twitch: {
        accessToken: envOrString(process.env.TWITCH_ACCESS_TOKEN),
        channel: envOrString(process.env.TWITCH_CHANNEL),
        clientId: envOrString(process.env.TWITCH_CLIENT_ID),
        clientSecret: envOrString(process.env.TWITCH_CLIENT_SECRET),
        refreshToken: envOrString(process.env.TWITCH_REFRESH_TOKEN),
    },
    twitter: {
        accessTokenKey: envOrString(process.env.TWITTER_ACCESS_TOKEN_KEY),
        accessTokenSecret: envOrString(process.env.TWITTER_ACCESS_TOKEN_SECRET),
        consumerKey: envOrString(process.env.TWITTER_CONSUMER_KEY),
        consumerSecret: envOrString(process.env.TWITTER_CONSUMER_SECRET),
        tweetTags: envOrString(process.env.TWITTER_TWEET_TAGS),
    },
    streamlabs: {
        accessToken: envOrString(process.env.STREAMLABS_ACCESS_TOKEN),
        type: envOrString(process.env.STREAMLABS_TYPE),
        imageHref: envOrString(process.env.STREAMLABS_IMAGE),
        soundHref: envOrString(process.env.STREAMLABS_SOUND),
        duration: envOrNumber(process.env.STREAMLABS_DURATION),
    },
};
const nvidia = {
    addToCardAttempts: envOrNumber(process.env.NVIDIA_ADD_TO_CART_ATTEMPTS, 10),
    sessionTtl: envOrNumber(process.env.NVIDIA_SESSION_TTL, 60000),
};
const page = {
    height: 1080,
    inStockWaitTime: envOrNumber(process.env.IN_STOCK_WAIT_TIME),
    screenshot: envOrBoolean(process.env.SCREENSHOT),
    timeout: envOrNumber(process.env.PAGE_TIMEOUT, 30000),
    width: 1920,
};
const proxy = {
    address: envOrString(process.env.PROXY_ADDRESS),
    port: envOrNumber(process.env.PROXY_PORT, 80),
    protocol: envOrString(process.env.PROXY_PROTOCOL, 'http'),
};
// Check for deprecated configuration values
if (process.env.MAX_PRICE) {
    console.warn('ℹ MAX_PRICE is deprecated, please use MAX_PRICE_SERIES_{{series}}');
}
const store = {
    autoAddToCart: envOrBoolean(process.env.AUTO_ADD_TO_CART, true),
    country: envOrString(process.env.COUNTRY, 'usa'),
    maxPrice: {
        series: {
            3060: envOrNumber(process.env.MAX_PRICE_SERIES_3060),
            '3060ti': envOrNumber(process.env.MAX_PRICE_SERIES_3060TI),
            3070: envOrNumber(process.env.MAX_PRICE_SERIES_3070),
            3080: envOrNumber(process.env.MAX_PRICE_SERIES_3080),
            3090: envOrNumber(process.env.MAX_PRICE_SERIES_3090),
            'captcha-deterrent': 0,
            darkhero: envOrNumber(process.env.MAX_PRICE_SERIES_DARKHERO),
            rx6800: envOrNumber(process.env.MAX_PRICE_SERIES_RX6800),
            rx6800xt: envOrNumber(process.env.MAX_PRICE_SERIES_RX6800XT),
            rx6900xt: envOrNumber(process.env.MAX_PRICE_SERIES_RX6900XT),
            ryzen5600: envOrNumber(process.env.MAX_PRICE_SERIES_RYZEN5600),
            ryzen5800: envOrNumber(process.env.MAX_PRICE_SERIES_RYZEN5800),
            ryzen5900: envOrNumber(process.env.MAX_PRICE_SERIES_RYZEN5900),
            ryzen5950: envOrNumber(process.env.MAX_PRICE_SERIES_RYZEN5950),
            sf: envOrNumber(process.env.MAX_PRICE_SERIES_CORSAIR_SF),
            sonyps5c: envOrNumber(process.env.MAX_PRICE_SERIES_SONYPS5C),
            sonyps5de: envOrNumber(process.env.MAX_PRICE_SERIES_SONYPS5DE),
            'test:series': envOrNumber(process.env.MAX_PRICE_SERIES_TEST),
            xboxss: envOrNumber(process.env.MAX_PRICE_SERIES_XBOXSS),
            xboxsx: envOrNumber(process.env.MAX_PRICE_SERIES_XBOXSX),
        },
    },
    microCenterLocation: envOrArray(process.env.MICROCENTER_LOCATION, ['web']),
    showOnlyBrands: envOrArray(process.env.SHOW_ONLY_BRANDS),
    showOnlyModels: envOrArray(process.env.SHOW_ONLY_MODELS).map(entry => {
        var _a;
        const [name, series] = (_a = entry.match(/[^:]+/g)) !== null && _a !== void 0 ? _a : [];
        return {
            name: envOrString(name),
            series: envOrString(series),
        };
    }),
    showOnlySeries: envOrArray(process.env.SHOW_ONLY_SERIES, [
        '3060',
        '3060ti',
        '3070',
        '3080',
        '3090',
        'rx6800',
        'rx6800xt',
        'rx6900xt',
        'ryzen5600',
        'ryzen5800',
        'ryzen5900',
        'ryzen5950',
        'sf',
        'sonyps5c',
        'sonyps5de',
        'xboxss',
        'xboxsx',
    ]),
    stores: envOrArray(process.env.STORES, ['amazon', 'bestbuy']).map(entry => {
        var _a;
        const [name, minPageSleep, maxPageSleep] = (_a = entry.match(/[^:]+/g)) !== null && _a !== void 0 ? _a : [];
        let proxyList = loadProxyList(name);
        if (!proxyList) {
            proxyList = loadProxyList('global');
        }
        return {
            maxPageSleep: envOrNumberMax(minPageSleep, maxPageSleep, browser.maxSleep),
            minPageSleep: envOrNumberMin(minPageSleep, maxPageSleep, browser.minSleep),
            name: envOrString(name),
            proxyList,
        };
    }),
};
const restartTime = envOrNumber(process.env.RESTART_TIME, 0);
exports.defaultStoreData = {
    maxPageSleep: browser.maxSleep,
    minPageSleep: browser.minSleep,
};
exports.config = {
    browser,
    docker,
    logLevel,
    notifications,
    nvidia,
    page,
    proxy,
    store,
    restartTime,
};
function setConfig(newConfig) {
    const writeConfig = exports.config;
    for (const key of Object.keys(newConfig)) {
        writeConfig[key] = newConfig[key];
    }
}
exports.setConfig = setConfig;
//# sourceMappingURL=config.js.map