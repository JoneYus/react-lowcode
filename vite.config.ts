import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp';
import { resolve } from 'path';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          libDirectory: 'es',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(__dirname, 'src/assets/styles/base.less')}";`,
      },
    },
  },
});
