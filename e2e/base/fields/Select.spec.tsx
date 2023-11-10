import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { CustomSearch, type SelectProps } from '../../../src'
import { _Select as SelectStory } from '../../../stories/fields/Select/Select.stories'
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
      mountAndWait(
        <GlobalDecoratorWrapper>
          <SelectStory {...commonProps} />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()

      cy.fill('A select', options[0].label)

      outputShouldBe(options[0].value)

      cy.fill('A select', options[1].label)

      outputShouldBe(options[1].value)

      cy.fill('A select', undefined)

      outputShouldBe(undefined)
    })

    it(`Should fill, change and clear the select with \`value={${JSON.stringify(options[2].value)}}\``, () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <SelectStory {...commonProps} value={options[2].value} />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()

      cy.fill('A select', options[0].label)

      outputShouldBe(options[0].value)

      cy.fill('A select', options[1].label)

      outputShouldBe(options[1].value)

      cy.fill('A select', undefined)

      outputShouldBe(undefined)
    })

    it('Should fill the select with `isLabelHidden`', () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <SelectStory {...commonProps} isLabelHidden />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()

      cy.fill('A select', options[0].label)

      outputShouldBe(options[0].value)
    })

    it('Should NOT call `onChange(undefined)` with `disabled`', () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <SelectStory {...commonProps} disabled />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()
    })

    it(`Should NOT call \`onChange(undefined)\` with \`disabled value={${JSON.stringify(options[2].value)}}\``, () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <SelectStory {...commonProps} disabled value={options[2].value} />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()
    })

    it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <SelectStory {...commonProps} disabled isUndefinedWhenDisabled />
        </GlobalDecoratorWrapper>
      )

      outputShouldBe(undefined)
    })

    it(`Should call \`onChange(undefined)\` with \`disabled isUndefinedWhenDisabled value={${JSON.stringify(
      options[2].value
    )}}\``, () => {
      mountAndWait(
        <GlobalDecoratorWrapper>
          <SelectStory {...commonProps} disabled isUndefinedWhenDisabled value={options[2].value} />
        </GlobalDecoratorWrapper>
      )

      outputShouldBe(undefined)
    })

    it('Should filter and select the expected options when using `customSearch`', () => {
      const customSearch = new CustomSearch(options, ['label'], { isStrict: true })

      mountAndWait(
        <GlobalDecoratorWrapper>
          <SelectStory {...commonProps} customSearch={customSearch as any} />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()

      cy.get('.rs-picker-select').click()
      cy.get('.rs-picker-search-bar-input').type('la remie')
      cy.get('.rs-picker-select-menu > div[role="option"]:first-child').click()

      outputShouldBe(options[0].value)

      // Reset the Select
      cy.fill('A select', undefined)

      cy.get('.rs-picker-select').click()
      cy.get('.rs-picker-search-bar-input').type('la option')
      cy.get('.rs-picker-select-menu > div[role="option"]:first-child').click()

      outputShouldBe(options[0].value)

      // Reset the Select
      cy.fill('A select', undefined)

      cy.get('.rs-picker-select').click()
      cy.get('.rs-picker-search-bar-input').type('sêcôndÈ')
      cy.get('.rs-picker-select-menu > div[role="option"]:first-child').click()

      outputShouldBe(options[1].value)
    })
    it('Should fill, clear and get all list', () => {
      const customSearch = new CustomSearch(options, ['label'], { isStrict: true })
      mountAndWait(
        <GlobalDecoratorWrapper>
          <SelectStory {...commonProps} customSearch={customSearch as any} />
        </GlobalDecoratorWrapper>
      )

      outputShouldNotBe()

      cy.get('.rs-picker-select').click()
      cy.get('.rs-picker-search-bar-input').type('sêc')
      cy.get('.rs-picker-search-bar-input').type('{backspace}{backspace}{backspace}')

      cy.get('.rs-picker-select-menu').find('[role="option"]').should('have.length', 3)
    })
  })
})
