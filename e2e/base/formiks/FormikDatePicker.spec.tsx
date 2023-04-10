import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import Meta, { _FormikDatePicker as FormikDatePickerStory } from '../../../stories/formiks/FormikDatePicker.stories'
import { mountAndWait, outputShouldBe } from '../utils'

context('Base', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <FormikDatePickerStory {...Meta.args} withTime={false} />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the date', () => {
    cy.fill('A date', [2021, 12, 31])

    outputShouldBe({
      myDate: '2021-12-31T00:00:00.000Z'
    })

    cy.fill('A date', [2024, 3, 4])

    outputShouldBe({
      myDate: '2024-03-04T00:00:00.000Z'
    })

    cy.fill('A date', undefined)

    outputShouldBe({})
  })
})

context('Base (with time)', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <FormikDatePickerStory {...Meta.args} withTime />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the date', () => {
    cy.fill('A date', [2021, 12, 31, 4, 56])

    outputShouldBe({
      myDate: '2021-12-31T04:56:00.000Z'
    })

    cy.fill('A date', [2024, 3, 4, 23, 18])

    outputShouldBe({
      myDate: '2024-03-04T23:18:00.000Z'
    })

    cy.fill('A date', undefined)

    outputShouldBe({})
  })
})
