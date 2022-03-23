/** Basic config */
module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true
    },
    extends: [
        'airbnb',
        "eslint:recommended",
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:eslint-comments/recommended',
        'plugin:yml/recommended',
        'prettier',
      ],
    plugins: ['html'],
    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.mjs', '.ts', '.tsx', '.d.ts'] }
        }
    },
    rules: {
        // import
        'import/order': 'error',
        'import/first': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',

        // Common
        semi: ['error', 'never'],
        curly: ['error', 'multi-or-nest', 'consistent'],
        quotes: ['error', 'single'],
        'quote-props': ['error', 'as-needed'],
        'no-unused-vars': 'warn',
        'no-param-reassign': 'off',
        'array-bracket-spacing': ['error', 'never'],
        'brace-style': 0,
        'block-spacing': ['error', 'always'],
        camelcase: 'off',
        'comma-spacing': ['error', { before: false, after: true }],
        'comma-style': ['error', 'last'],
        'comma-dangle': 0,
        'no-constant-condition': 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-cond-assign': ['error', 'always'],
        'func-call-spacing': ['off', 'never'],
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        indent: 0,
        'no-restricted-syntax': ['error', 'DebuggerStatement', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'no-await-in-loop': 0,
        'no-spaced-func': 'error',
        'object-curly-spacing': ['error', 'always'],
        'no-return-await': 'off',
        'space-before-function-paren': 0,
        'global-require': 0,
        'import/no-dynamic-require': 0,
        // es6
        'no-var': 'error',
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true
            }
        ],
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: false,
                allowUnboundThis: true
            }
        ],
        'object-shorthand': [
            'error',
            'always',
            {
                ignoreConstructors: false,
                avoidQuotes: true
            }
        ],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'template-curly-spacing': 'error',
        'arrow-parens': 0,
        'generator-star-spacing': 'off',

        // best-practice
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'consistent-return': 'off',
        complexity: ['off', 11],
        eqeqeq: ['error', 'allow-null'],
        'no-alert': 'warn',
        'no-case-declarations': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-with': 'error',
        'no-void': 'error',
        'no-useless-escape': 'off',
        'vars-on-top': 'error',
        'require-await': 'off',
        'no-return-assign': 'off',
        'no-use-before-define': 0,
        'eslint-comments/disable-enable-pair': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'operator-linebreak': 0,
        'no-unused-expressions': 0
    }
}
