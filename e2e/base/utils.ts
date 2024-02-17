import { mount } from 'cypress/react18'

// TODO This would be nice if we found a cleaner way to wait for effective rendering.
// Maybe by allowing virtual dom testing in Cypress config?
export const mountAndWait: typeof mount = (jsx, options, rerenderKey) => mount(jsx, options, rerenderKey).wait(250)

export const outputShouldBe = (value: any, label: string = 'Output') => {
  // eslint-disable-next-line no-null/no-null
  const expected = value !== undefined ? JSON.stringify(value, null, 2) : 'undefined'

  cy.get(`.mui-output[data-cy="${label}"]`)
    .invoke('text')
    .then(result => {
      if (expected !== result) {
        cy.log(`Expected: ${expected}`)
        cy.log(`Result: ${result}`)

        // eslint-disable-next-line no-console
        console.debug('Expected', value)
        try {
          // eslint-disable-next-line no-console
          console.debug('Result', JSON.parse(result))
        } catch (_) {
          // eslint-disable-next-line no-console
          console.debug('Result', result)
        }
      }

      cy.get('.mui-output').should('contain.text', expected)
    })
}

export const outputShouldNotBe = () => {
  cy.get('.mui-output').should('not.exist')
}
