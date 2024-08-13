/* eslint-disable linebreak-style */
module.exports = {
  env: {
    commonjs: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'template-curly-spacing': 'off',
    indent: ['error', 2, { SwitchCase: 1, offsetTernaryExpressions: true, ignoredNodes: ['TemplateLiteral'] }],
    semi: ['error', 'never'],
    'max-len': ['error', { code: 120 }],
    'no-console': ['error', { allow: ['info'] }],
    'object-curly-newline': 'off',
    'import/newline-after-import': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'implicit-arrow-linebreak': 'off',
    'global-require': 'off',
    'no-underscore-dangle': 'off',
    'function-paren-newline': 'off',
    'no-shadow': 'off',
    radix: 'off',
    'no-prototype-builtins': 'off',
    'no-plusplus': 'off',
    'no-case-declarations': 'off',
    'guard-for-in': 'off',
    'no-continue': 'off',
    'operator-linebreak': ['error', 'after'],
    'no-unused-expressions': 'off',
  },
}
