import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import 'dayjs/locale/fr'

dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.locale('fr')

export { dayjs as customDayjs }
