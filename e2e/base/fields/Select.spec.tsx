import { composeStories } from '@storybook/testing-react'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import * as baseStories from '../../../stories/fields/Select.stories'
import * as withObjectOptionsStories from '../../../stories/tests/select_with_object_options.stories'
import { mountAndWait, outputShouldBe } from '../utils'

const { _Select: BaseStory } = composeStories(baseStories as any) as any
const { _Select: WithObjectOptionStory } = composeStories(withObjectOptionsStories as any) as any

context('Base', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <BaseStory />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the selection', () => {
    cy.fill('A select', 'First Option')

    outputShouldBe('FIRST_OPTION')

    cy.fill('A select', 'Second Option')

    outputShouldBe('SECOND_OPTION')

    cy.fill('A select', undefined)

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

  it('Should fill, change and clear the selection', () => {
    cy.fill('A select', 'First Option')

    outputShouldBe({
      id: 0,
      name: 'First Option Name'
    })

    cy.fill('A select', 'Second Option')

    outputShouldBe({
      id: 1,
      name: 'Second Option Name'
    })

    cy.fill('A select', undefined)

    outputShouldBe(undefined)
  })
})
