import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import Meta, { _DatePicker as DatePickerStory } from '../../../stories/fields/DatePicker.stories'
import { mountAndWait, outputShouldBe } from '../utils'

context('Base', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <DatePickerStory {...Meta.args} withTime={false} />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the date', () => {
    cy.fill('A date', [2021, 12, 31])

    outputShouldBe('2021-12-31T00:00:00.000Z')

    cy.fill('A date', [2024, 3, 4])

    outputShouldBe('2024-03-04T00:00:00.000Z')

    cy.fill('A date', undefined)

    outputShouldBe(undefined)
  })
})

context('Base (with time)', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <DatePickerStory {...Meta.args} withTime />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the date', () => {
    cy.fill('A date', [2021, 12, 31, 4, 56])

    outputShouldBe('2021-12-31T04:56:00.000Z')

    cy.fill('A date', [2024, 3, 4, 23, 18])

    outputShouldBe('2024-03-04T23:18:00.000Z')

    cy.fill('A date', undefined)

    outputShouldBe(undefined)
  })
})
