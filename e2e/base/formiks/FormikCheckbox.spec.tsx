import { composeStories } from '@storybook/testing-react'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import * as baseStories from '../../../stories/formiks/FormikCheckbox.stories'
import { mountAndWait, outputShouldBe } from '../utils'

const { _FormikCheckbox: BaseStory } = composeStories(baseStories as any) as any

context('Base', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <BaseStory />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should check and uncheck the checkbox', () => {
    cy.fill('Check me', true)

    outputShouldBe({
      myCheckbox: true
    })

    cy.fill('Check me', false)

    outputShouldBe({
      myCheckbox: false
    })
  })
})
