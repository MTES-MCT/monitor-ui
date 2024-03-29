import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { MultiRadio, useFieldControl, type MultiRadioProps } from '../../../src'
import { mountAndWait, outputShouldBe, outputShouldNotBe } from '../utils'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const OPTIONS_TYPES = {
  string: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' }
  ],
  number: [
    { label: 'First Option', value: 0 },
    { label: 'Second Option', value: 1 },
    { label: 'Third Option', value: 2 }
  ],
  boolean: [
    { label: 'True', value: false },
    { label: 'False', value: true }
  ],
  object: [
    { label: 'First Option', value: { id: 0, name: 'First Option Name' } },
    { label: 'Second Option', value: { id: 1, name: 'Second Option Name' } },
    { label: 'Third Option', value: { id: 2, name: 'Third Option Name' } }
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

function MultiRadioStory({ value, ...otherProps }: MultiRadioProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(value, setOutputValue)

  return (
    <>
      <MultiRadio {...otherProps} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}

describe('fields/MultiRadio', () => {
  Object.keys(OPTIONS_TYPES).forEach(optionType => {
    context(`With ${optionType} options`, () => {
      const options = OPTIONS_TYPES[optionType]
      const commonProps: MultiRadioProps = {
        label: 'A multiple radio',
        name: 'myMultiRadio',
        options,
        ...(optionType === 'object'
          ? {
              optionValueKey: 'name' as any
            }
          : {})
      }

      it('Should fill and change the multiple radio', () => {
        mountAndWait(
          <StoryBox>
            <MultiRadioStory {...commonProps} />
          </StoryBox>
        )

        outputShouldNotBe()

        cy.fill('A multiple radio', options[0].label)

        outputShouldBe(options[0].value)

        cy.fill('A multiple radio', options[1].label)

        outputShouldBe(options[1].value)
      })

      it('Should fill and change the multiple radio with `value`', () => {
        mountAndWait(
          <StoryBox>
            <MultiRadioStory {...commonProps} value={options[1].value} />
          </StoryBox>
        )

        outputShouldNotBe()

        cy.fill('A multiple radio', options[0].label)

        outputShouldBe(options[0].value)

        cy.fill('A multiple radio', options[1].label)

        outputShouldBe(options[1].value)
      })

      it('Should fill the multiple radio with `isLabelHidden`', () => {
        mountAndWait(
          <StoryBox>
            <MultiRadioStory {...commonProps} isLabelHidden />
          </StoryBox>
        )

        outputShouldNotBe()

        cy.fill('A multiple radio', options[0].label)

        outputShouldBe(options[0].value)
      })

      it('Should NOT call `onChange(undefined)` with `disabled`', () => {
        mountAndWait(
          <StoryBox>
            <MultiRadioStory {...commonProps} disabled />
          </StoryBox>
        )

        outputShouldNotBe()
      })

      it('Should NOT call `onChange(undefined)` with `disabled value`', () => {
        mountAndWait(
          <StoryBox>
            <MultiRadioStory {...commonProps} disabled value={options[1].value} />
          </StoryBox>
        )

        outputShouldNotBe()
      })

      it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
        mountAndWait(
          <StoryBox>
            <MultiRadioStory {...commonProps} disabled isUndefinedWhenDisabled />
          </StoryBox>
        )

        outputShouldBe(undefined)
      })

      it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled value`', () => {
        mountAndWait(
          <StoryBox>
            <MultiRadioStory {...commonProps} disabled isUndefinedWhenDisabled value={options[1].value} />
          </StoryBox>
        )

        outputShouldBe(undefined)
      })
    })
  })
})
