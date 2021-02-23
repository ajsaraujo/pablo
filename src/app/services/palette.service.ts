import { Injectable } from '@angular/core';
import { Palette } from '../models/palette';

@Injectable({
  providedIn: 'root',
})
export class PaletteService {
  palettes = [new Palette('Daylight'), new Palette('Nightblue')];
  activePalette = this.palettes[0];

  isActive(palette: Palette): boolean {
    return this.activePalette === palette;
  }
}
