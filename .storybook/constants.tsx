import { fromPairs } from 'lodash'

import { getArrayFromEnum } from './utils/getArrayFromEnum'
import { Accent, Icon, Level, Size, TagBullet } from '../src'

import type { Meta } from '@storybook/react'

export const ACCENTS_AS_ARRAY = getArrayFromEnum(Accent)
export const ICONS_AS_ARRAY = Object.keys(Icon)
export const ICONS_AS_MAPPING = fromPairs(ICONS_AS_ARRAY.map(key => [key, Icon[key]]))
export const LEVELS_AS_ARRAY = getArrayFromEnum(Level)
export const SIZE_AS_ARRAY = getArrayFromEnum(Size)
export const TAG_BULLETS_AS_ARRAY = getArrayFromEnum(TagBullet)

export const LOREM_IPSUM = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Vivamus sit amet purus justo.',
  'Sed dapibus, turpis non laoreet consectetur, sapien elit varius lacus, dignissim tincidunt dui metus eget metus.',
  'Etiam commodo, augue at condimentum semper, dui sapien auctor urna, sit amet laoreet felis justo gravida purus.',
  'Maecenas sagittis mollis erat eu pulvinar.',
  'Donec pellentesque commodo mauris, ac lobortis justo vestibulum et.',
  'Donec mattis maximus elit, id euismod leo faucibus hendrerit.',
  'Sed aliquet, purus sed pulvinar cursus, velit dolor pretium est, eu mattis sem libero a nibh.',
  'Curabitur diam urna, lacinia eu nulla at, mattis faucibus ligula.',
  'Proin placerat accumsan placerat.',
  'Etiam eget erat nisi.'
].join('')

export const ARG_TYPE = {
  NO_CONTROL: {
    table: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      disable: true
    }
  },
  NO_CONTROL_INPUT: {
    type: 'function' as 'function'
  },
  OPTIONAL_ACCENT: {
    control: 'radio',
    // eslint-disable-next-line object-shorthand
    mappings: { undefined: undefined },
    options: [...ACCENTS_AS_ARRAY, undefined],
    table: {
      type: {
        summary: 'Accent | undefined'
      }
    }
  },
  OPTIONAL_BOOLEAN: {
    control: 'boolean',
    table: {
      type: {
        summary: 'boolean | undefined'
      }
    }
  },
  OPTIONAL_ICON: {
    control: 'select',
    mapping: {
      ...ICONS_AS_MAPPING,
      // eslint-disable-next-line object-shorthand
      undefined: undefined
    },
    options: [...ICONS_AS_ARRAY, undefined],
    table: {
      type: {
        summary: 'boolean | undefined'
      }
    }
  },
  OPTIONAL_LEVEL: {
    control: 'radio',
    // eslint-disable-next-line object-shorthand
    mappings: { undefined: undefined },
    options: [...LEVELS_AS_ARRAY, undefined],
    table: {
      type: {
        summary: 'Level | undefined'
      }
    }
  },
  OPTIONAL_OPTION_VALUE: {
    table: {
      type: {
        summary: 'OptionValue | undefined'
      }
    }
  },
  OPTIONAL_OPTION_VALUE_KEY: {
    table: {
      type: {
        summary: 'keyof OptionValue | undefined'
      }
    },
    type: 'function' as 'function'
  },
  OPTIONAL_OPTION_VALUES: {
    table: {
      type: {
        summary: 'OptionValue[] | undefined'
      }
    }
  },
  OPTIONAL_SIZE: {
    control: 'radio',
    // eslint-disable-next-line object-shorthand
    mappings: { undefined: undefined },
    options: [...SIZE_AS_ARRAY, undefined],
    table: {
      type: {
        summary: 'Size | undefined'
      }
    }
  },
  OPTIONAL_STRING: {
    control: 'text',
    table: {
      type: {
        summary: 'string | undefined'
      }
    }
  },
  OPTIONAL_TAG_BULLET: {
    control: 'radio',
    // eslint-disable-next-line object-shorthand
    mappings: { undefined: undefined },
    options: [...TAG_BULLETS_AS_ARRAY, undefined],
    table: {
      type: {
        summary: 'TagBullet | undefined'
      }
    }
  },
  OPTIONAL_TYPE: {
    control: 'radio',
    options: ['button', 'submit', 'reset'],
    table: {
      type: {
        summary: "'button' | 'submit' | 'reset'"
      }
    }
  },
  REACT_NODE: {
    control: 'text',
    table: {
      type: {
        summary: 'ReactNode'
      }
    }
  }
}

export const META_DEFAULTS: Meta = {
  parameters: {
    controls: {
      sort: 'requiredFirst'
    }
  }
}
