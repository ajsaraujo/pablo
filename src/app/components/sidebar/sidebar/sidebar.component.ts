import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { PaletteService } from 'src/app/services/palette.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Palette } from 'src/app/models/palette';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class SidebarComponent {
  constructor(
    public paletteService: PaletteService,
    public sidebarService: SidebarService
  ) {}

  changeActivePalette(palette: Palette) {
    this.paletteService.activePalette = palette;
  }

  getListItemClass(palette: Palette) {
    if (this.paletteService.isActive(palette)) {
      return 'active';
    }

    return '';
  }
}
