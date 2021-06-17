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

  private previousPaletteName = '';

  constructor(
    private toastService: ToastService,
    public paletteService: PaletteService) {
    this.palette = this.paletteService.activePalette$.value;

    this.paletteService.activePalette$.subscribe((palette) => {
      this.palette = palette;
    });
  }

  storeCurrentPaletteName() {
    this.previousPaletteName = this.palette.name;
  }

  changePaletteName() {
    const name = this.palette.name;
    if(localStorage.getItem(name)!==null){
      this.toastService.showDangerToast(`${name} already exist`);
      this.palette.name=this.previousPaletteName;
    }
    else{
      this.paletteService.editPaletteName(this.previousPaletteName, this.palette);
    }
  }
}
