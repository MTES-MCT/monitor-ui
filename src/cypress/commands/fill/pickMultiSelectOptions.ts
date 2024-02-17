import { throwError } from 'cypress/utils/throwError'

export function pickMultiSelectOptions(fieldElement: HTMLDivElement, values: string[] | undefined, fieldLabel: string) {
  cy.wrap(fieldElement).scrollIntoView()

  // Clear the field if there is a clear button
  const clearButton = fieldElement.querySelector('.rs-stack > .rs-stack-item > .rs-picker-clean')
  if (clearButton) {
    cy.wrap(fieldElement).find('.rs-stack > .rs-stack-item > .rs-picker-clean').click({ force: true }).wait(250)
  }

  // If the value is undefined, we don't need to select anything
  if (!values) {
    return
  }

  cy.wrap(fieldElement).find('.rs-picker-toggle').forceClick()

  // Wait for the picker to open
  cy.wrap(fieldElement)
    .get('.rs-picker-popup')
    .then(([rsuitePickerPopupElement]) => {
      if (!rsuitePickerPopupElement) {
        throwError(`Could not find '.rs-picker-popup' in in field with label "${fieldLabel}". Did the picker open?`)
      }

      const maybeSearchInput = rsuitePickerPopupElement.querySelector('input[role="searchbox"]')
      values.forEach(value => {
        // Search for the value if there is a search input
        if (maybeSearchInput) {
          cy.wrap(rsuitePickerPopupElement).find('input[role="searchbox"]').type(value).wait(250)
        }

        cy.wrap(rsuitePickerPopupElement).find('[role="option"]').contains(value).scrollIntoView().forceClick()
      })

      cy.get('body').wait(250).type('{esc}')
      cy.wrap(fieldElement).find('.rs-picker-popup').should('not.exist')
    })
}
