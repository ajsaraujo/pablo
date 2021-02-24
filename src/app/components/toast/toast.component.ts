import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
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
  message: String = '';
  private subscription: Subscription;

  constructor(public toastService: ToastService) {
    this.subscription = this.toastService.message$.subscribe((message) => {
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
