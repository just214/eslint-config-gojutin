# eslint-config-gojutin

[![version](https://img.shields.io/npm/v/eslint-config-gojutin.svg?style=flat-square)](http://npm.im/eslint-config-gojutin)
[![MIT License](https://img.shields.io/npm/l/eslint-config-gojutin.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

A sensible set of ESLint rules for React/TypeScript projects with an emphasis on immutability and accessibility.

## Table of Contents

- [eslint-config-gojutin](#eslint-config-gojutin)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Overwriting Rules](#overwriting-rules)
  - [About](#about)
  - [Contributing](#contributing)
    - [Committing Code to GitHub](#committing-code-to-github)
    - [Publishing](#publishing)

## Features

- Editor and Prettier Integrations
- Rules for
  - TypeScript
  - React and React Hooks
  - A11y with React
  - Testing with Jest
  - Import Statements
  - Functional and Immutable Patterns

## Installation

This package has several peer dependencies that need to be installed to work properly. You can see the full list with the following command:

```sh
npm info "eslint-config-gojutin" peerDependencies
```

This script adds the package along with all of it's required dependencies:

```sh
yarn add -D eslint-confog-gojutin @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-eslint eslint eslint-config-prettier eslint-config-react-app eslint-plugin-flowtype eslint-plugin-functional eslint-plugin-immutable eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-standard prettier typescript
```

## Usage

Once the library and all required dependencies are installed, you can use it by specifying this library in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) property of your `.eslintrc` or `.eslintrc.js` file.

```json
{
  "extends": ["gojutin"]
}
```

### Overwriting Rules

Any rule that is included with this library can be easily overwritten using the `rules` property in your `.eslintrc` or `.eslintrc.js` file:

```json
{
  "extends": ["@apsphysics"],
  "rules": {
    "functional/no-mixed-type": "warn"
  }
}
```

Please refer to the documentation for each dependency to learn what options are available for each rule.

## About

This package extends the popular [eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app) package, which is created and maintained the Facebook team. This configuration package is actively maintained and includes sensible rules for React-specific apps, including hooks usage. It also includes accessibility rules via [react-a11y](https://github.com/reactjs/react-a11y) as well as rules for import statements and a few other niceties.

[eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app):

- Docs: https://www.npmjs.com/package/eslint-config-react-app
- Source: https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js

## Contributing

### Committing Code to GitHub

This repo uses [Husky](https://typicode.github.io/husky/#/) and [@commitlint](https://commitlint.js.org/#/) to enforce commit messages that follow the [Conventional Commit](https://www.conventionalcommits.org) specification. Please refer to the [APS Playbook](https://apsphysics.atlassian.net/wiki/spaces/SWENG/pages/993786/Playbook#Conventional-Commits) for a quick reference.

### Publishing

This package is published automatically with a GitHub Action that is triggered via GitHub releases. Release drafts are created by the [np](https://www.npmjs.com/package/np) package by running the `yarn run release` command. This will prompt you to select the appropriate version type (patch, minor, major, etc.) and will automatically create a detailed release draft containing all commit messages since the previous release. Once you save the release, the GitHub Action will automatically take care of publishing the new version of the package to the NPM package registry.
