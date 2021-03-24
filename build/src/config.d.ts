export declare const defaultStoreData: {
    maxPageSleep: number;
    minPageSleep: number;
};
export declare const config: {
    browser: {
        isHeadless: boolean;
        isIncognito: boolean;
        isTrusted: boolean;
        lowBandwidth: boolean;
        maxBackoff: number;
        maxSleep: number;
        minBackoff: number;
        minSleep: number;
        open: boolean;
        userAgent: string;
    };
    docker: boolean;
    logLevel: string;
    notifications: {
        desktop: boolean;
        apns: {
            apnsAuthKey: string;
            apnsKeyId: string;
            apnsTeamId: string;
            apnsProduction: boolean;
            apnsDeviceToken: string;
            apnsBundleId: string;
        };
        discord: {
            notifyGroup: string[];
            notifyGroupSeries: {
                3060: string[];
                '3060ti': string[];
                3070: string[];
                3080: string[];
                3090: string[];
                'captcha-deterrent': never[];
                darkhero: string[];
                rx6800: string[];
                rx6800xt: string[];
                rx6900xt: string[];
                ryzen5600: string[];
                ryzen5800: string[];
                ryzen5900: string[];
                ryzen5950: string[];
                sf: string[];
                sonyps5c: string[];
                sonyps5de: string[];
                'test:series': string[];
                xboxss: string[];
                xboxsx: string[];
            };
            webhooks: string[];
        };
        email: {
            password: string;
            smtpAddress: string;
            smtpPort: number;
            to: string;
            username: string;
        };
        mqtt: {
            broker: string;
            clientId: string;
            password: string;
            port: number;
            qos: number;
            topic: string;
            username: string;
        };
        pagerduty: {
            integrationKey: string;
            severity: string;
        };
        philips_hue: {
            accessToken: string;
            apiKey: string;
            bridgeIp: string;
            clientId: string;
            clientSecret: string;
            lightColor: string;
            lightIds: string;
            lightPattern: string;
            refreshToken: string;
            remoteApiUsername: string;
        };
        phone: {
            availableCarriers: Map<string, string>;
            carrier: string[];
            number: string[];
        };
        playSound: string;
        pushbullet: string;
        pushover: {
            expire: number;
            priority: number;
            retry: number;
            token: string;
            username: string;
        };
        redis: {
            url: string;
        };
        slack: {
            channel: string;
            token: string;
        };
        smartthings: {
            token: string;
            device: string;
        };
        soundPlayer: string;
        telegram: {
            accessToken: string;
            chatId: string[];
        };
        twilio: {
            accountSid: string;
            authToken: string;
            from: string;
            to: string;
        };
        twitch: {
            accessToken: string;
            channel: string;
            clientId: string;
            clientSecret: string;
            refreshToken: string;
        };
        twitter: {
            accessTokenKey: string;
            accessTokenSecret: string;
            consumerKey: string;
            consumerSecret: string;
            tweetTags: string;
        };
        streamlabs: {
            accessToken: string;
            type: string;
            imageHref: string;
            soundHref: string;
            duration: number;
        };
    };
    nvidia: {
        addToCardAttempts: number;
        sessionTtl: number;
    };
    page: {
        height: number;
        inStockWaitTime: number;
        screenshot: boolean;
        timeout: number;
        width: number;
    };
    proxy: {
        address: string;
        port: number;
        protocol: string;
    };
    store: {
        autoAddToCart: boolean;
        country: string;
        maxPrice: {
            series: {
                3060: number;
                '3060ti': number;
                3070: number;
                3080: number;
                3090: number;
                'captcha-deterrent': number;
                darkhero: number;
                rx6800: number;
                rx6800xt: number;
                rx6900xt: number;
                ryzen5600: number;
                ryzen5800: number;
                ryzen5900: number;
                ryzen5950: number;
                sf: number;
                sonyps5c: number;
                sonyps5de: number;
                'test:series': number;
                xboxss: number;
                xboxsx: number;
            };
        };
        microCenterLocation: string[];
        showOnlyBrands: string[];
        showOnlyModels: {
            name: string;
            series: string;
        }[];
        showOnlySeries: string[];
        stores: {
            maxPageSleep: number;
            minPageSleep: number;
            name: string;
            proxyList: string[] | undefined;
        }[];
    };
    restartTime: number;
};
export declare function setConfig(newConfig: any): void;
