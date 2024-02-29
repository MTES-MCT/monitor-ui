import { throwError } from 'cypress/utils/throwError'

export function pickSelectOption(fieldElement: HTMLDivElement, value: string | undefined, label: string) {
  Cypress.log({
    consoleProps: () => ({
      'Applied to': fieldElement,
      Elements: 1
    }),
    name: 'pickSelectOption'
  })

  cy.wrap(fieldElement).scrollIntoView({ offset: { left: 0, top: -100 } })

  // Clear the field if there is a clear button
  const maybeClearButton = fieldElement.querySelector('.rs-stack > .rs-stack-item > .rs-picker-clean')
  if (maybeClearButton) {
    cy.wrap(fieldElement).find('.rs-stack > .rs-stack-item > .rs-picker-clean').forceClick().wait(250)
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
        throwError(`Could not find '.rs-picker-popup' in in field with label "${label}". Did the picker open?`)
      }

      // Search for the value if there is a search input
      const maybeSearchInput = rsuitePickerPopupElement.querySelector('input[role="searchbox"]')
      if (maybeSearchInput) {
        cy.wrap(rsuitePickerPopupElement).find('input[role="searchbox"]').forceType(value).wait(250)
      }

      cy.wrap(rsuitePickerPopupElement).find('[role="option"]').contains(value).scrollIntoView().forceClick().wait(250)
    })
}
