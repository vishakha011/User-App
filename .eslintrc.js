module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "plugin:json/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    logger: true,
    module: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  parser: "babel-eslint",
  plugins: ["react", "prettier"],
  rules: {
    "no-unused-vars": 0,
    "no-undef": 0,
    indent: ["error", 2],
    "arrow-parens": ["error", "as-needed"],
    semi: ["error", "always"],
    "react/prop-types": 0,
    "import/prefer-default-export": "off"
  }
};
