/** @type {import('prettier').Options} */
module.exports = {
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  printWidth: 100,
  proseWrap: 'always',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  overrides: [
    {
      files: ['**/*.json'],
      options: {
        useTabs: false
      }
    },
    {
      files: ['**/*.mdx'],
      options: {
        proseWrap: 'preserve',
        htmlWhitespaceSensitivity: 'ignore'
      }
    }
  ],
  plugins: ['prettier-plugin-tailwindcss']
}
