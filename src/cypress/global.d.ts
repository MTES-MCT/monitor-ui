/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Clicks on a button with the given text content / aria-label attribute / title attribute.
     *
     * @description
     * `label` must match the exact button's text content / aria-label attribute / title attribute.
     */
    clickButton(
      label: string,
      options?: Partial<{
        index: number
        withinSelector: string
      }>
    ): Chainable<JQuery<HTMLButtonElement>>

    clickLink(linkText: string): Chainable<JQuery<HTMLAnchorElement>>

    /**
     * @description
     * Useful to close modals.
     */
    clickOutside(xPosition?: number, yPosition?: number): void

    /**
     * @example
     * ```ts
     *   cy.fill('Text', 'Hello World')
     *   cy.fill('Number', 42)
     *   cy.fill('Checkbox', true)
     *   cy.fill('Select / Radio', 'First Option')
     *   cy.fill('Multiple Select', ['First Option', 'Second Option'])
     *   cy.fill('Date', [2020, 12, 31])
     *   cy.fill('Date Range', [[2020, 12, 31], [2021, 1, 1]])
     *
     *   // Empty the field
     *   cy.fill('Date Range', undefined)
     *
     *   // Uncheck a checkbox
     *   cy.fill('Date Range', false)
     * ```
     */
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

    /**
     * @example
     * ```ts
     *   cy.getDataCy('my-list').should('have.length', 42)
     * ```
     */
    getDataCy(dataCy: string): Chainable<JQuery<HTMLElement>>

    /**
     * @description Only works with `<SimpleTable />` tables.
     *
     * @example
     * ```ts
     *   cy.getTableRowById(42)
     *   cy.getDataCy('my-list').getTableRowByText(42).clickButton('Edit')
     * ```
     */
    getTableRowById(id: number): Chainable<JQuery<HTMLElement>>

    /**
     * @description Only works with `<SimpleTable />` tables.
     *
     * @example
     * ```ts
     *   cy.getTableRowByText('First Row Name')
     *   cy.getDataCy('my-list').getTableRowByText('First Row Name').clickButton('Edit')
     * ```
     */
    getTableRowByText(text: string): Chainable<JQuery<HTMLElement>>

    /**
     * @description Assert the request payload when a form is auto-saving and the requests number is not determinist
     *
     * @example
     * ```ts
     *    cy.waitForLastRequest('@updateMissionAction',
     *    {
     *       body: {
     *         property: 'VALUE',
     *       }
     *    }, 5)
     *    .its('response.statusCode')
     *    .should('eq', 201)
     *    })
     * ```
     */
    waitForLastRequest(alias: string, partialRequest, maxRequests: number, level?)
  }

  type DateTuple = [number, number, number]
  type DateWithTimeTuple = [number, number, number, number, number]
}
