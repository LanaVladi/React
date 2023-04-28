/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      exclude: [
        'src/types.ts',
        'src/vite-env.d.ts',
        'vite.config.ts',
        'src/store/store.ts',
        'src/api.tsx',
        'src/data.ts',
      ],
      provider: 'c8',
      all: true,
      skipFull: false,
      reporter: 'text',
    },
  },
});
