module.exports = {
  globals: {
    GlRenderer: true,
    glDoodle: true,
    __DEV__: true
  },
  extends: 'eslint-config-sprite',
  env: {
    browser: true, 
    mocha: true
  },
  plugins: ['html'],
  rules: {
    complexity: ['warn', 25],
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn'
  }
};
