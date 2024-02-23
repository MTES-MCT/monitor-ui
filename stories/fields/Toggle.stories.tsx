import { useState } from 'react'
import styled from 'styled-components'

import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Toggle, useFieldControl, type ToggleProps } from '../../src'

import type { Meta } from '@storybook/react'

const args: ToggleProps = {
  error: undefined,
  isChecked: false,
  isErrorMessageHidden: false,
  isLabelHidden: false,
  label: 'A toggle',
  name: 'toggle',
  onChange: () => {}
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<ToggleProps> = {
  title: 'Fields/Toggle',
  component: Toggle,

  argTypes: {
    error: {
      control: 'text'
    },
    isChecked: {
      control: 'boolean'
    },
    isErrorMessageHidden: {
      control: 'boolean'
    },
    onChange: {
      action: 'onChange'
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasLightMode: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Toggle(props: ToggleProps) {
  const [, setOutputValue1] = useState<boolean>(false)
  const { controlledOnChange, controlledValue: controlledChecked } = useFieldControl(
    props.isChecked,
    setOutputValue1 as any
  )

  const [outputValue2, setOutputValue2] = useState<boolean>(false)

  return (
    <>
      <ToggleContainer>
        <div>
          <Toggle {...props} error={props.error} isChecked={!!controlledChecked} onChange={controlledOnChange} />
          <span>{`Toggle is : ${controlledChecked ? 'ON' : 'OFF'}`}</span>
        </div>
        <div>
          <Toggle {...props} isChecked={false} label="Read only toggle" onChange={() => {}} readOnly />
        </div>

        <div>
          <Toggle {...props} disabled isChecked label="Disabled toggle" onChange={() => {}} />
        </div>

        <div>
          <Toggle {...props} error="Toggle with an error" isChecked={outputValue2} onChange={setOutputValue2} />
        </div>
      </ToggleContainer>
    </>
  )
}

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
