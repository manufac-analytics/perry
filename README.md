# Perry User Guide

[![CI](https://github.com/manufac-analytics/perry/actions/workflows/main.yml/badge.svg)](https://github.com/manufac-analytics/perry/actions/workflows/main.yml)

![Manufac Analytics](https://manufac-analytics-images.s3.ap-south-1.amazonaws.com/logos/creatives/computer-1920.png)

**Perry is scaffolded using [tsdx](https://github.com/formium/tsdx#readme).**

## Commands

TSDX scaffolds your new library inside `/src`.

To run TSDX, use:

```bash
yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `yarn build`.

To run tests, use `yarn test`.

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`.

### Jest

Jest tests are set up to run with `yarn test`.

### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of your library with `yarn size` and visualize the bundle with `yarn analyze`.

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)

## Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

You can also choose to install and use [invariant](https://github.com/palmerhq/tsdx#invariant) and [warning](https://github.com/palmerhq/tsdx#warning) functions.

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Publishing to NPM

Run `yarn version`. Maintainers with publishing rights alone shall be able to publish to NPM.

## Branching Workflows

### Branch naming conventions

1. Use the following structure for naming any **feature branch**: `${username}/#${issue-number}-${some-title}`.
2. You can read more about the reasoning [here](https://deepsource.io/blog/git-branch-naming-conventions/).
3. The first portion of the branch name `${username}/...` is a "grouping token". It helps in clubbing all the branches owned by a particular user.

### Pushing a new feature

We follow the [Git Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) for pushing new features into the `master` branch.

## Commits Format

- We use the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to decide how to format our commit messages.
- This is not strictly enforced at the moment but the developers are expected to follow this specification while commiting important changes like bringing in a new feature, making a breaking change to the API, or any change that the developer feels should be reflected in the CHANGELOG in the subsequent release.
- Conventional commits integrate well with the [SemVer](https://semver.org/) versioning pattern and this compatibility is the main reason for its adoption.
- [`conventional-changelog-cli`](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli) is used in the `yarn version` CLI giving us the power to automate the CHANGELOG generation.
- The [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) extension makes the formating & compliance of the commit messages a cake-walk!

---
