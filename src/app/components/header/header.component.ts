import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ModalType } from 'src/app/models/modal-type';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private sidebarService: SidebarService,
    private ngxSmartModalService: NgxSmartModalService
  ) {}

  toggleSidebar() {
    this.sidebarService.toggle();
  }

  getSidebarIcon(): string {
    if (this.sidebarService.isVisible) {
      return 'menu_open';
    }

    return 'menu';
  }

  openNewColorModal() {
    this.ngxSmartModalService.getModal(ModalType.newColorModal).open();
  }
}
