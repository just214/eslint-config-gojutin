# eslint-config-gojutin

### ESLint (with TSLint and Prettier) config for React/TypeScript projects.

## Install as a dev dependency

    $ npm install -D eslint-config-gojutin
    or
    $ yarn add -D eslint-config-gojutin

## Usage

Once the `eslint-config-gojutin` package is installed, you can use it by specifying `gojutin` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your `.eslintrc` or `.eslintrc.js` file.

```json
{
  "extends": "gojutin",
  "rules": {}
}
```

## About

This project includes a combination of **ESLint** and **TSLint** rules for React and TypeScript code. Many of the rules favor a functional approach with a strong emphasis on immutability and strong type definitions.

The rules are listed as key/value pairs. The key represents the rule name and the value (number) represents the setting of the rule:

`0` : off

`1`: warn

`2`: error

Here is an example of a rule:

```
"immutable/no-this": 2
```

This particular rule disallows the use of the `this` keyword, which will result in an error.
