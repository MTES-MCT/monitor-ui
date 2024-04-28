import { Level } from '../../constants'
import { THEME } from '../../theme'

/* istanbul ignore next */
export function getStyledCssFromLevel() {
  return (props: { $level: Level; theme: typeof THEME }) => {
    switch (true) {
      // TODO Check with Adeline.
      case props.$level === Level.ERROR:
        return `
          background-color: ${props.theme.color.maximumRed15};
          border-color: ${props.theme.color.maximumRed};
          color: ${props.theme.color.gunMetal};
        `

      // TODO Check with Adeline.
      case props.$level === Level.SUCCESS:
        return `
            background-color: ${props.theme.color.mediumSeaGreen25};
            border-color: ${props.theme.color.mediumSeaGreen};
            color: ${props.theme.color.gunMetal};
          `

      case props.$level === Level.WARNING:
        return `
          background-color: ${props.theme.color.goldenPoppy25};
          border-color: ${props.theme.color.goldenPoppy};
          color: ${props.theme.color.slateGray};
        `

      // TODO Check `border-color` with Adeline.
      case props.$level === Level.INFO:
      default:
        return `
            background-color: ${props.theme.color.blueGray25};
            border-color: #BCD9F2;
            color: ${props.theme.color.gunMetal};
          `
    }
  }
}
