import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
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
  message = '';
  toastType = ToastType.success;

  private subscriptions: Subscription[] = [];

  constructor(public toastService: ToastService) {
    this.subscriptions.push(
      this.toastService.message$.subscribe((message) => {
        this.message = message;
      })
    );

    this.subscriptions.push(
      this.toastService.toastType$.subscribe((toastType) => {
        this.toastType = toastType;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  getClasses() {
    if (this.toastType === ToastType.success) {
      return 'green container';
    }

    return 'red container';
  }
}
