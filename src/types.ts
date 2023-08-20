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
 * Mark all the prop types of an interface/type as `prop: <non_undefined_type>`.
 *
 * Opposite of `Undefine`.
 *
 * @description
 * When `exactOptionalPropertyTypes` is enabled in tsconfig.json,
 * this is useful to create exact objects forbidding undefined prop values.
 *
 * @example
 * ```
 * type MyType {
 *   aRequiredProp: string | undefined
 *   anOptionalProp: string | undefined
 * }
 *
 * // `type MyPartialType = Define<MyType>` is the same as typing:
 * type MyPartialType {
 *   aRequiredProp: string
 *   anOptionalProp?: string
 * }
 * ```
 */
export type Define<T> = {
  [K in keyof T]: Defined<T[K]>
}

/**
 * Mark all the prop types of an interface/type as `prop: <MyType> | undefined`
 *
 * @description
 * When `exactOptionalPropertyTypes` is enabled in tsconfig.json,
 * this is useful to create objects allowing undefined prop values while keeping all their props required.
 *
 * Opposite of `Defined`.
 *
 * @example
 * ```
 * type MyType {
 *   aRequiredProp: string
 *   anOptionalProp?: string
 * }
 *
 * // `type MyPartialType = Undefine<MyType>` is the same as typing:
 * type MyPartialType {
 *   aRequiredProp: string | undefined
 *   anOptionalProp?: string | undefined
 * }
 * ```
 */
export type Undefine<T> = {
  [K in keyof T]: T[K] | undefined
}

// -----------------------------------------------------------------------------
// Private types

export type Native = boolean | null | number | string | undefined
export type NativeAny = boolean | NativeArray | NativeObject | null | number | string | undefined
export type NativeArray = Array<NativeAny>
export type NativeObject = { [x: string]: NativeAny } | {}
/**
 * Since Rsuite restricts `value` to `string | number`, we use this proxy type,
 * allowing us to use conventioned option values that can include objects
 */
export interface OptionAsRsuiteItemDataType<OptionValue extends OptionValueType = string> extends ItemDataType<string> {
  label: string
  optionValue: OptionValue
  value: string
}
