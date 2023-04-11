/**
 * Check if a date includes the DST in its time zone offset.
 *
 * @example
 * When run in Europe/Paris time zone:
 * ```ts
 * isDaylightSavingTimeDate(new Date(2021, 0, 1))
 * // => false
 * isDaylightSavingTimeDate(new Date(2021, 6, 1))
 * // => true
 * ```
 *
 * When run in UTC time zone:
 * ```ts
 * isDaylightSavingTimeDate(new Date(2021, 0, 1))
 * // => false
 * isDaylightSavingTimeDate(new Date(2021, 6, 1))
 * // => false
 * ```
 */
export function isDaylightSavingTimeDate(localDate: Date = new Date()): boolean {
  const dateYearWinterDate = new Date(localDate.getFullYear(), 0, 1)
  const dateYearSummerDate = new Date(localDate.getFullYear(), 6, 1)

  // `Date.getTimezoneOffset()` includes the DST when in application for the current local time zone
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset#varied_results_in_daylight_saving_time_dst_regions
  const dateYearWinterDateTimeZoneOffset = dateYearWinterDate.getTimezoneOffset()
  const dateYearSummerDateTimeZoneOffset = dateYearSummerDate.getTimezoneOffset()

  // If the local time zone has no DST
  if (dateYearWinterDateTimeZoneOffset === dateYearSummerDateTimeZoneOffset) {
    return false
  }

  // If the local date time zone offset matches the local summer time zone offset, that means the local date is in DST
  return localDate.getTimezoneOffset() === dateYearSummerDateTimeZoneOffset
}
