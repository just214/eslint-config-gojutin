# eslint-config-gojutin



## Installation

```
npm i -D eslint @aps/eslint-config-test
```


## Usage

Once the `eslint-config-gojutin` package is installed, you can use it by specifying `gojutin` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "gojutin",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## About

This project includes tight **ESLint** rules to ensure quality code. Many of the rules favor a functional approach with a strong emphasis on immutability and strong type definitions.

The **ESLint** rules are listed as key/value pairs. The key represents the rule name and the value (number) represents the setting of the rule:

`0` : off

`1`: warn

`2`: error

Here is an example of a rule:
```
"immutable/no-this": 2
```
This particular rule disallows the use of the `this` keyword, which will result in an error. 
