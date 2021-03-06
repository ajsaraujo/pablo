import { Color } from './color';
import { Palette } from './palette';

describe('Palette', () => {
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
