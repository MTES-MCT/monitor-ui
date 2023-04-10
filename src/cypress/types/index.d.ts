/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    clickButton(
      label: string,
      options?: Partial<{
        index: number
        withinSelector: string
      }>
    ): Chainable<JQuery<HTMLButtonElement>>
    clickLink(linkText: string): Chainable<JQuery<HTMLAnchorElement>>
    clickOutside(xPosition?: number, yPosition?: number): void
    fill(
      label: string,
      value:
        | boolean
        | number
        | string
        | string[]
        | (DateTuple | DateWithTimeTuple)
        | ([Cypress.DateTuple, Cypress.DateTuple] | [Cypress.DateWithTimeTuple, Cypress.DateWithTimeTuple])
        | undefined
    ): Chainable<Element>
    forceClick(): Chainable<JQuery<HTMLElement>>
    getDataCy(dataCy: string): Chainable<JQuery<HTMLElement>>
  }

  type DateTuple = [number, number, number]
  type DateWithTimeTuple = [number, number, number, number, number]
}
