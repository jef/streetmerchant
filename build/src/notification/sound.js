"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playSound = void 0;
const play_sound_1 = __importDefault(require("play-sound"));
const config_1 = require("../config");
const fs_1 = __importDefault(require("fs"));
const logger_1 = require("../logger");
let player;
if (config_1.config.notifications.playSound) {
    player = config_1.config.notifications.soundPlayer
        ? play_sound_1.default({ players: [config_1.config.notifications.soundPlayer] })
        : play_sound_1.default();
    if (player.player === null) {
        logger_1.logger.warn("✖ couldn't find sound player");
    }
    else {
        const playerName = player.player;
        logger_1.logger.info(`✔ sound player found: ${playerName}`);
    }
}
function playSound() {
    if (config_1.config.notifications.playSound && player.player !== null) {
        logger_1.logger.debug('↗ playing sound');
        fs_1.default.access(config_1.config.notifications.playSound, fs_1.default.constants.F_OK, error => {
            if (error) {
                logger_1.logger.error(`✖ error opening sound file: ${error.message}`);
                return;
            }
            player.play(config_1.config.notifications.playSound, (error) => {
                if (error) {
                    logger_1.logger.error("✖ couldn't play sound", error);
                }
                logger_1.logger.info('✔ played sound');
            });
        });
    }
}
exports.playSound = playSound;
//# sourceMappingURL=sound.js.map