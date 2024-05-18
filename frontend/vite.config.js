import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslint()],
    server: {
        proxy: {
            '/api': {
                target: 'http://185.84.162.160:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});
