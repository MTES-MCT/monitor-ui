import { throwError } from '../../utils/throwError'

export function fillDatePicker(
  fieldsetElement: HTMLElement,
  dateOrDateWithTimeTuple: Cypress.DateTuple | Cypress.DateWithTimeTuple | undefined,
  _label: string
): void {
  Cypress.log({
    consoleProps: () => ({
      'Applied to': fieldsetElement,
      Elements: 1
    }),
    name: 'fillDatePicker'
  })

  const inputElements = fieldsetElement.querySelectorAll('input')
  if (inputElements.length !== 4 && inputElements.length !== 6) {
    throwError(`Expected to find 4 or 6 inputs within in DatePicker but found ${inputElements.length}.`)
  }
  const hasTimeInputs = inputElements.length === 6

  // Empty the inputs if `dateOrDateWithTimeTuple` is undefined
  if (!dateOrDateWithTimeTuple) {
    // -------------------------------------------------------------------------
    // Date without time

    cy.wrap(fieldsetElement).find('[aria-label="Jour"]').forceClear()
    cy.wrap(fieldsetElement).find('[aria-label="Mois"]').forceClear()
    cy.wrap(fieldsetElement).find('[aria-label="Année"]').forceClear()

    if (hasTimeInputs) {
      cy.wrap(fieldsetElement).find('[aria-label="Heure"]').forceClear()
      cy.wrap(fieldsetElement).find('[aria-label="Minute"]').forceClear()
    }
  }

  // Fill the inputs if `dateOrDateWithTimeTuple` is defined
  else {
    const [year, month, day] = dateOrDateWithTimeTuple

    cy.wrap(fieldsetElement).find('[aria-label="Jour"]').forceType(String(day).padStart(2, '0'))
    cy.wrap(fieldsetElement).find('[aria-label="Mois"]').forceType(String(month).padStart(2, '0'))
    cy.wrap(fieldsetElement).find('[aria-label="Année"]').forceType(String(year))

    if (hasTimeInputs) {
      const [hour, minute] = dateOrDateWithTimeTuple.slice(3)

      cy.wrap(fieldsetElement).find('[aria-label="Heure"]').forceType(String(hour).padStart(2, '0'))
      cy.wrap(fieldsetElement).find('[aria-label="Minute"]').forceType(String(minute).padStart(2, '0'))
    }
  }

  cy.wait(250)

  // Close the calendar & ranged time picker popup by pressing the escape key
  cy.get('body').forceType('{esc}')
  // TODO Create a util to handle the `fieldsetElement` re-creation cases.
  // We to use a `wait` as a temporary fix to handle `fieldsetElement` re-creation cases.
  cy.wait(250)
  // cy.wrap(fieldsetElement).find('.Field-DatePicker__CalendarPicker').should('not.be.visible')
  // cy.wrap(fieldsetElement).find('.Field-DateRangePicker__RangedTimePicker').should('not.exist')
}
