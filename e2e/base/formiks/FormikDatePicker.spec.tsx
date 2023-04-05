import { composeStories } from '@storybook/testing-react'
import dayjs from 'dayjs'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import * as baseStories from '../../../stories/formiks/FormikDatePicker.stories'
import { mountAndWait, outputShouldBe } from '../utils'

const { _FormikDatePicker: BaseStory } = composeStories(baseStories as any) as any

context('Base', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <BaseStory />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the date', () => {
    cy.fill('A date', dayjs('2021-12-31 04:56').toDate())

    outputShouldBe({
      myDate: '2021-12-31T04:56:00.000Z'
    })

    cy.fill('A date', dayjs('2024-03-04 23:18').toDate())

    outputShouldBe({
      myDate: '2024-03-04T23:18:00.000Z'
    })

    cy.fill('A date', undefined)

    outputShouldBe({})
  })
})
