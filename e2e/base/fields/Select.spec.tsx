import { StoryBox } from '../../../.storybook/components/StoryBox'
import { CustomSearch, type SelectProps } from '../../../src'
import { _Select as SelectStory } from '../../../stories/fields/Select.stories'
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
        <StoryBox>
          <SelectStory {...commonProps} />
        </StoryBox>
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
        <StoryBox>
          <SelectStory {...commonProps} value={options[2].value} />
        </StoryBox>
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
        <StoryBox>
          <SelectStory {...commonProps} isLabelHidden />
        </StoryBox>
      )

      outputShouldNotBe()

      cy.fill('A select', options[0].label)

      outputShouldBe(options[0].value)
    })

    it('Should NOT call `onChange(undefined)` with `disabled`', () => {
      mountAndWait(
        <StoryBox>
          <SelectStory {...commonProps} disabled />
        </StoryBox>
      )

      outputShouldNotBe()
    })

    it(`Should NOT call \`onChange(undefined)\` with \`disabled value={${JSON.stringify(options[2].value)}}\``, () => {
      mountAndWait(
        <StoryBox>
          <SelectStory {...commonProps} disabled value={options[2].value} />
        </StoryBox>
      )

      outputShouldNotBe()
    })

    it('Should call `onChange(undefined)` with `disabled isUndefinedWhenDisabled`', () => {
      mountAndWait(
        <StoryBox>
          <SelectStory {...commonProps} disabled isUndefinedWhenDisabled />
        </StoryBox>
      )

      outputShouldBe(undefined)
    })

    it(`Should call \`onChange(undefined)\` with \`disabled isUndefinedWhenDisabled value={${JSON.stringify(
      options[2].value
    )}}\``, () => {
      mountAndWait(
        <StoryBox>
          <SelectStory {...commonProps} disabled isUndefinedWhenDisabled value={options[2].value} />
        </StoryBox>
      )

      outputShouldBe(undefined)
    })

    it('Should filter and select the expected options when using `customSearch`', () => {
      const customSearch = new CustomSearch(options, ['label'], { isStrict: true })

      mountAndWait(
        <StoryBox>
          <SelectStory {...commonProps} customSearch={customSearch as any} />
        </StoryBox>
      )

      outputShouldNotBe()

      cy.get('.rs-stack > .rs-stack-item > .rs-picker-caret-icon').click()
      cy.get('.rs-picker-popup').find('input[role="searchbox"]').type('la remie')
      cy.get('.rs-picker-popup').find('div[role="option"]').first().click()

      outputShouldBe(options[0].value)

      // Clear the Select
      cy.fill('A select', undefined)

      cy.get('.rs-stack > .rs-stack-item > .rs-picker-caret-icon').click()
      cy.get('.rs-picker-popup').find('input[role="searchbox"]').type('la option')
      cy.get('.rs-picker-popup').find('div[role="option"]').first().click()

      outputShouldBe(options[0].value)

      // Clear the Select
      cy.fill('A select', undefined)

      cy.get('.rs-stack > .rs-stack-item > .rs-picker-caret-icon').click()
      cy.get('.rs-picker-popup').find('input[role="searchbox"]').type('sêcôndÈ')
      cy.get('.rs-picker-popup').find('div[role="option"]').first().click()

      outputShouldBe(options[1].value)
    })

    it('Should fill, clear and get all list', () => {
      const customSearch = new CustomSearch(options, ['label'], { isStrict: true })
      mountAndWait(
        <StoryBox>
          <SelectStory {...commonProps} customSearch={customSearch as any} />
        </StoryBox>
      )

      outputShouldNotBe()

      cy.get('.rs-stack > .rs-stack-item > .rs-picker-caret-icon').click()
      cy.get('.rs-picker-popup').find('input[role="searchbox"]').type('sêc')
      cy.get('.rs-picker-popup').find('input[role="searchbox"]').type('{backspace}{backspace}{backspace}')

      cy.get('.rs-picker-popup').find('[role="option"]').should('have.length', 3)
    })
  })
})
