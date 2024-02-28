# Monitor UI

[![License][img-license]][lnk-license] [![NPM Version][img-npm]][lnk-npm] [![Unit Tests][img-github]][lnk-github]
[![E2E Tests][img-cypress]][lnk-cypress]

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

Here is [the Storybook][lnk-storybook].

## Contributing

Please read the [contributing document](CONTRIBUTING.md) for setup and contributing instructions.

---

[img-cypress]:
  https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/qnpjm2/main&label=E2E&logo=cypress&style=for-the-badge
[img-github]:
  https://img.shields.io/github/actions/workflow/status/MTES-MCT/monitor-ui/check.yml?branch=main&label=Unit&style=for-the-badge
[img-license]: https://img.shields.io/github/license/MTES-MCT/monitor-ui?style=for-the-badge
[img-npm]: https://img.shields.io/npm/v/@mtes-mct/monitor-ui?style=for-the-badge
[lnk-cypress]: https://cloud.cypress.io/projects/qnpjm2/runs
[lnk-github]: https://github.com/MTES-MCT/monitor-ui/actions?query=branch%3Amain++
[lnk-github-monitorenv]: https://github.com/MTES-MCT/monitorenv
[lnk-github-monitorfish]: https://github.com/MTES-MCT/monitorfish
[lnk-github-rapportnav]: https://github.com/MTES-MCT/rapportnav2
[lnk-license]: https://github.com/MTES-MCT/monitor-ui/blob/main/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@mtes-mct/monitor-ui
[lnk-storybook]: https://mtes-mct.github.io/monitor-ui/
