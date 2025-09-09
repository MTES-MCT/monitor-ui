// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import {
  FAKE_STRING_OPTIONS,
  FAKE_STRING_OPTIONS_AS_LABELS,
  FAKE_STRING_OPTIONS_AS_MAPPING
} from '../../__mocks__/fake_options'
import { Search, useFieldControl } from '../../src'

import type { SearchProps } from '../../src'
import type { Meta } from '@storybook/react-vite'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<SearchProps> = {
  ...META_DEFAULTS,

  title: 'Fields/Search',
  component: Search,

  argTypes: {
    disabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    error: ARG_TYPE.OPTIONAL_STRING,
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLabelHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    size: ARG_TYPE.OPTIONAL_SIZE,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isRequired: ARG_TYPE.OPTIONAL_BOOLEAN,
    isSearchIconHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    options: ARG_TYPE.NO_CONTROL_INPUT,
    placeholder: ARG_TYPE.OPTIONAL_STRING,
    popupWidth: ARG_TYPE.OPTIONAL_NUMBER,
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN,
    value: {
      ...ARG_TYPE.OPTIONAL_OPTION_VALUE,
      options: [...FAKE_STRING_OPTIONS_AS_LABELS, undefined],
      mapping: {
        ...FAKE_STRING_OPTIONS_AS_MAPPING,
        // eslint-disable-next-line object-shorthand
        undefined: undefined
      }
    }
  },

  args: {
    disabled: false,
    error: '',
    isErrorMessageHidden: false,
    isLabelHidden: false,
    isLight: false,
    isRequired: true,
    isTransparent: false,
    isSearchIconHidden: false,
    isUndefinedWhenDisabled: false,
    label: 'An autocomplete search input. Pick one option:',
    name: 'mySearch',
    options: FAKE_STRING_OPTIONS,
    placeholder: 'Type "first"',
    popupWidth: undefined,
    readOnly: false,
    size: undefined
  },

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true,
      withNewWindowButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Search(props: SearchProps) {
  const [outputValue, setOutputValue] = useState<any | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <Search {...props} MenuItem={undefined} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
