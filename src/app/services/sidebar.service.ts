import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isVisible = true;

  toggle() {
    this.isVisible = !this.isVisible;
  }
}
