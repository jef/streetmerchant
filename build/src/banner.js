"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.banner = void 0;
const chalk_1 = __importDefault(require("chalk"));
exports.banner = {
    asciiVersion: `
  ██████ ▄▄▄█████▓ ██▀███  ▓█████ ▓█████▄▄▄█████▓ ███▄ ▄███▓▓█████  ██▀███   ▄████▄   ██░ ██  ▄▄▄       ███▄    █ ▄▄▄█████▓
▒██    ▒ ▓  ██▒ ▓▒▓██ ▒ ██▒▓█   ▀ ▓█   ▀▓  ██▒ ▓▒▓██▒▀█▀ ██▒▓█   ▀ ▓██ ▒ ██▒▒██▀ ▀█  ▓██░ ██▒▒████▄     ██ ▀█   █ ▓  ██▒ ▓▒
░ ▓██▄   ▒ ▓██░ ▒░▓██ ░▄█ ▒▒███   ▒███  ▒ ▓██░ ▒░▓██    ▓██░▒███   ▓██ ░▄█ ▒▒▓█    ▄ ▒██▀▀██░▒██  ▀█▄  ▓██  ▀█ ██▒▒ ▓██░ ▒░
  ▒   ██▒░ ▓██▓ ░ ▒██▀▀█▄  ▒▓█  ▄ ▒▓█  ▄░ ▓██▓ ░ ▒██    ▒██ ▒▓█  ▄ ▒██▀▀█▄  ▒▓▓▄ ▄██▒░▓█ ░██ ░██▄▄▄▄██ ▓██▒  ▐▌██▒░ ▓██▓ ░
▒██████▒▒  ▒██▒ ░ ░██▓ ▒██▒░▒████▒░▒████▒ ▒██▒ ░ ▒██▒   ░██▒░▒████▒░██▓ ▒██▒▒ ▓███▀ ░░▓█▒░██▓ ▓█   ▓██▒▒██░   ▓██░  ▒██▒ ░
▒ ▒▓▒ ▒ ░  ▒ ░░   ░ ▒▓ ░▒▓░░░ ▒░ ░░░ ▒░ ░ ▒ ░░   ░ ▒░   ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░░ ░▒ ▒  ░ ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒░   ▒ ▒   ▒ ░░
░ ░▒  ░ ░    ░      ░▒ ░ ▒░ ░ ░  ░ ░ ░  ░   ░    ░  ░      ░ ░ ░  ░  ░▒ ░ ▒░  ░  ▒    ▒ ░▒░ ░  ▒   ▒▒ ░░ ░░   ░ ▒░    ░
░  ░  ░    ░        ░░   ░    ░      ░    ░      ░      ░      ░     ░░   ░ ░         ░  ░░ ░  ░   ▒      ░   ░ ░   ░
	  ░              ░        ░  ░   ░  ░               ░      ░  ░   ░     ░ ░       ░  ░  ░      ░  ░         ░
${process.env.npm_package_version}`,
    render(ascii, hexColor) {
        return chalk_1.default
            .hex(hexColor)
            .bold(ascii ? this.asciiVersion : this.stringVersion);
    },
    stringVersion: `ＳＴＲＥＥＴＭＥＲＣＨＡＮＴ
${process.env.npm_package_version}`,
};
//# sourceMappingURL=banner.js.map