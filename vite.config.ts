import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The build output is configured to go to the project's root `dist` directory.
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
