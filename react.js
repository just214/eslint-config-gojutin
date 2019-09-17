//***********************************************************
// * 0 = off | 1 = warn | 2 = error
//***********************************************************
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["./typescript.js", "plugin:jsx-a11y/recommended"],
  plugins: [
    "react",
    "jsx-a11y",
    "@typescript-eslint",
    "@typescript-eslint/tslint",
  ],
  rules: {
    strict: 2,
    "react/prop-types": 0, // Disable prop-types as we use TypeScript for type checking
    "@typescript-eslint/explicit-function-return-type": 0, // Fails with Forward Ref
    "@typescript-eslint/tslint/config": [
      2,
      {
        rulesDirectory: ["node_modules/tslint-react/rules"],
        rules: {
          // tslint-react rules
          "jsx-wrap-multiline": false,
          "jsx-no-multiline-js": true,
          "jsx-boolean-value": true,
          "jsx-curly-spacing": true,
          "jsx-equals-spacing": true,
          "jsx-key": true,
          "jsx-no-bind": true,
          "jsx-no-lambda": true,
          "jsx-no-string-ref": true,
          "jsx-self-close": true,
          "jsx-space-before-trailing-slash": true,
        },
      },
    ],
  },
};
