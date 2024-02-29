export function checkCheckbox(fieldElement: HTMLDivElement, value: boolean | undefined, _label: string) {
  Cypress.log({
    consoleProps: () => ({
      'Applied to': fieldElement,
      Elements: 1
    }),
    name: 'checkCheckbox'
  })

  cy.wrap(fieldElement).scrollIntoView({ offset: { left: 0, top: -100 } })

  if (value) {
    cy.wrap(fieldElement).find('input[type="checkbox"]').forceCheck().wait(250)
  } else {
    cy.wrap(fieldElement).find('input[type="checkbox"]').forceUncheck().wait(250)
  }
}
