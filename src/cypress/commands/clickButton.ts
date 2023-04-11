import { findElementBytext } from '../utils/findElementBytext'

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
  const buttonElement = findElementBytext(`${preSelector}button`, label, {
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

  const menuItemElement = findElementBytext(`${preSelector}[role="menuitem"]`, label, {
    index,
    inElement: prevSubjectElement
  })
  if (menuItemElement) {
    return menuItemElement as HTMLElement
  }

  return undefined
}

export function clickButton(
  prevSubjectElements: HTMLElement[] | undefined,
  label: string,
  {
    index = 0,
    withinSelector
  }: Partial<{
    index: number | undefined
    withinSelector: string | undefined
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
    return cy.wrap(maybeButton).scrollIntoView().forceClick().wait(250)
  }

  if (leftRetries > 0) {
    return cy.wait(250).then(() => {
      cy.log(`Retrying (${RETRIES - leftRetries + 1} / ${RETRIES})...`)

      return clickButton(prevSubjectElements, label, { index, withinSelector }, leftRetries - 1)
    })
  }

  throw new Error(`Unable to find button with label "${label}".`)
}
