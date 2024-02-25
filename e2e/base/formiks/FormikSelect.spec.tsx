import { composeStories } from '@storybook/testing-react'

import { StoryBox } from '../../../.storybook/components/StoryBox'
import * as baseStories from '../../../stories/formiks/FormikSelect.stories'
import { mountAndWait, outputShouldBe } from '../utils'

const { _FormikSelect: BaseStory } = composeStories(baseStories as any) as any

context('Story', () => {
  beforeEach(() => {
    mountAndWait(
      <StoryBox>
        <BaseStory />
      </StoryBox>
    )
  })

  it('Should check and uncheck the checkbox', () => {
    cy.fill('A select', 'First Option')

    outputShouldBe({
      mySelect: 'FIRST_OPTION'
    })

    cy.fill('A select', 'Second Option')

    outputShouldBe({
      mySelect: 'SECOND_OPTION'
    })

    cy.fill('A select', undefined)

    outputShouldBe({})
  })
})
