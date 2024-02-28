const MAX_PARENT_INDEX = 100

export function findElementParentBySelector<T extends HTMLElement = HTMLElement>(
  element: HTMLElement,
  parentSelector: string,
  index: number = 0
): T | undefined {
  let currentParentElement: HTMLElement | null = element
  let lastFoundParentIndex: number = 0
  let parentIndex = -1
  while (parentIndex < MAX_PARENT_INDEX) {
    parentIndex += 1

    currentParentElement = currentParentElement.parentElement
    if (!currentParentElement) {
      return undefined
    }

    if (currentParentElement.matches(parentSelector)) {
      if (lastFoundParentIndex === index) {
        return currentParentElement as T
      }

      lastFoundParentIndex += 1
    }
  }

  return undefined
}
