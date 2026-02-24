import { useCallback, useEffect } from 'react'

import type { RefObject } from 'react'
import type { Promisable } from 'type-fest'

type MinimalHtmlElement = Pick<HTMLElement, 'contains'>

export const useClickOutsideEffect = (
  zoneRefOrzoneRefs: RefObject<MinimalHtmlElement | null> | Array<RefObject<MinimalHtmlElement | null>>,
  action: () => Promisable<void>,
  baseContainer?: Document | HTMLDivElement | null
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const eventTarget = event.target as Node | null
      const zoneRefs = Array.isArray(zoneRefOrzoneRefs) ? zoneRefOrzoneRefs : [zoneRefOrzoneRefs]

      const isEventTargetInZones = zoneRefs.some((zoneRef: RefObject<MinimalHtmlElement | null>) =>
        zoneRef.current && eventTarget ? zoneRef.current.contains(eventTarget) : false
      )
      if (isEventTargetInZones) {
        return
      }

      action()
    },
    [action, zoneRefOrzoneRefs]
  )

  useEffect(() => {
    const globalContainer = baseContainer ?? window.document

    // Use capture phase so the event is caught before any stopPropagation in bubbling phase
    globalContainer.addEventListener('click', handleClickOutside as any, true)

    return () => {
      globalContainer.removeEventListener('click', handleClickOutside as any, true)
    }
  }, [baseContainer, handleClickOutside])
}
