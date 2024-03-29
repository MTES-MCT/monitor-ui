/**
 * @description
 * Useful to close modals.
 */
export function clickOutside(xPosition: number = 0, yPosition: number = 0): void {
  cy.log(`Click outside at position: ${xPosition}, ${yPosition}`)

  cy.get('body').click(xPosition, yPosition, { force: true })
}
