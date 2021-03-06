import { Injectable } from '@angular/core';
import { Palette } from '../models/palette';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage = window.localStorage) {}

  save(palette: Palette) {}

  remove(palette: Palette) {}

  read(): Palette[] {
    return [];
  }
}
