module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "plugins": [
    "react",
  ],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "no-trailing-spaces": ["error"],
    "comma-dangle": ["error", "always-multiline"],
    "object-curly-spacing": ["error", "always"],
    "react/display-name": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
  },
  "settings": {
    "react": {
      "version": "detect",
    },
  },
  "env": {
    "browser": true,
    "amd": true,
    "node": true,
  },
};
