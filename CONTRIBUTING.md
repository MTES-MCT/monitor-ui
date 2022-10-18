# Contributing

- [Development](#development)
  - [First Setup](#first-setup)
  - [Maintenance](#maintenance)
- [Notes](#notes)

## Development

### First Setup

You need [Node.js v18](https://nodejs.org/en/).

1. Install Yarn Berry:  
```sh
corepack enable
```
2. Install dependencies:  
```sh
yarn
```
3. Install Git hooks:  
```sh
yarn setup
```
4. [Setup your IDE](https://yarnpkg.com/getting-started/editor-sdks).

### Maintenance

We [should regularly update `browserlist` database](https://github.com/browserslist/browserslist#browsers-data-updating):

```sh
npx browserslist@latest --update-db
```

## Notes

We added `@babel/runtime` in `package.json` dependencies to fix this error:

```
@rsuite/icons tried to access @babel/runtime, but it isn't declared in its dependencies;
this makes the require call ambiguous and unsound.
```

We added `prop-types` in `package.json` dependencies to fix this error:

```
ModuleNotFoundError: Module not found: Error:
Can't resolve 'prop-types' in '.../monitor-ui/.yarn/__virtual__/.../@rsuite/icons/lib'
```

<!-- ### IDE

#### Visual Studio Code

Recommended settings (`.vscode/settings.json`):

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true,
  "eslint.codeActionsOnSave.mode": "all",
  "eslint.format.enable": true,
  "eslint.packageManager": "yarn",
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
``` -->
