import { RandomUtils } from '../utils/random.utils';

export class Color {
  constructor(private _hexCode: string = '') {
    if (!this._hexCode) {
      this._hexCode = this.generateRandomHex();
    }
  }

  static fromString(hexCode: string): Color {
    return new Color(hexCode);
  }

  set hexCode(color: string) {
    this._hexCode = color.toUpperCase();
  }

  get hexCode() {
    return this._hexCode;
  }

  equals(color: Color): boolean {
    return this.hexCode === color.hexCode;
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
