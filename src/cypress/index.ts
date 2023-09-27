import { clickButton } from './commands/clickButton'
import { clickOutside } from './commands/clickOutside'
import { fill } from './commands/fill'
import { forceClick } from './commands/forceClick'
import { getDataCy } from './commands/getDataCy'
import { getTableRowById } from './commands/getTableRowById'

export const registerMonitorUiCustomCommands = () => {
  Cypress.Commands.add('clickButton' as any, { prevSubject: 'optional' } as any, clickButton as any)

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

  Cypress.Commands.add('getTableRowById', { prevSubject: 'optional' } as any, getTableRowById)
}

registerMonitorUiCustomCommands()
