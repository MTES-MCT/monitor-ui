// These imports are required in order to include Dayjs plugins-related type definitions overrides
// for `customDayjs()` util in the published library.
import 'dayjs/plugin/isSameOrAfter'
import 'dayjs/plugin/isSameOrBefore'
import 'dayjs/plugin/localeData'
import 'dayjs/plugin/quarterOfYear'
import 'dayjs/plugin/timezone'
import 'dayjs/plugin/updateLocale'
import 'dayjs/plugin/utc'

export { Accent, CoordinatesFormat, Size, OPENLAYERS_PROJECTION, TagBullet, WSG84_PROJECTION } from './constants'
export { GlobalStyle } from './GlobalStyle'
export { OnlyFontGlobalStyle } from './OnlyFontGlobalStyle'
export { THEME } from './theme'
export { ThemeProvider } from './ThemeProvider'

/* -----------------------------------------------------------------------------
  Components
*/

export { Dialog } from './components/Dialog'
export { Dropdown } from './components/Dropdown'
export { NewWindow } from './components/NewWindow'
export { NotificationEvent, Notifier } from './components/Notifier'
export { SideMenu } from './components/SideMenu'
export { SingleTag } from './components/SingleTag'
export { MapMenuModal } from './components/MapMenuModal'

export { Button } from './elements/Button'
export { Field } from './elements/Field'
export { Fieldset } from './elements/Fieldset'
export { FieldError } from './elements/FieldError'
export { IconButton } from './elements/IconButton'
export { Label } from './elements/Label'
export { Legend } from './elements/Legend'
export { Tag } from './elements/Tag'
export { TagGroup } from './elements/TagGroup'
export { SimpleTable } from './elements/Table/SimpleTable'
export { TableWithSelectableRows } from './elements/Table/TableWithSelectableRows'

export { Search } from './fields/Search'
export { Checkbox } from './fields/Checkbox'
export { DatePicker } from './fields/DatePicker'
export { DateRangePicker } from './fields/DateRangePicker'
export { MultiCheckbox } from './fields/MultiCheckbox'
export { MultiSelect } from './fields/MultiSelect'
export { MultiRadio } from './fields/MultiRadio'
export { MultiZoneEditor } from './fields/MultiZoneEditor'
export { NumberInput } from './fields/NumberInput'
export { CoordinatesInput } from './fields/CoordinatesInput'
export { Select } from './fields/Select'
export { Textarea } from './fields/Textarea'
export { TextInput } from './fields/TextInput'

export { FormikSearch } from './formiks/FormikSearch'
export { FormikCheckbox } from './formiks/FormikCheckbox'
export { FormikCoordinatesInput } from './formiks/FormikCoordinatesInput'
export { FormikDatePicker } from './formiks/FormikDatePicker'
export { FormikDateRangePicker } from './formiks/FormikDateRangePicker'
export { FormikEffect } from './formiks/FormikEffect'
export { FormikMultiCheckbox } from './formiks/FormikMultiCheckbox'
export { FormikMultiSelect } from './formiks/FormikMultiSelect'
export { FormikMultiRadio } from './formiks/FormikMultiRadio'
export { FormikNumberInput } from './formiks/FormikNumberInput'
export { FormikSelect } from './formiks/FormikSelect'
export { FormikTextarea } from './formiks/FormikTextarea'
export { FormikTextInput } from './formiks/FormikTextInput'

export * as Icon from './icons'

/* -----------------------------------------------------------------------------
  Hooks
*/

export { useClickOutsideEffect } from './hooks/useClickOutsideEffect'
export { useFieldControl } from './hooks/useFieldControl'
export { useForceUpdate } from './hooks/useForceUpdate'
export { useKey } from './hooks/useKey'
export { NewWindowContext, useNewWindow } from './hooks/useNewWindow'
export { usePrevious } from './hooks/usePrevious'

/* -----------------------------------------------------------------------------
  Librairies
*/

export { CustomSearch } from './libs/CustomSearch'

/* -----------------------------------------------------------------------------
  Utils
*/

export { customDayjs } from './utils/customDayjs'
export { getCoordinates, coordinatesAreDistinct } from './utils/coordinates'
export { getLocalizedDayjs } from './utils/getLocalizedDayjs'
export { getPseudoRandomString } from './utils/getPseudoRandomString'
export { getUtcizedDayjs } from './utils/getUtcizedDayjs'
export { isNumeric } from './utils/isNumeric'
export { logSoftError } from './utils/logSoftError'
export { stopMouseEventPropagation } from './utils/stopMouseEventPropagation'

/* -----------------------------------------------------------------------------
  Type Definitions
*/

export type { PartialTheme, Theme } from './theme'
export type {
  Coordinates,
  DateAsStringRange,
  DateRange,
  Defined,
  IconProps,
  Option,
  OptionValueType,
  Undefine
} from './types'

export type { DialogProps } from './components/Dialog'
export type { DropdownProps, DropdownItemProps } from './components/Dropdown'
export type { NewWindowProps } from './components/NewWindow'
export type { NotifierProps } from './components/Notifier'
export type { SideMenuProps } from './components/SideMenu'
export type { SingleTagProps } from './components/SingleTag'

export type { ButtonProps } from './elements/Button'
export type { FieldProps } from './elements/Field'
export type { FieldsetProps } from './elements/Fieldset'
export type { FieldErrorProps } from './elements/FieldError'
export type { IconButtonProps } from './elements/IconButton'
export type { LabelProps } from './elements/Label'
export type { LegendProps } from './elements/Legend'
export type { TagProps } from './elements/Tag'
export type { TagGroupProps } from './elements/TagGroup'
export type { RowCheckboxProps } from './elements/Table/TableWithSelectableRows/RowCheckbox'

export type { SearchProps } from './fields/Search'
export type { CheckboxProps } from './fields/Checkbox'
export type { DatePickerWithDateDateProps, DatePickerWithStringDateProps } from './fields/DatePicker'
export type { DateRangePickerWithDateDateProps, DateRangePickerWithStringDateProps } from './fields/DateRangePicker'
export type { MultiCheckboxProps } from './fields/MultiCheckbox'
export type { MultiSelectProps } from './fields/MultiSelect'
export type { MultiRadioProps } from './fields/MultiRadio'
export type { MultiZoneEditorProps } from './fields/MultiZoneEditor'
export type { NumberInputProps } from './fields/NumberInput'
export type { CoordinatesInputProps } from './fields/CoordinatesInput'
export type { SelectProps } from './fields/Select'
export type { TextareaProps } from './fields/Textarea'
export type { TextInputProps } from './fields/TextInput'

export type { FormikSearchProps } from './formiks/FormikSearch'
export type { FormikCheckboxProps } from './formiks/FormikCheckbox'
export type { FormikCoordinatesInputProps } from './formiks/FormikCoordinatesInput'
export type { FormikDatePickerWithDateDateProps, FormikDatePickerWithStringDateProps } from './formiks/FormikDatePicker'
export type {
  FormikDateRangePickerWithDateDateProps,
  FormikDateRangePickerWithStringDateProps
} from './formiks/FormikDateRangePicker'
export type { FormikEffectProps } from './formiks/FormikEffect'
export type { FormikMultiCheckboxProps } from './formiks/FormikMultiCheckbox'
export type { FormikMultiSelectProps } from './formiks/FormikMultiSelect'
export type { FormikMultiRadioProps } from './formiks/FormikMultiRadio'
export type { FormikNumberInputProps } from './formiks/FormikNumberInput'
export type { FormikSelectProps } from './formiks/FormikSelect'
export type { FormikTextareaProps } from './formiks/FormikTextarea'
export type { FormikTextInputProps } from './formiks/FormikTextInput'

export type { NewWindowContextValue } from './hooks/useNewWindow'

export type { CustomSearchKey, CustomSearchOptions } from './libs/CustomSearch'
