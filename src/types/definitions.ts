/**
 * Public custom type definitions. All types defined here should be exposed to the library's users.
 */

import type { SVGProps } from 'react'
import type { ItemDataType } from 'rsuite/esm/@types/common'

/** Any object with string keys and string values. */
export type AnyEnum = {
  [k: string]: string
}

/** Any object with string keys. */
export type AnyObject = {
  [k: string]: any
}

/** Any collection objects with an `id` prop. */
export interface CollectionItem {
  id: number
}

export type Coordinates = [number, number]

export type DateRange = [Date, Date]
export type DateAsStringRange = [string, string]

export type IconProps = SVGProps<SVGSVGElement> & {
  color?: string | undefined
  /** In pixels */
  size?: number | undefined
  title?: string | undefined
}

export type Filter<T> = (collection: T[]) => T[]

export type Native = boolean | null | number | string | undefined
export type NativeAny = boolean | NativeArray | NativeObject | null | number | string | undefined
export type NativeArray = Array<NativeAny>
export type NativeObject = { [x: string]: NativeAny } | {}

export type Option<OptionValue extends OptionValueType = string> = Omit<
  ItemDataType<string>,
  'children' | 'label' | 'value'
> & {
  children?: never
  isDisabled?: boolean
  label: string
  value: OptionValue
}

export type TreeOption<OptionValue extends OptionValueType = string> =
  | TreeLeafOption<OptionValue>
  | TreeBranchOption<OptionValue>
interface BaseOption extends Omit<ItemDataType<string>, 'children' | 'label' | 'value'> {
  isDisabled?: boolean
  label: string
}
export interface TreeBranchOption<OptionValue extends OptionValueType = string> extends BaseOption {
  children: Array<TreeBranchOption<OptionValue>> | Array<TreeLeafOption<OptionValue>>
  value?: never
}
export interface TreeLeafOption<OptionValue extends OptionValueType = string> extends BaseOption {
  children?: never
  value: OptionValue
}

// `symbol` should never happen, we add it here to simplify other declarations related this type
export type OptionValueType = boolean | number | string | symbol | AnyObject
