import { ToastType } from './toast-type';

export interface Toast {
  message: string;
  severity: ToastType;
}
