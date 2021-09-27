module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'plugin:vue/essential',
    'plugin:@typescript/recommended',
    'plugin:import/typescript'
  ],    
  'parserOptions': {
    'ecmaVersion': 12,
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'plugins': [
    'vue',
    '@typescript-eslint'
  ],
  'rules': {
    indent: [ 'error', 2 ],
    quotes: [ 'error', 'single' ],
    'no-restricted-syntax': 'error',
    'no-restricted-properties': 'error',
    'space-before-function-paren': ['error', 'always'],
    'keyword-spacing': ['error', { after: true }],
  }
};
