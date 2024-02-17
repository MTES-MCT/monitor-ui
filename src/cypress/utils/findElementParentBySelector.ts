export function findElementParentBySelector<T extends HTMLElement = HTMLElement>(
  element: HTMLElement,
  parentSelector: string,
  index: number = 0
): T | undefined {
  let foundElement: T | undefined
  let foundElementIndex = 0

  const potentialParents = Cypress.$(element).parents(parentSelector)
  potentialParents
    // eslint-disable-next-line func-names
    .each(function (this: HTMLElement) {
      if (foundElementIndex === index) {
        foundElement = this as T

        return
      }

      foundElementIndex += 1
    })

  return foundElement
}
