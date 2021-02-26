import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Toast } from '../models/toast';
import { ToastType } from '../models/toast-type';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toast$ = new BehaviorSubject<Toast | undefined>(undefined);

  private undoSubject = new Subject();
  private hideTimer: any;

  get undo() {
    return this.undoSubject.asObservable();
  }

  showSuccessToast(message: string) {
    this.show(message, ToastType.success, false);
  }

  showDangerToast(message: string) {
    this.show(message, ToastType.danger, true);
  }

  fireUndoEvent() {
    this.undoSubject.next();
  }

  private show(message: string, severity: ToastType, undoAction: boolean) {
    this.toast$.next({ message, severity, undoAction });
    this.hideAfterAWhile();
  }

  private hideAfterAWhile() {
    clearTimeout(this.hideTimer);

    const A_WHILE = 2500;
    this.hideTimer = setTimeout(() => {
      this.toast$.next(undefined);
    }, A_WHILE);
  }
}
