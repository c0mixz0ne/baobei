import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
	ViteImageOptimizer(
		{
			test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
			exclude: undefined,
			include: undefined,
			includePublic: true,
			logStats: true,
			ansiColors: true,
			svg: {
			  multipass: true,
			  plugins: [
				{
				  name: 'preset-default',
				  params: {
					overrides: {
					  cleanupNumericValues: false,
					  removeViewBox: false, // https://github.com/svg/svgo/issues/1128
					},
					// cleanupIDs: {
					//   minify: false,
					//   remove: false,
					// },
					// convertPathData: false,
				  },
				},
				'sortAttrs',
				{
				  name: 'addAttributesToSVGElement',
				  params: {
					attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
				  },
				},
			  ],
			},
			png: {
			  // https://sharp.pixelplumbing.com/api-output#png
			  quality: 70,
			},
			jpeg: {
			  // https://sharp.pixelplumbing.com/api-output#jpeg
			  quality: 70,
			},
			jpg: {
			  // https://sharp.pixelplumbing.com/api-output#jpeg
			  quality: 70,
			},
			tiff: {
			  // https://sharp.pixelplumbing.com/api-output#tiff
			  quality: 70,
			},
			// gif does not support lossless compression
			// https://sharp.pixelplumbing.com/api-output#gif
			gif: {},
			webp: {
			  // https://sharp.pixelplumbing.com/api-output#webp
			  lossless: true,
			},
			avif: {
			  // https://sharp.pixelplumbing.com/api-output#avif
			  lossless: true,
			},
			cache: false,
			cacheLocation: undefined,
		}
	),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // Alias to src
    }
  },
  css: {
    preprocessorOptions: {
	  scss: {
        additionalData: `@use "@/assets/_mixins.scss" as *;`, // Mixins
      },
    },
  },
})
