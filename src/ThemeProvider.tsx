import merge from 'lodash/merge'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import { THEME, type Theme } from './theme'

import type { PartialDeep } from 'type-fest'

const UntypedStyledComponentsThemeProvider: any = StyledComponentsThemeProvider

export type ThemeProviderProps = {
  children: any
  theme?: PartialDeep<Theme> | undefined
}
export function ThemeProvider({ children, theme = {} }: ThemeProviderProps) {
  const finalTheme = merge(THEME, theme)

  return <UntypedStyledComponentsThemeProvider theme={finalTheme}>{children}</UntypedStyledComponentsThemeProvider>
}
