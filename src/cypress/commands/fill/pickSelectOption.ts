export function pickSelectOption(
  cypressSelectInputElement: Cypress.Chainable<JQuery<HTMLElement>>,
  value: string | undefined
) {
  cypressSelectInputElement
    .parents('.Field-Select')
    .scrollIntoView()
    .then(([fieldElement]) => {
      if (!fieldElement) {
        throw new Error('`fieldElement` is undefined.')
      }

      cy.wrap(fieldElement).scrollIntoView()

      const maybeCleanButton = fieldElement.querySelector('.rs-picker-toggle-clean')
      if (maybeCleanButton) {
        cy.wrap(fieldElement).find('.rs-picker-toggle-clean').scrollIntoView().forceClick().wait(250)
      }

      if (!value) {
        return
      }

      cy.wrap(fieldElement).find('.rs-picker-toggle').forceClick()

      cy.get('.rs-picker-select-menu').then(([selectMenuElement]) => {
        if (!selectMenuElement) {
          throw new Error('`selectMenuElement` is undefined.')
        }

        const maybeSearchInput = selectMenuElement.querySelector('.rs-picker-search-bar-input')
        if (maybeSearchInput) {
          cy.wrap(selectMenuElement).find('.rs-picker-search-bar-input').type(value)
        }

        cy.wrap(selectMenuElement)
          .get('.rs-picker-select-menu-item')
          .contains(value)
          .scrollIntoView()
          .click({ force: true })
      })
    })
}
