# eslint-config-gojutin

[![version](https://img.shields.io/npm/v/eslint-config-gojutin.svg?style=flat-square)](http://npm.im/eslint-config-gojutin)
[![MIT License](https://img.shields.io/npm/l/eslint-config-gojutin.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

### ESLint configurations for React/TypeScript projects.

This project includes a combination of **ESLint** and **TSLint** rules for React and TypeScript code. Many of the rules favor a functional approach with a strong emphasis on immutability and strong type definitions.

## Features

- TypeScript (ESLint + TSLint)
- React
- React Hooks
- React A11y
- Jest
- import statements
- Prettier integration
- Emphasis on immutability

## Install library and required dependencies

### Option 1

If you are using **npm 5+** or **yarn**, then you can install this library and all of the required dependencies in a one-liner with **install-peerdeps** :

```sh
npx install-peerdeps --dev eslint-config-gojutin
```

**install-peerdeps** will automatically detect whether you're using Yarn. If you are, it'll prompt you as to whether you want to use Yarn or npm to install the packages.

### Option 2

You can install this package and the peer dependencies using `yarn add` or `npm install`.

```sh
npm install -D eslint-config-gojutin
```

-or-

```sh
yarn add -D eslint-config-gojutin
```

To see a list of required dependencies, run the following command:

```sh
npm info "eslint-config-gojutin" peerDependencies
```

## Usage

This library ships with two configurations:

- TypeScript + React
- TypeScript only

Once the `eslint-config-gojutin` package is installed, you can use it by specifying this library in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your `.eslintrc` or `.eslintrc.js` file.

For TypeScript + React:

```json
{
  "extends": "gojutin",
  "rules": {}
}
```

For TypeScript only:

```json
{
  "extends": "gojutin/typescript",
  "rules": {}
}
```

## Overwriting Rules

Any rule that is included with this library can be easily overwritten using the `rules` property in your `eslint.rc` file:

```json
{
  "extends": "gojutin",
  "rules": {
    "immutable/no-this": 0
  }
}
```

Please refer to the documentation for each dependency to learn what options are available for each rule.
