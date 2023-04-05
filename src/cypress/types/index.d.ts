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
    clickOutside(xPosition?: number, yPosition?: number): Chainable<JQuery<HTMLBodyElement>>
    fill(
      label: string,
      value: boolean | number | string | string[] | Date | [Date, Date] | undefined
    ): Chainable<Element>
    forceClick(): Chainable<JQuery<HTMLElement>>
    getDataCy(dataCy: string): Chainable<JQuery<HTMLElement>>
  }
}
