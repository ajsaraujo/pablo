import { Component } from '@angular/core';
import { NgxSmartModalComponent, NgxSmartModalService } from 'ngx-smart-modal';
import { Color } from 'src/app/models/color';
import { ModalType } from 'src/app/models/modal-type';
import { PaletteService } from 'src/app/services/palette.service';

@Component({
  selector: 'app-new-color-modal',
  templateUrl: './new-color-modal.component.html',
  styleUrls: ['./new-color-modal.component.css'],
})
export class NewColorModalComponent {
  color = new Color();
  identifier = ModalType.newColorModal;

  constructor(public paletteService: PaletteService) {}

  addColor(modalRef: NgxSmartModalComponent) {
    this.paletteService.addColor(this.color);
    this.color = new Color();
    modalRef.close();
  }
}
