import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  plugins: [react()],
  // By setting `root: 'src'`, Vite will use `src/index.html` as the main entry point.
  // The build output is configured to go to the project's root `dist` directory.
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
