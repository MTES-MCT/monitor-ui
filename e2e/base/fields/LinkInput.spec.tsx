import { LinkInput, type LinkInputProps } from '@fields/LinkInput'
import noop from 'lodash/noop'
import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { useFieldControl } from '../../../src'
import { mountAndWait, outputShouldBe } from '../utils'

function LinkInputStory({ value, ...otherProps }: LinkInputProps) {
  const [outputValue, setOutputValue] = useState<string | number | undefined>(value)

  const { controlledOnChange, controlledValue } = useFieldControl(value, setOutputValue)

  return (
    <>
      <LinkInput {...otherProps} onChange={controlledOnChange} value={controlledValue} />

      <Output value={outputValue} />
    </>
  )
}

context('Story', () => {
  const commonProps: LinkInputProps = {
    label: 'A link input',
    name: 'link',
    onChange: noop,
    value: undefined
  }
  describe('Link', () => {
    it('Should prompt error if it exists`', () => {
      const error = 'Error!'
      mountAndWait(
        <StoryBox>
          <LinkInputStory {...commonProps} error={error} />
        </StoryBox>
      )

      cy.get('.Element-FieldError').contains(error)
    })
    it('should prefix the input with https://www.', () => {
      mountAndWait(
        <StoryBox>
          <LinkInputStory {...commonProps} />
        </StoryBox>
      )

      outputShouldBe(undefined)

      cy.fill(commonProps.label, 'google.com')

      outputShouldBe('https://www.google.com')

      cy.fill(commonProps.label, 'www.google.com')

      outputShouldBe('https://www.google.com')

      cy.fill(commonProps.label, 'https://www.google.com')

      outputShouldBe('https://www.google.com')

      cy.fill(commonProps.label, '')

      outputShouldBe(undefined)
    })

    it('Should have output with default value`', () => {
      mountAndWait(
        <StoryBox>
          <LinkInputStory {...commonProps} value="https://www.monitorenv.gouv.fr" />
        </StoryBox>
      )

      outputShouldBe('https://www.monitorenv.gouv.fr')
    })
  })
})
