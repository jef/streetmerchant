import {Config} from '../config';
import {Logger} from '../logger';
import fs from 'fs';
import playerLib from 'play-sound';

let player: any;

if (Config.notifications.playSound) {
	player = playerLib();

	if (player.player === null) {
		Logger.warn('✖ couldn\'t find sound player');
	} else {
		const playerName: string = player.player;
		Logger.info(`✔ sound player found: ${playerName}`);
	}
}

export function playSound() {
	if (player.player !== null) {
		fs.access(Config.notifications.playSound, fs.constants.F_OK, error => {
			if (error) {
				Logger.error(`✖ error opening sound file: ${error.message}`);
				return;
			}

			player.play(Config.notifications.playSound, (error: Error) => {
				if (error) {
					Logger.error('✖ couldn\'t play sound', error);
				}

				Logger.info('✔ played sound');
			});
		});
	}
}
