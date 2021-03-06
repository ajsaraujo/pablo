import { Injectable } from '@angular/core';

/**
 * We need to inject a Storage instance into StorageService
 * so we can test it. However, we can't inject window.localStorage
 * because it isn't a valid Angular service. Hence, we create this
 * wrapper that is an injectable.
 */
@Injectable({
  providedIn: 'root',
})
export class LocalStorageWrapperService implements Storage {
  private localStorage: Storage = window.localStorage;

  get length() {
    return this.localStorage.length;
  }

  clear() {
    this.localStorage.clear();
  }

  getItem(key: string) {
    return this.localStorage.getItem(key);
  }

  setItem(key: string, value: string) {
    this.localStorage.setItem(key, value);
  }

  key(index: number) {
    return this.localStorage.key(index);
  }

  removeItem(key: string) {
    this.localStorage.removeItem(key);
  }
}
