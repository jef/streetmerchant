import { WebClient } from '@slack/web-api';
import {Config} from '../config';
import {Logger} from '../logger';

const channel = Config.slack.channel || '';
const token = Config.slack.token || '';
const web = new WebClient(token);

export default function sendSlackMessage(text: string) {
    (async() => {

        try {
            const result = await web.chat.postMessage({ text: text, channel: channel });
            if (result.ok === false) {
                Logger.error(result.error)
            } else {
                Logger.info(`✔ slack message sent to '${result.channel}': ${text}`);
            }
        } catch (error) {
            Logger.error(error)
            return;
        }
    })();
}



