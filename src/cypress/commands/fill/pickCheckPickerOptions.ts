export function pickCheckPickerOptions(
  cypressCheckPickerInputElement: Cypress.Chainable<JQuery<HTMLElement>>,
  values: string[] | undefined
) {
  cypressCheckPickerInputElement.parents('.Field-CheckPicker').then(([fieldElement]) => {
    if (!fieldElement) {
      throw new Error('`fieldElement` is undefined.')
    }

    const fieldElementOffsetLeft = fieldElement.offsetLeft
      ? fieldElement.offsetLeft
      : (() => {
          if (!fieldElement.offsetParent) {
            throw new Error('`fieldElement.offsetParent` is undefined.')
          }

          return (fieldElement.offsetParent as HTMLBodyElement).offsetLeft
        })()
    const fieldElementOffsetTop =
      fieldElement.offsetTop !== 0
        ? fieldElement.offsetTop
        : (() => {
            if (!fieldElement.offsetParent) {
              throw new Error('`fieldElement.offsetParent` is undefined.')
            }

            return (fieldElement.offsetParent as HTMLBodyElement).offsetTop
          })()

    cy.wrap(fieldElement).scrollIntoView()

    const maybeCleanButton = fieldElement.querySelector('.rs-picker-toggle-clean')
    if (maybeCleanButton) {
      cy.wrap(fieldElement).find('.rs-picker-toggle-clean').forceClick().wait(250)
    }

    if (!values) {
      return
    }

    cy.wrap(fieldElement).find('.rs-picker-toggle').forceClick()

    cy.get('.rs-picker-check-menu').then(([CheckPickerMenuElement]) => {
      if (!CheckPickerMenuElement) {
        throw new Error('`CheckPickerMenuElement` is undefined.')
      }

      const maybeSearchInput = CheckPickerMenuElement.querySelector('.rs-picker-search-bar-input')
      values.forEach(value => {
        if (maybeSearchInput) {
          cy.get('.rs-picker-check-menu').find('.rs-picker-search-bar-input').type(value)
        }

        cy.get('.rs-picker-check-menu').find('[role="option"]').contains(value).scrollIntoView().forceClick()
      })

      // TODO Investigate that (this should be -1).
      cy.clickOutside(fieldElementOffsetLeft, fieldElementOffsetTop - 16)
      cy.wait(250)
    })
  })
}
