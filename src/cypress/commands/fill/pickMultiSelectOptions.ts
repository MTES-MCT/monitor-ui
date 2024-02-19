import { throwError } from 'cypress/utils/throwError'

export function pickMultiSelectOptions(fieldElement: HTMLDivElement, values: string[] | undefined, label: string) {
  cy.wrap(fieldElement).scrollIntoView({ offset: { left: 0, top: -100 } })

  // Clear the field if there is a clear button
  const maybeClearButton = fieldElement.querySelector('.rs-stack > .rs-stack-item > .rs-picker-clean')
  if (maybeClearButton) {
    cy.wrap(fieldElement).find('.rs-stack > .rs-stack-item > .rs-picker-clean').click({ force: true }).wait(250)
  }

  // If `values` is undefined, we don't need to select anything
  if (!values) {
    return
  }

  cy.wrap(fieldElement).find('.rs-picker-toggle').forceClick()

  // Wait for the picker to open
  cy.wrap(fieldElement)
    .get('.rs-picker-popup')
    .then(([rsuitePickerPopupElement]) => {
      if (!rsuitePickerPopupElement) {
        throwError(`Could not find '.rs-picker-popup' in in field with label "${label}". Did the picker open?`)
      }

      const maybeSearchInput = rsuitePickerPopupElement.querySelector('input[role="searchbox"]')
      values.forEach(value => {
        // Search for the value if there is a search input
        if (maybeSearchInput) {
          cy.wrap(rsuitePickerPopupElement).find('input[role="searchbox"]').type(value).wait(250)
        }

        cy.wrap(rsuitePickerPopupElement).find('[role="option"]').contains(value).scrollIntoView().forceClick()
      })

      // Close the picker popup by pressing the escape key
      cy.get('body').type('{esc}')
      cy.wrap(fieldElement).find('.rs-picker-popup').should('not.exist')
    })
}
