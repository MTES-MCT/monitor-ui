import { throwError } from 'cypress/utils/throwError'

export function pickSelectOption(fieldElement: HTMLDivElement, value: string | undefined, fieldLabel: string) {
  cy.wrap(fieldElement).scrollIntoView({ offset: { left: 0, top: -100 } })

  // Clear the field if there is a clear button
  const clearButton = fieldElement.querySelector('.rs-stack > .rs-stack-item > .rs-picker-clean')
  if (clearButton) {
    cy.wrap(fieldElement).find('.rs-stack > .rs-stack-item > .rs-picker-clean').click({ force: true }).wait(250)
  }

  // If the value is undefined, we don't need to select anything
  if (!value) {
    return
  }

  // Open the picker
  cy.wrap(fieldElement).find('.rs-stack > .rs-stack-item > .rs-picker-caret-icon').forceClick().wait(250)

  // Wait for the picker to open
  cy.wrap(fieldElement)
    .get('.rs-picker-popup')
    .then(([rsuitePickerPopupElement]) => {
      if (!rsuitePickerPopupElement) {
        throwError(`Could not find '.rs-picker-popup' in in field with label "${fieldLabel}". Did the picker open?`)
      }

      // Search for the value if there is a search input
      const searchInput = rsuitePickerPopupElement.querySelector('input[role="searchbox"]')
      if (searchInput) {
        cy.wrap(rsuitePickerPopupElement).find('input[role="searchbox"]').type(value).wait(250)
      }

      cy.wrap(rsuitePickerPopupElement).find('[role="option"]').contains(value).scrollIntoView().forceClick()
    })
}
