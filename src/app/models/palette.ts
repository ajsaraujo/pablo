export class Palette {
  constructor(public name?: string) {
    if (!name) {
      this.name = this.generateCoolName();
    }
  }

  private generateCoolName(): string {
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
      'Claw',
      'Maneuver',
      'Variation',
      'Mood',
      'Morning',
      'Day',
      'Night',
      'Afternoon',
    ];

    const getRandomItem = (array: string[]) =>
      array[Math.floor(Math.random() * array.length)];

    const preffix = getRandomItem(preffixes);
    const suffix = getRandomItem(suffixes);

    return preffix + ' ' + suffix;
  }
}
