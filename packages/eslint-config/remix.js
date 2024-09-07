const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

module.exports = {
  extends: [
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/react',
    '@vercel/style-guide/eslint/jest',
    '@vercel/style-guide/eslint/jest-react'
  ].map(require.resolve),
  env: {
    browser: true,
    commonjs: true,
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
  ignorePatterns: ['node_modules/', 'build/', '.eslintrc.cjs', '**/*.css'],
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'import/no-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }
    ],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports'
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        caughtErrors: 'none',
        destructuredArrayIgnorePattern: '^_*',
        argsIgnorePattern: '^_*'
      }
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        groups: [['builtin'], ['external'], 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '~/**',
            group: 'parent'
          }
        ]
      }
    ]
  }
}
