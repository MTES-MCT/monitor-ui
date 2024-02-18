import { useState } from 'react'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { Output } from '../../../.storybook/components/Output'
import { useFieldControl, type NumberInputProps, NumberInput } from '../../../src'
import { mountAndWait, outputShouldBe, outputShouldNotBe } from '../utils'

function NumberInputStory({ value, ...otherProps }: NumberInputProps) {
  const [outputValue, setOutputValue] = useState<number | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(value, setOutputValue)

  return (
    <>
      <NumberInput {...otherProps} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}

context('Story', () => {
  const commonProps: NumberInputProps = {
    label: 'A number input',
    name: 'myNumberInput'
  }

  it('Should fill, change and clear the number input', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <NumberInputStory {...commonProps} />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()

    cy.fill('A number input', 1234)

    outputShouldBe(1234)

    cy.fill('A number input', 12345)

    outputShouldBe(12345)

    cy.fill('A number input', undefined)

    outputShouldBe(undefined)
  })

  it('Should fill, change and clear the number input with `value={123}`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <NumberInputStory {...commonProps} value={123} />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()

    cy.fill('A number input', 1234)

    outputShouldBe(1234)

    cy.fill('A number input', 12345)

    outputShouldBe(12345)

    cy.fill('A number input', undefined)

    outputShouldBe(undefined)
  })

  it('Should fill the number input with `isLabelHidden`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <NumberInputStory {...commonProps} isLabelHidden />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()

    cy.fill('A number input', 1234)

    outputShouldBe(1234)
  })

  it('Should NOT call `onChange(undefined)` with `disabled`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <NumberInputStory {...commonProps} disabled />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()
  })

  it('Should NOT call `onChange(undefined)` with `disabled value={123}`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <NumberInputStory {...commonProps} disabled value={123} />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()
  })

  it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <NumberInputStory {...commonProps} disabled isUndefinedWhenDisabled />
      </GlobalDecoratorWrapper>
    )

    outputShouldBe(undefined)
  })

  it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled value={123}`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <NumberInputStory {...commonProps} disabled isUndefinedWhenDisabled value={123} />
      </GlobalDecoratorWrapper>
    )

    outputShouldBe(undefined)
  })
})
