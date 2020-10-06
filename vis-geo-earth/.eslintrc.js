const packageConfig = require('./package.json');

module.exports = {
  env: {
    "browser": true,
  },
  extends:  'eslint-config-sprite',
  plugins: ['html'],
  rules: {
    'complexity': ['warn', 25],
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
  },
}
