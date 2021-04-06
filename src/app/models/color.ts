import { RandomUtils } from '../utils/random.utils';

export class Color {
  //renamed to privateHexCode so it doesn't conflict with the setter
  constructor(private privateHexCode: string = '') {
    if (!this.privateHexCode) {
      this.privateHexCode = this.generateRandomHex();
    }
  }

  //used to ensure every hex code is uppercase
  set hexCode(color: string){
    this.privateHexCode = color.toUpperCase();
  }
  get hexCode(){
    return this.privateHexCode;
  }

  static fromString(hexCode: string): Color {
    return new Color(hexCode);
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
