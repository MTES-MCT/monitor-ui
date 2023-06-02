import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { _Notifier as NotifierStory } from '../../../stories/components/Notifier.stories'
import { mountAndWait } from '../utils'

context(`Story`, () => {
  it('Should show and hide the notification', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <NotifierStory />
      </GlobalDecoratorWrapper>
    )

    cy.clickButton('Log a soft error')

    cy.get('.Toastify__toast').should('be.visible')
  })
})
