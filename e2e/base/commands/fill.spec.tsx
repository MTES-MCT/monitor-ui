import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { useFieldControl, type TextInputProps, TextInput } from '../../../src'
import { mountAndWait, outputShouldBe, outputShouldNotBe } from '../utils'

function TextInputStory({ value, ...otherProps }: TextInputProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(value, setOutputValue)

  return (
    <>
      <TextInput {...otherProps} value={controlledValue} />
      <TextInput {...otherProps} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}

context('Fill', () => {
  const commonProps: TextInputProps = {
    label: 'A text input',
    name: 'myTextInput'
  }

  it('Should fill the second input', () => {
    mountAndWait(
      <StoryBox>
        <TextInputStory {...commonProps} />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.fill('A text input', 'abcd', { index: 1 })

    outputShouldBe('abcd')
  })
})
