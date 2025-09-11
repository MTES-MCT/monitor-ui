# Contributing

- [Getting Started: Backend \& Frontend](#getting-started-backend--frontend)
  - [Requirements](#requirements)
  - [First Setup](#first-setup)
  - [Local Development](#local-development)
  - [Run E2E tests](#run-e2e-tests)
  - [Run Release E2E tests](#run-release-e2e-tests)
- [Conventions](#conventions)
- [Release](#release)
  - [Versionning](#versionning)
    - [Breaking changes](#breaking-changes)
- [Maintenance](#maintenance)
  - [Updating icons](#updating-icons)
  - [Updating caniuse browserlist](#updating-caniuse-browserlist)
- [Notes](#notes)

## Getting Started: Backend & Frontend

### Requirements

- Debian-based Linux or macOS
- Node.js v20 (with npm v10)
- [Yarn 2+ (Yarn Modern)](https://yarnpkg.com/getting-started/install)

### First Setup

```sh
git clone https://github.com/MTES-MCT/monitor-ui.git
cd monitor-ui
yarn
yarn postinstall # Optional: automatically run each time Yarn cache is cleared
```

> [!NOTE]  
> You may have to manually run `yarn postinstall` to update post-install scripts when Yarn cache already exists.

### Local Development

```sh
yarn dev
```

### Run E2E tests

You must have the Storybook running locally to run the E2E tests (`yarn dev`). You can then run the E2E tests with:

```sh
yarn test:e2e:open
```

### Run Release E2E tests

In order to test that the final package is working as expected when imported in another project, you can run the release
E2E tests:

```sh
yarn test:e2e:release:setup # Build, install the package and start the sample React with Vite project
yarn test:e2e:release # In another tab/terminal
```

## Conventions

Please respect [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) messages as defined by Angular in
[their contributing documentation](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit).

## Release

The release process is automated, including versionning and release notes generation, using
[semantic-release](https://github.com/semantic-release/semantic-release).

1. Go to [Github Actions Release Workflow](https://github.com/MTES-MCT/monitor-ui/actions/workflows/release.yml)
2. Click on "Run workflow" > "Run workflow" ("Branch: main" should be selected by default).
3. This will generate a version pull request with a title looking like `ci(release): X.Y.Z` which will then be
   auto-merged by the `Merge Release Pull Request` workflow.

> [!IMPORTANT]  
> **DO NOT** merge other pull requests:
>
> - while the `Release` workflow is running
> - or while the release pull request is still open (waiting to be auto-merged).

### Versionning

In short, 'feat(...):' will generated minor versions and 'fix(...):' will generate patch versions.

#### Breaking changes

If you have to release a BREAKING CHANGE, you should look at the
[official documentation](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-description-and-breaking-change-footer)
and you may look at this [pull request](https://github.com/MTES-MCT/monitor-ui/pull/131) as an example.

In the case of a BREAKING CHANGE, it's **strongly advised** to add an exclamation point before the colon in the commit
message, i.e.:

```sh
git commit -m 'feat(fields)!: this prop has been removed'
git commit -m 'feat!: all theses component props are now strings instead of numbers'
```

And **DON'T FORGET** the `BREAKING CHANGE: ...` in the commit message body.

> [!WARNING]  
> When using an exclamation point, your bash can interpret it as a history expansion character.  
> To avoid that, you can:
>
> - either escape it with a backslash: `git commit -m "feat\!:..."` when using double quotes
> - or simply use single quotes: `git commit -m 'feat!: ...'`.

## Maintenance

### Updating icons

1. Copy the new SVG icons in `src/assets/icons` folder
2. Run

```sh
yarn icons
```

to generate React components from the SVG icons.

### Updating caniuse browserlist

We
[should regularly update `browserlist` database](https://github.com/browserslist/browserslist#browsers-data-updating):

```sh
npx browserslist@latest --update-db
```

## Notes

We added `@babel/runtime` in `package.json` dependencies to fix this error:

```
@rsuite/icons tried to access @babel/runtime, but it isn't declared in its dependencies;
this makes the require call ambiguous and unsound.
```
