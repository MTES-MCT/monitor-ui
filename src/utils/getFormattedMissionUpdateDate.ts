import { customDayjs } from './customDayjs'

export function getFormattedMissionUpdateDate(missionUpdatedAtUtc: string): string {
  const updatedDate = customDayjs(missionUpdatedAtUtc).utc()
  const updatedHour = updatedDate.format('HH')
  const updatedMinutes = updatedDate.format('mm')
  const updatedTime = `${updatedHour}h${updatedMinutes}`

  if (updatedDate.isSame(customDayjs().utc(), 'day')) {
    return `aujourdhui à ${updatedTime} (UTC)`
  }

  const yesterday = customDayjs().utc().subtract(1, 'day')
  if (updatedDate.isSame(yesterday, 'day')) {
    return `hier à ${updatedTime} (UTC)`
  }

  return `le ${updatedDate.format('DD/MM/YYYY')} à ${updatedTime} (UTC)`
}
