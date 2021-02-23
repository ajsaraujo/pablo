import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  isVisible = false;
  message = '';

  show(message: string) {
    this.message = message;
    this.isVisible = true;

    setTimeout(() => this.hide(), 3000);
  }

  private hide() {
    this.message = '';
    this.isVisible = false;
  }
}
