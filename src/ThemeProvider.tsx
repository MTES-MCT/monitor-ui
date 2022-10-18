import { mergeDeepRight } from 'ramda'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import { THEME, Theme } from './theme'

import type { DeepPartial } from './types'

const UntypedStyledComponentsThemeProvider: any = StyledComponentsThemeProvider

export type ThemeProviderProps = {
  children: any
  theme?: DeepPartial<Theme>
}
export function ThemeProvider({ children, theme = {} }: ThemeProviderProps) {
  const finalTheme = mergeDeepRight(THEME, theme)

  return <UntypedStyledComponentsThemeProvider theme={finalTheme}>{children}</UntypedStyledComponentsThemeProvider>
}
