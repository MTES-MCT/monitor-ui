export function checkCheckbox(
  fieldElement: HTMLDivElement,
  value: boolean | undefined,
  _label: string,
  force: boolean
) {
  Cypress.log({
    consoleProps: () => ({
      'Applied to': fieldElement,
      Elements: 1
    }),
    name: 'checkCheckbox'
  })

  cy.wrap(fieldElement).scrollIntoView({ offset: { left: 0, top: -100 } })

  if (value) {
    cy.wrap(fieldElement).find('input[type="checkbox"]').check({ force }).wait(250)
  } else {
    cy.wrap(fieldElement).find('input[type="checkbox"]').uncheck({ force }).wait(250)
  }
}
