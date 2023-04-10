export function fillDatePicker(
  fieldsetElement: HTMLElement,
  dateOrDateWithTimeTuple: Cypress.DateTuple | Cypress.DateWithTimeTuple | undefined
): void {
  const inputElements = fieldsetElement.querySelectorAll('input')
  if (inputElements.length !== 4 && inputElements.length !== 6) {
    throw new Error(`Expected to find 4 or 6 inputs within in DatePicker but found ${inputElements.length}.`)
  }

  const hasTimeInput = inputElements.length !== 4
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

  if (!dateOrDateWithTimeTuple) {
    cy.wrap(fieldsetElement).get('[aria-label="Jour"]').clear()
    cy.wrap(fieldsetElement).get('[aria-label="Mois"]').clear()
    cy.wrap(fieldsetElement).get('[aria-label="Année"]').clear()

    if (hasTimeInput) {
      cy.wrap(fieldsetElement).get('[aria-label="Heure"]').clear()
      cy.wrap(fieldsetElement).get('[aria-label="Minute"]').clear()
    }

    cy.clickOutside(fieldsetElementOffsetLeft, fieldsetElementOffsetTop - 1)
    cy.wait(250)

    return
  }

  const [year, month, day, hour, minute] = dateOrDateWithTimeTuple

  cy.wrap(fieldsetElement).get('[aria-label="Jour"]').type(String(day).padStart(2, '0'))
  cy.wrap(fieldsetElement).get('[aria-label="Mois"]').type(String(month).padStart(2, '0'))
  cy.wrap(fieldsetElement).get('[aria-label="Année"]').type(String(year))

  if (hasTimeInput) {
    cy.wrap(fieldsetElement).get('[aria-label="Heure"]').type(String(hour).padStart(2, '0'))
    cy.wrap(fieldsetElement).get('[aria-label="Minute"]').type(String(minute).padStart(2, '0'))
  }

  cy.clickOutside(fieldsetElementOffsetLeft, fieldsetElementOffsetTop - 1)
  cy.wait(250)
}
