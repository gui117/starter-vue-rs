import process from 'node:process'
import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import Components from 'unplugin-vue-components/rspack'
import AutoImport from 'unplugin-auto-import/rspack'
import VueRouter, { VueRouterAutoImports } from 'unplugin-vue-router'
import UnoCSS from '@unocss/postcss'

export default defineConfig({
  plugins: [
    pluginVue(),
  ],
  tools: {
    rspack: {
      plugins: [
        VueRouter.rspack(),
        Components({
          dts: true,
        }),
        AutoImport({
          imports: [
            'vue',
            '@vueuse/core',
            VueRouterAutoImports,
          ],
          dts: true,
          dirs: [
            './src/composables',
          ],
          vueTemplate: true,
        }),

      ],
    },
    postcss: {
      postcssOptions: {
        plugins: [UnoCSS()],
      },
    },
  },
  output: {
    sourceMap: {
      js: process.env.NODE_ENV === 'development' ? 'cheap-module-source-map' : false,
      css: false,
    },
    polyfill: 'usage',
  },
  html: {
    template: './index.html',
  },

  source: {
    entry: {
      index: './src/main.ts',
    },
  },
  performance: {
    removeConsole: true,
  },
})
