export function pickSelectOption(
  cypressSelectInputElement: Cypress.Chainable<JQuery<HTMLElement>>,
  value: string | undefined
) {
  cypressSelectInputElement
    .parent()
    .parent()
    .parent()
    .parent()
    .parent()
    .scrollIntoView()
    .then(([rsuiteSelectWrapperElement]) => {
      if (!rsuiteSelectWrapperElement) {
        throw new Error('This should never happen.')
      }

      const maybeClearButton = rsuiteSelectWrapperElement.querySelector('.rs-picker-toggle-clean')
      if (maybeClearButton) {
        cy.wrap(maybeClearButton).scrollIntoView().click({ force: true })
      }

      if (!value) {
        return
      }

      cy.wrap(rsuiteSelectWrapperElement).scrollIntoView().get('.rs-picker-toggle-caret').click()

      cy.get('.rs-picker-select-menu').then(([rsuiteSelectMenu]) => {
        if (!rsuiteSelectMenu) {
          throw new Error('This should never happen.')
        }

        const maybeSearchInput = rsuiteSelectMenu.querySelector('.rs-picker-search-bar-input')
        if (maybeSearchInput) {
          cy.wrap(maybeSearchInput).scrollIntoView().type(value)
        }

        cy.get('.rs-picker-select-menu-item').contains(value).scrollIntoView().click({ force: true })
      })
    })

  return cypressSelectInputElement
}
