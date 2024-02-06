/**
 * Public custom type definitions. All types defined here should be exposed to the library's users.
 */

import type { SVGProps } from 'react'
import type { ItemDataType } from 'rsuite/esm/@types/common'

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
}

export type Filter<T> = (collection: T[]) => T[]

export type Native = boolean | null | number | string | undefined
export type NativeAny = boolean | NativeArray | NativeObject | null | number | string | undefined
export type NativeArray = Array<NativeAny>
export type NativeObject = { [x: string]: NativeAny } | {}

export type Option<OptionValue extends OptionValueType = string> = Omit<ItemDataType<string>, 'label' | 'value'> & {
  children?: Array<Option<OptionValue>>
  isDisabled?: boolean
  label: string
  value: OptionValue
}

// `symbol` should never happen, we add it here to simplify other declarations related this type
export type OptionValueType = boolean | number | string | symbol | Record<string, any>
