import { Component } from '@angular/core';
import { Color } from 'src/app/models/color';
import { PaletteService } from 'src/app/services/palette.service';

@Component({
  selector: 'app-new-color-modal',
  templateUrl: './new-color-modal.component.html',
  styleUrls: ['./new-color-modal.component.css'],
})
export class NewColorModalComponent {
  selectedColor = new Color().hexCode;

  constructor(public paletteService: PaletteService) {}
}
