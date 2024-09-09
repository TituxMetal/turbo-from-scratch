/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/typescript',
    'eslint-config-turbo'
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  env: {
    node: true
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],

    'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
    'import/no-duplicates': ['warn', { 'prefer-inline': true }],

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
