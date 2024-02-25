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
      <TextInput {...otherProps} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}

context('Base', () => {
  const commonProps: TextInputProps = {
    label: 'A text input',
    name: 'myTextInput'
  }

  it('Should fill, change and clear the text input', () => {
    mountAndWait(
      <StoryBox>
        <TextInputStory {...commonProps} />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.fill('A text input', 'abcd')

    outputShouldBe('abcd')

    cy.fill('A text input', 'abcde')

    outputShouldBe('abcde')

    cy.fill('A text input', undefined)

    outputShouldBe(undefined)
  })

  it('Should fill, change and clear the text input with `value="abc"`', () => {
    mountAndWait(
      <StoryBox>
        <TextInputStory {...commonProps} value="abc" />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.fill('A text input', 'abcd')

    outputShouldBe('abcd')

    cy.fill('A text input', 'abcde')

    outputShouldBe('abcde')

    cy.fill('A text input', undefined)

    outputShouldBe(undefined)
  })

  it('Should fill the text input with `isLabelHidden`', () => {
    mountAndWait(
      <StoryBox>
        <TextInputStory {...commonProps} isLabelHidden />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.fill('A text input', 'abcd')

    outputShouldBe('abcd')
  })

  it('Should NOT call `onChange(undefined)` with `disabled`', () => {
    mountAndWait(
      <StoryBox>
        <TextInputStory {...commonProps} disabled />
      </StoryBox>
    )

    outputShouldNotBe()
  })

  it('Should NOT call `onChange(undefined)` with `disabled value="abc"`', () => {
    mountAndWait(
      <StoryBox>
        <TextInputStory {...commonProps} disabled value="abc" />
      </StoryBox>
    )

    outputShouldNotBe()
  })

  it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
    mountAndWait(
      <StoryBox>
        <TextInputStory {...commonProps} disabled isUndefinedWhenDisabled />
      </StoryBox>
    )

    outputShouldBe(undefined)
  })

  it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled value="abc"`', () => {
    mountAndWait(
      <StoryBox>
        <TextInputStory {...commonProps} disabled isUndefinedWhenDisabled value="abc" />
      </StoryBox>
    )

    outputShouldBe(undefined)
  })
})
