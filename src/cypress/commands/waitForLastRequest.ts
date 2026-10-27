export function waitForLastRequest(
  alias: string,
  partialRequest,
  maxRequests: number,
  level = 0,
  callback: (response) => void = () => {}
) {
  if (level === maxRequests) {
    throw new Error(`${maxRequests} requests exceeded`)
  }

  // @ts-expect-error Ignore TypeScript errors for the following line as Cypress commands are dynamically added.
  return cy.wait(alias).then(interception => {
    const isMatch = Cypress._.isMatch(interception.request, partialRequest)
    if (isMatch) {
      return callback(interception.response)
    }

    cy.log('Intercepted request', JSON.stringify(interception.request))

    return cy.waitForLastRequest(alias, partialRequest, maxRequests, level + 1, callback)
  })
}
