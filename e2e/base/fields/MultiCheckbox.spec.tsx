import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { useFieldControl, type MultiCheckboxProps, MultiCheckbox } from '../../../src'
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
  object: [
    { label: 'First Option', value: { id: 0, name: 'First Option Name' } },
    { label: 'Second Option', value: { id: 1, name: 'Second Option Name' } },
    { label: 'Third Option', value: { id: 2, name: 'Third Option Name' } }
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

function MultiCheckboxStory({ value, ...otherProps }: MultiCheckboxProps) {
  const [outputValue, setOutputValue] = useState<any>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(value, setOutputValue)

  return (
    <StoryBox>
      <MultiCheckbox {...otherProps} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </StoryBox>
  )
}

describe('fields/MultiCheckbox', () => {
  Object.keys(OPTIONS_TYPES).forEach(optionType => {
    context(`With ${optionType} options`, () => {
      const options = OPTIONS_TYPES[optionType]
      const commonProps: MultiCheckboxProps = {
        label: 'A multiple checkbox',
        name: 'myMultiCheckbox',
        options,
        ...(optionType === 'object'
          ? {
              optionValueKey: 'name' as any
            }
          : {})
      }

      it('Should fill, change and clear the multiple checkbox', () => {
        mountAndWait(<MultiCheckboxStory {...commonProps} />)

        outputShouldNotBe()

        cy.fill('A multiple checkbox', [options[0].label])

        outputShouldBe([options[0].value])

        cy.fill('A multiple checkbox', [options[1].label, options[2].label])

        outputShouldBe([options[1].value, options[2].value])

        cy.fill('A multiple checkbox', undefined)

        outputShouldBe(undefined)
      })

      it('Should fill, change and clear the multiple checkbox with `value`', () => {
        mountAndWait(<MultiCheckboxStory {...commonProps} value={[options[2].value]} />)

        outputShouldNotBe()

        cy.fill('A multiple checkbox', [options[0].label])

        outputShouldBe([options[0].value])

        cy.fill('A multiple checkbox', [options[1].label, options[2].label])

        outputShouldBe([options[1].value, options[2].value])

        cy.fill('A multiple checkbox', undefined)

        outputShouldBe(undefined)
      })

      it('Should fill the multiple checkbox with `isLabelHidden`', () => {
        mountAndWait(<MultiCheckboxStory {...commonProps} isLabelHidden />)

        outputShouldNotBe()

        cy.fill('A multiple checkbox', [options[0].label])

        outputShouldBe([options[0].value])
      })

      it('Should NOT call `onChange(undefined)` with `disabled`', () => {
        mountAndWait(<MultiCheckboxStory {...commonProps} disabled />)

        outputShouldNotBe()
      })

      it('Should NOT call `onChange(undefined)` with `disabled value`', () => {
        mountAndWait(<MultiCheckboxStory {...commonProps} disabled value={[options[2].value]} />)

        outputShouldNotBe()
      })

      it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
        mountAndWait(<MultiCheckboxStory {...commonProps} disabled isUndefinedWhenDisabled />)

        outputShouldBe(undefined)
      })

      it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled value`', () => {
        mountAndWait(
          <MultiCheckboxStory {...commonProps} disabled isUndefinedWhenDisabled value={[options[2].value]} />
        )

        outputShouldBe(undefined)
      })
    })
  })
})
