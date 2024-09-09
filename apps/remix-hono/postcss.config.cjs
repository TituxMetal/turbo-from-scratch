const path = require('node:path')

/** @types {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    tailwindcss: {
      config: path.resolve(__dirname, 'tailwind.config.ts')
    },
    autoprefixer: {}
  }
}
