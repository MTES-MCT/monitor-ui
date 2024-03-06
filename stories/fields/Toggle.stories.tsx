import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Toggle, useFieldControl, type ToggleProps } from '../../src'

import type { Meta } from '@storybook/react'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<ToggleProps> = {
  ...META_DEFAULTS,

  title: 'Fields/Toggle',
  component: Toggle,

  argTypes: {
    checked: ARG_TYPE.OPTIONAL_BOOLEAN,
    disabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    error: ARG_TYPE.OPTIONAL_STRING,
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLabelHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isRequired: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN
  },

  args: {
    checked: false,
    disabled: false,
    error: '',
    isErrorMessageHidden: false,
    isLabelHidden: false,
    isLight: false,
    isRequired: true,
    isTransparent: false,
    isUndefinedWhenDisabled: false,
    label: 'A toggle',
    name: 'myToggle',
    readOnly: false
  },

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true,
      withPseudoStateButtons: { targetSelector: '.rs-toggle-presentation' }
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Toggle(props: ToggleProps) {
  const [outputValue, setOutputValue] = useState<boolean | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue: controlledChecked } = useFieldControl(props.checked, setOutputValue)

  return (
    <>
      <Toggle {...props} checked={!!controlledChecked} error={props.error} onChange={controlledOnChange} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
