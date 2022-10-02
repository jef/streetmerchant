import chalk from 'chalk';

export const banner = {
  asciiVersion: `
STOCKHAMMER
${process.env.npm_package_version}`,
  render(ascii: boolean, hexColor: string) {
    return chalk
      .hex(hexColor)
      .bold(ascii ? this.asciiVersion : this.stringVersion);
  },
  stringVersion: `STOCKHAMMER
${process.env.npm_package_version}`,
};
