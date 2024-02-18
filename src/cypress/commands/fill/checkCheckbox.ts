export function checkCheckbox(fieldElement: HTMLDivElement, value: boolean | undefined, _label: string) {
  cy.wrap(fieldElement).scrollIntoView({ offset: { left: 0, top: -100 } })

  if (value) {
    cy.wrap(fieldElement).find('input[type="checkbox"]').check({ force: true }).wait(250)
  } else {
    cy.wrap(fieldElement).find('input[type="checkbox"]').uncheck({ force: true }).wait(250)
  }
}
