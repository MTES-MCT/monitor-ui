import { any, identity, map, pipe } from 'ramda'
import { useCallback, useEffect } from 'react'

import type { MutableRefObject } from 'react'
import type { Promisable } from 'type-fest'

export const useClickOutside = (
  zoneRefOrzoneRefs: MutableRefObject<any> | MutableRefObject<any>[],
  action: () => Promisable<void>,
  baseContainer?: Document | HTMLDivElement | null
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const eventTarget = event.target as Node | null
      const zoneRefs = Array.isArray(zoneRefOrzoneRefs) ? zoneRefOrzoneRefs : [zoneRefOrzoneRefs]

      const isEventTargetInZones = pipe(
        map((zoneRef: MutableRefObject<HTMLElement>) => zoneRef.current.contains(eventTarget)),
        any(identity)
      )(zoneRefs)

      if (isEventTargetInZones) {
        return
      }

      action()
    },
    [action, zoneRefOrzoneRefs]
  )

  useEffect(() => {
    const globalContainer = baseContainer ?? window.document

    globalContainer.addEventListener('click', handleClickOutside as any)

    return () => {
      globalContainer.removeEventListener('click', handleClickOutside as any)
    }
  }, [baseContainer, handleClickOutside])
}
