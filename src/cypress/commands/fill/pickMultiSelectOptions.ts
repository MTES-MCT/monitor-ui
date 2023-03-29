export function pickMultiSelectOptions(
  cypressMultiSelectInputElement: Cypress.Chainable<JQuery<HTMLElement>>,
  values: string[] | undefined
) {
  cypressMultiSelectInputElement
    .parent()
    .parent()
    .parent()
    .parent()
    .parent()
    .then(([rsuiteMultiSelectWrapperElement]) => {
      if (!rsuiteMultiSelectWrapperElement) {
        throw new Error('This should never happen.')
      }

      const maybeClearButton = rsuiteMultiSelectWrapperElement.querySelector('.rs-picker-toggle-clean')
      if (maybeClearButton) {
        cy.wrap(maybeClearButton).scrollIntoView().click({ force: true }).wait(250)
      }

      if (!values) {
        return
      }

      cy.wrap(rsuiteMultiSelectWrapperElement).scrollIntoView()

      cy.wrap(rsuiteMultiSelectWrapperElement).get('.rs-picker-toggle-caret').click()

      cy.get('.rs-picker-picker-check-menu').then(([rsuiteMultiSelectMenu]) => {
        if (!rsuiteMultiSelectMenu) {
          throw new Error('This should never happen.')
        }

        const maybeSearchInput = rsuiteMultiSelectMenu.querySelector('.rs-picker-search-bar-input')
        values.forEach(value => {
          if (maybeSearchInput) {
            cy.wrap(maybeSearchInput).scrollIntoView().type(value)
          }

          cy.get('.rs-checkbox-checker').contains(value).scrollIntoView().click({ force: true })
        })

        const offsetLeft = rsuiteMultiSelectWrapperElement.offsetLeft
          ? rsuiteMultiSelectWrapperElement.offsetLeft
          : (() => {
              if (!rsuiteMultiSelectWrapperElement.offsetParent) {
                throw new Error('`rsuiteMultiSelectWrapperElement.offsetParent` is undefined.')
              }

              return (rsuiteMultiSelectWrapperElement.offsetParent as HTMLBodyElement).offsetLeft
            })()
        const offsetTop =
          rsuiteMultiSelectWrapperElement.offsetTop !== 0
            ? rsuiteMultiSelectWrapperElement.offsetTop
            : (() => {
                if (!rsuiteMultiSelectWrapperElement.offsetParent) {
                  throw new Error('`rsuiteMultiSelectWrapperElement.offsetParent` is undefined.')
                }

                return (rsuiteMultiSelectWrapperElement.offsetParent as HTMLBodyElement).offsetTop
              })()

        // TODO Investigate that (this should be -1).
        cy.clickOutside(offsetLeft, offsetTop - 16)

        cy.wait(250)
      })
    })
}
