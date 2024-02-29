import { clickButton } from './commands/clickButton'
import { clickLink } from './commands/clickLink'
import { clickOutside } from './commands/clickOutside'
import { fill } from './commands/fill'
import { forceCheck } from './commands/forceCheck'
import { forceClear } from './commands/forceClear'
import { forceClick } from './commands/forceClick'
import { forceType } from './commands/forceType'
import { forceUncheck } from './commands/forceUncheck'
import { getDataCy } from './commands/getDataCy'
import { getTableRowById } from './commands/getTableRowById'
import { getTableRowByText } from './commands/getTableRowByText'
import { waitForLastRequest } from './commands/waitForLastRequest'

export const registerMonitorUiCustomCommands = () => {
  Cypress.Commands.add('clickButton' as any, { prevSubject: 'optional' } as any, clickButton as any)
  Cypress.Commands.add('clickLink', clickLink)
  Cypress.Commands.add('waitForLastRequest', waitForLastRequest)
  Cypress.Commands.add('clickOutside', clickOutside)
  Cypress.Commands.add('fill', fill)
  Cypress.Commands.add('forceCheck', { prevSubject: true }, forceCheck)
  Cypress.Commands.add('forceClear', { prevSubject: true }, forceClear)
  Cypress.Commands.add('forceClick', { prevSubject: true }, forceClick)
  Cypress.Commands.add('forceType', { prevSubject: true }, forceType)
  Cypress.Commands.add('forceUncheck', { prevSubject: true }, forceUncheck)
  Cypress.Commands.add('getDataCy', getDataCy)
  Cypress.Commands.add('getTableRowById', { prevSubject: 'optional' } as any, getTableRowById)
  Cypress.Commands.add('getTableRowByText', { prevSubject: 'optional' } as any, getTableRowByText)
}

registerMonitorUiCustomCommands()
