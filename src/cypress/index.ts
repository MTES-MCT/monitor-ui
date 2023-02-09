import { clickButton } from './commands/clickButton'
import { clickOutside } from './commands/clickOutside'
import { fill } from './commands/fill'
import { forceClick } from './commands/forceClick'
import { getDataCy } from './commands/getDataCy'

Cypress.Commands.add('clickButton', clickButton)

Cypress.Commands.add(
  'clickLink',
  (linkText: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> => cy.get('a').contains(linkText).click()
)

/**
 * @description
 * Useful to close modals.
 */
Cypress.Commands.add('clickOutside', clickOutside)

/**
 * @example
 * ```ts
 *   cy.fill('Password', 'P422W0Rd')
 * ```
 */
Cypress.Commands.add('fill', fill)

// Maybe because of https://github.com/cypress-io/cypress/issues/19564
Cypress.Commands.add('forceClick', { prevSubject: true }, forceClick)

Cypress.Commands.add('getDataCy', getDataCy)
