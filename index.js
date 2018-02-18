exports.configs = {
  recommended: {
    env: {
      es6: true,
      node: true
    },
    extends: [
      'semistandard',
      'plugin:import/recommended'
    ],
    parserOptions: {
      ecmaVersion: 8,
      sourceType: 'script'
    },
    rules: {
      'import/no-extraneous-dependencies': 2,
      'import/no-unresolved': [ 2, { commonjs: true } ]
    }
  }
};
