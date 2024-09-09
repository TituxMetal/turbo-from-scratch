const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/react',
    '@repo/eslint-config/base.js'
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    React: true,
    JSX: true
  },
  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    }
  },
  ignorePatterns: [
    'node_modules/',
    'build/',
    'index.d.cts',
    'index.cjs',
    '.eslintrc.cjs',
    '**/*.css'
  ],
  rules: {
    // 'no-console': 'off',

    'import/no-default-export': 'off',

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    // '@typescript-eslint/no-shadow': 'off',

    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }
    ]
  }
}
