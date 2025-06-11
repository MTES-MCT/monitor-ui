import { mount } from 'cypress/react18'

import { StoryBox } from '../../../.storybook/components/StoryBox'
import { CoordinatesFormat } from '../../../src'
import { _CoordinatesInput as CoordinatesInputStory } from '../../../stories/fields/CoordinatesInput.stories'
import { mountAndWait, outputShouldBe, outputShouldNotBe } from '../utils'

import type { CoordinatesInputProps } from '../../../src'

context('Story', () => {
  it('Should fill the DMD coordinates and not round the result', () => {
    const props: CoordinatesInputProps = {
      coordinatesFormat: CoordinatesFormat.DEGREES_MINUTES_DECIMALS,
      label: 'Coordinates',
      name: 'myCoordinatesInput'
    }

    mountAndWait(
      <StoryBox>
        <CoordinatesInputStory {...props} />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.getDataCy('dmd-coordinates-input').type('4711000n00726000w')

    outputShouldBe([47.183333, -7.433333])
  })

  it('Should fill the DMD coordinates with lowercase N/W and two minutes decimals', () => {
    const props: CoordinatesInputProps = {
      coordinatesFormat: CoordinatesFormat.DEGREES_MINUTES_DECIMALS,
      label: 'Coordinates',
      name: 'myCoordinatesInput'
    }

    mountAndWait(
      <StoryBox>
        <CoordinatesInputStory {...props} />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.getDataCy('dmd-coordinates-input').type('0259165S01724864w')
    cy.get('.Field-CoordinatesInput').should('not.contain', 'La latitude doit être N ou S')

    outputShouldBe([-2.986083, -17.4144])
  })

  it('Should fill the DMS coordinates with lowercase N/W', () => {
    const props: CoordinatesInputProps = {
      coordinatesFormat: CoordinatesFormat.DEGREES_MINUTES_SECONDS,
      label: 'Coordinates',
      name: 'myCoordinatesInput'
    }

    mountAndWait(
      <StoryBox>
        <CoordinatesInputStory {...props} />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.getDataCy('dms-coordinates-input').type('025910S0172452w')
    cy.get('.Field-CoordinatesInput').should('not.contain', 'La latitude doit être N ou S')

    outputShouldBe([-2.986111, -17.414444])
  })

  it('Should round the default value for DMS coordinates to 6 decimals', () => {
    const props: CoordinatesInputProps = {
      coordinatesFormat: CoordinatesFormat.DEGREES_MINUTES_SECONDS,
      defaultValue: [47.53916721151114, -0.2598992997646015],
      label: 'Coordinates',
      name: 'myCoordinatesInput'
    }

    mountAndWait(
      <StoryBox>
        <CoordinatesInputStory {...props} />
      </StoryBox>
    )

    outputShouldBe([47.539167, -0.26])
  })

  it('Should modify the value for DD coordinates', () => {
    const props: CoordinatesInputProps = {
      coordinatesFormat: CoordinatesFormat.DECIMAL_DEGREES,
      defaultValue: [47.53916721151114, -0.2598992997646015],
      label: 'Coordinates',
      name: 'myCoordinatesInput'
    }

    mount(
      <StoryBox>
        <CoordinatesInputStory {...props} />
      </StoryBox>
    ).then(({ rerender }) => {
      cy.getDataCy('coordinates-dd-input-lat').should('have.value', '47.539167')
      cy.getDataCy('coordinates-dd-input-lon').should('have.value', '-0.259899')

      const nextProps = {
        ...props,
        defaultValue: [47.123677909, -0.12378997] as [number, number]
      }
      rerender(
        <StoryBox>
          <CoordinatesInputStory {...nextProps} />
        </StoryBox>
      )

      cy.getDataCy('coordinates-dd-input-lat').should('have.value', '47.123678')
      cy.getDataCy('coordinates-dd-input-lon').should('have.value', '-0.123790')
    })
  })

  it('Should fill the DD coordinates and not round the result', () => {
    const props: CoordinatesInputProps = {
      coordinatesFormat: CoordinatesFormat.DECIMAL_DEGREES,
      label: 'Coordinates',
      name: 'myCoordinatesInput'
    }

    mountAndWait(
      <StoryBox>
        <CoordinatesInputStory {...props} />
      </StoryBox>
    )

    outputShouldNotBe()

    cy.getDataCy('coordinates-dd-input-lat').type('46.441369')
    cy.getDataCy('coordinates-dd-input-lon').type('1.0555')

    outputShouldBe([46.441369, 1.0555])

    cy.getDataCy('coordinates-dd-input-lat').type('{backspace}{backspace}{backspace}123')
    outputShouldBe([46.441123, 1.0555])
  })
})
