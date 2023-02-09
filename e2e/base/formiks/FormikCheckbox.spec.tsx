import { composeStories } from '@storybook/testing-react'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import * as stories from '../../../stories/formiks/FormikCheckbox.stories'
import { mountAndWait, outputShouldBe } from '../utils'

const { _FormikCheckbox: FormikCheckboxStory } = composeStories(stories as any) as any

context('Test', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <FormikCheckboxStory />
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
