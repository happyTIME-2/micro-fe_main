import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Unocss from 'unocss/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(mode);

  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    base: mode === 'production' ? '/micro-fe/' : './',
    server: {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    build: {
      manifest: true,
      minify: 'terser',
      cssCodeSplit: true,
      target:['edge90','chrome90','firefox90','safari15'],
      terserOptions: {
        compress: {
          drop_console: false,
        },
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },
    plugins: [
      vue(),

      chunkSplitPlugin(),

      AutoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/head',
          '@vueuse/core',
        ],
        resolvers: [TDesignResolver({
          library: 'vue-next',
        })],
        dts: 'src/auto-imports.d.ts',
      }),

      Components({
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [TDesignResolver({
          library: 'vue-next',
        })],
        dts: 'src/components.d.ts',
      }),

      Pages({
        dirs: [
          { dir: 'src/pages', baseRoute: '' },
        ],
        extensions: ['vue', 'md'],
      }),

      Unocss(),
    ],

    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        '@vueuse/core',
        '@vueuse/head',
        'tdesign-vue-next',
      ],
      exclude: [
        'vue-demi',
      ],
    },
  };
});
