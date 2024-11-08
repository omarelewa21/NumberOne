import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    build: {
        sourcemap: false, // Disable source maps to save memory
        target: 'es2015', // Set a lower build target if compatible
        minify: 'esbuild',
        esbuild: {
            concurrency: 1 // Reduce the number of concurrent threads
        }
    },
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
