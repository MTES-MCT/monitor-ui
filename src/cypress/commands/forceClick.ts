export function forceClick([subject]: Cypress.Chainable<Cypress.JQueryWithSelector>[]): Cypress.Chainable<
  JQuery<HTMLElement>
> {
  if (!subject) {
    throw new Error(`Could not find subject.`)
  }

  Cypress.log({
    consoleProps: () => ({
      'Applied to': subject,
      Elements: 1
    }),
    name: 'forceClick'
  })

  try {
    return subject.click({ force: true })
  } catch (_) {
    return cy.wrap(subject as any).click({ force: true })
  }
}
