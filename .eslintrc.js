module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    "prettier"
  ],
  rules: {
    "no-console": 0,
    "prettier/prettier": "error",
    "@typescript-eslint/no-var-requires": false,
    "@typescript-eslint/indent": "ingore",
    "react/jsx-filename-extension": [1, {
      "extensions": [".ts", ".tsx", ".js", ".jsx"]
    }]
  }
}
