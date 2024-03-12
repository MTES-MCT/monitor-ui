import { customDayjs } from './customDayjs'

export function humanizePastDate(missionUpdatedAtUtc: string): string {
  const updatedDate = customDayjs(missionUpdatedAtUtc).utc()
  const updatedTime = updatedDate.format('HH[h]mm')

  const today = customDayjs().utc()
  if (updatedDate.isSame(today, 'day')) {
    return `aujourd'hui à ${updatedTime}`
  }

  const yesterday = customDayjs().utc().subtract(1, 'day')
  if (updatedDate.isSame(yesterday, 'day')) {
    return `hier à ${updatedTime}`
  }

  return `le ${updatedDate.format('DD/MM/YYYY')} à ${updatedTime}`
}
