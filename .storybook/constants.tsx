import { fromPairs } from 'lodash'

import { getArrayFromEnum } from './utils/getArrayFromEnum'
import { Accent, Icon, Level, Size, TagBullet } from '../src'

import type { Meta } from '@storybook/react'

export const ACCENTS_AS_ARRAY = getArrayFromEnum(Accent)
export const ICONS_AS_ARRAY = Object.keys(Icon)
export const ICONS_AS_LABELS = fromPairs(ICONS_AS_ARRAY.map(key => [key, `Icon.${key}`]))
export const ICONS_AS_MAPPING = fromPairs(ICONS_AS_ARRAY.map(key => [key, Icon[key]]))
export const LEVELS_AS_ARRAY = getArrayFromEnum(Level)
export const SIZES_AS_ARRAY = getArrayFromEnum(Size)
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
  BOOLEAN: {
    control: 'boolean',
    table: {
      type: {
        summary: 'boolean'
      }
    }
  },
  ICON: {
    control: {
      labels: ICONS_AS_LABELS,
      type: 'select'
    },
    mapping: ICONS_AS_MAPPING,
    options: [...ICONS_AS_ARRAY, undefined],
    table: {
      type: {
        summary: 'Icon'
      }
    }
  },
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
  OPTIONAL_BASE_CONTAINER: {
    table: {
      type: {
        summary: 'Document | HTMLDivElement | null | undefined'
      }
    },
    type: 'function' as 'function'
  },
  OPTIONAL_BOOLEAN: {
    control: 'boolean',
    table: {
      type: {
        summary: 'boolean | undefined'
      }
    }
  },
  OPTIONAL_BUTTON_TYPE: {
    control: 'radio',
    options: ['button', 'submit', 'reset'],
    table: {
      type: {
        summary: "'button' | 'submit' | 'reset'"
      }
    }
  },
  OPTIONAL_COLOR: {
    control: 'color',
    table: {
      type: {
        summary: 'string | undefined'
      }
    }
  },
  OPTIONAL_ICON: {
    control: {
      labels: ICONS_AS_LABELS,
      type: 'select'
    },
    mapping: {
      ...ICONS_AS_MAPPING,
      // eslint-disable-next-line object-shorthand
      undefined: undefined
    },
    options: [...ICONS_AS_ARRAY, undefined],
    table: {
      type: {
        summary: 'Icon | undefined'
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
  OPTIONAL_NUMBER: {
    control: 'number',
    table: {
      type: {
        summary: 'number | undefined'
      }
    }
  },
  OPTIONAL_NUMBER_NO_CONTROL_INPUT: {
    table: {
      type: {
        summary: 'number | undefined'
      }
    },
    type: 'function' as 'function'
  },
  OPTIONAL_OPTION_VALUE: {
    control: 'radio',
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
    options: [...SIZES_AS_ARRAY, undefined],
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
