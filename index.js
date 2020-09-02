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
    plugins: ['react', 'react-hooks', '@typescript-eslint'],
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [
                    ".js",
                    ".jsx",
                    ".mjs",
                    ".json",
                    ".ts",
                    ".tsx"
                ],
            }
        }
    },
    rules: {
        'no-use-before-define': 'off',
        'class-methods-use-this': 'off',
        'no-unused-vars': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
        'react/require-default-props': 'off',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            { js: 'never', jsx: 'never', mjs: 'never', ts: 'never', tsx: 'never' },
        ],
        'import/order': [2, { alphabetize: { order: 'asc' } }],
        "import/no-relative-parent-imports": "error"
    },
};
