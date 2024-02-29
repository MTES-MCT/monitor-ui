export function forceClick<Subject = any>(this: Mocha.Context, subject: Subject): Cypress.Chainable<Subject> {
  Cypress.log({
    consoleProps: () => ({
      'Applied to': subject,
      Elements: 1
    }),
    name: 'forceClick'
  })

  if (!subject) {
    throw new Error(`Could not find subject.`)
  }

  const wrappedSubject = cy.wrap<Subject>(subject)

  return wrappedSubject.click({ force: true })
}
