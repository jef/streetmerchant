import playerLib = require('play-sound');
import {Logger} from '../logger';

const notificationSound = './resources/notification-sound.wav';
const player = playerLib();

export default function playSound() {
	player.play(notificationSound, (err: string) => {
		Logger.info('✔ playing sound');

		if (err) {
			Logger.error(`error playing sound: ${err}`);
		}
	});
}
