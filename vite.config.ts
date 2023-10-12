import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': '/src/app',
      '@features': '/src/features',
      '@ui': '/src/ui',
      '@api': '/src/api',
      '@shared': '/src/shared',
      '@pages': '/src/pages',
      '@widgets': '/src/widgets',
      '@entities': '/src/entities',
      '@public': '/public',
    },
  },
});
