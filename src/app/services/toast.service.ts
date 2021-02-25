import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast } from '../models/toast';
import { ToastType } from '../models/toast-type';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toast$ = new BehaviorSubject<Toast | undefined>(undefined);

  private hideTimer: any;

  showSuccessToast(message: string) {
    this.show(message, ToastType.success);
  }

  showDangerToast(message: string) {
    this.show(message, ToastType.danger);
  }

  private show(message: string, severity: ToastType) {
    this.toast$.next({ message, severity });
    this.hideAfterAWhile();
  }

  private hideAfterAWhile() {
    clearTimeout(this.hideTimer);

    const A_WHILE = 2500;
    this.hideTimer = setTimeout(() => this.toast$.next(undefined), A_WHILE);
  }
}
