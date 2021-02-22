import { Component } from '@angular/core';
import { PaletteService } from 'src/app/services/palette.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(
    public paletteService: PaletteService,
    public sidebarService: SidebarService
  ) {}
}
