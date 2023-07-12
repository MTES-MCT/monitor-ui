type BaseInputRef = {
  box: HTMLDivElement | null
  /**
   * Focus the first input in the group.
   */
  focus: () => void
}

export type DateInputRef = BaseInputRef &
  Pick<HTMLElement, 'contains'> & {
    getValueAsPartialDateTuple: () => PartialDateTuple
  }

export type TimeInputRef = BaseInputRef & {
  getValueAsPartialTimeTuple: () => PartialTimeTuple
}

export enum DateRangePosition {
  END = 'END',
  START = 'START'
}

/** In the shape of ["YYYY", "MM", "DD"]. */
export type DateTuple = [string, string, string]
export type PartialDateTuple = [string | undefined, string | undefined, string | undefined]

export type DateTupleRange = [DateTuple, DateTuple]

/** In the shape of ["hh", "mm"]. */
export type TimeTuple = [string, string]
export type PartialTimeTuple = [string | undefined, string | undefined]
