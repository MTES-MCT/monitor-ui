import { useState, type FunctionComponent } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { Icon as MonitorUiIcon, MultiRadio, useFieldControl } from '../../src'

import type { IconProps, MultiRadioProps, Option } from '../../src'
import type { Meta } from '@storybook/react'

const args: MultiRadioProps = {
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isInline: false,
  isLabelHidden: false,
  isLight: false,
  isUndefinedWhenDisabled: false,
  label: 'Pick an option',
  name: 'myMultiRadio',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { isDisabled: true, label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
  ],
  readOnly: false,
  value: undefined
}

type InterestPointOptionValueType = {
  Icon: FunctionComponent<IconProps>
  value: string
}

const OPTIONS_WITH_ICONS: Array<Option<InterestPointOptionValueType>> = [
  {
    label: 'Moyen de contrôle',
    value: {
      Icon: MonitorUiIcon.ControlUnit,
      value: 'CONTROL_ENTITY'
    }
  },
  {
    label: 'Navire de pêche',
    value: {
      Icon: MonitorUiIcon.FleetSegment,
      value: 'FISHING_VESSEL'
    }
  },
  {
    label: 'Autre point',
    value: {
      Icon: MonitorUiIcon.Info,
      value: 'OTHER'
    }
  }
]

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<MultiRadioProps> = {
  ...META_DEFAULTS,

  title: 'Fields/MultiRadio',
  component: MultiRadio,

  argTypes: {
    className: ARG_TYPE.NO_CONTROL,
    disabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    error: ARG_TYPE.OPTIONAL_STRING,
    isErrorMessageHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isInline: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLabelHidden: ARG_TYPE.OPTIONAL_BOOLEAN,
    isLight: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    optionValueKey: ARG_TYPE.OPTIONAL_OPTION_VALUE_KEY,
    options: ARG_TYPE.NO_CONTROL_INPUT,
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN,
    style: ARG_TYPE.NO_CONTROL,
    value: {
      ...ARG_TYPE.OPTIONAL_OPTION_VALUE,
      options: ['FIRST_OPTION', 'SECOND_OPTION', 'THIRD_OPTION', 'A_VERY_VERY_LONG_OPTION']
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _MultiRadio(props: MultiRadioProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  const [outputValueWithIcon, setOutputValueWithIcons] = useState<InterestPointOptionValueType | undefined>(
    OPTIONS_WITH_ICONS[2]?.value
  )

  return (
    <>
      <div style={{ marginBottom: '32px' }}>
        <MultiRadio {...props} onChange={controlledOnChange} value={controlledValue} />

        {outputValue !== '∅' && <Output value={outputValue} />}
      </div>

      <MultiRadio
        label="Multiradio in readOnly mode"
        name="myMultiRadioReadOnly"
        onChange={controlledOnChange}
        options={props.options}
        readOnly
        value="FIRST_OPTION"
      />

      <div style={{ marginTop: '32px' }}>
        <MultiRadio
          label="Multiradio with icons"
          name="myMultiRadioWithIcons"
          onChange={nextOptionValue => setOutputValueWithIcons(nextOptionValue)}
          options={OPTIONS_WITH_ICONS}
          optionValueKey="value"
          renderMenuItem={(label, value) => (
            <>
              <value.Icon />
              {label}
            </>
          )}
          value={outputValueWithIcon}
        />
      </div>
    </>
  )
}
