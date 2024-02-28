const MAX_PARENT_INDEX = 100

export function findElementParentBySelector<T extends HTMLElement = HTMLElement>(
  element: HTMLElement,
  parentSelector: string,
  index: number = 0
): T | undefined {
  let lastFoundParentIndex: number = 0
  let parentIndex = -1
  while (parentIndex < MAX_PARENT_INDEX) {
    parentIndex += 1

    const { parentElement } = element
    if (!parentElement) {
      return undefined
    }

    if (parentElement.matches(parentSelector)) {
      if (lastFoundParentIndex === index) {
        return parentElement as T
      }

      lastFoundParentIndex += 1
    }
  }

  return undefined
}
