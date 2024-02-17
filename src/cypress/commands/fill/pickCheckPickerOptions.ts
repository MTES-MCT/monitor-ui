import { throwError } from 'cypress/utils/throwError'

export function pickCheckPickerOptions(fieldElement: HTMLDivElement, values: string[] | undefined, fieldLabel: string) {
  cy.wrap(fieldElement).scrollIntoView()

  const maybeCleanButton = fieldElement.querySelector('.rs-picker-toggle-clean')
  if (maybeCleanButton) {
    cy.wrap(fieldElement).find('.rs-picker-toggle-clean').forceClick().wait(250)
  }

  if (!values) {
    return
  }

  cy.wrap(fieldElement).find('.rs-picker-toggle').forceClick()

  cy.wrap(fieldElement)
    .find('.rs-picker-popup')
    .then(([rsuitePickerPopupElement]) => {
      if (!rsuitePickerPopupElement) {
        throwError(`Could not find '.rs-picker-popup' in in field with label "${fieldLabel}". Did the picker open?`)
      }

      const maybeSearchInput = rsuitePickerPopupElement.querySelector('.rs-picker-search-bar-input')
      values.forEach(value => {
        if (maybeSearchInput) {
          cy.get('.rs-picker-popup').find('.rs-picker-search-bar-input').type(value)
        }

        cy.get('.rs-picker-popup').find('[role="option"]').contains(value).scrollIntoView().forceClick()
      })

      cy.wrap(fieldElement).find('.rs-picker-popup').should('not.exist')
    })
}
