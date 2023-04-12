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

  it('Should fill, change and clear the text input', () => {
    cy.fill('Text input', 'A text input value')

    outputShouldBe({
      textInput: 'A text input value'
    })

    cy.fill('Text input', undefined)

    outputShouldBe({
      textInput: ''
    })
  })

  it('Should set input to undefined when input is disabled', () => {
    cy.fill('Text input', 'A text input value')

    outputShouldBe({
      textInput: 'A text input value'
    })

    cy.fill('Read only ?', true)

    outputShouldBe({
      textInput: 'A text input value'
    })

    cy.fill('Read only ?', false)
    cy.fill('set to undefined when field is disabled', true)

    cy.fill('Read only ?', true)
    outputShouldBe({})
  })

  it('Should fill the text input with a hidden label', () => {
    cy.fill('Text input with hidden label', 'A text input with hidden label value')

    outputShouldBe({
      textInputWithHiddenLabel: 'A text input with hidden label value'
    })
  })

  it('Should fill and clear the textarea', () => {
    cy.fill('Textarea', 'A textarea value')

    outputShouldBe({
      textarea: 'A textarea value'
    })

    cy.fill('Textarea', undefined)

    outputShouldBe({
      textarea: ''
    })
  })

  it('Should set textarea to undefined when textarea is disabled', () => {
    cy.fill('Textarea', 'A text area value')

    outputShouldBe({
      textarea: 'A text area value'
    })

    cy.fill('Read only ?', true)

    outputShouldBe({
      textarea: 'A text area value'
    })

    cy.fill('Read only ?', false)
    cy.fill('set to undefined when field is disabled', true)

    cy.fill('Read only ?', true)
    outputShouldBe({})
  })

  it('Should fill the textarea with a hidden label', () => {
    cy.fill('Textarea with hidden label', 'A textarea with hidden label value')

    outputShouldBe({
      textareaWithHiddenLabel: 'A textarea with hidden label value'
    })
  })

  it('Should check and uncheck the checkbox', () => {
    cy.fill('Checkbox', true)

    outputShouldBe({
      checkbox: true
    })

    cy.fill('Checkbox', false)

    outputShouldBe({
      checkbox: false
    })
  })

  it('Should set checkbox to undefined when checkbox is disabled', () => {
    cy.fill('Checkbox', true)

    outputShouldBe({
      checkbox: true
    })

    cy.fill('Read only ?', true)

    outputShouldBe({
      checkbox: true
    })

    cy.fill('Read only ?', false)
    cy.fill('set to undefined when field is disabled', true)

    cy.fill('Read only ?', true)
    outputShouldBe({})
  })

  it('Should select the 2nd option in the select, and clear it', () => {
    cy.fill('Select', 'Second select option')

    outputShouldBe({
      select: 'SECOND_SELECT_OPTION'
    })

    cy.fill('Select', undefined)

    outputShouldBe({})
  })

  it('Should set select to undefined when select is disabled', () => {
    cy.fill('Select', 'Second select option')

    outputShouldBe({
      select: 'SECOND_SELECT_OPTION'
    })

    cy.fill('Read only ?', true)

    outputShouldBe({
      select: 'SECOND_SELECT_OPTION'
    })

    cy.fill('Read only ?', false)
    cy.fill('set to undefined when field is disabled', true)

    cy.fill('Read only ?', true)
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

    outputShouldBe({ multiCheckbox: [] })
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

  it('Should set multicheckbox to undefined when multicheckbox is disabled', () => {
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

    cy.fill('Read only ?', true)

    outputShouldBe({
      multiCheckboxWithHiddenLabel: [
        'SECOND_MULTI_CHECKBOX_WITH_HIDDEN_LABEL_OPTION',
        'THIRD_MULTI_CHECKBOX_WITH_HIDDEN_LABEL_OPTION'
      ]
    })

    cy.fill('Read only ?', false)
    cy.fill('set to undefined when field is disabled', true)

    cy.fill('Read only ?', true)
    outputShouldBe({})
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

  it('Should set multiradio to undefined when multiradio is disabled', () => {
    cy.fill('Multi radio', 'Second multi radio option')

    outputShouldBe({
      multiRadio: 'SECOND_MULTI_RADIO_OPTION'
    })

    cy.fill('Read only ?', true)

    outputShouldBe({
      multiRadio: 'SECOND_MULTI_RADIO_OPTION'
    })

    cy.fill('Read only ?', false)
    cy.fill('set to undefined when field is disabled', true)

    cy.fill('Read only ?', true)
    outputShouldBe({})
  })
})
