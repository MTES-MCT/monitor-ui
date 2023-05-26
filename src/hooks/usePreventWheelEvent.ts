import { useCallback, type RefObject } from 'react'

export function usePreventWheelEvent(inputRef: RefObject<HTMLInputElement | null>) {
  /**
   * Prevent any wheel event from emitting while allowing page scroll when focused.
   *
   * @description
   * We want to prevent the number input from changing when the user accidentally scrolls up or down.
   * That's why we prevent the default behavior of wheel events when it is focused.
   *
   * We also want to allow the user to be able to scroll the page while focused on a number input,
   * That's why we blur this input when a "wheel" (=> "scroll") event happens.
   *
   * Because React uses passive event handler by default,
   * we can't just call `preventDefault` in the `onWheel` event target.
   * We thus have to use the input reference and add our event handler manually.
   *
   * @see https://github.com/facebook/react/pull/19654
   */
  const preventWheelEvent = useCallback(
    (event: WheelEvent) => {
      if (!inputRef.current) {
        return
      }

      event.preventDefault()
      inputRef.current.blur()
    },

    // We don't want to pass a reference as a hook dependency since it can't shallow-equal and `.current` is a pointer.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return preventWheelEvent
}
