import type { MouseEvent } from 'react'

export function stopMouseEventPropagation(event: MouseEvent<HTMLElement> | React.SyntheticEvent<Element, Event>) {
  event.stopPropagation()
}
