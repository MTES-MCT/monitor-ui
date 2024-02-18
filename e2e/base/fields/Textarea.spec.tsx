import { useState } from 'react'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { Output } from '../../../.storybook/components/Output'
import { useFieldControl, type TextareaProps, Textarea } from '../../../src'
import { mountAndWait, outputShouldBe, outputShouldNotBe } from '../utils'

function TextareaStory({ value, ...otherProps }: TextareaProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(value, setOutputValue)

  return (
    <>
      <Textarea {...otherProps} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}

context('Base', () => {
  const commonProps: TextareaProps = {
    label: 'A textarea',
    name: 'myTextarea'
  }

  it('Should fill, change and clear the textarea', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <TextareaStory {...commonProps} />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()

    cy.fill('A textarea', 'abcd')

    outputShouldBe('abcd')

    cy.fill('A textarea', 'abcde')

    outputShouldBe('abcde')

    cy.fill('A textarea', undefined)

    outputShouldBe(undefined)
  })

  it('Should fill, change and clear the textarea with `value="abc"`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <TextareaStory {...commonProps} value="abc" />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()

    cy.fill('A textarea', 'abcd')

    outputShouldBe('abcd')

    cy.fill('A textarea', 'abcde')

    outputShouldBe('abcde')

    cy.fill('A textarea', undefined)

    outputShouldBe(undefined)
  })

  it('Should fill the textarea with `isLabelHidden`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <TextareaStory {...commonProps} isLabelHidden />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()

    cy.fill('A textarea', 'abcd')

    outputShouldBe('abcd')
  })

  it('Should NOT call `onChange(undefined)` with `disabled`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <TextareaStory {...commonProps} disabled />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()
  })

  it('Should NOT call `onChange(undefined)` with `disabled value="abc"`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <TextareaStory {...commonProps} disabled value="abc" />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()
  })

  it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <TextareaStory {...commonProps} disabled isUndefinedWhenDisabled />
      </GlobalDecoratorWrapper>
    )

    outputShouldBe(undefined)
  })

  it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled value="abc"`', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <TextareaStory {...commonProps} disabled isUndefinedWhenDisabled value="abc" />
      </GlobalDecoratorWrapper>
    )

    outputShouldBe(undefined)
  })
})
