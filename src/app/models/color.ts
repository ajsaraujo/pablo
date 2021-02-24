import { RandomUtils } from '../utils/random.utils';

export class Color {
  constructor(public hexCode: string = '') {
    if (!this.hexCode) {
      this.hexCode = this.generateRandomHex();
    }
  }

  toString(): string {
    return this.hexCode;
  }

  generateRandomHex(): string {
    const chars = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
    ];

    let hexCode = '#';

    for (let i = 0; i < 6; i++) {
      const randomChar = RandomUtils.getRandomItem(chars);
      hexCode += randomChar;
    }

    return hexCode;
  }
}
