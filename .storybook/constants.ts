import { getArrayFromEnum } from './utils/getArrayFromEnum'
import { Accent, Size, TagBullet } from '../src'

import type { Meta } from '@storybook/react'

export const ACCENTS_AS_ARRAY = getArrayFromEnum(Accent)
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
  OPTIONAL_BOOLEAN: {
    control: 'boolean',
    table: {
      type: {
        summary: 'boolean | undefined'
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
  OPTIONAL_STRING: {
    control: 'text',
    table: {
      type: {
        summary: 'string | undefined'
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
