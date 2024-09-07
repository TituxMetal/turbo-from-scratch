const { resolve } = require('node:path')

const project = resolve(__dirname, 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/eslint-config/nest.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project,
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js'],
  rules: {
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-call': 'off', // This rule is too strict for the way we use jest
    '@typescript-eslint/no-unsafe-member-access': 'off', // This rule is too strict for the way we use jest
    'jest/expect-expect': 'off'
  }
}
