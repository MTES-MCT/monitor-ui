import { customDayjs } from './customDayjs'

export function sortDates(dates: Date[]): Date[] {
  return dates
    .map(date => date.toISOString())
    .sort()
    .map(dateAsIsoString => customDayjs(dateAsIsoString).toDate())
}
