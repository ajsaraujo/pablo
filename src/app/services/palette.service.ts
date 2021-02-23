import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Palette } from '../models/palette';

@Injectable({
  providedIn: 'root',
})
export class PaletteService {
  palettes = [new Palette('Daylight'), new Palette('Nightblue')];
  activePalette$ = new BehaviorSubject<Palette>(this.palettes[0]);

  isActive(palette: Palette): boolean {
    return this.activePalette$.value === palette;
  }

  changeActivePalette(palette: Palette) {
    this.activePalette$.next(palette);
  }
}
