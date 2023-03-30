export function fillTextInput(textInputElement: HTMLInputElement, value: string | undefined) {
  if (value) {
    cy.wrap(textInputElement).scrollIntoView().type(value, { force: true })
  } else {
    cy.wrap(textInputElement).scrollIntoView().clear()
  }
}
