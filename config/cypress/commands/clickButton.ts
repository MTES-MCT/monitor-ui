import { findElementByText } from '../utils/findElementByText'

const RETRIES = 5

function findButton(
  label: string,
  preSelector: string,
  {
    index,
    prevSubjectElement
  }: {
    index: number
    prevSubjectElement: HTMLElement | undefined
  }
): HTMLElement | undefined {
  const buttonElement = findElementByText(`${preSelector}button`, label, {
    index,
    inElement: prevSubjectElement
  })
  if (buttonElement) {
    return buttonElement as HTMLElement
  }

  const buttonElementByAriaLabel = prevSubjectElement
    ? prevSubjectElement.querySelectorAll(`${preSelector}button[aria-label="${label}"]`)[index]
    : Cypress.$(`${preSelector}button[aria-label="${label}"]`).get(index)
  if (buttonElementByAriaLabel) {
    return buttonElementByAriaLabel as HTMLElement
  }

  const buttonElementByTitle = prevSubjectElement
    ? prevSubjectElement.querySelectorAll(`${preSelector}button[title="${label}"]`)[index]
    : Cypress.$(`${preSelector}button[title="${label}"]`).get(index)
  if (buttonElementByTitle) {
    return buttonElementByTitle as HTMLElement
  }

  const buttonRoleElement = findElementByText(`${preSelector}[role="button"]`, label, {
    index,
    inElement: prevSubjectElement
  })
  if (buttonRoleElement) {
    return buttonRoleElement as HTMLElement
  }

  const buttonRoleElementByAriaLabel = prevSubjectElement
    ? prevSubjectElement.querySelectorAll(`${preSelector}[role="button"][aria-label="${label}"]`)[index]
    : Cypress.$(`${preSelector}[role="button"][aria-label="${label}"]`).get(index)
  if (buttonRoleElementByAriaLabel) {
    return buttonRoleElementByAriaLabel as HTMLElement
  }

  const buttonRoleElementByTitle = prevSubjectElement
    ? prevSubjectElement.querySelectorAll(`${preSelector}[role="button"][title="${label}"]`)[index]
    : Cypress.$(`${preSelector}[role="button"][title="${label}"]`).get(index)
  if (buttonRoleElementByTitle) {
    return buttonRoleElementByTitle as HTMLElement
  }

  const menuItemRoleElement = findElementByText(`${preSelector}[role="menuitem"]`, label, {
    index,
    inElement: prevSubjectElement
  })
  if (menuItemRoleElement) {
    return menuItemRoleElement as HTMLElement
  }

  return undefined
}

export function clickButton(
  prevSubjectElements: HTMLElement[] | undefined,
  label: string,
  {
    index = 0,
    withinSelector,
    withoutScroll = false
  }: Partial<{
    index: number | undefined
    withinSelector: string | undefined
    withoutScroll: boolean | undefined
  }> = {},
  leftRetries: number = RETRIES
): Cypress.Chainable<JQuery<HTMLElement>> {
  const prevSubjectElement = prevSubjectElements ? prevSubjectElements[0] : undefined
  if (prevSubjectElements && !prevSubjectElements[0]) {
    throw new Error('`prevSubjectElements[0]` is undefined.')
  }

  const preSelector = withinSelector ? `${withinSelector} ` : ''

  const maybeButton = findButton(label, preSelector, {
    index,
    prevSubjectElement
  })

  if (maybeButton) {
    return (
      withoutScroll ? cy.wrap(maybeButton).forceClick() : cy.wrap(maybeButton).scrollIntoView().forceClick()
    ).wait(250)
  }

  if (leftRetries > 0) {
    return cy.wait(250).then(() => {
      cy.log(`Retrying (${RETRIES - leftRetries + 1} / ${RETRIES})...`)

      return clickButton(prevSubjectElements, label, { index, withinSelector, withoutScroll }, leftRetries - 1)
    })
  }

  throw new Error(`Unable to find button with label "${label}".`)
}
