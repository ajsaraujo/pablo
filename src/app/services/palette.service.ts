import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Color } from '../models/color';
import { Palette } from '../models/palette';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class PaletteService {
  palettes = [new Palette('Day Light'), new Palette('Night Blue')];
  activePalette$ = new BehaviorSubject<Palette>(this.palettes[0]);
  undoSubscription!: Subscription;

  constructor(private toastService: ToastService) {}

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
  }

  getName(): string {
    return this.activePalette$.value.name;
  }

  addColor(color: Color) {
    this.activePalette$.value.add(color);
    this.toastService.showSuccessToast(`${color} was added to the palette.`);
  }

  editColor(originalColor: Color, newColor: Color) {
    this.activePalette$.value.edit(originalColor, newColor);
    this.toastService.showSuccessToast(
      `${originalColor} changed to ${newColor}`
    );
  }

  removeColor(color: Color) {
    this.activePalette$.value.remove(color);
    this.toastService.showDangerToast(`${color} was removed from the palette.`);

    this.undoSubscription = this.toastService.undo.subscribe(() => {
      this.addColor(color);
      this.undoSubscription.unsubscribe();
    });
  }
}
