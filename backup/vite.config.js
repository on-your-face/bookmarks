import { defineConfig } from 'vite';
import path from 'path';
import htmlInject from 'vite-plugin-html-inject';

export default defineConfig({
   base: '/bkmrks/',
   root: '.',
   build: {
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
         input: {
            main: path.resolve(__dirname, 'index.html'), // только настоящие HTML-страницы
         },
         output: {
            assetFileNames: (assetInfo) => {
               if (assetInfo.name && assetInfo.name.endsWith('.css')) return 'assets/css/[name][extname]';
               if (assetInfo.name && /\.(png|jpg|svg|webp|woff2?|ttf|eot)$/.test(assetInfo.name)) return 'assets/[ext]/[name][extname]';
               return 'assets/[name][extname]';
            },
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js',
         },
      },
   },
   server: {
      port: 3000,
      open: true,
   },
   plugins: [htmlInject()],
});
