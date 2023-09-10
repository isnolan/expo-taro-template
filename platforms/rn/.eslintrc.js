const path = require('path');

module.exports = {
  // 使用共享的 ESLint 配置
  extends: ['@react-native-community', 'plugin:prettier/recommended', '../../.eslintrc.base.json'],
  plugins: ['unicorn'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: ['/android', '/ios'],
      },
    ],
  },

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js'],
      plugins: ['@typescript-eslint', 'unused-imports', 'tailwindcss', 'simple-import-sort'],
      extends: ['plugin:tailwindcss/recommended', '@react-native-community', 'plugin:prettier/recommended'],
      baseUrl: './',
      parser: 'babel-eslint',
      parserOptions: {
        project: './tsconfig.json',
        requireConfigFile: false,
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            endOfLine: 'auto',
          },
        ],
        'max-params': ['error', 3],
        'max-lines-per-function': ['error', 70],
        'react/destructuring-assignment': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/consistent-type-imports': 'error',
        'import/prefer-default-export': 'off',
        'tailwindcss/classnames-order': [
          'warn',
          {
            officialSorting: true,
          },
        ],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        'tailwindcss/no-custom-classname': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
      },
    },
    {
      files: ['src/translations/*.json'],
      extends: ['plugin:i18n-json/recommended'],
      rules: {
        'i18n-json/valid-message-syntax': [
          2,
          {
            syntax: path.resolve('./scripts/i18next-syntax-validation.js'),
          },
        ],
        'i18n-json/valid-json': 2,
        'i18n-json/sorted-keys': [
          2,
          {
            order: 'asc',
            indentSpaces: 2,
          },
        ],
        'i18n-json/identical-keys': [
          2,
          {
            filePath: path.resolve('./src/translations/en.json'),
          },
        ],
        'prettier/prettier': [
          0,
          {
            singleQuote: true,
            endOfLine: 'auto',
          },
        ],
      },
    },
  ],
};
