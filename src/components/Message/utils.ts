import { Level } from '@constants'
import { THEME } from '@theme'

/* istanbul ignore next */
export function getStyledCssFromLevel() {
  return (props: { $level: Level; theme: typeof THEME }) => {
    switch (true) {
      case props.$level === Level.WARNING:
        return `
          background-color: ${props.theme.color.goldenPoppy25};
          border: solid 1px ${props.theme.color.goldenPoppyBorder};
          color: ${props.theme.color.gunMetal};
        `

      case props.$level === Level.INFO:
      default:
        return `
            background-color: ${props.theme.color.blueGray25};
            border: solid 1px #AECEEA;
            color: ${props.theme.color.gunMetal};
          `
    }
  }
}
