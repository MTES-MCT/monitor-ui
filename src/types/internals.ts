/**
 * Private types and interfaces. All types defined here should never be exposed to the library's users.
 */

import type { OptionValueType } from './definitions'
import type { InputItemDataType } from 'rsuite/esm/InputPicker'

/**
 * Since Rsuite restricts the `value` property of `ItemDataType` (equivalent to `Option`) to `string | number`,
 * this proxy type is used internally to allow monitor-ui users to utilize collection objects as values for options.
 *
 * @internal
 */
export type RsuiteDataItem<OptionValue extends OptionValueType = string> = Omit<
  InputItemDataType<string>,
  'children' | 'label' | 'value'
> & {
  children?: never
  isDisabled?: boolean
  label: string
  /** Original `Option.value` passed as Rsuite's `ItemDataType.optionValue` to make it compatible with Rsuite's. */
  optionValue: OptionValue
  value: string
}

/**
 * Since Rsuite restricts the `value` property of `ItemDataType` (equivalent to `Option`) to `string | number`,
 * this proxy type is used internally to allow monitor-ui users to utilize collection objects as values for options.
 *
 * Additionally, this type uses the `value` property to store the position of the option in the tree as a string.
 * Example: "0", "0-2", "1-1-3", etc.
 *
 * @internal
 */
export type RsuiteTreeItem<OptionValue extends OptionValueType = string> =
  | RsuiteTreeLeaf<OptionValue>
  | RsuiteTreeBranch<OptionValue>
interface RsuiteTreeBase extends Omit<InputItemDataType<string>, 'children' | 'label' | 'value'> {
  isDisabled?: boolean
  label: string
  /** Position in the tree path. Example: "0", "0-2", "1-1-3", etc. */
  value: string
}
export interface RsuiteTreeLeaf<OptionValue extends OptionValueType = string> extends RsuiteTreeBase {
  children?: never
  /** Original `Option.value` passed as Rsuite's `ItemDataType.optionValue` to make it compatible with Rsuite's. */
  optionValue: OptionValue
}
export interface RsuiteTreeBranch<OptionValue extends OptionValueType = string> extends RsuiteTreeBase {
  children: Array<RsuiteTreeItem<OptionValue>>
  optionValue?: never
}
