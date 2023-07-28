import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { CoordinatesFormat } from '../../../src'
import { _CoordinatesInput as CoordinatesInputStory } from '../../../stories/fields/CoordinatesInput.stories'
import { mountAndWait, outputShouldBe, outputShouldNotBe } from '../utils'

import type { CoordinatesInputProps } from '../../../src'

context('Story', () => {
  it('Should fill the DMD coordinates and not round the result', () => {
    const props: CoordinatesInputProps = {
      coordinatesFormat: CoordinatesFormat.DEGREES_MINUTES_DECIMALS,
      label: 'Coordinates'
    }

    mountAndWait(
      <GlobalDecoratorWrapper>
        <CoordinatesInputStory {...props} />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()

    cy.getDataCy('dmd-coordinates-input').type('471100n0072600w')

    outputShouldBe([47.183333, -7.433333])
  })

  it('Should fill the DMD coordinates with lowercase N/W and two minutes decimals', () => {
    const props: CoordinatesInputProps = {
      coordinatesFormat: CoordinatesFormat.DEGREES_MINUTES_DECIMALS,
      label: 'Coordinates'
    }

    mountAndWait(
      <GlobalDecoratorWrapper>
        <CoordinatesInputStory {...props} />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()

    cy.getDataCy('dmd-coordinates-input').type('025916S0172486w')
    cy.get('.Field-CoordinatesInput').should('not.contain', 'La latitude doit être N ou S')

    outputShouldBe([-2.986, -17.414333])
  })

  it('Should fill the DMS coordinates with lowercase N/W', () => {
    const props: CoordinatesInputProps = {
      coordinatesFormat: CoordinatesFormat.DEGREES_MINUTES_SECONDS,
      label: 'Coordinates'
    }

    mountAndWait(
      <GlobalDecoratorWrapper>
        <CoordinatesInputStory {...props} />
      </GlobalDecoratorWrapper>
    )

    outputShouldNotBe()

    cy.getDataCy('dms-coordinates-input').type('025910S0172452w')
    cy.get('.Field-CoordinatesInput').should('not.contain', 'La latitude doit être N ou S')

    outputShouldBe([-2.986111, -17.414444])
  })
})
