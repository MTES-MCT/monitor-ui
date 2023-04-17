import { composeStories } from '@storybook/testing-react'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import * as allStories from '../../../stories/tests/all_formiks.stories'
import { mountAndWait, outputShouldBe } from '../utils'

const { Template: AllStory } = composeStories(allStories as any) as any

context('All', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <AllStory />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should select the 2nd option in the select, and clear it', () => {
    cy.fill('Select', 'Second select option')

    outputShouldBe({
      select: 'SECOND_SELECT_OPTION'
    })

    cy.fill('Select', undefined)

    outputShouldBe({})
  })

  it('Should select the 42th option in the select with a search input', () => {
    cy.fill('Select with search input', 'Select with search input option 42')

    outputShouldBe({
      selectWithSearchInput: 'SELECT_WITH_SEARCH_INPUT_OPTION_42'
    })
  })

  it('Should select the 2nd option in the select with a hidden label', () => {
    cy.fill('Select with hidden label', 'Second select with hidden label option')

    outputShouldBe({
      selectWithHiddenLabel: 'SECOND_SELECT_WITH_HIDDEN_LABEL_OPTION'
    })
  })

  it('Should select the 2nd and 3rd option in the multi select, and clear them', () => {
    cy.fill('Multi select', ['Second multi select option', 'Third multi select option'])

    outputShouldBe({
      multiSelect: ['SECOND_MULTI_SELECT_OPTION', 'THIRD_MULTI_SELECT_OPTION']
    })

    cy.fill('Multi select', undefined)

    outputShouldBe({})
  })

  it('Should select the 21st and 42th option in the multi select with a search input', () => {
    cy.fill('Multi select with search input', [
      'Multi select with search input option 21',
      'Multi select with search input option 42'
    ])

    outputShouldBe({
      multiSelectWithSearchInput: [
        'MULTI_SELECT_WITH_SEARCH_INPUT_OPTION_21',
        'MULTI_SELECT_WITH_SEARCH_INPUT_OPTION_42'
      ]
    })
  })

  it('Should select the 2nd and 3rd option in the multi select with a hidden label', () => {
    cy.fill('Multi select with hidden label', [
      'Second multi select with hidden label option',
      'Third multi select with hidden label option'
    ])

    outputShouldBe({
      multiSelectWithHiddenLabel: [
        'SECOND_MULTI_SELECT_WITH_HIDDEN_LABEL_OPTION',
        'THIRD_MULTI_SELECT_WITH_HIDDEN_LABEL_OPTION'
      ]
    })
  })

  it('Should check the 2nd and 3rd option in the multi checkbox, and clear them', () => {
    cy.fill('Multi checkbox', ['Second multi checkbox option', 'Third multi checkbox option'])

    outputShouldBe({
      multiCheckbox: ['SECOND_MULTI_CHECKBOX_OPTION', 'THIRD_MULTI_CHECKBOX_OPTION']
    })

    cy.fill('Multi checkbox', undefined)

    outputShouldBe({})
  })

  it('Should check the 2nd and 3rd option in the multi checkbox with a hidden label', () => {
    cy.fill('Multi checkbox with hidden label', [
      'Second multi checkbox with hidden label option',
      'Third multi checkbox with hidden label option'
    ])

    outputShouldBe({
      multiCheckboxWithHiddenLabel: [
        'SECOND_MULTI_CHECKBOX_WITH_HIDDEN_LABEL_OPTION',
        'THIRD_MULTI_CHECKBOX_WITH_HIDDEN_LABEL_OPTION'
      ]
    })
  })

  it('Should check the 2nd option in the multi radio, and clear them', () => {
    cy.fill('Multi radio', 'Second multi radio option')

    outputShouldBe({
      multiRadio: 'SECOND_MULTI_RADIO_OPTION'
    })
  })

  it('Should check the 2nd option in the multi radio with a hidden label', () => {
    cy.fill('Multi radio with hidden label', 'Second multi radio with hidden label option')

    outputShouldBe({
      multiRadioWithHiddenLabel: 'SECOND_MULTI_RADIO_WITH_HIDDEN_LABEL_OPTION'
    })
  })
})
