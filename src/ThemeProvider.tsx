import { mergeDeepRight } from 'ramda'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import { THEME, Theme } from './theme'

import type { PartialDeep } from 'type-fest'

const UntypedStyledComponentsThemeProvider: any = StyledComponentsThemeProvider

export type ThemeProviderProps = {
  children: any
  theme?: PartialDeep<Theme> | undefined
}
export function ThemeProvider({ children, theme = {} }: ThemeProviderProps) {
  const finalTheme = mergeDeepRight(THEME, theme)

  return <UntypedStyledComponentsThemeProvider theme={finalTheme}>{children}</UntypedStyledComponentsThemeProvider>
}
