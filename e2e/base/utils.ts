import { mount } from 'cypress/react18'

// TODO This would be nice if we found was a cleaner way to wait for effective rendering.
// Maybe by allowing virtual dom testing in Cypress config?
export const mountAndWait: typeof mount = (jsx, options, rerenderKey) => mount(jsx, options, rerenderKey).wait(250)

// eslint-disable-next-line no-null/no-null
export const outputShouldBe = (value: any) => cy.get('.mui-output').contains(JSON.stringify(value, null, 2))
