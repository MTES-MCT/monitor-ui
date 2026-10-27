import 'styled-components'

import { Theme } from '.'

declare module '*.css'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-object-type */
  export interface DefaultTheme extends Theme {}
}
