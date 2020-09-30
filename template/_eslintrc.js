module.exports = {
  root: true,
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    jest: true,
    "jest/globals": true,
    "react-native/react-native": true,
  },
};
