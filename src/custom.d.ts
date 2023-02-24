import 'styled-components'

import { Theme } from '.'

declare module '*.css'

declare module '*.mdx' {
  // eslint-disable-next-line import/no-mutable-exports
  let MDXComponent: (props: any) => JSX.Element
  // eslint-disable-next-line import/no-default-export
  export default MDXComponent
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
