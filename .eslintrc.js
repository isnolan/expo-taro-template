module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
  }
};
