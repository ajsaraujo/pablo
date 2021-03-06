import { RandomUtils } from 'src/app/utils/random.utils';
import { Color } from './color';

export class Palette {
  constructor(
    public name: string = generateCoolName(),
    public colors: Color[] = generateRandomColors()
  ) {}

  static fromString(stringified: string): Palette {
    const { name, colors } = JSON.parse(stringified);

    return new Palette(
      name,
      colors.map((hexCode: string) => new Color(hexCode))
    );
  }

  toString() {
    const colors = this.colors.map((color) => color.toString());

    return JSON.stringify({
      name: this.name,
      colors,
    });
  }

  add(color: Color) {
    this.colors = [...this.colors, color];
  }

  edit(originalColor: Color, newColor: Color) {
    const index = this.colors.indexOf(originalColor);
    this.colors.splice(index, 1, newColor);
  }

  remove(color: Color) {
    const index = this.colors.indexOf(color);

    if (index !== -1) {
      this.colors?.splice(index, 1);
    }
  }

  equals(palette: Palette): boolean {
    if (this.name !== palette.name) {
      return false;
    }

    if (this.colors.length !== palette.colors.length) {
      return false;
    }

    for (let i = 0; i < this.colors.length; i++) {
      const colorA = palette.colors[i];
      const colorB = this.colors[i];

      if (!colorA.equals(colorB)) {
        return false;
      }
    }

    return true;
  }
}

const generateRandomColors = (): Color[] => {
  const randomColors = [];

  for (let i = 0; i < 5; i++) {
    randomColors.push(new Color());
  }

  return randomColors;
};

const generateCoolName = (): string => {
  const preffixes = [
    'Pink',
    'Red',
    'Blue',
    'Black',
    'Dark',
    'White',
    'Grey',
    'Orange',
    'Green',
    'Golden',
    'Silver',
    'Faded',
    'Nice',
    'Super',
    'Ultra',
    'Magic',
    'Power',
    'Master',
    'Artsy',
    'Cult',
    'Modern',
    'Antique',
    'Vintage',
    'SteamPunk',
    'Medieval',
    'Futuristic',
    'Neo',
    'Unreal',
    'Dream',
    'Cute',
    'Fun',
    'Friendly',
    'Naive',
    'Cute',
    'Interesting',
  ];

  const suffixes = [
    'Shade',
    'Glow',
    'Shine',
    'Explosion',
    'Attack',
    'Splash',
    'Blade',
    'Shade',
    'Steel',
    'Bolt',
    'Maneuver',
    'Variation',
    'Mood',
    'Morning',
    'Day',
    'Night',
    'Afternoon',
  ];

  const preffix = RandomUtils.getRandomItem(preffixes);
  const suffix = RandomUtils.getRandomItem(suffixes);

  return preffix + ' ' + suffix;
};
