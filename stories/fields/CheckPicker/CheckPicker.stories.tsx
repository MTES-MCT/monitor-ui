import { useState } from 'react'
import styled from 'styled-components'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import { LOREM_IPSUM } from '../../../.storybook/constants'
import { CheckPicker, useFieldControl, type CheckPickerProps } from '../../../src'

import type { Meta } from '@storybook/react'

const args: CheckPickerProps<{}> = {
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  label: 'A check picker',
  name: 'myCheckPicker',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: LOREM_IPSUM, value: 'LOREM_IPSUM' }
  ],
  placeholder: 'Pick some options',
  searchable: true,
  value: [],
  virtualized: false
}

const meta: Meta<CheckPickerProps<{}>> = {
  title: 'Fields/CheckPicker',
  component: CheckPicker as any,

  argTypes: {
    value: {
      control: 'inline-check',
      options: ['FIRST_OPTION', 'SECOND_OPTION', 'THIRD_OPTION', 'LOREM_IPSUM']
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true,
      withNewWindowButton: true
    })
  ]
}

export default meta

export function _CheckPicker(props: CheckPickerProps<string>) {
  const [outputValue, setOutputValue] = useState<string[] | undefined | '∅'>('∅')
  const [outputValue2, setOutputValue2] = useState<string[]>()
  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <Container>
        <CheckPicker {...props} onChange={controlledOnChange} style={{ width: '300px' }} value={controlledValue} />
        <CheckPicker
          {...props}
          label="A second check picker with custom renderValue"
          name="myCheckPicker2"
          onChange={setOutputValue2}
          renderValue={value => <div>{`Items (${value.length})`}</div>}
          style={{ width: '300px' }}
          value={outputValue2}
        />
      </Container>
      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`
