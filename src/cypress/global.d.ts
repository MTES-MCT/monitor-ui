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
     * @description
     * You can set the `retries` option to a number greater than 5 (default) to retry the action in case of failure.
     * You can also set the `force` option to `true` to force the action without waiting for the element to be visible.
     *
     * ⚠️ In order to ensure backward compatibility, the `force` option is set to `true` by default.
     * This will be changed to `false` in the next major version.
     *
     * @example
     * ```ts
     *   cy.fill('My TextInput / Textarea', 'Hello World')
     *   cy.fill('My NumberInput', 42)
     *   cy.fill('My Checkbox', true) // or `false` to uncheck
     *   cy.fill('My MultiRadio / Select', 'First Option')
     *   cy.fill('My CheckPicker / MultiCheckbox / MultiSelect', ['First Option', 'Second Option'])
     *   cy.fill('My DatePicker', [2020, 12, 31])
     *   cy.fill('My DatePicker', [2020, 12, 31, 23, 59])
     *   cy.fill('My DateRangePicker', [[2020, 12, 31], [2021, 1, 1]])
     *   cy.fill('My DateRangePicker', [[2020, 12, 31, 23, 59], [2021, 1, 1, 23, 59]])
     *
     *   // Clear any field except the `<MultiRadio />` which can't be cleared
     *   cy.fill('My Field', undefined)
     * ```
     */
    fill(label: string, value: any, options?: Partial<FillOptions>): void

    forceCheck(options?: Partial<CheckOptions>): Chainable<JQuery<HTMLElement>>
    forceClear(options?: Partial<ClearOptions>): Chainable<JQuery<HTMLElement>>
    forceClick(options?: Partial<ClickOptions>): Chainable<JQuery<HTMLElement>>
    forceType(text: string, options?: Partial<TypeOption>): Chainable<JQuery<HTMLElement>>
    forceUncheck(options?: Partial<CheckOptions>): Chainable<JQuery<HTMLElement>>

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
     *    }, 5, response => {
     *      console.log('After response', response)
     *    })
     *    .its('response.statusCode')
     *    .should('eq', 201)
     *    })
     * ```
     */
    waitForLastRequest(alias: string, partialRequest, maxRequests: number, level?, callback?: (response) => void)
  }

  type DateTuple = [number, number, number]
  type DateWithTimeTuple = [number, number, number, number, number]

  type DateRangeTuple = [DateTuple, DateTuple]
  type DateWithTimeRangeTuple = [DateWithTimeTuple, DateWithTimeTuple]

  interface FillOptions extends Forceable {
    delay: number
    retries: number
  }
}
