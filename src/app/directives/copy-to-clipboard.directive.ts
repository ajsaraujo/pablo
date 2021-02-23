import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appCopyToClipboard]',
})
export class CopyToClipboardDirective {
  @Input() content = '';
  @Output() copied = new EventEmitter<string>();

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.preventDefault();

    if (this.content) {
      const listener = this.createListener();

      document.addEventListener('copy', listener, false);
      document.execCommand('copy');
      document.removeEventListener('copy', listener, false);
    }
  }

  private createListener() {
    return (event: ClipboardEvent) => {
      const clipboard = event.clipboardData;

      clipboard?.setData('text', this.content);

      event.preventDefault();

      this.copied.emit(this.content);
    };
  }
}
