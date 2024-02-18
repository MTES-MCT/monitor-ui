export function fillTextInput(fieldElement: HTMLDivElement, value: string | undefined, _label: string) {
  cy.wrap(fieldElement).scrollIntoView({ offset: { left: 0, top: -100 } })

  cy.wrap(fieldElement).find('input[type="text"]').clear({ force: true }).wait(250)

  // If `value` is undefined, we don't need to input anything
  if (!value) {
    return
  }

  cy.wrap(fieldElement).find('input[type="text"]').type(value, { force: true }).wait(250)
}
