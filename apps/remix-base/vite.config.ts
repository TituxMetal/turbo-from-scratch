import { resolve } from 'node:path'

import { vitePlugin as remix } from '@remix-run/dev'
import { flatRoutes } from 'remix-flat-routes'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const MODE = process.env.NODE_ENV

// installGlobals()

export default defineConfig({
  server: {
    port: 3000
  },
  resolve: {
    preserveSymlinks: true
  },
  build: {
    cssMinify: MODE === 'production',
    sourcemap: false,
    commonjsOptions: {
      include: [/remix-base/, /nest-base/, /node_modules/]
    }
  },
  plugins: [
    remix({
      ignoredRouteFiles: ['**/*.css'],
      serverModuleFormat: 'esm',
      future: {
        // v3_fetcherPersist: true,
        // v3_relativeSplatPath: true,
        // v3_throwAbortReason: true
      },
      routes: defineRoutes => {
        return flatRoutes('routes', defineRoutes, {
          ignoredRouteFiles: ['.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}', '**/__*.*'],
          appDir: resolve(__dirname, 'app')
        })
      }
    }),
    tsconfigPaths({})
  ]
})
