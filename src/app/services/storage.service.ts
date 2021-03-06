import { Injectable } from '@angular/core';
import { Palette } from '../models/palette';

const PALETTES_KEY = 'palettes';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private paletteNames: Set<string>;

  constructor(private storage: Storage = window.localStorage) {
    const savedPalettes: string | null = storage.getItem(PALETTES_KEY);

    if (savedPalettes) {
      const paletteArray = JSON.parse(savedPalettes);
      this.paletteNames = new Set(paletteArray);
    } else {
      this.paletteNames = new Set();
    }
  }

  save(palette: Palette) {
    if (this.isANewPalette(palette)) {
      this.paletteNames.add(palette.name);
      this.savePaletteNames();
    }

    this.storage.setItem(palette.name, palette.toString());
  }

  remove(palette: Palette) {
    this.paletteNames.delete(palette.name);
    this.storage.removeItem(palette.name);
    this.savePaletteNames();
  }

  read(): Palette[] {
    const palettes: Palette[] = [];

    this.paletteNames.forEach((paletteName: string) => {
      const palette = this.readPalette(paletteName);

      if (palette) {
        palettes.push(palette);
      }
    });

    return palettes;
  }

  private isANewPalette(palette: Palette) {
    return !this.paletteNames.has(palette.name);
  }

  private savePaletteNames() {
    const paletteNamesArray = Array.from(this.paletteNames);
    const stringifiedPaletteNames = JSON.stringify(paletteNamesArray);

    this.storage.setItem(PALETTES_KEY, stringifiedPaletteNames);
  }

  private readPalette(name: string): Palette | null {
    const stringifiedPalette = this.storage.getItem(name);

    if (!stringifiedPalette) {
      return null;
    }

    return Palette.fromString(stringifiedPalette);
  }
}
