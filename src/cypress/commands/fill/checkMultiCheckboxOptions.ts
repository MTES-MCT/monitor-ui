export function checkMultiCheckboxOptions(
  fieldsetElement: HTMLElement,
  values: string[] | undefined,
  _label: string,
  force: boolean
) {
  Cypress.log({
    consoleProps: () => ({
      'Applied to': fieldsetElement,
      Elements: 1
    }),
    name: 'checkMultiCheckboxOptions'
  })

  cy.wrap(fieldsetElement).scrollIntoView({ offset: { left: 0, top: -100 } })

  cy.wrap(fieldsetElement).find('input[type="checkbox"]').uncheck({ force }).wait(250)

  // If `values` is undefined, we don't need to check anything
  if (!values) {
    return
  }

  values.forEach(value => {
    cy.wrap(fieldsetElement).find('label').contains(value).find('input[type="checkbox"]').check({ force })
  })

  cy.wait(250)
}
