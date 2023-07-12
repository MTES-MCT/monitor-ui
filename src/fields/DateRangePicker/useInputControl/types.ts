import type { RefObject, KeyboardEvent } from 'react'

export enum NumberInputIndex {
  START_DAY = 0,
  START_MONTH = 1,
  START_YEAR = 2,
  START_HOUR = 3,
  START_MINUTE = 4,
  END_DAY = 5,
  END_MONTH = 6,
  END_YEAR = 7,
  END_HOUR = 8,
  END_MINUTE = 9
}

export type InputControlContextValue = {
  handleKeyDown: (
    event: KeyboardEvent<HTMLInputElement>,
    inputRef: RefObject<HTMLInputElement>,
    filledLength: number
  ) => void
  registerInput: (inputRef: RefObject<HTMLInputElement>, index: NumberInputIndex) => () => void
}
