import { Component } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';
import { Palette } from 'src/app/models/palette';
import { PaletteService } from 'src/app/services/palette.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css'],
  animations: [
    trigger('fade-in', [
      state('in', style({
        opacity:1
      })),
      transition( 'longer => shorter',[
        style({opacity:0}),
        animate(800)
      ] ),
      transition( 'shorter => longer',[
        style({opacity:0}),
        animate(1300)
      ] ),
    ]),
  ]
})
export class PaletteComponent {
  palette: Palette;

  private previousPaletteName = '';

  constructor(
    public paletteService: PaletteService,
    public sidebarService: SidebarService
  ) {
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
