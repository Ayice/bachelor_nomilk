module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  settings: {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.vue'
        ]
      }
    }
  },
  env: {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8
  },
  'rules': {
    'vue/component-tags-order': 'off',
    'vue/no-v-html': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        'singleline': 'never',
        'multiline': 'never'
      }
    ],
    'no-prototype-builtins': 'off',
    'semi': [
      'error',
      'always',
      {
        'omitLastInOneLineBlock': true
      }
    ],
    'indent': ['error', 2, {
      ignoredNodes: ['TemplateLiteral'],
      SwitchCase: 1
    }],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'keyword-spacing': 'error',
    'comma-dangle': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'semi-spacing': 'error',
    'max-params': ['error', 3],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],
    'import/newline-after-import': 'error'
  }
};
