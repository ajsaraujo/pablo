export class RandomUtils {
  static getRandomItem(array: any[]): any {
    const randomNumber = Math.random() * array.length;
    const index = Math.floor(randomNumber);

    return array[index];
  }
}
