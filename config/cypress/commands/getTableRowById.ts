export function getTableRowById(
  prevSubjectElements: HTMLElement[] | undefined,
  id: number | string
): Cypress.Chainable<JQuery<HTMLElement>> {
  const prevSubjectElement = prevSubjectElements ? prevSubjectElements[0] : undefined
  if (prevSubjectElements && !prevSubjectElements[0]) {
    throw new Error('`prevSubjectElements[0]` is undefined.')
  }

  return (prevSubjectElement ? cy.wrap(prevSubjectElement) : cy.get('body'))
    .first()
    .find(`.Table-SimpleTable tr[data-id="${id}"]`)
}
