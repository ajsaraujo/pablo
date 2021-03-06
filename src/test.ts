import 'jest-preset-angular';

Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    display: 'none',
    appearance: ['-webkit-appearance'],
  }),
});

Object.defineProperty(document, 'doctype', { value: '<!DOCTYPE html>' });

Object.defineProperty(document.body.style, 'transform', {
  value: () => ({ enumerable: true, configurable: true }),
});
