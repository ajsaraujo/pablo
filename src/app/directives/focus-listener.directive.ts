import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appFocusListener]',
})
export class FocusListenerDirective {
  @Output() focusIn = new EventEmitter();
  @Output() focusOut = new EventEmitter();

  @HostListener('focusin', ['$event'])
  onFocusIn() {
    this.focusIn.emit();
  }

  @HostListener('focusout', ['$event'])
  onFocusOut() {
    this.focusOut.emit();
  }
}
