module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "react"],
    rules: {
        indent: ["error", "tab"],
        "linebreak-style": ["error", "windows"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-console": "warn",
        "no-unused-vars": "warn",
        "prettier/prettier": "error",
        "import/order": [
            "error",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    ["sibling", "parent"],
                    "index",
                ],
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
    },
};
