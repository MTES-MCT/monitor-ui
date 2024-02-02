/**
 * Public type utilities. All types defined here should be exposed to the library's users.
 */

/**
 * Force a type to be defined.
 *
 * @example
 * ```
 * // Given:
 * type MyType = string | number | undefined
 *
 * // Writing:
 * type MyDefinedType = Defined<MyType>
 *
 * // Is equivalent to:
 * type MyDefinedType = string | number
 * ```
 */
export type Defined<T> = T extends undefined ? never : T

/**
 * Force all prop of an interface/type to be defined.
 *
 * Opposite of `Undefine<T>`.
 *
 * @example
 * ```
 * // Given:
 * type MyType = {
 *   aRequiredProp: string | undefined
 *   anOptionalProp: string | undefined
 * }
 *
 * // Writing:
 * type MyPartialType = Define<MyType>
 *
 * // Is equivalent to:
 * type MyPartialType = {
 *   aRequiredProp: string
 *   anOptionalProp?: string
 * }
 * ```
 */
export type Define<T> = {
  [K in keyof T]: Defined<T[K]>
}

/**
 * Mark all the prop types of an interface/type as `| undefined`
 *
 * Opposite of `Defined<T>`.
 *
 * @example
 * ```
 * // Given:
 * type MyType = {
 *   aRequiredProp: string
 *   anOptionalProp?: string
 * }
 *
 * // Writing:
 * type MyPartialType = Undefine<MyType>
 *
 * // Is equivalent to:
 * type MyPartialType = {
 *   aRequiredProp: string | undefined
 *   anOptionalProp?: string | undefined
 * }
 * ```
 */
export type Undefine<T> = {
  [K in keyof T]: T[K] | undefined
}

/**
 * Same as `Undefined<T>` but excluding array props.
 *
 * @example
 * ```
 * // Given:
 * type MyType = {
 *   aRequiredProp: string
 *   anOptionalProp?: string
 *   anArrayProp: number[]
 * }
 *
 * // Writing:
 * type MyPartialType = UndefineExceptArrays<MyType>
 *
 * // Is equivalent to:
 * type MyPartialType = {
 *   aRequiredProp: string | undefined
 *   anOptionalProp?: string | undefined
 *   anArrayProp: number[]
 * }
 * ```
 */
export type UndefineExceptArrays<T> = {
  [K in keyof T]: T[K] extends (infer U)[] ? U[] : T[K] | undefined
}
