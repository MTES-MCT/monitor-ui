import { useState } from 'react'
import styled from 'styled-components'

import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Toggle, useFieldControl, type ToggleProps } from '../../src'

import type { Meta } from '@storybook/react'

const args: ToggleProps = {
  isChecked: false,
  onChange: () => {},
  hasError: false
}

const meta: Meta<ToggleProps> = {
  title: 'Fields/Toggle',
  component: Toggle,

  argTypes: {
    hasError: {
      control: 'boolean'
    },
    isChecked: {
      control: 'boolean'
    },
    onChange: {
      action: 'onChange'
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export default meta

export function _Toggle(props: ToggleProps) {
  const [outputValue1, setOutputValue1] = useState<boolean>(false)
  const { controlledOnChange, controlledValue: controlledChecked } = useFieldControl(
    props.isChecked,
    setOutputValue1 as any
  )

  const [outputValue2, setOutputValue2] = useState<boolean>(false)

  return (
    <>
      <ToggleContainer>
        <div>
          <Toggle hasError={props.hasError} isChecked={!!controlledChecked} onChange={controlledOnChange} />
          <span>{`Le toggle est sur : ${outputValue1 ? 'ON' : 'OFF'}`}</span>
        </div>
        <div>
          <Toggle isChecked={false} onChange={() => {}} readOnly />
          <span>Le toggle est en mode readOnly</span>
        </div>

        <div>
          <Toggle disabled isChecked onChange={() => {}} />
          <span>Le toggle est en mode disabled</span>
        </div>

        <div>
          <Toggle hasError isChecked={outputValue2} onChange={setOutputValue2} />
          <span>Le toggle est en mode erreur</span>
        </div>
      </ToggleContainer>
    </>
  )
}

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  > div > span {
    margin-left: 16px;
  }
`
