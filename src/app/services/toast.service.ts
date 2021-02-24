import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastType } from '../models/toast-type';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  message$ = new BehaviorSubject<string>('');
  toastType$ = new BehaviorSubject<ToastType>(ToastType.success);

  private hideTimer: any;

  showSuccessToast(message: string) {
    this.show(message, ToastType.success);
  }

  showDangerToast(message: string) {
    this.show(message, ToastType.danger);
  }

  private show(message: string, toastType: ToastType) {
    this.message$.next(message);
    this.toastType$.next(toastType);
    this.hideAfterAWhile();
  }

  private hideAfterAWhile() {
    clearTimeout(this.hideTimer);

    const A_WHILE = 2500;
    this.hideTimer = setTimeout(() => this.message$.next(''), A_WHILE);
  }
}
