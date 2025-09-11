/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    clickButton(
      label: string,
      options?: Partial<{
        index: number
        withinSelector: string
        withoutScroll: boolean
      }>
    ): Chainable<JQuery<HTMLButtonElement>>

    clickLink(linkText: string): Chainable<JQuery<HTMLAnchorElement>>

    clickOutside(xPosition?: number, yPosition?: number): void

    fill(label: string, value: any, options?: Partial<FillOptions>): void

    forceCheck(options?: Partial<CheckOptions>): Chainable<JQuery<HTMLElement>>
    forceClear(options?: Partial<ClearOptions>): Chainable<JQuery<HTMLElement>>
    forceClick(options?: Partial<ClickOptions>): Chainable<JQuery<HTMLElement>>
    forceType(text: string, options?: Partial<TypeOption>): Chainable<JQuery<HTMLElement>>
    forceUncheck(options?: Partial<CheckOptions>): Chainable<JQuery<HTMLElement>>

    getDataCy(dataCy: string): Chainable<JQuery<HTMLElement>>
    getTableRowById(id: number | string): Chainable<JQuery<HTMLElement>>
    getTableRowByText(text: string): Chainable<JQuery<HTMLElement>>
    waitForLastRequest(
      alias: string,
      partialRequest: unknown,
      maxRequests: number,
      level?: unknown,
      callback?: (response: unknown) => void
    ): void
  }

  type DateTuple = [number, number, number]
  type DateWithTimeTuple = [number, number, number, number, number]
  type DateRangeTuple = [DateTuple, DateTuple]
  type DateWithTimeRangeTuple = [DateWithTimeTuple, DateWithTimeTuple]

  interface FillOptions extends Forceable {
    delay: number
    index: number
    retries: number
  }
}
