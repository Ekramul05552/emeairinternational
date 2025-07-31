import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/emeairinternational/', // 👈 this is the repo name
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});