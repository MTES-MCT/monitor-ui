import dayjs from 'dayjs'

export function fillDatePicker(fieldsetElement: HTMLElement, date: Date | undefined): void {
  const inputElements = fieldsetElement.querySelectorAll('input')
  if (inputElements.length !== 4 && inputElements.length !== 6) {
    throw new Error(`Expected to find 4 or 6 inputs within in DatePicker but found ${inputElements.length}.`)
  }

  const dateAsDayjs = dayjs(date)
  const hasTimeInput = inputElements.length !== 4

  if (!date) {
    cy.wrap(fieldsetElement).get('[aria-label="Jour"]').clear()
    cy.wrap(fieldsetElement).get('[aria-label="Mois"]').clear()
    cy.wrap(fieldsetElement).get('[aria-label="Année"]').clear()

    cy.wrap(fieldsetElement).get('[aria-label="Heure"]').clear()
    cy.wrap(fieldsetElement).get('[aria-label="Minute"]').clear()

    return
  }

  cy.wrap(fieldsetElement).get('[aria-label="Jour"]').type(dateAsDayjs.format('DD'))
  cy.wrap(fieldsetElement).get('[aria-label="Mois"]').type(dateAsDayjs.format('MM'))
  cy.wrap(fieldsetElement).get('[aria-label="Année"]').type(dateAsDayjs.format('YYYY'))

  if (hasTimeInput) {
    cy.wrap(fieldsetElement).get('[aria-label="Heure"]').type(dateAsDayjs.format('HH'))
    cy.wrap(fieldsetElement).get('[aria-label="Minute"]').type(dateAsDayjs.format('mm'))
  }
}
