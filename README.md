# Monitor UI

[![License][img-license]][lnk-license] [![NPM Version][img-npm]][lnk-npm]
[![Documentation][img-documentation]][lnk-documentation]

[![Unit Tests][img-unit-tests]][lnk-unit-tests] [![Coverage][img-coverage]][lnk-coverage]
[![E2E Tests][img-e2e-tests]][lnk-e2e-tests]

> Common React components, hooks, utilities and CSS stylesheets for [MonitorFish][lnk-github-monitorfish],
> [MonitorEnv][lnk-github-monitorenv] and [RapportNav][lnk-github-rapportnav].

## Usage

### Installation

```sh
npm i -E @mtes-mct/monitor-ui
npx install-peerdeps @mtes-mct/monitor-ui
```

or

```sh
yarn add -E @mtes-mct/monitor-ui
npx install-peerdeps @mtes-mct/monitor-ui
```

### Setup

```tsx
import { GlobalStyle, THEME } from '@mtes-mct/monitor-ui'
import { CustomProvider as RsuiteCustomProvider } from 'rsuite'
import rsuiteFrFr from 'rsuite/locales/fr_FR'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const UntypedThemeProvider = ThemeProvider as any

import 'react-toastify/dist/ReactToastify.css'
import 'rsuite/dist/rsuite.css'
import '@mtes-mct/monitor-ui/assets/stylesheets/rsuite-override.css'

export function App() {
  return (
    <UntypedThemeProvider theme={THEME}>
      <GlobalStyle />

      <RsuiteCustomProvider locale={rsuiteFrFr}>{/* Your app components here */}</RsuiteCustomProvider>
    </UntypedThemeProvider>
  )
}
```

## Documentation

Here is [the Storybook documentation][lnk-documentation].

## Testing in your project

### Using npm link

1. Globally link your module

```bash
npm link
```

2. Link the module in a project

```bash
cd /path/to/my-project
```

Add to `dependencies` `   "@mtes-mct/monitor-ui__root": "<version>",` to `package.json`

```bash
npm link @mtes-mct/monitor-ui__root
```

3. Unlink the module:

```bash
cd /path/to/my-project
npm unlink my-module
cd /path/to/my-module
npm unlink
```

## Contributing

Please read the [contributing document](CONTRIBUTING.md) for setup and contributing instructions.

---

[img-coverage]: https://img.shields.io/codecov/c/github/MTES-MCT/monitor-ui?flag=unit&style=for-the-badge
[img-documentation]: https://img.shields.io/badge/StoryBook-Docs-007ec6?logo=storybook&style=for-the-badge
[img-e2e-tests]:
  https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/juvjsi/main&label=E2E&logo=cypress&style=for-the-badge
[img-license]: https://img.shields.io/github/license/MTES-MCT/monitor-ui?style=for-the-badge
[img-npm]: https://img.shields.io/npm/v/@mtes-mct/monitor-ui?style=for-the-badge
[img-unit-tests]:
  https://img.shields.io/github/actions/workflow/status/MTES-MCT/monitor-ui/check.yml?branch=main&label=Unit&style=for-the-badge
[lnk-coverage]: https://app.codecov.io/gh/MTES-MCT/monitor-ui
[lnk-documentation]: https://mtes-mct.github.io/monitor-ui/?path=/docs/introduction--documentation
[lnk-e2e-tests]: https://cloud.cypress.io/projects/juvjsi/runs
[lnk-e2e-tests]: https://cloud.cypress.io/projects/juvjsi/runs
[lnk-github-monitorenv]: https://github.com/MTES-MCT/monitorenv
[lnk-github-monitorfish]: https://github.com/MTES-MCT/monitorfish
[lnk-github-rapportnav]: https://github.com/MTES-MCT/rapportnav2
[lnk-license]: https://github.com/MTES-MCT/monitor-ui/blob/main/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@mtes-mct/monitor-ui
[lnk-unit-tests]: https://github.com/MTES-MCT/monitor-ui/actions?query=branch%3Amain++
