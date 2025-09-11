import { RetryError } from '../libs/RetryError'

export function ensureElement<T extends Element>(element: T | null | undefined) {
  if (!element || !window.document.body.contains(element)) {
    throw new RetryError()
  }
}
