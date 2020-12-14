import playerLib, {PlaySound} from 'play-sound';
import {config} from '../config';
import {Store} from '../store/model';
import fs from 'fs';
import {logger} from '../logger';

let player: PlaySound;

if (config.notifications.playSound) {
	player = config.notifications.soundPlayer
		? playerLib({players: [config.notifications.soundPlayer]})
		: playerLib();

	if (player.player === null) {
		logger.warn("✖ couldn't find sound player");
	} else {
		const playerName = player.player;
		logger.info(`✔ sound player found: ${playerName}`);
	}
}

export function playSound(store: Store) {
	const playSound = store.playSound || config.notifications.playSound

	if (!playSound || player.player === null) {
		return
	}

	logger.debug('↗ playing sound');

	fs.access(
		playSound,
		fs.constants.F_OK,
		(error) => {
			if (error) {
				logger.error(
					`✖ error opening sound file: ${error.message}`
				);
				return;
			}

			player.play(playSound, (error: Error) => {
				if (error) {
					logger.error("✖ couldn't play sound", error);
				}

				logger.info('✔ played sound');
			});
		}
	);
}
