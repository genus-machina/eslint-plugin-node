exports.configs = {
  recommended: {
    env: {
      es6: true,
      node: true
    },
    extends: [
      'semistandard',
      'plugin:import/recommended',
      'plugin:lodash/recommended'
    ],
    parserOptions: {
      ecmaVersion: 8,
      sourceType: 'script'
    },
    plugins: [
      'import',
      'lodash'
    ],
    rules: {
      'import/no-extraneous-dependencies': 2,
      'import/no-unresolved': [ 2, { commonjs: true } ]
    }
  }
};
