import dayjs from 'dayjs'

export function fillDateRangePicker(fieldsetElement: HTMLElement, dateRange: [Date, Date] | undefined): void {
  const inputElements = fieldsetElement.querySelectorAll('input')
  if (inputElements.length !== 7 && inputElements.length !== 11) {
    throw new Error(`Expected to find 7 or 11 inputs within in DatePicker but found ${inputElements.length}.`)
  }

  if (!dateRange) {
    cy.wrap(fieldsetElement).get('[aria-label="Jour de début"]').clear()
    cy.wrap(fieldsetElement).get('[aria-label="Mois de début"]').clear()
    cy.wrap(fieldsetElement).get('[aria-label="Année de début"]').clear()

    cy.wrap(fieldsetElement).get('[aria-label="Heure de début"]').clear()
    cy.wrap(fieldsetElement).get('[aria-label="Minute de début"]').clear()

    cy.wrap(fieldsetElement).get('[aria-label="Jour de fin"]').clear()
    cy.wrap(fieldsetElement).get('[aria-label="Mois de fin"]').clear()
    cy.wrap(fieldsetElement).get('[aria-label="Année de fin"]').clear()

    cy.wrap(fieldsetElement).get('[aria-label="Heure de fin"]').clear()
    cy.wrap(fieldsetElement).get('[aria-label="Minute de fin"]').clear()

    return
  }

  const [startDate, endDate] = dateRange

  const startDateAsDayjs = dayjs(startDate)
  const endDateAsDayjs = dayjs(endDate)
  const hasTimeInput = inputElements.length !== 7

  cy.wrap(fieldsetElement).get('[aria-label="Jour de début"]').type(startDateAsDayjs.format('DD'))
  cy.wrap(fieldsetElement).get('[aria-label="Mois de début"]').type(startDateAsDayjs.format('MM'))
  cy.wrap(fieldsetElement).get('[aria-label="Année de début"]').type(startDateAsDayjs.format('YYYY'))

  if (hasTimeInput) {
    cy.wrap(fieldsetElement).get('[aria-label="Heure de début"]').type(startDateAsDayjs.format('HH'))
    cy.wrap(fieldsetElement).get('[aria-label="Minute de début"]').type(startDateAsDayjs.format('mm'))
  }

  cy.wrap(fieldsetElement).get('[aria-label="Jour de fin"]').type(endDateAsDayjs.format('DD'))
  cy.wrap(fieldsetElement).get('[aria-label="Mois de fin"]').type(endDateAsDayjs.format('MM'))
  cy.wrap(fieldsetElement).get('[aria-label="Année de fin"]').type(endDateAsDayjs.format('YYYY'))

  if (hasTimeInput) {
    cy.wrap(fieldsetElement).get('[aria-label="Heure de fin"]').type(endDateAsDayjs.format('HH'))
    cy.wrap(fieldsetElement).get('[aria-label="Minute de fin"]').type(endDateAsDayjs.format('mm'))
  }
}
