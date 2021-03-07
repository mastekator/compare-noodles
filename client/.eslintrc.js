module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'react'],
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:nestjs/recommended',
        'eslint:recommended',
        'google'
    ],
    root: true,
    env: {
        es6: true,
        browser: true,
        node: true
    },
    ignorePatterns: [
        '.eslintrc.js',
        'node_modules',
    ],
    'rules': {
        'max-len': [
            'error',
            120,
            4,
            {
                'ignoreTrailingComments': true,
                'ignoreComments': true,
                'code': 120,
                'ignoreUrls': true,
                'ignoreTemplateLiterals': true,
                'ignoreStrings': true,
                'ignoreRegExpLiterals': true
            }
        ],
        'new-cap': 'off',
        'semi': 'off',
        'arrow-parens': 'off',
        'comma-dangle': 'off',
        'indent': 'off',
        'require-jsdoc': 'off',
        'operator-linebreak': 'off',
        'valid-jsdoc': 'off',
        'space-before-function-paren': 'off',
        'react/prop-types': 'off',
        'linebreak-style': 'off'
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        React: 'writable'
    }
}
