// I have no idea why I have to add this dirty hack of setting an external variable
// instead of using a cleaner FP `.filter()`
// but real experience made me think it greatly improves results stability.

export function findElementBySelector<T extends HTMLElement = HTMLElement>(
  selector: string,
  {
    fallbackSelector,
    index = 0,
    inElement
  }: Partial<{
    fallbackSelector: string
    inElement: HTMLElement
    index: number
  }> = {}
): T | undefined {
  if (inElement) {
    let foundElement
    let foundElementIndex = 0
    Cypress.$(inElement)
      .find(selector)
      .each((_index, element) => {
        if (!foundElement) {
          if (foundElementIndex < index) {
            foundElementIndex += 1

            return
          }

          foundElement = element
        }
      })
    if (!foundElement && fallbackSelector) {
      cy.log(`⚠️ Using fallback selector: "${fallbackSelector}"`)

      const foundElementByFallbackSelector = Cypress.$(inElement).find(fallbackSelector)

      return foundElementByFallbackSelector as unknown as T | undefined
    }

    return foundElement as unknown as T | undefined
  }

  let foundElement
  let foundElementIndex = 0
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  Cypress.$(selector).each((_index, element) => {
    if (!foundElement) {
      if (foundElementIndex < index) {
        foundElementIndex += 1

        return
      }

      foundElement = element
    }
  })
  if (!foundElement && fallbackSelector) {
    // eslint-disable-next-line no-console
    console.warn(`Using fallback selector: "${fallbackSelector}".`)

    const foundElementByFallbackSelector = Cypress.$(fallbackSelector)

    return foundElementByFallbackSelector as unknown as T | undefined
  }

  return foundElement as unknown as T | undefined
}
