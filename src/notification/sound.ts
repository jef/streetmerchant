import {Config} from '../config';
import {Logger} from '../logger';
import fs from 'fs';
import playerLib from 'play-sound';

const notificationSound = Config.notifications.playSound;

Logger.info('Searching for sound player...');
const player = playerLib();
if (player.player === null) {
	Logger.warn('No sound player found.');
} else {
	const playerName: string = player.player;
	Logger.info(`Sound player found: ${playerName}`);
}

export function playSound() {
	// Check if file exists
	fs.access(notificationSound, fs.constants.F_OK, err => {
		if (err) {
			Logger.error(`error opening sound file: ${err.message}`);
			return;
		}

		player.play(notificationSound, (err: string) => {
			Logger.info('↗ playing sound');

			if (err) {
				Logger.error(`error playing sound: ${err}`);
			}
		});
	});
}
