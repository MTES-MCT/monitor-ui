import { useState, type FunctionComponent } from 'react'

import { Output } from '../../.storybook/components/Output'
import { ARG_TYPE, META_DEFAULTS } from '../../.storybook/constants'
import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import {
  FAKE_STRING_OPTIONS,
  FAKE_STRING_OPTIONS_AS_LABELS,
  FAKE_STRING_OPTIONS_AS_MAPPING
} from '../../__mocks__/fake_options'
import { Icon as MonitorUiIcon, MultiRadio, useFieldControl } from '../../src'

import type { IconProps, MultiRadioProps, Option } from '../../src'
import type { Meta } from '@storybook/react'

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

const OPTIONS_WITH_BOOLEANS: Array<Option<boolean>> = [
  {
    label: 'Option OK',
    value: true
  },
  {
    label: 'Option NOK',
    value: false
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
    isRequired: ARG_TYPE.OPTIONAL_BOOLEAN,
    isTransparent: ARG_TYPE.OPTIONAL_BOOLEAN,
    isUndefinedWhenDisabled: ARG_TYPE.OPTIONAL_BOOLEAN,
    optionValueKey: ARG_TYPE.OPTIONAL_OPTION_VALUE_KEY,
    options: ARG_TYPE.NO_CONTROL_INPUT,
    readOnly: ARG_TYPE.OPTIONAL_BOOLEAN,
    style: ARG_TYPE.NO_CONTROL,
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
    isInline: false,
    isLabelHidden: false,
    isLight: false,
    isRequired: true,
    isTransparent: false,
    isUndefinedWhenDisabled: false,
    label: 'A multiple radio. Pick one option:',
    name: 'myMultiRadio',
    options: FAKE_STRING_OPTIONS,
    readOnly: false,
    value: undefined
  },

  decorators: [
    generateStoryDecorator({
      box: { width: 640 },
      withBackgroundButton: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _MultiRadio(props: MultiRadioProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')
  const [outputValueWithBoolean, setOutputValueWithBoolean] = useState<boolean | undefined>(undefined)

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

      <div style={{ marginTop: '32px' }}>
        <MultiRadio
          {...props}
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

        {outputValueWithIcon !== undefined && <Output value={outputValueWithIcon} />}
      </div>

      <div style={{ marginTop: '32px' }}>
        <MultiRadio
          label="Multiradio with boolean"
          name="myMultiRadioWithBooleans"
          onChange={nextOptionValue => setOutputValueWithBoolean(nextOptionValue)}
          options={OPTIONS_WITH_BOOLEANS}
          value={outputValueWithBoolean}
        />

        {outputValueWithBoolean !== undefined && <Output value={outputValueWithBoolean} />}
      </div>
    </>
  )
}
