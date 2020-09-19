import playerLib = require('play-sound');
import {Config} from '../config';
import {Logger} from '../logger';
import * as fs from 'fs';

const notificationSound = './resources/sounds/' + Config.notifications.playSound;
const player = playerLib();

export function playSound() {
	// Check if file exists
	fs.access(notificationSound, fs.constants.F_OK, err => {
		if (err) {
			Logger.error(`error opening sound file: ${err.message}`);
			return;
		}

		player.play(notificationSound, (err: string) => {
			Logger.info('✔ playing sound');

			if (err) {
				Logger.error(`error playing sound: ${err}`);
			}
		});
	});
}
