export function clickLink(linkText: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> {
  return cy.get('a').contains(linkText).click()
}
