import { composeStories } from '@storybook/testing-react'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import * as baseStories from '../../../stories/fields/MultiSelect.stories'
import * as withNumberOptionsStories from '../../../stories/tests/multi_select_with_number_options.stories'
import * as withObjectOptionsStories from '../../../stories/tests/multi_select_with_object_options.stories'
import { mountAndWait, outputShouldBe } from '../utils'

const { _MultiSelect: BaseStory } = composeStories(baseStories as any) as any
const { _MultiSelect: WithNumberOptionStory } = composeStories(withNumberOptionsStories as any) as any
const { _MultiSelect: WithObjectOptionStory } = composeStories(withObjectOptionsStories as any) as any

context('Base', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <BaseStory />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the select', () => {
    cy.fill('A multiple select', ['First Option'])

    outputShouldBe(['FIRST_OPTION'])

    cy.fill('A multiple select', ['First Option', 'Second Option'])

    outputShouldBe(['FIRST_OPTION', 'SECOND_OPTION'])

    cy.fill('A multiple select', ['Third Option'])

    outputShouldBe(['THIRD_OPTION'])

    cy.fill('A multiple select', undefined)

    outputShouldBe(undefined)
  })
})

context('With number options', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <WithNumberOptionStory />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the select', () => {
    cy.fill('A multiple select', ['First Option'])

    outputShouldBe([0])

    cy.fill('A multiple select', ['First Option', 'Second Option'])

    outputShouldBe([0, 1])

    cy.fill('A multiple select', ['Third Option'])

    outputShouldBe([2])

    cy.fill('A multiple select', undefined)

    outputShouldBe(undefined)
  })
})

context('With object options', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <WithObjectOptionStory />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the select', () => {
    cy.get('.rs-picker-toggle-caret').click()
    cy.get('[value="First Option Name"]').click()

    outputShouldBe([
      {
        id: 0,
        name: 'First Option Name'
      }
    ])

    cy.get('[value="Second Option Name"]').click()

    outputShouldBe([
      {
        id: 0,
        name: 'First Option Name'
      },
      {
        id: 1,
        name: 'Second Option Name'
      }
    ])

    cy.get('[value="First Option Name"]').click()

    outputShouldBe([
      {
        id: 1,
        name: 'Second Option Name'
      }
    ])
  })
})
