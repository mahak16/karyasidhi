import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Required to expose to network (ngrok, etc.)
    port: 5173, // Or your chosen port
    strictPort: true,
    cors: true, // Optional, but helps with access issues
    origin: 'http://localhost:5173',
    allowedHosts: ['.ngrok-free.app'], // Or ['7ec3-106-219-90-87.ngrok-free.app']
  },
});
