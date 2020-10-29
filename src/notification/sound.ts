import playerLib, {PlaySound} from 'play-sound';
import {config} from '../config';
import fs from 'fs';
import {logger} from '../logger';

let player: PlaySound;

if (config.notifications.playSound) {
	player = playerLib();

	if (player.player === null) {
		logger.warn('✖ couldn\'t find sound player');
	} else {
		const playerName = player.player;
		logger.info(`✔ sound player found: ${playerName}`);
	}
}

export function playSound() {
	if (config.notifications.playSound && player.player !== null) {
		logger.debug('↗ playing sound');

		fs.access(config.notifications.playSound, fs.constants.F_OK, error => {
			if (error) {
				logger.error(`✖ error opening sound file: ${error.message}`);
				return;
			}

			player.play(config.notifications.playSound, (error: Error) => {
				if (error) {
					logger.error('✖ couldn\'t play sound', error);
				}

				logger.info('✔ played sound');
			});
		});
	}
}
