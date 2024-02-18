import { useState } from 'react'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { Output } from '../../../.storybook/components/Output'
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
      <GlobalDecoratorWrapper>
        <TextInputStory {...commonProps} />
      </GlobalDecoratorWrapper>
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
      <GlobalDecoratorWrapper>
        <TextInputStory {...commonProps} value="abc" />
      </GlobalDecoratorWrapper>
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
      <GlobalDecoratorWrapper>
        <TextInputStory {...commonProps} isLabelHidden />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()

    cy.fill('A text input', 'abcd')

    outputShouldBe('abcd')
  })

  it('Should NOT call `onChange(undefined)` with `disabled`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <TextInputStory {...commonProps} disabled />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()
  })

  it('Should NOT call `onChange(undefined)` with `disabled value="abc"`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <TextInputStory {...commonProps} disabled value="abc" />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()
  })

  it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <TextInputStory {...commonProps} disabled isUndefinedWhenDisabled />
      </GlobalDecoratorWrapper>
    )

    outputShouldBe(undefined)
  })

  it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled value="abc"`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <TextInputStory {...commonProps} disabled isUndefinedWhenDisabled value="abc" />
      </GlobalDecoratorWrapper>
    )

    outputShouldBe(undefined)
  })
})
