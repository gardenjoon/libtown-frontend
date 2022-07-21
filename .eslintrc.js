// module.exports = {
//     root: true,
//     extends: "@react-native-community",
//     parser: "@typescript-eslint/parser",
//     plugins: ["@typescript-eslint"],
//     overrides: [
//         {
//             files: ["*.ts", "*.tsx"],
//             rules: {
//                 "@typescript-eslint/no-shadow": ["error"],
//                 "no-shadow": "off",
//                 "no-undef": "off",
//             },
//         },
//     ],
//     rules: {
//         "@typescript-eslint/interface-name-prefix": "on",
//         "@typescript-eslint/explicit-function-return-type": "on",
//         "@typescript-eslint/explicit-module-boundary-types": "on",
//         "@typescript-eslint/no-explicit-any": "on",
//     },
//     extends: [
//         "eslint:recommended",
//         "plugin:react/recommended",
//         "airbnb",
//         "plugin:@typescript-eslint/recommended",
//         "plugin:prettier/recommended",
//     ],
// };

module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    env: {
        es2021: true,
    },
    rules: {
        "@typescript-eslint/interface-name-prefix": "on",
        "@typescript-eslint/explicit-function-return-type": "on",
        "@typescript-eslint/explicit-module-boundary-types": "on",
        "@typescript-eslint/no-explicit-any": "on",
        "quotes": "double",
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                "@typescript-eslint/no-shadow": ["error"],
                "no-shadow": "off",
                "no-undef": "off",
            },
        },
    ],
};
