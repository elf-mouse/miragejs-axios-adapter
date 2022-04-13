module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended']
};
