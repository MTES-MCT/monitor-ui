import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { CustomSearch, type MultiSelectProps } from '../../../src'
import { _MultiSelect as MultiSelectStory } from '../../../stories/fields/MultiSelect/MultiSelect.stories'
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

Object.keys(OPTIONS_TYPES).forEach(optionType => {
  context(`Story (${optionType} options)`, () => {
    const options = OPTIONS_TYPES[optionType]
    const commonProps: MultiSelectProps = {
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
        <GlobalDecoratorWrapper>
          <MultiSelectStory {...commonProps} />
        </GlobalDecoratorWrapper>
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
        <GlobalDecoratorWrapper>
          <MultiSelectStory {...commonProps} value={[options[2].value]} />
        </GlobalDecoratorWrapper>
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
        <GlobalDecoratorWrapper>
          <MultiSelectStory {...commonProps} isLabelHidden />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()

      cy.fill('A check picker', [options[0].label])

      outputShouldBe([options[0].value])
    })

    it('Should NOT call `onChange(undefined)` with `disabled`', () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiSelectStory {...commonProps} disabled />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()
    })

    it(`Should NOT call \`onChange(undefined)\` with \`disabled value={[${JSON.stringify(options[2].value)}]\``, () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiSelectStory {...commonProps} disabled value={[options[2].value]} />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()
    })

    it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiSelectStory {...commonProps} disabled isUndefinedWhenDisabled />
        </GlobalDecoratorWrapper>
      )

      outputShouldBe(undefined)
    })

    it(`Should call \`onChange(undefined)\` with \`disabled isUndefinedWhenDisabled value={[${JSON.stringify(
      options[2].value
    )}]\``, () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiSelectStory {...commonProps} disabled isUndefinedWhenDisabled value={[options[2].value]} />
        </GlobalDecoratorWrapper>
      )

      outputShouldBe(undefined)
    })

    it('Should filter and select the expected options when using `customSearch`', () => {
      const customSearch = new CustomSearch(options, ['label'], { isStrict: true })

      mountAndWait(
        <GlobalDecoratorWrapper>
          <MultiSelectStory {...commonProps} customSearch={customSearch as any} />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()

      cy.get('.rs-picker-input').click()
      cy.get('.rs-picker-search-input > input').type('la remie')
      cy.get('.rs-picker-check-menu > div[role="option"]:first-child').click()
      cy.clickOutside()

      outputShouldBe([options[0].value])

      // Reset the MultiSelect
      cy.fill('A check picker', undefined)

      cy.get('.rs-picker-input').click()
      cy.get('.rs-picker-search-input > input').type('la option')
      cy.get('.rs-picker-check-menu > div[role="option"]:first-child').click()
      cy.clickOutside()

      outputShouldBe([options[0].value])

      // Reset the MultiSelect
      cy.fill('A check picker', undefined)

      cy.get('.rs-picker-input').click()
      cy.get('.rs-picker-search-input > input').type('sêcôndÈ')
      cy.get('.rs-picker-check-menu > div[role="option"]:first-child').click()
      cy.clickOutside()

      outputShouldBe([options[1].value])
    })
  })
})
