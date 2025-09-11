export function forceCheck<Subject = any>(
  this: Mocha.Context,
  subject: Subject,
  options: Partial<Cypress.CheckClearOptions> = {}
): Cypress.Chainable<Subject> {
  Cypress.log({
    consoleProps: () => ({
      'Applied to': subject,
      Elements: 1
    }),
    name: 'forceCheck'
  })

  if (!subject) {
    throw new Error(`Could not find subject.`)
  }

  const wrappedSubject = cy.wrap<Subject>(subject)

  return wrappedSubject.check({ ...options, force: true })
}
