import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import tailwindcss from '@tailwindcss/vite';

// ⛏️ Needed in ESM to use __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss(), checker()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
