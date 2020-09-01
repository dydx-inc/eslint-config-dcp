module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
            },
        },
    },
    rules: {
        'no-use-before-define': ['error', { functions: false }],
        'class-methods-use-this': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            { js: 'never', jsx: 'never', mjs: 'never', ts: 'never', tsx: 'never' },
        ],
        'import/order': [2, { alphabetize: { order: 'asc' } }],
        'no-unused-vars': [
            'error',
            { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
        ],
    },
};
