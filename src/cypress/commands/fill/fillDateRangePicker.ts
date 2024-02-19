import { throwError } from '../../utils/throwError'

export function fillDateRangePicker(
  fieldsetElement: HTMLElement,
  dateOrDateWithTimeTupleRange: Cypress.DateRangeTuple | Cypress.DateWithTimeRangeTuple | undefined,
  _label: string
): void {
  const inputElements = fieldsetElement.querySelectorAll('input')
  if (inputElements.length !== 7 && inputElements.length !== 11) {
    throwError(`Expected to find 7 or 11 inputs within in DatePicker but found ${inputElements.length}.`)
  }
  const hasTimeInput = inputElements.length !== 7

  // Empty the inputs if `dateOrDateWithTimeTupleRange` is undefined
  if (!dateOrDateWithTimeTupleRange) {
    cy.wrap(fieldsetElement).find('[aria-label="Jour de début"]').clear({ force: true })
    cy.wrap(fieldsetElement).find('[aria-label="Mois de début"]').clear({ force: true })
    cy.wrap(fieldsetElement).find('[aria-label="Année de début"]').clear({ force: true })

    if (hasTimeInput) {
      cy.wrap(fieldsetElement).find('[aria-label="Heure de début"]').clear({ force: true })
      cy.wrap(fieldsetElement).find('[aria-label="Minute de début"]').clear({ force: true })
    }

    cy.wrap(fieldsetElement).find('[aria-label="Jour de fin"]').clear({ force: true })
    cy.wrap(fieldsetElement).find('[aria-label="Mois de fin"]').clear({ force: true })
    cy.wrap(fieldsetElement).find('[aria-label="Année de fin"]').clear({ force: true })

    if (hasTimeInput) {
      cy.wrap(fieldsetElement).find('[aria-label="Heure de fin"]').clear({ force: true })
      cy.wrap(fieldsetElement).find('[aria-label="Minute de fin"]').clear({ force: true })
    }
  }

  // Fill the inputs if `dateOrDateWithTimeTupleRange` is defined
  else {
    const [startDateOrDateWithTimeTuple, endDateOrDateWithTimeTuple] = dateOrDateWithTimeTupleRange

    const [startYear, startMonth, startDay, startHour, startMinute] = startDateOrDateWithTimeTuple
    const [endYear, endMonth, endDay, endHour, endMinute] = endDateOrDateWithTimeTuple

    cy.wrap(fieldsetElement).find('[aria-label="Jour de début"]').type(String(startDay).padStart(2, '0'))
    cy.wrap(fieldsetElement).find('[aria-label="Mois de début"]').type(String(startMonth).padStart(2, '0'))
    cy.wrap(fieldsetElement).find('[aria-label="Année de début"]').type(String(startYear))

    if (hasTimeInput) {
      cy.wrap(fieldsetElement).find('[aria-label="Heure de début"]').type(String(startHour).padStart(2, '0'))
      cy.wrap(fieldsetElement).find('[aria-label="Minute de début"]').type(String(startMinute).padStart(2, '0'))
    }

    cy.wrap(fieldsetElement).find('[aria-label="Jour de fin"]').type(String(endDay).padStart(2, '0'))
    cy.wrap(fieldsetElement).find('[aria-label="Mois de fin"]').type(String(endMonth).padStart(2, '0'))
    cy.wrap(fieldsetElement).find('[aria-label="Année de fin"]').type(String(endYear))

    if (hasTimeInput) {
      cy.wrap(fieldsetElement).find('[aria-label="Heure de fin"]').type(String(endHour).padStart(2, '0'))
      cy.wrap(fieldsetElement).find('[aria-label="Minute de fin"]').type(String(endMinute).padStart(2, '0'))
    }
  }

  cy.wait(250)

  // Close the range calendar & ranged time picker popup by pressing the escape key
  cy.get('body').type('{esc}')
  cy.wrap(fieldsetElement).find('.Field-DateRangePicker__RangeCalendarPicker').should('not.be.visible')
  cy.wrap(fieldsetElement).find('.Field-DateRangePicker__RangedTimePicker').should('not.exist')
}
