import { Component } from '@angular/core';
import { ModalType } from 'src/app/models/modal-type';

@Component({
  selector: 'app-edit-color-modal',
  templateUrl: './edit-color-modal.component.html',
  styleUrls: ['./edit-color-modal.component.css'],
})
export class EditColorModalComponent {
  identifier = ModalType.editColorModal;
}
