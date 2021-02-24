import { Component, Input } from '@angular/core';
import { Color } from 'src/app/models/color';
import { PaletteService } from 'src/app/services/palette.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  @Input() color: Color = new Color();

  constructor(
    private toastService: ToastService,
    public paletteService: PaletteService
  ) {}

  getBackgroundColor() {
    return `background-color: ${this.color.hexCode};`;
  }

  showCopiedMessage() {
    this.toastService.show(
      `${this.color.hexCode} was copied to the clipboard.`
    );
  }
}
