import { useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { StoryBox } from '../../../.storybook/components/StoryBox'
import { CustomSearch, type CheckPickerProps, CheckPicker, useFieldControl } from '../../../src'
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

function CheckPickerStory({ value, ...otherProps }: CheckPickerProps) {
  const [outputValue, setOutputValue] = useState<any>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(value, setOutputValue)

  return (
    <StoryBox>
      <CheckPicker onChange={controlledOnChange} value={controlledValue} {...otherProps} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </StoryBox>
  )
}

Object.keys(OPTIONS_TYPES).forEach(optionType => {
  context(`With ${optionType} options`, () => {
    const options = OPTIONS_TYPES[optionType]
    const commonProps: CheckPickerProps = {
      label: 'A check picker',
      name: 'myCheckPicker',
      options,
      ...(optionType === 'object'
        ? {
            optionValueKey: 'name' as any
          }
        : {})
    }

    it('Should fill, change and clear the check picker', () => {
      mountAndWait(
        <StoryBox>
          <CheckPickerStory {...commonProps} />
        </StoryBox>
      )

      outputShouldNotBe()

      cy.fill('A check picker', [options[0].label])

      outputShouldBe([options[0].value])

      cy.fill('A check picker', [options[1].label, options[2].label])

      outputShouldBe([options[1].value, options[2].value])

      cy.fill('A check picker', undefined)

      outputShouldBe(undefined)
    })

    it(`Should fill, change and clear the check picker with \`value={[${JSON.stringify(options[2].value)}]\``, () => {
      mountAndWait(
        <StoryBox>
          <CheckPickerStory {...commonProps} value={[options[2].value]} />
        </StoryBox>
      )

      outputShouldNotBe()

      cy.fill('A check picker', [options[0].label])

      outputShouldBe([options[0].value])

      cy.fill('A check picker', [options[1].label, options[2].label])

      outputShouldBe([options[1].value, options[2].value])

      cy.fill('A check picker', undefined)

      outputShouldBe(undefined)
    })

    it('Should fill the check picker with `isLabelHidden`', () => {
      mountAndWait(
        <StoryBox>
          <CheckPickerStory {...commonProps} isLabelHidden />
        </StoryBox>
      )

      outputShouldNotBe()

      cy.fill('A check picker', [options[0].label])

      outputShouldBe([options[0].value])
    })

    it('Should fill the check picker with `searcheable`', () => {
      mountAndWait(
        <StoryBox>
          <CheckPickerStory {...commonProps} searchable />
        </StoryBox>
      )

      outputShouldNotBe()

      cy.fill('A check picker', [options[0].label])

      outputShouldBe([options[0].value])

      cy.fill('A check picker', [options[1].label, options[2].label])

      outputShouldBe([options[1].value, options[2].value])
    })

    it('Should NOT call `onChange(undefined)` with `disabled`', () => {
      mountAndWait(
        <StoryBox>
          <CheckPickerStory {...commonProps} disabled />
        </StoryBox>
      )

      outputShouldNotBe()
    })

    it(`Should NOT call \`onChange(undefined)\` with \`disabled value={[${JSON.stringify(options[2].value)}]\``, () => {
      mountAndWait(
        <StoryBox>
          <CheckPickerStory {...commonProps} disabled value={[options[2].value]} />
        </StoryBox>
      )

      outputShouldNotBe()
    })

    it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
      mountAndWait(
        <StoryBox>
          <CheckPickerStory {...commonProps} disabled isUndefinedWhenDisabled />
        </StoryBox>
      )

      outputShouldBe(undefined)
    })

    it(`Should call \`onChange(undefined)\` with \`disabled isUndefinedWhenDisabled value={[${JSON.stringify(
      options[2].value
    )}]\``, () => {
      mountAndWait(
        <StoryBox>
          <CheckPickerStory {...commonProps} disabled isUndefinedWhenDisabled value={[options[2].value]} />
        </StoryBox>
      )

      outputShouldBe(undefined)
    })

    it('Should filter and select the expected options when using `customSearch`', () => {
      const customSearch = new CustomSearch(options, ['label'], { isStrict: true })

      mountAndWait(
        <StoryBox>
          <CheckPickerStory {...commonProps} customSearch={customSearch as any} />
        </StoryBox>
      )

      outputShouldNotBe()

      cy.get('.rs-stack > .rs-stack-item > .rs-picker-caret-icon').click()
      cy.get('.rs-picker-popup').find('input[role="searchbox"]').type('la remie')
      cy.get('.rs-picker-popup').find('[role="option"]').first().click()
      cy.clickOutside()

      outputShouldBe([options[0].value])

      // Clear the CheckPicker
      cy.fill('A check picker', undefined)

      cy.get('.rs-stack > .rs-stack-item > .rs-picker-caret-icon').click()
      cy.get('.rs-picker-popup').find('input[role="searchbox"]').type('la option')
      cy.get('.rs-picker-popup').find('[role="option"]').first().click()
      cy.clickOutside()

      outputShouldBe([options[0].value])

      // Clear the CheckPicker
      cy.fill('A check picker', undefined)

      cy.get('.rs-stack > .rs-stack-item > .rs-picker-caret-icon').click()
      cy.get('.rs-picker-popup').find('input[role="searchbox"]').type('sêcôndÈ')
      cy.get('.rs-picker-popup').find('[role="option"]').first().click()
      cy.clickOutside()

      outputShouldBe([options[1].value])
    })
    it('Should fill, clear and get all list', () => {
      const customSearch = new CustomSearch(options, ['label'], { isStrict: true })
      mountAndWait(
        <StoryBox>
          <CheckPickerStory {...commonProps} customSearch={customSearch as any} />
        </StoryBox>
      )

      outputShouldNotBe()

      cy.get('.rs-stack > .rs-stack-item > .rs-picker-caret-icon').click()
      cy.get('.rs-picker-popup').find('input[role="searchbox"]').type('sêc')
      cy.get('.rs-picker-popup').find('input[role="searchbox"]').type('{backspace}{backspace}{backspace}')

      cy.get('.rs-picker-check-menu').find('[role="option"]').should('have.length', 3)
    })
  })
})
