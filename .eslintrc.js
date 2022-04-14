module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'google',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['*.json'],
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    indent: ['error', 4],
    'max-len': ['error', 120],
    'require-jsdoc': 0,
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 0,
  },
};
