import { Component } from '@angular/core';
import { NgxSmartModalComponent } from 'ngx-smart-modal';
import { Color } from 'src/app/models/color';
import { ModalType } from 'src/app/models/modal-type';
import { PaletteService } from 'src/app/services/palette.service';

@Component({
  selector: 'app-edit-color-modal',
  templateUrl: './edit-color-modal.component.html',
  styleUrls: ['./edit-color-modal.component.css'],
})
export class EditColorModalComponent {
  newColor = new Color();
  identifier = ModalType.editColorModal;

  constructor(private paletteService: PaletteService) {}

  edit(originalColor: Color, modalRef: NgxSmartModalComponent) {
    this.paletteService.editColor(originalColor, this.newColor);

    // Generates a new random color and overrides object reference,
    // so we don't get multiple colors in the palette referencing
    // this same object.
    this.newColor = new Color();

    modalRef.close();
  }
}
