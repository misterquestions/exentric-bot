module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-new': 0,
    'class-methods-use-this': 0,
    'no-console': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'ts': 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.ts',
        ],
      },
    },
  },
};
