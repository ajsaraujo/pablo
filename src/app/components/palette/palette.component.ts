import { Component } from '@angular/core';
import { Palette } from 'src/app/models/palette';
import { PaletteService } from 'src/app/services/palette.service';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css'],
})
export class PaletteComponent {
  palette: Palette;

  private previousPaletteName = '';

  constructor(private paletteService: PaletteService) {
    this.palette = this.paletteService.activePalette$.value;

    this.paletteService.activePalette$.subscribe((palette) => {
      this.palette = palette;
    });
  }

  storeCurrentPaletteName() {
    this.previousPaletteName = this.palette.name;
  }

  changePaletteName() {
    this.paletteService.editPaletteName(this.previousPaletteName, this.palette);
  }
}
