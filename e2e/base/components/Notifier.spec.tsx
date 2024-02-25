import { StoryBox } from '../../../.storybook/components/StoryBox'
import { _Notifier as NotifierStory } from '../../../stories/components/Notifier.stories'
import { mountAndWait } from '../utils'

context(`Story`, () => {
  it('Should show and hide the notification', () => {
    mountAndWait(
      <StoryBox>
        <NotifierStory />
      </StoryBox>
    )

    cy.clickButton('Log a soft error')

    cy.get('.Toastify__toast').should('be.visible')
  })
})
