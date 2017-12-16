var config = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 8,
  },
  env: {
    es6: true,
    jest: true,
  },
  rules: Object.assign({
    'no-console': 'off',
    'no-debugger': 'off',
  }),
}

// Test env level rules
if (process.env.NODE_ENV === 'test') {
  Object.assign(config.rules, {
    // Lint formatting matches Prettier standards
    'prettier/prettier': 'error',

    // Restrict dev only tools
    'no-console': 'error',
    'no-debugger': 'error',
  })
}

module.exports = config
