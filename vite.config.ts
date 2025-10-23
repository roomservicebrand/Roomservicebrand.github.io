import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This configuration relies on Vite's sensible defaults:
  // - The project root contains the main index.html entry point.
  // - The build output will be placed in the 'dist' directory.
  // This standard setup is robust and should resolve build path issues.
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // FIX: The explicit 'rollupOptions.input' was removed. It was redundant as Vite's default
    // is to use 'index.html' from the project root. This also fixes the TypeScript error
    // "Property 'cwd' does not exist on type 'Process'".
  },
});
