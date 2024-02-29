export function forceType<Subject = any>(
  this: Mocha.Context,
  subject: Subject,
  text: string,
  options: Partial<Cypress.TypeOptions> = {}
): Cypress.Chainable<Subject> {
  Cypress.log({
    consoleProps: () => ({
      'Applied to': subject,
      Elements: 1
    }),
    name: 'forceType'
  })

  if (!subject) {
    throw new Error(`Could not find subject.`)
  }

  const wrappedSubject = cy.wrap<Subject>(subject)

  return wrappedSubject.type(text, { ...options, force: true })
}
