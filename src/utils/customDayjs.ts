import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import localeData from 'dayjs/plugin/localeData'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import updateLocale from 'dayjs/plugin/updateLocale'
import utc from 'dayjs/plugin/utc'

import 'dayjs/locale/fr'

dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)
dayjs.extend(localeData)
dayjs.extend(quarterOfYear)
dayjs.extend(relativeTime)
dayjs.extend(timezone)
dayjs.extend(updateLocale)
dayjs.extend(utc)
dayjs.extend(isBetween)

dayjs.locale('fr')

export { dayjs as customDayjs }
