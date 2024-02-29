import { throwError } from '../../utils/throwError'

export function fillDateRangePicker(
  fieldsetElement: HTMLElement,
  dateOrDateWithTimeTupleRange: Cypress.DateRangeTuple | Cypress.DateWithTimeRangeTuple | undefined,
  _label: string
): void {
  Cypress.log({
    consoleProps: () => ({
      'Applied to': fieldsetElement,
      Elements: 1
    }),
    name: 'fillDateRangePicker'
  })

  const inputElements = fieldsetElement.querySelectorAll('input')
  if (inputElements.length !== 7 && inputElements.length !== 11) {
    throwError(`Expected to find 7 or 11 inputs within in DatePicker but found ${inputElements.length}.`)
  }
  const hasTimeInput = inputElements.length !== 7

  // Empty the inputs if `dateOrDateWithTimeTupleRange` is undefined
  if (!dateOrDateWithTimeTupleRange) {
    cy.wrap(fieldsetElement).find('[aria-label="Jour de début"]').forceClear()
    cy.wrap(fieldsetElement).find('[aria-label="Mois de début"]').forceClear()
    cy.wrap(fieldsetElement).find('[aria-label="Année de début"]').forceClear()

    if (hasTimeInput) {
      cy.wrap(fieldsetElement).find('[aria-label="Heure de début"]').forceClear()
      cy.wrap(fieldsetElement).find('[aria-label="Minute de début"]').forceClear()
    }

    cy.wrap(fieldsetElement).find('[aria-label="Jour de fin"]').forceClear()
    cy.wrap(fieldsetElement).find('[aria-label="Mois de fin"]').forceClear()
    cy.wrap(fieldsetElement).find('[aria-label="Année de fin"]').forceClear()

    if (hasTimeInput) {
      cy.wrap(fieldsetElement).find('[aria-label="Heure de fin"]').forceClear()
      cy.wrap(fieldsetElement).find('[aria-label="Minute de fin"]').forceClear()
    }
  }

  // Fill the inputs if `dateOrDateWithTimeTupleRange` is defined
  else {
    const [startDateOrDateWithTimeTuple, endDateOrDateWithTimeTuple] = dateOrDateWithTimeTupleRange

    const [startYear, startMonth, startDay, startHour, startMinute] = startDateOrDateWithTimeTuple
    const [endYear, endMonth, endDay, endHour, endMinute] = endDateOrDateWithTimeTuple

    cy.wrap(fieldsetElement).find('[aria-label="Jour de début"]').forceType(String(startDay).padStart(2, '0'))
    cy.wrap(fieldsetElement).find('[aria-label="Mois de début"]').forceType(String(startMonth).padStart(2, '0'))
    cy.wrap(fieldsetElement).find('[aria-label="Année de début"]').forceType(String(startYear))

    if (hasTimeInput) {
      cy.wrap(fieldsetElement).find('[aria-label="Heure de début"]').forceType(String(startHour).padStart(2, '0'))
      cy.wrap(fieldsetElement).find('[aria-label="Minute de début"]').forceType(String(startMinute).padStart(2, '0'))
    }

    cy.wrap(fieldsetElement).find('[aria-label="Jour de fin"]').forceType(String(endDay).padStart(2, '0'))
    cy.wrap(fieldsetElement).find('[aria-label="Mois de fin"]').forceType(String(endMonth).padStart(2, '0'))
    cy.wrap(fieldsetElement).find('[aria-label="Année de fin"]').forceType(String(endYear))

    if (hasTimeInput) {
      cy.wrap(fieldsetElement).find('[aria-label="Heure de fin"]').forceType(String(endHour).padStart(2, '0'))
      cy.wrap(fieldsetElement).find('[aria-label="Minute de fin"]').forceType(String(endMinute).padStart(2, '0'))
    }
  }

  cy.wait(250)

  // Close the range calendar & ranged time picker popup by pressing the escape key
  cy.get('body').forceType('{esc}')
  // TODO Create a util to handle the `fieldsetElement` re-creation cases.
  // We to use a `wait` as a temporary fix to handle `fieldsetElement` re-creation cases.
  cy.wait(250)
  // cy.wrap(fieldsetElement).find('.Field-DateRangePicker__RangeCalendarPicker').should('not.be.visible')
  // cy.wrap(fieldsetElement).find('.Field-DateRangePicker__RangedTimePicker').should('not.exist')
}
