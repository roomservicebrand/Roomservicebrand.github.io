import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The 'root' property has been removed, so Vite will correctly
  // use the project's root directory, where your main index.html is located.
  build: {
    // The output directory is now 'dist', relative to the project root.
    outDir: 'dist',
    emptyOutDir: true,
    // The misconfigured `rollupOptions: { input: 'src' }` is removed.
  },
});
