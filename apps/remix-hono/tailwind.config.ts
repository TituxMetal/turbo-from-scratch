import path from 'node:path'

import { type Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: [path.join(__dirname, './app/**/*.{ts,tsx}')],
  theme: {
    extend: {
      colors: { gray: colors.neutral }
    }
  },
  plugins: []
} satisfies Config
