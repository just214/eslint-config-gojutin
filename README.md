# eslint-config-gojutin

[![version](https://img.shields.io/npm/v/eslint-config-gojutin.svg?style=flat-square)](http://npm.im/eslint-config-gojutin)
[![MIT License](https://img.shields.io/npm/l/eslint-config-gojutin.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

### ESLint configuration for React/TypeScript projects with a functional flavor.

## Installation

```sh
npm install --dev eslint-config-gojutin eslint typescript prettier
```

## Usage

In an `.eslintrc` or `.eslintrc.js` file:

```json
{
  "extends": ["gojutin"]
}
```

## Overwriting Rules

Any rule that is included with this library can be easily overwritten using the `rules` property in your `.eslintrc` or `.eslintrc.js` file:

```json
{
  "extends": ["gojutin"],
  "rules": {
    "functional/no-mixed-type": "error"
  }
}
```

Please refer to the documentation for each dependency to learn what options are available for each rule.
