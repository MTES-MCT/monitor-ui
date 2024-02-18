export function checkMultiCheckboxOptions(fieldsetElement: HTMLElement, values: string[] | undefined, _label: string) {
  cy.wrap(fieldsetElement).scrollIntoView({ offset: { left: 0, top: -100 } })

  cy.wrap(fieldsetElement).find('input[type="checkbox"]').uncheck({ force: true }).wait(250)

  // If `values` is undefined, we don't need to check anything
  if (!values) {
    return
  }

  values.forEach(value => {
    cy.wrap(fieldsetElement).find('label').contains(value).find('input[type="checkbox"]').check({ force: true })
  })

  cy.wait(250)
}
