// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Checkbox, useFieldControl } from '../../src'

import type { CheckboxProps } from '../../src'
import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<CheckboxProps> = {
  ...META_DEFAULTS,

  title: 'Fields/Checkbox',
  component: Checkbox,

  argTypes: {
    checked: ARG_TYPE.OPTIONAL_BOOLEAN,
    className: ARG_TYPE.NO_CONTROL,
    disabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    error: ARG_TYPE.OPTIONAL_STRING,
    hasError: ARG_TYPE.NO_CONTROL,
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN,
    style: ARG_TYPE.NO_CONTROL
  },

  args: {
    checked: false,
    disabled: false,
    error: '',
    isErrorMessageHidden: false,
    isLight: false,
    isTransparent: false,
    isUndefinedWhenDisabled: false,
    label: 'A checkbox. Check me!',
    name: 'myCheckbox',
    readOnly: false
  },

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true,
      withPseudoStateButtons: { targetSelector: '.rs-checkbox-checker' }
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Checkbox(props: CheckboxProps) {
  const [outputValue, setOutputValue] = useState<boolean | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue: controlledChecked } = useFieldControl(props.checked, setOutputValue)

  return (
    <>
      <Checkbox {...props} checked={controlledChecked} onChange={controlledOnChange} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
