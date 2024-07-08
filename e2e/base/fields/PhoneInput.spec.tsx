import { noop } from 'lodash'
import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { PhoneInput, useFieldControl, type PhoneInputProps } from '../../../src'
import { mountAndWait, outputShouldBe } from '../utils'

function PhoneInputStory({ value, ...otherProps }: PhoneInputProps) {
  const [outputValue, setOutputValue] = useState<string | number | undefined>(value)

  const { controlledOnChange, controlledValue } = useFieldControl(value, setOutputValue)

  return (
    <>
      <PhoneInput {...otherProps} onChange={controlledOnChange} value={controlledValue} />

      <Output value={outputValue} />
    </>
  )
}

context('Story', () => {
  const commonProps: PhoneInputProps = {
    label: 'A phone input',
    name: 'phone',
    onChange: noop,
    value: undefined
  }
  describe('Phone number', () => {
    it('Should prompt error if it exists`', () => {
      const error = 'Error!'
      mountAndWait(
        <StoryBox>
          <PhoneInputStory {...commonProps} error={error} />
        </StoryBox>
      )

      cy.get('.Element-FieldError').contains(error)
    })
    describe('French format', () => {
      it('Should fill, change and clear the input', () => {
        mountAndWait(
          <StoryBox>
            <PhoneInputStory {...commonProps} />
          </StoryBox>
        )

        outputShouldBe(undefined)

        cy.fill(commonProps.label, '06 11 22 33 44')

        outputShouldBe('0611223344')

        cy.fill(commonProps.label, '01 11 22 33 44')

        outputShouldBe('0111223344')

        cy.fill(commonProps.label, '')

        outputShouldBe(undefined)
      })

      it('Should have output with default value`', () => {
        mountAndWait(
          <StoryBox>
            <PhoneInputStory {...commonProps} value="07 12 34 56 78" />
          </StoryBox>
        )

        outputShouldBe('0712345678')
      })
    })
    describe('international format', () => {
      it('Should fill, change and clear the input', () => {
        mountAndWait(
          <StoryBox>
            <PhoneInputStory {...commonProps} />
          </StoryBox>
        )

        outputShouldBe(undefined)

        cy.fill(commonProps.label, '00 594 222 333 444')

        outputShouldBe('00594222333444')

        cy.fill(commonProps.label, '')

        outputShouldBe(undefined)
      })

      it('Should have output with default value`', () => {
        mountAndWait(
          <StoryBox>
            <PhoneInputStory {...commonProps} value="00 594 222 333 444" />
          </StoryBox>
        )

        outputShouldBe('00594222333444')
      })
    })
    describe('other format', () => {
      it('Should fill, change and clear the input', () => {
        mountAndWait(
          <StoryBox>
            <PhoneInputStory {...commonProps} />
          </StoryBox>
        )

        outputShouldBe(undefined)

        cy.fill(commonProps.label, '8317920035')

        outputShouldBe('8317920035')

        cy.fill(commonProps.label, '')

        outputShouldBe(undefined)
      })

      it('Should be editable to a international number', () => {
        mountAndWait(
          <StoryBox>
            <PhoneInputStory {...commonProps} />
          </StoryBox>
        )

        outputShouldBe(undefined)

        cy.fill(commonProps.label, '8317920035')

        cy.get(`#${commonProps.name}`).type('{moveToStart}').type('00')

        outputShouldBe('008317920035')
      })

      it('Should be editable to a french number', () => {
        mountAndWait(
          <StoryBox>
            <PhoneInputStory {...commonProps} />
          </StoryBox>
        )

        outputShouldBe(undefined)

        cy.fill(commonProps.label, '8317920035')

        cy.get(`#${commonProps.name}`).type('{moveToStart}').type('0')

        outputShouldBe('08317920035')
      })

      it('Should have output with default value`', () => {
        mountAndWait(
          <StoryBox>
            <PhoneInputStory {...commonProps} value="+3361234567890" />
          </StoryBox>
        )

        outputShouldBe('+3361234567890')
      })
    })
  })
})
