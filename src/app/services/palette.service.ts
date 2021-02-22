import { Injectable } from '@angular/core';
import { Palette } from '../models/palette';

@Injectable({
  providedIn: 'root',
})
export class PaletteService {
  palettes = [new Palette('Daylight'), new Palette('Nightblue')];
}
