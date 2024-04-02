import { Level } from '../../constants'
import { THEME } from '../../theme'

export const getBannerPalette = (level: Level) => {
  if (level === Level.ERROR) {
    return {
      backgroundColor: THEME.color.maximumRed15,
      borderColor: THEME.color.maximumRed,
      color: THEME.color.maximumRed
    }
  }
  if (level === Level.WARNING) {
    return {
      backgroundColor: THEME.color.goldenPoppy25,
      borderColor: THEME.color.goldenPoppy,
      color: THEME.color.charcoal
    }
  }

  return {
    backgroundColor: THEME.color.mediumSeaGreen25,
    borderColor: THEME.color.mediumSeaGreen,
    color: THEME.color.mediumSeaGreen
  }
}
