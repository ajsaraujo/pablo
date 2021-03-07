import { Palette } from '../models/palette';
import { StorageService } from './storage.service';

class MockStorage implements Storage {
  private storage = new Map<string, string>();

  get length(): number {
    return this.storage.size;
  }

  clear() {
    this.storage.clear();
  }

  setItem(key: string, value: string) {
    this.storage.set(key, value);
  }

  getItem(key: string) {
    return this.storage.get(key) ?? null;
  }

  removeItem(key: string) {
    this.storage.delete(key);
  }

  key(index: number) {
    return null;
  }
}

describe('StorageService', () => {
  let storageService: StorageService;
  let mockStorage: MockStorage;

  beforeEach(() => {
    mockStorage = new MockStorage();
    storageService = new StorageService(mockStorage);
  });

  it('should return no palettes by default', () => {
    expect(storageService.read()).toEqual([]);
  });

  it('should return a palette if it was saved', () => {
    const palette = new Palette();

    storageService.save(palette);

    // Emulates the palettes being saved in one session
    // and read in another one.
    storageService = new StorageService(mockStorage);
    const [readPalette] = storageService.read();

    expect(palette.equals(readPalette)).toBe(true);
  });

  it('should correctly remove a palette', () => {
    const palette = new Palette();

    storageService.save(palette);
    storageService.remove(palette.name);

    const [readPalette] = storageService.read();

    expect(readPalette).toBeUndefined();
  });
});
