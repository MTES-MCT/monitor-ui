import { customDayjs } from './customDayjs'

export function sortDates(dates: Date[]): Date[]
export function sortDates(dates: Array<Date | undefined>): Array<Date | undefined>
export function sortDates(dates: Array<Date | undefined>): Array<Date | undefined> {
  const definedDates = dates.filter((date): date is Date => date !== undefined)

  if (definedDates.length === 0) {
    return dates
  }

  const sortedDefinedDates = definedDates
    .map(date => date.toISOString())
    .sort()
    .map(dateAsIsoString => customDayjs(dateAsIsoString).toDate())

  // If all dates were defined, return the sorted array
  if (definedDates.length === dates.length) {
    return sortedDefinedDates
  }

  // If we have a mix of defined and undefined, preserve undefined positions
  // For a 2-element range: if only one is defined, put it first (as start date)
  if (dates.length === 2) {
    if (dates[0] === undefined) {
      return [undefined, sortedDefinedDates[0]]
    }

    return [sortedDefinedDates[0], undefined]
  }

  return dates
}
