import { parse } from 'node:path';
import { Color } from './color';
import { Palette } from './palette';

describe('Palette', () => {
  describe('stringify', () => {
    it('should correctly convert a palette to a string', () => {
      const palette = new Palette('Light', [new Color('#ffffff')]);
      const expected = JSON.stringify({ name: 'Light', colors: ['#ffffff'] });

      expect(palette.toString()).toEqual(expected);
    });

    it('should be able to convert the palette back and forth', () => {
      const palette = new Palette('Light', [new Color('#ffffff')]);
      const stringified = palette.toString();
      const parsed = Palette.fromString(stringified);

      expect(palette.equals(parsed)).toBe(true);
    });
  });
  describe('equals()', () => {
    it('should return false for palettes with different names', () => {
      const paletteA = new Palette('Light');
      const paletteB = new Palette('Dark');

      expect(paletteA.equals(paletteB)).toBe(false);
    });

    it('should return false for palettes with different colors', () => {
      const paletteA = new Palette('Light', [new Color('#ffffff')]);
      const paletteB = new Palette('Light', [new Color('#fffff0')]);

      expect(paletteA.equals(paletteB)).toBe(false);
    });

    it('should return true for equal palettes', () => {
      const paletteA = new Palette('Light', [new Color('#ffffff')]);
      const paletteB = new Palette('Light', [new Color('#ffffff')]);

      expect(paletteA.equals(paletteB)).toBe(true);
    });
  });
});
