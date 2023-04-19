export function fillTextarea(textareaElement: HTMLTextAreaElement, value: string | undefined) {
  cy.wrap(textareaElement).scrollIntoView().clear({ force: true })

  if (value) {
    cy.wrap(textareaElement).scrollIntoView().type(value, { delay: 1, force: true })
  }
}
