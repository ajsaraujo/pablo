import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  message$ = new BehaviorSubject<String>('');
  private hideTimer: any;

  show(message: string) {
    this.message$.next(message);

    clearTimeout(this.hideTimer);
    this.hideTimer = setTimeout(this.hide.bind(this), 2500);
  }

  private hide() {
    this.message$.next('');
  }
}
