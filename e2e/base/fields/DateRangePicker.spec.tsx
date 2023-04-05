import { composeStories } from '@storybook/testing-react'
import dayjs from 'dayjs'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import * as baseStories from '../../../stories/fields/DateRangePicker.stories'
import { mountAndWait, outputShouldBe } from '../utils'

const { _DateRangePicker: BaseStory } = composeStories(baseStories as any) as any

context('Base', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <BaseStory />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the date range', () => {
    cy.fill('A date range', [dayjs('2021-11-20 23:35').toDate(), dayjs('2021-12-31 04:56').toDate()])

    outputShouldBe(['2021-11-20T23:35:00.000Z', '2021-12-31T04:56:59.000Z'])

    cy.fill('A date range', [dayjs('2022-03-04 07:24').toDate(), dayjs('2024-11-30 17:42').toDate()])

    outputShouldBe(['2022-03-04T07:24:00.000Z', '2024-11-30T17:42:59.000Z'])

    cy.fill('A date range', undefined)

    outputShouldBe(undefined)
  })
})
