/* eslint-disable sort-keys-fix/sort-keys-fix, typescript-sort-keys/interface */

import type { PartialDeep } from 'type-fest'

export type Theme = typeof THEME
export type PartialTheme = PartialDeep<Theme>

export const THEME = {
  // https://xd.adobe.com/view/b6d4c472-3fbe-4dec-9f14-38fe03872a3e-e387/screen/b9bdc1ba-5f07-4c4f-bd44-2d38b2c6f663/specs/
  color: {
    /** INTERFACE COLORS */

    // Neutral Colors
    gunMetal: '#282F3E',
    // TODO Make that charcoal object 100 & 50
    charcoal: '#3B4559',
    charcoalShadow: 'rgba(59, 69, 89, 0.5)',
    slateGray: '#707785',
    lightGray: '#CCCFD6',
    gainsboro: '#E5E5EB',
    cultured: '#F7F7FA',
    white: '#FFFFFF',

    // Accentuation Colors
    blueYonder: {
      25: '#D4DDE7',
      100: '#567A9E'
    },
    blueGray: {
      100: '#5697D2',
      25: '#D4E5F4'
    },
    babyBlueEyes: '#99C9FF',

    // Notification Colors
    mediumSeaGreen: '#29B361',
    goldenPoppy: '#FAC11A',
    maximumRed: '#E1000F',

    /** CONTEXTUAL COLORS */

    // Mission status
    yellowGreen: '#8CC800',

    // Risk Factor
    cadetGray: '#8E9A9F',
    grullo: '#B89B8C',
    copperRed: '#CF6A4E',
    chineseRed: '#A13112',

    // Vessel Track
    darkCornflowerBlue: '#2A4670',
    jungleGreen: '#1C9B7B',

    // Beacon Malfunction
    powderBlue: '#9ED7D9',
    wheat: '#EDD6A4',
    // goldenPoppy: '#FAC11A',
    // maximumRed: '#E1000F',
    // charcoal: '#3B4559',
    // mediumSeaGreen: '#29B361',
    opal: '#A5BCC0',

    // Regulation Areas
    yaleBlue: '#295375',
    queenBlue: '#367096',
    glaucous: '#6284A6',
    blueNcs: '#3690C0',
    iceberg: '#67A9CF',
    lightSteelBlue: '#9AB4D6',
    lightPeriwinkle: '#CDCFEA',
    aliceBlue: '#EBF0F4',
    lightBlue: '#B9DDE5',
    lightCyan: '#C7EAE5', // deprecated ?
    middleBlueGreen: '#91CFC9', // deprecated ?
    verdigris: '#56B3AB', // deprecated ?
    viridianGreen: '#01A29D', // deprecated ?
    paoloVeroneseGreen: '#21977F', // deprecated ?
    skobeloff: '#01686B', // deprecated ?
    blueSapphire: '#01536A', // deprecated ?
    indigoDye: '#033E54', // deprecated ?
    skyBlue: '#77C1DE',
    frenchBlue: '#2E75AB',
    prussianBlue: '#003E54',
    lightCoral: '#FA8282',

    // AMP Zones
    brownSugar: '#B26A53',
    rust: '#B1502F',
    burntSienna: '#D46E49',
    persianOrange: '#D6814F',
    jasper: '#DB503D',
    bittersweet: '#F0755C',
    coral: '#F78A69',
    peach: '#FCB394',
    apricot: '#F0C1A1',
    melon: '#E7A58D',
    paleDogwood: '#F8D7CE',
    seashell: '#FCECE4'
  }
}
