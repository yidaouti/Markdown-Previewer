import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Make sure this matches the directory used in your deploy script
  },
  base: '/Markdown-Previewer/' // Set this to your GitHub repository name
});
