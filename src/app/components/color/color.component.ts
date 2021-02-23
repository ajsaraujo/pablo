import { Component, Input } from '@angular/core';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  @Input() color: Color = new Color();

  getBackgroundColor() {
    return `background-color: ${this.color.hexCode};`;
  }
}
