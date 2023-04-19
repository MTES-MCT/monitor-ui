export function fillDateRangePicker(
  fieldsetElement: HTMLElement,
  dateOrDateWithTimeTupleRange:
    | [Cypress.DateTuple, Cypress.DateTuple]
    | [Cypress.DateWithTimeTuple, Cypress.DateWithTimeTuple]
    | undefined
): void {
  const inputElements = fieldsetElement.querySelectorAll('input')
  if (inputElements.length !== 7 && inputElements.length !== 11) {
    throw new Error(`Expected to find 7 or 11 inputs within in DatePicker but found ${inputElements.length}.`)
  }

  const hasTimeInput = inputElements.length !== 7
  const fieldsetElementOffsetLeft = fieldsetElement.offsetLeft
    ? fieldsetElement.offsetLeft
    : (() => {
        if (!fieldsetElement.offsetParent) {
          throw new Error('`fieldsetElement.offsetParent` is undefined.')
        }

        return (fieldsetElement.offsetParent as HTMLBodyElement).offsetLeft
      })()
  const fieldsetElementOffsetTop =
    fieldsetElement.offsetTop !== 0
      ? fieldsetElement.offsetTop
      : (() => {
          if (!fieldsetElement.offsetParent) {
            throw new Error('`fieldsetElement.offsetParent` is undefined.')
          }

          return (fieldsetElement.offsetParent as HTMLBodyElement).offsetTop
        })()

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

    cy.clickOutside(fieldsetElementOffsetLeft, fieldsetElementOffsetTop - 1)
    cy.wait(250)

    return
  }

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

  cy.clickOutside(fieldsetElementOffsetLeft, fieldsetElementOffsetTop - 1)
  cy.wait(250)
}
