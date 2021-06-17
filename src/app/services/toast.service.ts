import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { Toast } from '../models/toast';
import { ToastType } from '../models/toast-type';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toast$ = new BehaviorSubject<Toast | undefined>(undefined);

  private undoSubject = new Subject();
  private hideTimer: any;

  showSuccessToast(message: string) {
    this.show(message, ToastType.success, false);
  }

  showDangerToast(message: string, handleUndo?: () => any) {
    this.show(message, ToastType.danger, handleUndo?true: false);
    if (handleUndo) {
      this.undoSubject.asObservable().subscribe(() => {
        handleUndo();
      });
    }
  }

  fireUndoEvent() {
    this.undoSubject.next();
  }

  private show(message: string, severity: ToastType, undoAction: boolean) {
    this.toast$.next({ message, severity, undoAction });
    this.undoSubject = new Subject();
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
