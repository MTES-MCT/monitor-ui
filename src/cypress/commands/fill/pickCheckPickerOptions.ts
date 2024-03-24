import { throwError } from 'cypress/utils/throwError'

export function pickCheckPickerOptions(
  fieldElement: HTMLDivElement,
  values: string[] | undefined,
  label: string,
  force: boolean,
  delay: number
) {
  Cypress.log({
    consoleProps: () => ({
      'Applied to': fieldElement,
      Elements: 1
    }),
    name: 'pickCheckPickerOptions'
  })

  cy.wrap(fieldElement).scrollIntoView({ offset: { left: 0, top: -100 } })

  // Clear the field if there is a clear button
  const maybeClearButton = fieldElement.querySelector('.rs-stack > .rs-stack-item > .rs-picker-clean')
  if (maybeClearButton) {
    cy.wrap(fieldElement).find('.rs-stack > .rs-stack-item > .rs-picker-clean').click({ force }).wait(250)
  }

  // If `values` is undefined, we don't need to select anything
  if (!values) {
    return
  }

  cy.wrap(fieldElement).find('.rs-picker-toggle').click({ force })

  // Wait for the picker to open
  cy.wrap(fieldElement)
    .find('.rs-picker-popup')
    .then(([rsuitePickerPopupElement]) => {
      if (!rsuitePickerPopupElement) {
        throwError(`Could not find '.rs-picker-popup' in in field with label "${label}". Did the picker open?`)
      }

      // Search for the value if there is a search input
      const maybeSearchInput = rsuitePickerPopupElement.querySelector('input[role="searchbox"]')
      values.forEach(value => {
        if (maybeSearchInput) {
          cy.wrap(rsuitePickerPopupElement)
            .find('input[role="searchbox"]')
            .clear()
            .type(value, { delay, force })
            .wait(250)
        }

        cy.wrap(rsuitePickerPopupElement).find('[role="option"]').contains(value).scrollIntoView().click({ force })
      })

      // Close the picker popup by pressing the escape key
      cy.get('body').type('{esc}', { delay, force })
      // TODO Create a util to handle the `fieldElement` re-creation cases.
      // We to use a `wait` as a temporary fix to handle `fieldElement` re-creation cases.
      cy.wait(250)
      // cy.wrap(fieldElement).find('.rs-picker-popup').should('not.exist')
    })
}
