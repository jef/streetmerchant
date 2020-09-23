import {Config} from '../config';
import {Logger} from '../logger';
import fs from 'fs';
import playerLib from 'play-sound';

const notificationSound = Config.notifications.playSound;

Logger.info('ℹ searching for sound player...');
const player = playerLib();
if (player.player === null) {
	Logger.warn('No sound player found.');
} else {
	const playerName: string = player.player;
	Logger.info(`✔ sound player found: ${playerName}`);
}

export function playSound() {
	// Check if file exists
	fs.access(notificationSound, fs.constants.F_OK, error => {
		if (error) {
			Logger.error(`✖ error opening sound file: ${error.message}`);
			return;
		}

		player.play(notificationSound, (error: Error) => {
			if (error) {
				Logger.error('✖ couldn\'t play sound', error);
			}

			Logger.info('✔ played sound');
		});
	});
}
