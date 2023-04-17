import type { SVGProps } from 'react'
import type { ItemDataType } from 'rsuite/esm/@types/common'

// -----------------------------------------------------------------------------
// Public types

export type Coordinates = [number, number]

export type DateRange = [Date, Date]
export type DateAsStringRange = [string, string]

export type IconProps = SVGProps<SVGSVGElement> & {
  color?: string | undefined
  /** In pixels */
  size?: number | undefined
}

export type Option<OptionValue extends OptionValueType = string> = Omit<ItemDataType<string>, 'label' | 'value'> & {
  label: string
  value: OptionValue
}
export type OptionValueType = boolean | number | string | Record<string, any>

export type Defined<T> = T extends undefined ? never : T

/**
 * Mark all the props type of an interface/type as `| undefined`
 *
 * @description
 * When `exactOptionalPropertyTypes` is enabled in tsconfig.json,
 * this is useful to create "partial" objects while keeping their props mandatory.
 */
export type Undefine<T> = {
  [K in keyof T]: T[K] | undefined
}

// -----------------------------------------------------------------------------
// Private types

/**
 * Since Rsuite restricts `value` to `string | number`, we use this proxy type,
 * allowing us to use conventioned option values that can include objects
 */
export interface OptionAsRsuiteItemDataType<OptionValue extends OptionValueType = string> extends ItemDataType<string> {
  label: string
  optionValue: OptionValue
  value: string
}
