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

  // @ts-ignore
  return cy.wait(alias).then(interception => {
    // @ts-ignore
    const isMatch = Cypress._.isMatch(interception.request, partialRequest)
    if (isMatch) {
      return callback(interception.response)
    }

    // eslint-disable-next-line no-console
    cy.log('Intercepted request', JSON.stringify(interception.request))

    // @ts-ignore
    return cy.waitForLastRequest(alias, partialRequest, maxRequests, level + 1)
  })
}
