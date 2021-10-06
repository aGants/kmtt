module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'node': true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],    
  parserOptions: {
    'ecmaVersion': 12,
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    indent: [ 'error', 2 ],
    quotes: [ 'error', 'single' ],
    'no-restricted-syntax': 'error',
    'no-restricted-properties': 'error',
    'space-before-function-paren': ['error', 'never'],
    'keyword-spacing': ['error', { after: true }],
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'off',
    'vue/attribute-hyphenation': 'off'

  }
};
