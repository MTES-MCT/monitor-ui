import type { DateRangePickerLocale } from 'rsuite'

export const HOURS_AS_OPTIONS = new Array(24).fill(undefined).map((_, index) => ({
  label: String(index).padStart(2, '0'),
  value: index
}))

export const RSUITE_CALENDAR_LOCALE: DateRangePickerLocale = {
  clear: 'Effacer',
  emptyMessage: 'Aucun message',
  formattedDayPattern: 'dd/MM/yyyy',
  formattedMonthPattern: 'MMMM yyyy',
  friday: 'V',
  hours: 'Heures',
  loading: 'Chargement en cours...',
  minutes: 'Minutes',
  monday: 'L',
  ok: 'Valider',
  remove: 'Supprimer',
  saturday: 'S',
  seconds: 'Secondes',
  sunday: 'D',
  thursday: 'J',
  today: 'Aujourd’hui',
  tuesday: 'M',
  wednesday: 'M',
  yesterday: 'Hier'
}

export enum STATUS {
  'END_DATE' = 'END_DATE',
  'NO_DATE' = 'NO_DATE',
  'START_DATE' = 'START_DATE'
}
