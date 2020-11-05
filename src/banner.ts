import chalk from 'chalk';
import {readFileSync} from 'fs';

const version = readFileSync('version.txt', 'utf8');

export const banner = chalk.gray.bold(`ＳＴＲＥＥＴＭＥＲＣＨＡＮＴ
${version}`);
