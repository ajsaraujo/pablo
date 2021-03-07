import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Color } from '../models/color';
import { Palette } from '../models/palette';
import { StorageService } from './storage.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class PaletteService {
  palettes: Palette[];
  activePalette$: BehaviorSubject<Palette>;
  undoSubscription!: Subscription;

  constructor(
    private toastService: ToastService,
    private storageService: StorageService
  ) {
    const savedPalettes = this.storageService.read();

    if (savedPalettes.length > 0) {
      this.palettes = savedPalettes;
    } else {
      this.palettes = [new Palette('Day Light'), new Palette('Night Blue')];
      this.palettes.forEach((palette) => this.storageService.save(palette));
    }

    this.activePalette$ = new BehaviorSubject<Palette>(this.palettes[0]);
  }

  isActive(palette: Palette): boolean {
    return this.activePalette$.value === palette;
  }

  changeActivePalette(palette: Palette) {
    this.activePalette$.next(palette);
  }

  createPalette() {
    const palette = new Palette();

    this.palettes.push(palette);
    this.changeActivePalette(palette);

    this.storageService.save(palette);
  }

  getName(): string {
    return this.activePalette$.value.name;
  }

  addColor(color: Color) {
    const palette = this.activePalette$.value;

    palette.add(color);
    this.storageService.save(palette);

    this.toastService.showSuccessToast(`${color} was added to the palette.`);
  }

  editColor(originalColor: Color, newColor: Color) {
    const palette = this.activePalette$.value;

    palette.edit(originalColor, newColor);
    this.storageService.save(palette);

    this.toastService.showSuccessToast(
      `${originalColor} changed to ${newColor}`
    );
  }

  editPaletteName(oldName: string, palette: Palette) {
    if (palette.name === oldName) {
      return;
    }

    this.storageService.remove(oldName);
    this.storageService.save(palette);

    this.toastService.showSuccessToast(
      `${oldName} renamed to ${palette.name}.`
    );
  }

  deletePalette(palette: Palette) {
    const index = this.palettes.indexOf(palette);

    this.palettes.splice(index, 1);
    this.storageService.remove(palette.name);

    this.activePalette$.next(this.palettes[0]);

    this.toastService.showDangerToast(`${palette.name} was deleted.`, () => {
      this.palettes.splice(index, 0, palette);
      this.storageService.save(palette);
    });
  }

  removeColor(color: Color) {
    const palette = this.activePalette$.value;

    palette.remove(color);
    this.storageService.save(palette);

    this.toastService.showDangerToast(
      `${color} was removed from the palette.`,
      () => {
        this.addColor(color);
      }
    );
  }
}
