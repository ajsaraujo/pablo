import { Component, Input } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Color } from 'src/app/models/color';
import { ModalType } from 'src/app/models/modal-type';
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
    private modalService: NgxSmartModalService,
    public paletteService: PaletteService
  ) {}

  openEditColorModal() {
    const modalRef = this.modalService.getModal(ModalType.editColorModal);

    modalRef.setData(this.color, true);
    modalRef.open();
  }

  showCopiedMessage() {
    this.toastService.showSuccessToast(
      `${this.color.hexCode} was copied to the clipboard.`
    );
  }
}
