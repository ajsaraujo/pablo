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
  hexCode = new Color().hexCode;
  identifier = ModalType.newColorModal;

  constructor(public paletteService: PaletteService) {}

  addColor(modalRef: NgxSmartModalComponent) {
    const selectedColor = new Color(this.hexCode);
    this.paletteService.addColor(selectedColor);
    modalRef.close();
  }
}
