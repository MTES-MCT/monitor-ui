# Monitor UI

[![License][img-license]][lnk-license] [![CI Status][img-github]][lnk-github] [![NPM Version][img-npm]][lnk-npm]

> Common React components, hooks, utilities and CSS stylesheets for [Monitorfish][lnk-github-monitorfish] and
> [Monitorenv][lnk-github-monitorenv].

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

import 'rsuite/dist/rsuite.css'

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

[img-github]:
  https://img.shields.io/github/actions/workflow/status/MTES-MCT/monitor-ui/check.yml?branch=main&style=flat-square
[img-license]: https://img.shields.io/github/license/MTES-MCT/monitor-ui?style=flat-square
[img-npm]: https://img.shields.io/npm/v/@mtes-mct/monitor-ui?style=flat-square
[lnk-github]: https://github.com/MTES-MCT/monitor-ui/actions?query=branch%3Amain++
[lnk-github-monitorenv]: https://github.com/MTES-MCT/monitorenv
[lnk-github-monitorfish]: https://github.com/MTES-MCT/monitorfish
[lnk-license]: https://github.com/MTES-MCT/monitor-ui/blob/main/LICENSE
[lnk-npm]: https://www.npmjs.com/package/@mtes-mct/monitor-ui
[lnk-storybook]: https://mtes-mct.github.io/monitor-ui/
