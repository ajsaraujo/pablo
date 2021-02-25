import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Toast } from 'src/app/models/toast';
import { ToastType } from 'src/app/models/toast-type';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  animations: [
    trigger('inOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ToastComponent implements OnDestroy {
  toast?: Toast;

  private subscription: Subscription;

  constructor(public toastService: ToastService) {
    this.subscription = this.toastService.toast$.subscribe((toast) => {
      this.toast = toast;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getClasses() {
    if (this.toast?.severity === ToastType.success) {
      return 'green container';
    }

    return 'red container';
  }
}
