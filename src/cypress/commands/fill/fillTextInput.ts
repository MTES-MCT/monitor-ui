export function fillTextInput(fieldElement: HTMLDivElement, value: string | undefined, _label: string) {
  Cypress.log({
    consoleProps: () => ({
      'Applied to': fieldElement,
      Elements: 1
    }),
    name: 'fillTextInput'
  })

  cy.wrap(fieldElement).scrollIntoView({ offset: { left: 0, top: -100 } })

  cy.wrap(fieldElement).find('input').forceClear().wait(250)

  // If `value` is undefined, we don't need to input anything
  if (!value) {
    return
  }

  cy.wrap(fieldElement).find('input').forceType(value).wait(250)
}
