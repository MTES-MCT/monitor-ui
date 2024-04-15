// These imports are required in order to include Dayjs plugins-related type definitions overrides
// for `customDayjs()` util in the published library.
import 'dayjs/plugin/isSameOrAfter'
import 'dayjs/plugin/isSameOrBefore'
import 'dayjs/plugin/localeData'
import 'dayjs/plugin/quarterOfYear'
import 'dayjs/plugin/timezone'
import 'dayjs/plugin/updateLocale'
import 'dayjs/plugin/utc'

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
export { SingleTag } from './elements/SingleTag'
export { MapMenuDialog } from './components/MapMenuDialog'
export { Message } from './components/Message'

export { Button } from './elements/Button'
export { Field } from './elements/Field'
export { Fieldset } from './elements/Fieldset'
export { FieldError } from './elements/FieldError'
export { Figure } from './elements/Figure'
export { IconButton } from './elements/IconButton'
export { LinkButton } from './elements/LinkButton'
export { Label } from './elements/Label'
export { Legend } from './elements/Legend'
export { Tag } from './elements/Tag'
export { TagGroup } from './elements/TagGroup'

export { Checkbox } from './fields/Checkbox'
export { CheckPicker } from './fields/CheckPicker'
export { CoordinatesInput } from './fields/CoordinatesInput'
export { DatePicker } from './fields/DatePicker'
export { DateRangePicker } from './fields/DateRangePicker'
export { MultiCheckbox } from './fields/MultiCheckbox'
export { MultiCascader } from './fields/MultiCascader'
export { MultiSelect } from './fields/MultiSelect'
export { MultiRadio } from './fields/MultiRadio'
export { MultiZoneEditor } from './fields/MultiZoneEditor'
export { NumberInput } from './fields/NumberInput'
export { Radio } from './fields/Radio'
export { RichBooleanCheckbox } from './fields/RichBooleanCheckbox'
export { Search } from './fields/Search'
export { Select } from './fields/Select'
export { Textarea } from './fields/Textarea'
export { TextInput } from './fields/TextInput'
export { Toggle } from './fields/Toggle'

export { FormikCheckbox } from './formiks/FormikCheckbox'
export { FormikCheckPicker } from './formiks/FormikCheckPicker'
export { FormikCoordinatesInput } from './formiks/FormikCoordinatesInput'
export { FormikDatePicker } from './formiks/FormikDatePicker'
export { FormikDateRangePicker } from './formiks/FormikDateRangePicker'
export { FormikEffect } from './formiks/FormikEffect'
export { FormikMultiCheckbox } from './formiks/FormikMultiCheckbox'
export { FormikMultiCascader } from './formiks/FormikMultiCascader'
export { FormikMultiSelect } from './formiks/FormikMultiSelect'
export { FormikMultiRadio } from './formiks/FormikMultiRadio'
export { FormikNumberInput } from './formiks/FormikNumberInput'
export { FormikRichBooleanCheckbox } from './formiks/FormikRichBooleanCheckbox'
export { FormikSearch } from './formiks/FormikSearch'
export { FormikSelect } from './formiks/FormikSelect'
export { FormikTextarea } from './formiks/FormikTextarea'
export { FormikTextInput } from './formiks/FormikTextInput'
export { FormikToggle } from './formiks/FormikToggle'

export { ExclamationPoint } from './symbols/ExclamationPoint'
export { Dot } from './symbols/Dot'

/* -----------------------------------------------------------------------------
  Constants
*/

export {
  Accent,
  Icon,
  Level,
  CoordinatesFormat,
  Size,
  OPENLAYERS_PROJECTION,
  RichBoolean,
  TagBullet,
  WSG84_PROJECTION
} from './constants'

/* -----------------------------------------------------------------------------
  Entities

  IMPORTANT: Use `export type` instead of `export` for entities that are ONLY made of types.
  Otherwise, use `export` or constants won't be importable by the final applications.
*/

export type { Administration } from './entities/Administration'
export { ControlUnit } from './entities/ControlUnit/types'
export { getControlUnitResourceCategoryFromType } from './entities/ControlUnit/utils'
export type { DepartmentArea } from './entities/DepartmentArea'
export { Mission } from './entities/Mission'
export type { Station } from './entities/Station'

/* -----------------------------------------------------------------------------
  Hooks
*/

export { useClickOutsideEffect } from './hooks/useClickOutsideEffect'
export { useDeepCompareEffect } from './hooks/useDeepCompareEffect'
export { useFieldControl } from './hooks/useFieldControl'
export { useForceUpdate } from './hooks/useForceUpdate'
export { useKey } from './hooks/useKey'
export { NewWindowContext, useNewWindow } from './hooks/useNewWindow'
export { usePressEscapeEffect } from './hooks/usePressEscapeEffect'
export { usePrevious } from './hooks/usePrevious'

/* -----------------------------------------------------------------------------
  Librairies
*/

export { CustomSearch } from './libs/CustomSearch'

/* -----------------------------------------------------------------------------
  Tables
*/

export { DataTable } from './tables/DataTable'
export { SimpleTable } from './tables/SimpleTable'
export { TableWithSelectableRows } from './tables/TableWithSelectableRows'

/* -----------------------------------------------------------------------------
  Utils
*/

export { cleanString } from './utils/cleanString'
export { customDayjs } from './utils/customDayjs'
export { getCoordinates, coordinatesAreDistinct } from './utils/coordinates'
export { getFilteredCollection } from './utils/getFilteredCollection'
export { getHashFromCollection } from './utils/getHashFromCollection'
export { getLocalizedDayjs } from './utils/getLocalizedDayjs'
export { getMaybeBooleanFromRichBoolean } from './utils/getMaybeBooleanFromRichBoolean'
export { getOptionsFromIdAndName } from './utils/getOptionsFromIdAndName'
export { getOptionsFromLabelledEnum } from './utils/getOptionsFromLabelledEnum'
export { getPseudoRandomString } from './utils/getPseudoRandomString'
export { getSelectedOptionFromOptionValue } from './utils/getSelectedOptionFromOptionValue'
export { getSelectedOptionFromOptionValueInTree } from './utils/getSelectedOptionFromOptionValueInTree'
export { getUtcizedDayjs } from './utils/getUtcizedDayjs'
export { humanizePastDate } from './utils/humanizePastDate'
export { isArray } from './utils/isArray'
export { isDefined } from './utils/isDefined'
export { isEmptyish } from './utils/isEmptyish'
export { isNumeric } from './utils/isNumeric'
export { isObject } from './utils/isObject'
export { logSoftError } from './utils/logSoftError'
export { normalizeString } from './utils/normalizeString'
export { nullify } from './utils/nullify'
export { pluralize } from './utils/pluralize'
export { sortCollectionByLocalizedProps } from './utils/sortCollectionByLocalizedProps'
export { stopMouseEventPropagation } from './utils/stopMouseEventPropagation'
export { undefine } from './utils/undefine'

/* -----------------------------------------------------------------------------
  Type Definitions
*/

export type { PartialTheme, Theme } from './theme'
export type {
  AnyObject,
  CollectionItem,
  Coordinates,
  DateAsStringRange,
  DateRange,
  Filter,
  IconProps,
  Native,
  NativeAny,
  NativeArray,
  NativeObject,
  Option,
  OptionValueType,
  TreeBranchOption,
  TreeLeafOption,
  TreeOption
} from './types/definitions'
export type { Defined, PartialExcept, Undefine, UndefineExcept, UndefineExceptArrays } from './types/utilities'

export type { DialogProps } from './components/Dialog'
export type { DropdownProps, DropdownItemProps } from './components/Dropdown'
export type { NewWindowProps } from './components/NewWindow'
export type { NotifierProps } from './components/Notifier'
export type { SideMenuProps } from './components/SideMenu'
export type { SingleTagProps } from './elements/SingleTag'
export type { MessageProps } from './components/Message'

export type { ButtonProps } from './elements/Button'
export type { FieldProps } from './elements/Field'
export type { FieldsetProps } from './elements/Fieldset'
export type { FieldErrorProps } from './elements/FieldError'
export type { FigureProps } from './elements/Figure'
export type { IconButtonProps } from './elements/IconButton'
export type { LabelProps } from './elements/Label'
export type { LegendProps } from './elements/Legend'
export type { LinkButtonProps } from './elements/LinkButton'
export type { TagProps } from './elements/Tag'
export type { TagGroupProps } from './elements/TagGroup'

export type { ExclamationPointProps } from './symbols/ExclamationPoint'
export type { DotProps } from './symbols/Dot'

export type { CheckboxProps } from './fields/Checkbox'
export type { CheckPickerProps } from './fields/CheckPicker'
export type { CoordinatesInputProps } from './fields/CoordinatesInput'
export type { DatePickerWithDateDateProps, DatePickerWithStringDateProps } from './fields/DatePicker'
export type { DateRangePickerWithDateDateProps, DateRangePickerWithStringDateProps } from './fields/DateRangePicker'
export type { MultiCheckboxProps } from './fields/MultiCheckbox'
export type { MultiCascaderProps } from './fields/MultiCascader'
export type { MultiSelectProps } from './fields/MultiSelect'
export type { MultiRadioProps } from './fields/MultiRadio'
export type { MultiZoneEditorProps } from './fields/MultiZoneEditor'
export type { NumberInputProps } from './fields/NumberInput'
export type { RichBooleanCheckboxProps } from './fields/RichBooleanCheckbox'
export type { RadioProps } from './fields/Radio'
export type { SearchProps } from './fields/Search'
export type { SelectProps } from './fields/Select'
export type { TextareaProps } from './fields/Textarea'
export type { TextInputProps } from './fields/TextInput'
export type { ToggleProps } from './fields/Toggle'

export type { FormikCheckboxProps } from './formiks/FormikCheckbox'
export type { FormikCheckPickerProps } from './formiks/FormikCheckPicker'
export type { FormikCoordinatesInputProps } from './formiks/FormikCoordinatesInput'
export type { FormikDatePickerWithDateDateProps, FormikDatePickerWithStringDateProps } from './formiks/FormikDatePicker'
export type {
  FormikDateRangePickerWithDateDateProps,
  FormikDateRangePickerWithStringDateProps
} from './formiks/FormikDateRangePicker'
export type { FormikEffectProps } from './formiks/FormikEffect'
export type { FormikMultiCheckboxProps } from './formiks/FormikMultiCheckbox'
export type { FormikMultiCascaderProps } from './formiks/FormikMultiCascader'
export type { FormikMultiRadioProps } from './formiks/FormikMultiRadio'
export type { FormikMultiSelectProps } from './formiks/FormikMultiSelect'
export type { FormikNumberInputProps } from './formiks/FormikNumberInput'
export type { FormikRichBooleanCheckboxProps } from './formiks/FormikRichBooleanCheckbox'
export type { FormikSearchProps } from './formiks/FormikSearch'
export type { FormikSelectProps } from './formiks/FormikSelect'
export type { FormikTextareaProps } from './formiks/FormikTextarea'
export type { FormikTextInputProps } from './formiks/FormikTextInput'
export type { FormikToggleProps } from './formiks/FormikToggle'

export type { NewWindowContextValue } from './hooks/useNewWindow'

export type { CustomSearchKey, CustomSearchOptions } from './libs/CustomSearch'

export type { DataTableProps } from './tables/DataTable'
export type { RowCheckboxProps } from './tables/TableWithSelectableRows/RowCheckbox'
