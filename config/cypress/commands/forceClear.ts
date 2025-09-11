export function forceClear<Subject = any>(
  this: Mocha.Context,
  subject: Subject,
  options: Partial<Cypress.CheckClearOptions> = {}
): Cypress.Chainable<Subject> {
  Cypress.log({
    consoleProps: () => ({
      'Applied to': subject,
      Elements: 1
    }),
    name: 'forceClear'
  })

  if (!subject) {
    throw new Error(`Could not find subject.`)
  }

  const wrappedSubject = cy.wrap<Subject>(subject)

  return wrappedSubject.clear({ ...options, force: true })
}
