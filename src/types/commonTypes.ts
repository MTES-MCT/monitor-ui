import type { Option, OptionValueType } from './definitions'
import type { CustomSearch } from '@libs/CustomSearch'
import type { Promisable } from 'type-fest'

export interface SelectType<OptionValue extends OptionValueType = string> {
  customSearch?: CustomSearch<Option<OptionValue>>
  /** Minimum search query length required to trigger custom search filtering. */
  customSearchMinQueryLength?: number | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isRequired?: boolean | undefined
  isTransparent?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: (nextValue: OptionValue[] | undefined) => Promisable<void>
  optionValueKey?: keyof OptionValue | undefined
  options: Option<OptionValue>[]
  popupWidth?: number | undefined
  value?: OptionValue[] | undefined
}
