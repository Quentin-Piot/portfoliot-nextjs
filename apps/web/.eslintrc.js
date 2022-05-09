module.exports = {
  root: true,
  parserOptions: { ecmaVersion: 2020 }, // to enable features such as async/await
  extends: ['@sparkrepo/eslint-config'],
  plugins: ['react', 'react-hooks'],
  globals: {
    React: true,
    jsdom: true,
    JSX: true,
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: [ 'react', 'react-hooks', 'simple-import-sort', 'import'],
      extends: ['@sparkrepo/eslint-config'],
      settings: { react: { version: 'detect' } },
      rules: {
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/display-name': 'off',
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.tsx'],
          },
        ],
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allowSingleOrDouble',
          },
          {
            selector: 'enum',
            format: ['PascalCase'],
          },
          {
            selector: 'interface',
            format: ['PascalCase'],
          },
        ],
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              [
                '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
              ],
              ['^react', '^@?\\w'],
              // Local packages.
              ['^(@sparkrepo)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last. and relative imports
              [
                '^components/',
                '^config/',
                '^hoc/',
                '^hooks/',
                '^layouts/',
                '^modules/',
                '^services/',
                '^store/',
                '^templates/',
                '^utils/',
                '^\\.\\.(?!/?$)',
                '^\\.\\./?$',
                '^\\./(?=.*/)(?!/?$)',
                '^\\.(?!/?$)',
                '^\\./?$',
              ],
              // Style imports.
              ['^.+\\.s?css$'],
            ],
          },
        ],
      },
    },
  ],
};
