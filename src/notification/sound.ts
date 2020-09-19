//import * as player1 from 'play-sound';
import {Logger} from '../logger';

const notificationSound = './resources/notification-sound.wav';
const player = require('play-sound')();

export default function playSound() {
    player.play(notificationSound, (err: any) => {
        Logger.info(`✔ playing sound`);

        if (err) {
            Logger.error(`error playing sound: ${err}`);
        }
    });
}
