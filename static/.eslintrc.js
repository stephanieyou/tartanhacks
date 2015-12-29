/* @file eslintrc
 * @brief ESLintRC for client-facing code.
 *
 * Notes: No ES6 stuff enabled (we'll have to live with that till transpiling
 * isn't so slow), also React goodies.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */

'use strict';

module.exports = {
  'ecmaFeatures': {
    'arrowFunctions': true,
    'jsx': true,
    'templateString': true,
    'classes': true,
  },
  'env': {
    'browser': true,
    'commonjs': true,
  },
  'plugins': [
    'react',
  ],
  'rules': {
    // Errors
    'comma-dangle': [2, 'always-multiline'],
    'no-cond-assign': [2, 'always'],
    'no-console': 1,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 1,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'all'],
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 1,
    'use-isnan': 2,
    'valid-jsdoc': [1, {
      'requireReturn': false,
      'prefer': {
        'return': 'returns',
      },
    }],
    'valid-typeof': 2,

    // Best Practices
    'accessor-pairs': 2,
    'block-scoped-var': 2,
    'consistent-return': 2,
    'curly': 2,
    'default-case': 2,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    'eqeqeq': [2, 'allow-null'],
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-label': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': [2, {
      'boolean': true,
      'number': true,
      'string': true,
    }],
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-magic-numbers': [2, {
      'ignore': [0, 1, 2],
    }],
    'no-multi-spaces': 2,
    'no-native-reassign': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-param-reassign': [2, {
      'props': true,
    }],
    'no-process-env': 2,
    'no-proto': 2,
    'no-redeclare': [2, {'builtinGlobals': true}],
    'no-return-assign': [2, 'always'],
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-void': 2,
    'no-warning-comments': 1,
    'no-with': 2,
    'radix': 2,
    'wrap-iife': 2,
    'yoda': 2,

    // Strict
    'strict': [2, 'global'],

    // Variables
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': [2, {
      'builtinGlobals': true,
      'hoist': 'all',
      'allow': [],
    }],
    'no-undef-init': 2,
    'no-undef': 2,
    'no-undefined': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 2,

    // Node.js and CommonJS
    'global-require': 2,
    'handle-callback-err': 2,
    'no-mixed-requires': 2,
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-exit': 2,

    // Style
    'array-bracket-spacing': 2,
    'block-spacing': 2,
    'brace-style': 2,
    'comma-spacing': 2,
    'comma-style': 2,
    'computed-property-spacing': 2,
    'eol-last': 2,
    'func-style': [2, 'expression'],
    'jsx-quotes': [2, 'prefer-double'],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true,
    }],
    'linebreak-style': 2,
    'lines-around-comment': [2, {
      'beforeBlockComment': true,
    }],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-bitwise': 2,
    'no-continue': 2,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': 2,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false,
    }],
    'object-curly-spacing': [2, 'never'],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'after'],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'always'],
    'quotes': [2, 'single', 'avoid-escape'],
    'semi-spacing': [2, {
      'before': false,
      'after': true,
    }],
    'semi': [2, 'always'],
    'space-after-keywords': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, {
      'anonymous': 'always',
      'named': 'never',
    }],
    'space-before-keywords': [2, 'always'],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-return-throw-case': 2,
    'space-unary-ops': 2,
    'spaced-comment': [2, 'always', {'exceptions': ['=']}],
    'wrap-regex': 2,

    // ES6
    'arrow-body-style': 2,
    'arrow-parens': 2,
    'arrow-spacing': 2,
    'constructor-super': 2,
    'no-arrow-condition': 2,
    'no-class-assign': 2,
    'no-dupe-class-members': 2,
    'no-this-before-super': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-template': 2,

    // React
    'react/display-name': [1, {
      'acceptTranspilerName': true,
    }],
    'react/forbid-prop-types': 1,
    'react/jsx-boolean-value': 1,
    'react/jsx-closing-bracket-location': [1, {
      'selfClosing': 'after-props',
    }],
    'react/jsx-curly-spacing': 1,
    'react/jsx-handler-names': 1,
    'react/jsx-indent-props': [1, 2],
    'react/jsx-key': 1,
    'react/jsx-max-props-per-line': 1,
    'react/jsx-no-bind': 1,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 1,
    'react/jsx-no-undef': 1,
    'react/jsx-pascal-case': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 1,
    'react/no-deprecated': 1,
    'react/no-did-mount-set-state': [1, 'allow-in-func'],
    'react/no-did-update-set-state': [1, 'allow-in-func'],
    'react/no-direct-mutation-state': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 1,
    'react/wrap-multilines': 1,
  },
};
