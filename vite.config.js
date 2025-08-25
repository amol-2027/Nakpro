import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Avoid native module issues
    target: 'es2020',
    rollupOptions: {
      // Disable native modules
      external: [],
      output: {
        // Ensure compatibility
        format: 'es',
        manualChunks: undefined
      }
    },
    // Optimize for production
    minify: 'esbuild',
    sourcemap: false,
    // Avoid problematic optimizations
    cssCodeSplit: true,
    assetsInlineLimit: 4096
  },
  // Optimize dependencies
  optimizeDeps: {
    exclude: ['@rollup/rollup-linux-x64-gnu']
  }
});
