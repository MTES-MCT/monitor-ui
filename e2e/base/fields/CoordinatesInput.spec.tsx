import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { CoordinatesFormat, CoordinatesInputProps } from '../../../src'
import { _CoordinatesInput as CoordinatesInputStory } from '../../../stories/fields/CoordinatesInput.stories'
import { mountAndWait, outputShouldBe, outputShouldNotBe } from '../utils'

context('Story', () => {
  const commonProps: CoordinatesInputProps = {
    coordinatesFormat: CoordinatesFormat.DEGREES_MINUTES_DECIMALS,
    label: 'Coordinates'
  }

  it('Should fill the DMD coordinates with lowercase N/W', () => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <CoordinatesInputStory {...commonProps} />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()

    cy.getDataCy('dmd-coordinates-input').type('4754456n00211545w')
    cy.get('.Field-CoordinatesInput').should('not.contain', 'La latitude doit être N ou S')

    outputShouldBe([47.9076, -2.192417])
  })
})
