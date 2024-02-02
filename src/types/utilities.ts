/**
 * Public type utilities. All types defined here should be exposed to the library's users.
 */

/**
 * Allow all props to be ommitted except some.
 *
 * @example
 * ```
 * // Given:
 * type MyType = {
 *   aRequiredProp: string
 *   anOptionalProp: string
 *   aNecessaryProp: string
 *   anotherNecessaryProp: string
 * }
 *
 * // Writing:
 * type MyPartiallyPartialType = PartialExcept<MyType, 'aNecessaryProp' | 'anotherNecessaryProp'>
 *
 * // Is equivalent to:
 * type MyPartiallyPartialType = {
 *   aRequiredProp?: string
 *   anOptionalProp?: string
 *   aNecessaryProp: string
 *   anotherNecessaryProp: string
 * }
 * ```
 */
export type PartialExcept<T extends Record<string, any>, RequiredKeys extends keyof T> = Partial<
  Omit<T, RequiredKeys>
> &
  Pick<T, RequiredKeys>

/**
 * Allow all props of a type to be `undefined` except some.
 *
 * @example
 * ```
 * // Given:
 * type MyType = {
 *   aRequiredProp: string
 *   anOptionalProp?: string
 *   aNecessaryProp: string
 *   anotherNecessaryProp: string
 * }
 *
 * // Writing:
 * type MyPartiallyUndefinedType = UndefineExcept<MyType, 'aNecessaryProp' | 'anotherNecessaryProp'>
 *
 * // Is equivalent to:
 * type MyPartiallyUndefinedType = {
 *   aRequiredProp: string | undefined
 *   anOptionalProp?: string | undefined
 *   aNecessaryProp: string
 *   anotherNecessaryProp: string
 * }
 * ```
 */
export type UndefineExcept<T extends Record<string, any>, RequiredKeys extends keyof T> = Undefine<
  Omit<T, RequiredKeys>
> &
  Pick<T, RequiredKeys>

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
 * Forbids all props of a type from being `undefined`.
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
 * Allow all props of a type to be `undefined`.
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
