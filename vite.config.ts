import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The 'root' property has been removed to use the project root.
  // root: 'src',
  build: {
    // The output directory is now 'dist' relative to the project root.
    outDir: 'dist',
    emptyOutDir: true,
  },
});
