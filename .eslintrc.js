module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      './packages/studio-*/tsconfig.json',
      './packages/logger/tsconfig.json',
      './packages/inspector-kit/tsconfig.json'
    ],
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  ignorePatterns: [
    '**/node_modules/**',
    '**/*.d.ts',
    '**/*.scss.d.ts',
    '*.js',
    '**/out/**',
    '**/dist/**',
    '**/*.test.ts'
  ],
  plugins: ['eslint-plugin-import', 'eslint-plugin-jsdoc', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/type-annotation-spacing': 'error',
    'brace-style': ['error', '1tbs'],
    curly: 'error',
    'eol-last': 'error',
    eqeqeq: ['error', 'smart'],
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], 'parent', 'index', 'sibling'],
        // TODO: Eventually enable this in the future for consistency
        // 'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin']
      }
    ],
    'jsdoc/check-alignment': 'error',
    'linebreak-style': ['error', 'unix'],
    'no-console': [
      'warn',
      {
        allow: [
          'warn',
          'dir',
          'time',
          'timeEnd',
          'timeLog',
          'trace',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupEnd',
          'table',
          'debug',
          'info',
          'dirxml',
          'error',
          'groupCollapsed',
          'Console',
          'profile',
          'profileEnd',
          'timeStamp',
          'context'
        ]
      }
    ],
    'no-duplicate-imports': 'error',
    'no-return-await': 'error',
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'warn'
  }
}
