export function fillTextInput(textInputElement: HTMLInputElement, value: string | undefined) {
  cy.wrap(textInputElement).scrollIntoView().clear()

  if (value) {
    cy.wrap(textInputElement).scrollIntoView().type(value, { force: true })
  }
}
