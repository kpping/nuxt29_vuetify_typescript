module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    camelcase: 'off',
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prettier/prettier': 'warn',
  },
};
