import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import Meta, { _DateRangePicker as DateRangePickerStory } from '../../../stories/fields/DateRangePicker.stories'
import { mountAndWait, outputShouldBe } from '../utils'

context('Base', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <DateRangePickerStory {...Meta.args} withTime={false} />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the date range', () => {
    cy.fill('A date range', [
      [2021, 11, 20],
      [2021, 12, 31]
    ])

    outputShouldBe(['2021-11-20T00:00:00.000Z', '2021-12-31T23:59:59.000Z'])

    cy.fill('A date range', [
      [2022, 3, 4],
      [2024, 11, 30]
    ])

    outputShouldBe(['2022-03-04T00:00:00.000Z', '2024-11-30T23:59:59.000Z'])

    cy.fill('A date range', undefined)

    outputShouldBe(undefined)
  })
})

context('Base (with time)', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <DateRangePickerStory {...Meta.args} withTime />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the date range', () => {
    cy.fill('A date range', [
      [2021, 11, 20, 23, 35],
      [2021, 12, 31, 4, 56]
    ])

    outputShouldBe(['2021-11-20T23:35:00.000Z', '2021-12-31T04:56:59.000Z'])

    cy.fill('A date range', [
      [2022, 3, 4, 7, 24],
      [2024, 11, 30, 17, 42]
    ])

    outputShouldBe(['2022-03-04T07:24:00.000Z', '2024-11-30T17:42:59.000Z'])

    cy.fill('A date range', undefined)

    outputShouldBe(undefined)
  })
})
