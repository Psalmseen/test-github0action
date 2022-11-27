/// <reference types="vitest" />
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-element.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
});
