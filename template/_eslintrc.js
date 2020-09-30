module.exports = {
  root: true,
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    jest: true,
    "react-native/react-native": true,
  },
  rules: {
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-types': 0,
    'react-native/no-raw-text': 0
  }
};
