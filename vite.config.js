import { defineConfig } from 'vite';
import path from 'path';
import htmlInject from 'vite-plugin-html-inject';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
   base: './',
   root: '.',
   build: {
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
         input: {
            main: path.resolve(__dirname, 'index.html'),
         },
      },
   },
   server: {
      port: 3000,
      open: true,
   },
   plugins: [htmlInject(), viteSingleFile()],
});
