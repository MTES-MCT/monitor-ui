import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { CustomSearch, Select, useFieldControl, type SelectProps } from '../../../src'
import { mountAndWait, outputShouldBe, outputShouldNotBe } from '../utils'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const OPTIONS_TYPES = {
  string: [
    { label: 'La Première Option', value: 'FIRST_OPTION' },
    { label: 'La Seconde Option', value: 'SECOND_OPTION' },
    { label: 'La Troisième Option', value: 'THIRD_OPTION' }
  ],
  number: [
    { label: 'La Première Option', value: 0 },
    { label: 'La Seconde Option', value: 1 },
    { label: 'La Troisième Option', value: 2 }
  ],
  object: [
    { label: 'La Première Option', value: { id: 0, name: 'Nom de la première option' } },
    { label: 'La Seconde Option', value: { id: 1, name: 'Nom de la seconde option' } },
    { label: 'La Troisième Option', value: { id: 2, name: 'Nom de la troisième option' } }
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

function SelectStory({ value, ...otherProps }: SelectProps) {
  const [outputValue, setOutputValue] = useState<any>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(value, setOutputValue)

  return (
    <StoryBox>
      <Select onChange={controlledOnChange} value={controlledValue} {...otherProps} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </StoryBox>
  )
}

describe('fields/Select', () => {
  Object.keys(OPTIONS_TYPES).forEach(optionType => {
    context(`With ${optionType} options`, () => {
      const options = OPTIONS_TYPES[optionType]
      const commonProps: SelectProps = {
        label: 'A select',
        name: 'mySelect',
        options,
        ...(optionType === 'object'
          ? {
              optionValueKey: 'name' as any
            }
          : {})
      }

      it('Should fill, change and clear the select', () => {
        mountAndWait(<SelectStory {...commonProps} />)

        outputShouldNotBe()

        cy.fill('A select', options[0].label)

        outputShouldBe(options[0].value)

        cy.fill('A select', options[1].label)

        outputShouldBe(options[1].value)

        cy.fill('A select', undefined)

        outputShouldBe(undefined)
      })

      it(`Should fill, change and clear the select with \`value={${JSON.stringify(options[2].value)}}\``, () => {
        mountAndWait(<SelectStory {...commonProps} value={options[2].value} />)

        outputShouldNotBe()

        cy.fill('A select', options[0].label)

        outputShouldBe(options[0].value)

        cy.fill('A select', options[1].label)

        outputShouldBe(options[1].value)

        cy.fill('A select', undefined)

        outputShouldBe(undefined)
      })

      it('Should fill the select with `isLabelHidden`', () => {
        mountAndWait(<SelectStory {...commonProps} isLabelHidden />)

        outputShouldNotBe()

        cy.fill('A select', options[0].label)

        outputShouldBe(options[0].value)
      })

      it('Should NOT call `onChange(undefined)` with `disabled`', () => {
        mountAndWait(<SelectStory {...commonProps} disabled />)

        outputShouldNotBe()
      })

      it(`Should NOT call \`onChange(undefined)\` with \`disabled value={${JSON.stringify(
        options[2].value
      )}}\``, () => {
        mountAndWait(<SelectStory {...commonProps} disabled value={options[2].value} />)

        outputShouldNotBe()
      })

      it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
        mountAndWait(<SelectStory {...commonProps} disabled isUndefinedWhenDisabled />)

        outputShouldBe(undefined)
      })

      it(`Should call \`onChange(undefined)\` with \`disabled isUndefinedWhenDisabled value={${JSON.stringify(
        options[2].value
      )}}\``, () => {
        mountAndWait(<SelectStory {...commonProps} disabled isUndefinedWhenDisabled value={options[2].value} />)

        outputShouldBe(undefined)
      })

      it('Should filter and select the expected options when using `customSearch`', () => {
        const customSearch = new CustomSearch(options, ['label'], { isStrict: true })

        mountAndWait(<SelectStory {...commonProps} customSearch={customSearch as any} />)

        outputShouldNotBe()

        // TODO Investigate why we need to wait here (expecting the popup to be visible doesn't fix the failing case).
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.get('.rs-stack > .rs-stack-item > .rs-picker-caret-icon').click().wait(100)
        cy.get('.rs-picker-popup').find('input[role="searchbox"]').type('la remie')
        cy.get('.rs-picker-popup').find('div[role="option"]').first().click()

        outputShouldBe(options[0].value)

        // Clear the Select
        cy.fill('A select', undefined)

        // TODO Investigate why we need to wait here (expecting the popup to be visible doesn't fix the failing case).
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.get('.rs-stack > .rs-stack-item > .rs-picker-caret-icon').click().wait(100)
        cy.get('.rs-picker-popup').find('input[role="searchbox"]').type('la option')
        cy.get('.rs-picker-popup').find('div[role="option"]').first().click()

        outputShouldBe(options[0].value)

        // Clear the Select
        cy.fill('A select', undefined)

        // TODO Investigate why we need to wait here (expecting the popup to be visible doesn't fix the failing case).
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.get('.rs-stack > .rs-stack-item > .rs-picker-caret-icon').click().wait(100)
        cy.get('.rs-picker-popup').find('input[role="searchbox"]').type('sêcôndÈ')
        cy.get('.rs-picker-popup').find('div[role="option"]').first().click()

        outputShouldBe(options[1].value)
      })

      it('Should fill, clear and get all list', () => {
        const customSearch = new CustomSearch(options, ['label'], { isStrict: true })
        mountAndWait(<SelectStory {...commonProps} customSearch={customSearch as any} />)

        outputShouldNotBe()

        // TODO Investigate why we need to wait here (expecting the popup to be visible doesn't fix the failing case).
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.get('.rs-stack > .rs-stack-item > .rs-picker-caret-icon').click().wait(100)
        cy.get('.rs-picker-popup').find('input[role="searchbox"]').type('sêc')
        cy.get('.rs-picker-popup').find('input[role="searchbox"]').type('{backspace}{backspace}{backspace}')

        cy.get('.rs-picker-popup').find('[role="option"]').should('have.length', 3)
      })
    })
  })
})
