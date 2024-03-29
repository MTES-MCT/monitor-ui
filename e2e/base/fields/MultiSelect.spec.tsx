import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { CustomSearch, useFieldControl, type MultiSelectProps, MultiSelect } from '../../../src'
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

function MultiSelectStory({ value, ...otherProps }: MultiSelectProps) {
  const [outputValue, setOutputValue] = useState<any>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(value, setOutputValue)

  return (
    <StoryBox>
      <MultiSelect onChange={controlledOnChange} value={controlledValue} {...otherProps} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </StoryBox>
  )
}

describe('fields/MultiSelect', () => {
  Object.keys(OPTIONS_TYPES).forEach(optionType => {
    context(`With ${optionType} options`, () => {
      const options = OPTIONS_TYPES[optionType]
      const commonProps: MultiSelectProps = {
        label: 'A multiple select',
        name: 'myMultiSelect',
        options,
        ...(optionType === 'object'
          ? {
              optionValueKey: 'name' as any
            }
          : {})
      }

      it('Should fill, change and clear the multiple select', () => {
        mountAndWait(
          <StoryBox>
            <MultiSelectStory {...commonProps} />
          </StoryBox>
        )

        outputShouldNotBe()

        cy.fill('A multiple select', [options[0].label])

        outputShouldBe([options[0].value])

        cy.fill('A multiple select', [options[1].label, options[2].label])

        outputShouldBe([options[1].value, options[2].value])

        cy.fill('A multiple select', undefined)

        outputShouldBe(undefined)
      })

      it('Should fill, change and clear the multiple select with `value`', () => {
        mountAndWait(
          <StoryBox>
            <MultiSelectStory {...commonProps} value={[options[2].value]} />
          </StoryBox>
        )

        outputShouldNotBe()

        cy.fill('A multiple select', [options[0].label])

        outputShouldBe([options[0].value])

        cy.fill('A multiple select', [options[1].label, options[2].label])

        outputShouldBe([options[1].value, options[2].value])

        cy.fill('A multiple select', undefined)

        outputShouldBe(undefined)
      })

      it('Should fill the multiple select with `isLabelHidden`', () => {
        mountAndWait(
          <StoryBox>
            <MultiSelectStory {...commonProps} isLabelHidden />
          </StoryBox>
        )

        outputShouldNotBe()

        cy.fill('A multiple select', [options[0].label])

        outputShouldBe([options[0].value])
      })

      it('Should fill the multiple picker with `searcheable`', () => {
        mountAndWait(
          <StoryBox>
            <MultiSelectStory {...commonProps} searchable />
          </StoryBox>
        )

        outputShouldNotBe()

        cy.fill('A multiple select', [options[0].label])

        outputShouldBe([options[0].value])

        cy.fill('A multiple select', [options[1].label, options[2].label])

        outputShouldBe([options[1].value, options[2].value])
      })

      it('Should NOT call `onChange(undefined)` with `disabled`', () => {
        mountAndWait(
          <StoryBox>
            <MultiSelectStory {...commonProps} disabled />
          </StoryBox>
        )

        outputShouldNotBe()
      })

      it('Should NOT call `onChange(undefined)` with `disabled value`', () => {
        mountAndWait(
          <StoryBox>
            <MultiSelectStory {...commonProps} disabled value={[options[2].value]} />
          </StoryBox>
        )

        outputShouldNotBe()
      })

      it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
        mountAndWait(
          <StoryBox>
            <MultiSelectStory {...commonProps} disabled isUndefinedWhenDisabled />
          </StoryBox>
        )

        outputShouldBe(undefined)
      })

      it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled value`', () => {
        mountAndWait(
          <StoryBox>
            <MultiSelectStory {...commonProps} disabled isUndefinedWhenDisabled value={[options[2].value]} />
          </StoryBox>
        )

        outputShouldBe(undefined)
      })

      it('Should filter and select the expected options when using `customSearch`', () => {
        const customSearch = new CustomSearch(options, ['label'], { isStrict: true })

        mountAndWait(
          <StoryBox>
            <MultiSelectStory {...commonProps} customSearch={customSearch as any} />
          </StoryBox>
        )

        outputShouldNotBe()

        cy.get('.rs-stack > .rs-stack-item > .rs-picker-caret-icon').click()
        cy.get('.rs-picker-search-input').find('input').type('la remie')
        cy.get('.rs-picker-popup').find('[role="option"]').first().click()
        cy.clickOutside()

        outputShouldBe([options[0].value])

        // Clear the MultiSelect
        cy.fill('A multiple select', undefined)

        cy.get('.rs-stack > .rs-stack-item > .rs-picker-caret-icon').click()
        cy.get('.rs-picker-search-input').find('input').type('la option')
        cy.get('.rs-picker-popup').find('[role="option"]').first().click()
        cy.clickOutside()

        outputShouldBe([options[0].value])

        // Clear the MultiSelect
        cy.fill('A multiple select', undefined)

        cy.get('.rs-stack > .rs-stack-item > .rs-picker-caret-icon').click()
        cy.get('.rs-picker-search-input').find('input').type('sêcôndÈ')
        cy.get('.rs-picker-popup').find('[role="option"]').first().click()
        cy.clickOutside()

        outputShouldBe([options[1].value])
      })

      it('Should fill, clear and get all list', () => {
        const customSearch = new CustomSearch(options, ['label'], { isStrict: true })
        mountAndWait(
          <StoryBox>
            <MultiSelectStory {...commonProps} customSearch={customSearch as any} />
          </StoryBox>
        )

        outputShouldNotBe()

        cy.get('.rs-stack > .rs-stack-item > .rs-picker-caret-icon').click()
        cy.get('.rs-picker-search-input').find('input').type('sêc')
        cy.get('.rs-picker-search-input').find('input').type('{backspace}{backspace}{backspace}')

        cy.get('.rs-picker-popup').find('[role="option"]').should('have.length', 3)
      })
    })
  })

  context('With `searchable` in a long list', () => {
    const options = [
      { label: 'La Première Option', value: 'FIRST_OPTION' },
      { label: 'La Seconde Option', value: 'SECOND_OPTION' },
      { label: 'La Troisième Option', value: 'THIRD_OPTION' },
      { label: 'La Quatrième Option', value: 'FOURTH_OPTION' },
      { label: 'La Cinquième Option', value: 'FIFTH_OPTION' },
      { label: 'La Sixième Option', value: 'SIXTH_OPTION' },
      { label: 'La Septième Option', value: 'SEVENTH_OPTION' },
      { label: 'La Huitième Option', value: 'EIGHTH_OPTION' },
      { label: 'La Neuvième Option', value: 'NINTH_OPTION' },
      { label: 'La Dixième Option', value: 'TENTH_OPTION' },
      { label: 'La Onzième Option', value: 'ELEVENTH_OPTION' },
      { label: 'La Douzième Option', value: 'TWELFTH_OPTION' },
      { label: 'La Treizième Option', value: 'THIRTEENTH_OPTION' },
      { label: 'La Quatorzième Option', value: 'FOURTEENTH_OPTION' },
      { label: 'La Quinzième Option', value: 'FIFTEENTH_OPTION' },
      { label: 'La Seizième Option', value: 'SIXTEENTH_OPTION' },
      { label: 'La Dix-septième Option', value: 'SEVENTEENTH_OPTION' },
      { label: 'La Dix-huitième Option', value: 'EIGHTEENTH_OPTION' },
      { label: 'La Dix-neuvième Option', value: 'NINETEENTH_OPTION' },
      { label: 'La Vingtième Option', value: 'TWENTIETH_OPTION' }
    ]
    const commonProps: MultiSelectProps = {
      label: 'A multiple select',
      name: 'myMultiSelect',
      options,
      searchable: true
    }

    it('Should search for options', () => {
      mountAndWait(
        <StoryBox>
          <MultiSelectStory {...commonProps} />
        </StoryBox>
      )

      outputShouldNotBe()

      cy.fill('A multiple select', ['Vingtième'])

      outputShouldBe([options[19]!.value])

      cy.fill('A multiple select', ['Onzième', 'Seizième'])

      outputShouldBe([options[10]!.value, options[15]!.value])
    })
  })
})
