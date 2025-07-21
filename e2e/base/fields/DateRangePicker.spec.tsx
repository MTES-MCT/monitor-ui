import { StoryBox } from '../../../.storybook/components/StoryBox'
import Meta, { _DateRangePicker as DateRangePickerStory } from '../../../stories/fields/DateRangePicker.stories'
import { mountAndWait, outputShouldBe } from '../utils'

context('Without time inputs', () => {
  beforeEach(() => {
    mountAndWait(
      <StoryBox>
        <DateRangePickerStory {...(Meta.args as any)} withTime={false} />
      </StoryBox>
    )
  })

  it('Should fill, change and clear the date range', () => {
    cy.fill('A date range picker', [
      [2021, 11, 20],
      [2021, 12, 31]
    ])

    outputShouldBe(['2021-11-20T00:00:00.000Z', '2021-12-31T23:59:59.000Z'])

    cy.fill('A date range picker', [
      [2022, 3, 4],
      [2024, 11, 30]
    ])

    outputShouldBe(['2022-03-04T00:00:00.000Z', '2024-11-30T23:59:59.000Z'])

    cy.fill('A date range picker', undefined)

    outputShouldBe(undefined)
  })

  it('Should automatically switch focus', () => {
    // First fill

    outputShouldBe(undefined)

    cy.get('input[aria-label="Jour de début"]').type('01')

    cy.get('input[aria-label="Mois de début"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Mois de début"]').type('02')

    cy.get('input[aria-label="Année de début"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Année de début"]').type('2023')

    cy.get('input[aria-label="Jour de fin"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Jour de fin"]').type('03')

    cy.get('input[aria-label="Mois de fin"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Mois de fin"]').type('04')

    cy.get('input[aria-label="Année de fin"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Année de fin"]').type('2024')

    cy.get('input[aria-label="Année de fin"]').should('have.focus')
    outputShouldBe(['2023-02-01T00:00:00.000Z', '2024-04-03T23:59:59.000Z'])

    // Start year change

    cy.get('input[aria-label="Année de début"]').type('2024')

    cy.get('input[aria-label="Jour de fin"]').should('have.focus')
    outputShouldBe(['2024-02-01T00:00:00.000Z', '2024-04-03T23:59:59.000Z'])

    // Start month change

    cy.get('input[aria-label="Mois de début"]').type('01')

    cy.get('input[aria-label="Année de début"]').should('have.focus')
    outputShouldBe(['2024-01-01T00:00:00.000Z', '2024-04-03T23:59:59.000Z'])

    // Month deletion followed by calendar pick

    cy.get('input[aria-label="Mois de début"]').type('{backspace}')

    cy.get('input[aria-label="Mois de début"]').should('have.focus')
    outputShouldBe(['2024-01-01T00:00:00.000Z', '2024-04-03T23:59:59.000Z'])

    cy.get('button[aria-label="Previous month"]').first().click()
    cy.get('div[role="gridcell"][title="11/12/2023"]').click()
    cy.get('div[role="gridcell"][title="08/04/2024"]').click()

    cy.get('input[aria-label="Jour de début"]').should('have.value', '11')
    cy.get('input[aria-label="Mois de début"]').should('have.value', '12')
    cy.get('input[aria-label="Année de début"]').should('have.value', '2023')
    cy.get('input[aria-label="Jour de fin"]').should('have.value', '08')
    cy.get('input[aria-label="Mois de fin"]').should('have.value', '04')
    cy.get('input[aria-label="Année de fin"]').should('have.value', '2024')
    outputShouldBe(['2023-12-11T00:00:00.000Z', '2024-04-08T23:59:59.000Z'])
  })
})

context('With time inputs', () => {
  beforeEach(() => {
    mountAndWait(
      <StoryBox>
        <DateRangePickerStory {...(Meta.args as any)} withTime />
      </StoryBox>
    )
  })

  it('Should fill, change and clear the date range', () => {
    cy.fill('A date range picker', [
      [2021, 11, 20, 23, 35],
      [2021, 12, 31, 4, 56]
    ])

    outputShouldBe(['2021-11-20T23:35:00.000Z', '2021-12-31T04:56:59.000Z'])

    cy.fill('A date range picker', [
      [2022, 3, 4, 7, 24],
      [2024, 11, 30, 17, 42]
    ])

    outputShouldBe(['2022-03-04T07:24:00.000Z', '2024-11-30T17:42:59.000Z'])

    cy.fill('A date range picker', undefined)

    outputShouldBe(undefined)
  })

  it('Should automatically switch focus', () => {
    // First fill

    outputShouldBe(undefined)

    cy.get('input[aria-label="Jour de début"]').type('01')

    cy.get('input[aria-label="Mois de début"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Mois de début"]').type('02')

    cy.get('input[aria-label="Année de début"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Année de début"]').type('2023')

    cy.get('input[aria-label="Heure de début"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Heure de début"]').type('12')

    cy.get('input[aria-label="Minute de début"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Minute de début"]').type('34')

    cy.get('input[aria-label="Jour de fin"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Jour de fin"]').type('03')

    cy.get('input[aria-label="Mois de fin"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Mois de fin"]').type('04')

    cy.get('input[aria-label="Année de fin"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Année de fin"]').type('2024')

    cy.get('input[aria-label="Heure de fin"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Heure de fin"]').type('23')

    cy.get('input[aria-label="Minute de fin"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Minute de fin"]').type('56')

    cy.get('input[aria-label="Minute de fin"]').should('have.focus')
    outputShouldBe(['2023-02-01T12:34:00.000Z', '2024-04-03T23:56:59.000Z'])

    // Start hour change

    cy.get('input[aria-label="Heure de début"]').type('13')

    cy.get('input[aria-label="Minute de début"]').should('have.focus')
    outputShouldBe(['2023-02-01T13:34:00.000Z', '2024-04-03T23:56:59.000Z'])

    // Start year change

    cy.get('input[aria-label="Année de début"]').type('2024')

    cy.get('input[aria-label="Heure de début"]').should('have.focus')
    outputShouldBe(['2024-02-01T13:34:00.000Z', '2024-04-03T23:56:59.000Z'])

    // Start month change

    cy.get('input[aria-label="Mois de début"]').type('01')

    cy.get('input[aria-label="Année de début"]').should('have.focus')
    outputShouldBe(['2024-01-01T13:34:00.000Z', '2024-04-03T23:56:59.000Z'])

    // Month deletion followed by calendar pick

    cy.get('input[aria-label="Mois de début"]').type('{backspace}')

    cy.get('input[aria-label="Mois de début"]').should('have.focus')
    outputShouldBe(['2024-01-01T13:34:00.000Z', '2024-04-03T23:56:59.000Z'])

    cy.get('button[aria-label="Previous month"]').first().click()
    cy.get('div[role="gridcell"][title="11/12/2023"]').click()
    cy.get('div[role="gridcell"][title="08/04/2024"]').click()

    cy.get('input[aria-label="Heure de début"]').should('have.focus')
    cy.get('input[aria-label="Jour de début"]').should('have.value', '11')
    cy.get('input[aria-label="Mois de début"]').should('have.value', '12')
    cy.get('input[aria-label="Année de début"]').should('have.value', '2023')
    cy.get('input[aria-label="Jour de fin"]').should('have.value', '08')
    cy.get('input[aria-label="Mois de fin"]').should('have.value', '04')
    cy.get('input[aria-label="Année de fin"]').should('have.value', '2024')
    outputShouldBe(['2023-12-11T13:34:00.000Z', '2024-04-08T23:56:59.000Z'])
  })
})

context('With default times as full day', () => {
  beforeEach(() => {
    mountAndWait(
      <StoryBox>
        <DateRangePickerStory {...(Meta.args as any)} withFullDayDefaults withTime />
      </StoryBox>
    )
  })

  it('Should fill, change and clear the date range', () => {
    cy.get('input[aria-label="Jour de début"]').type('01')

    outputShouldBe(undefined)

    cy.get('input[aria-label="Mois de début"]').type('02')

    outputShouldBe(undefined)

    cy.get('input[aria-label="Année de début"]').type('2023')

    outputShouldBe(undefined)

    cy.get('input[aria-label="Jour de fin"]').type('03')

    outputShouldBe(undefined)

    cy.get('input[aria-label="Mois de fin"]').type('04')

    outputShouldBe(undefined)

    cy.get('input[aria-label="Année de fin"]').type('2024')

    outputShouldBe(['2023-02-01T00:00:00.000Z', '2024-04-03T23:59:59.000Z'])
  })
})
