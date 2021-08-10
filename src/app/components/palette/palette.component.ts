import { Component } from '@angular/core';
import { Palette } from 'src/app/models/palette';
import { PaletteService } from 'src/app/services/palette.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css'],
})
export class PaletteComponent {
  palette: Palette;
  previousPaletteName = '';
  newName = '';
  constructor(public paletteService: PaletteService, private toastService: ToastService) {
    this.palette = this.paletteService.activePalette$.value;

    this.paletteService.activePalette$.subscribe((palette) => {
      this.newName = palette.name;
      this.palette = palette;
    });
  }

  storeCurrentPaletteName() {
    this.previousPaletteName = this.palette.name;
  }

  changePaletteName(newName: string) {
    if (newName === this.previousPaletteName) {
      return;
    }
    if (this.paletteService.palettes.some(x => x.name === newName) || newName.length === 0) {
      this.toastService.showDangerToast(newName.length === 0 
        ?
        'Please enter a name for the palette'
        :
        newName + ' already exists!', () => {
        this.newName = this.previousPaletteName;
      });
      return;
    }
    this.palette.name = newName;
    this.paletteService.editPaletteName(this.previousPaletteName, this.palette);
  }
}
