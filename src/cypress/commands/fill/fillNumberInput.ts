export function fillNumberInput(fieldElement: HTMLDivElement, value: number | undefined, _label: string) {
  Cypress.log({
    consoleProps: () => ({
      'Applied to': fieldElement,
      Elements: 1
    }),
    name: 'fillNumberInput'
  })

  cy.wrap(fieldElement).scrollIntoView({ offset: { left: 0, top: -100 } })

  cy.wrap(fieldElement).find('input[type="number"]').forceClear().wait(250)

  // If `value` is undefined, we don't need to input anything
  if (!value) {
    return
  }

  cy.wrap(fieldElement).find('input[type="number"]').forceType(String(value)).wait(250)
}
