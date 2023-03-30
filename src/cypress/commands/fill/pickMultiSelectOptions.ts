export function pickMultiSelectOptions(
  cypressMultiSelectInputElement: Cypress.Chainable<JQuery<HTMLElement>>,
  values: string[] | undefined
) {
  cypressMultiSelectInputElement.parents('.Field-MultiSelect').then(([fieldElement]) => {
    if (!fieldElement) {
      throw new Error('`fieldElement` is undefined.')
    }

    cy.wrap(fieldElement).scrollIntoView()

    const maybeCleanButton = fieldElement.querySelector('.rs-picker-toggle-clean')
    if (maybeCleanButton) {
      cy.wrap(fieldElement).find('.rs-picker-toggle-clean').forceClick().wait(250)
    }

    if (!values) {
      return
    }

    cy.wrap(fieldElement).find('.rs-picker-toggle-caret').forceClick()

    cy.get('.rs-picker-picker-check-menu').then(([multiSelectMenuElement]) => {
      if (!multiSelectMenuElement) {
        throw new Error('`multiSelectMenuElement` is undefined.')
      }

      const maybeSearchInput = multiSelectMenuElement.querySelector('.rs-picker-search-bar-input')
      values.forEach(value => {
        if (maybeSearchInput) {
          cy.get('.rs-picker-picker-check-menu').find('.rs-picker-search-bar-input').type(value)
        }

        cy.get('.rs-picker-picker-check-menu')
          .find('.rs-checkbox-checker')
          .contains(value)
          .scrollIntoView()
          .forceClick()
      })

      const offsetLeft = fieldElement.offsetLeft
        ? fieldElement.offsetLeft
        : (() => {
            if (!fieldElement.offsetParent) {
              throw new Error('`fieldElement.offsetParent` is undefined.')
            }

            return (fieldElement.offsetParent as HTMLBodyElement).offsetLeft
          })()
      const offsetTop =
        fieldElement.offsetTop !== 0
          ? fieldElement.offsetTop
          : (() => {
              if (!fieldElement.offsetParent) {
                throw new Error('`fieldElement.offsetParent` is undefined.')
              }

              return (fieldElement.offsetParent as HTMLBodyElement).offsetTop
            })()

      // TODO Investigate that (this should be -1).
      cy.clickOutside(offsetLeft, offsetTop - 16)

      cy.wait(250)
    })
  })
}
