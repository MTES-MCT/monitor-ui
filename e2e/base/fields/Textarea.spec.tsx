import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
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
      <StoryBox>
        <TextareaStory {...commonProps} />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.fill('A textarea', 'abcd')

    outputShouldBe('abcd')

    cy.fill('A textarea', 'abcde{enter}abc')

    outputShouldBe('abcde\nabc')

    cy.fill('A textarea', undefined)

    outputShouldBe(undefined)
  })

  it('Should fill, change and clear the textarea with `value="abc"`', () => {
    mountAndWait(
      <StoryBox>
        <TextareaStory {...commonProps} value="abc" />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.fill('A textarea', 'abcd')

    outputShouldBe('abcd')

    cy.fill('A textarea', 'abcde')

    outputShouldBe('abcde')

    cy.fill('A textarea', undefined)

    outputShouldBe(undefined)
  })

  it('Should fill the textarea with `value="abc\ndef"`', () => {
    mountAndWait(
      <StoryBox>
        <TextareaStory {...commonProps} value="abc\ndef" />
      </StoryBox>
    )

    cy.get('textarea').should('have.value', 'abc\ndef')
  })

  it('Should fill the textarea with `isLabelHidden`', () => {
    mountAndWait(
      <StoryBox>
        <TextareaStory {...commonProps} isLabelHidden />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.fill('A textarea', 'abcd')

    outputShouldBe('abcd')
  })

  it('Should NOT call `onChange(undefined)` with `disabled`', () => {
    mountAndWait(
      <StoryBox>
        <TextareaStory {...commonProps} disabled />
      </StoryBox>
    )

    outputShouldNotBe()
  })

  it('Should NOT call `onChange(undefined)` with `disabled value="abc"`', () => {
    mountAndWait(
      <StoryBox>
        <TextareaStory {...commonProps} disabled value="abc" />
      </StoryBox>
    )

    outputShouldNotBe()
  })

  it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
    mountAndWait(
      <StoryBox>
        <TextareaStory {...commonProps} disabled isUndefinedWhenDisabled />
      </StoryBox>
    )

    outputShouldBe(undefined)
  })

  it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled value="abc"`', () => {
    mountAndWait(
      <StoryBox>
        <TextareaStory {...commonProps} disabled isUndefinedWhenDisabled value="abc" />
      </StoryBox>
    )

    outputShouldBe(undefined)
  })
})
