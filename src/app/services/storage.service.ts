import { Inject, Injectable } from '@angular/core';
import { Palette } from '../models/palette';
import { LocalStorageWrapperService } from './local-storage-wrapper.service';

const PALETTES_KEY = 'palettes';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public hasStorage: boolean;
  private paletteNames: Set<string>;

  constructor(
    @Inject(LocalStorageWrapperService)
    private storage: Storage
  ) {
    const savedPalettes: string | null = storage.getItem(PALETTES_KEY);

    if (savedPalettes) {
      const paletteArray = JSON.parse(savedPalettes);
      this.paletteNames = new Set(paletteArray);
    } else {
      this.paletteNames = new Set();
    }

    // False if user has never used Pablo on this browser.
    this.hasStorage = Boolean(storage.getItem('hasStorage'));
    storage.setItem('hasStorage', 'true');
  }

  save(palette: Palette) {
    if (this.isANewPalette(palette)) {
      this.paletteNames.add(palette.name);
      this.savePaletteNames();
    }

    this.storage.setItem(palette.name, palette.toString());
  }

  remove(name: string) {
    this.paletteNames.delete(name);
    this.storage.removeItem(name);
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
