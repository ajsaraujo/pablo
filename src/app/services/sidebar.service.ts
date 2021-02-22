import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isVisible = false;

  toggle() {
    this.isVisible = !this.isVisible;
  }
}
