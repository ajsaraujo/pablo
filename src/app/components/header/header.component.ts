import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ModalType } from 'src/app/models/modal-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    public sidebarService: SidebarService,
    private ngxSmartModalService: NgxSmartModalService
  ) {}

  toggleSidebar() {
    this.sidebarService.toggle();
  }

  openNewColorModal() {
    this.ngxSmartModalService.getModal(ModalType.newColorModal).open();
  }
}
