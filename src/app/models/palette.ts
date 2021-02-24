import { RandomUtils } from 'src/app/utils/random.utils';
import { Color } from './color';

export class Palette {
  constructor(
    public name: string = generateCoolName(),
    public colors: Color[] = generateRandomColors()
  ) {}

  remove(color: Color) {
    const index = this.colors.indexOf(color);

    if (index !== -1) {
      this.colors?.splice(index, 1);
    }
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
