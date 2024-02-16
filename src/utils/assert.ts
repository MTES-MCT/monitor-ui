/**
 * Asserts that a value is not undefined.
 *
 * @description
 * Typescript will infer that the value cannot be undefined after this function is called.
 *
 * @example
 * ```ts
 * let value: string | undefined = Math.random() > 0.5 ? 'hello' : undefined
 * // => Here, Typescript will infer that `value` is of type `string | undefined`.
 * assert(value, 'value')
 * // => Here, Typescript will infer that `value` is of type `string`.
 * ```
 *
 * @internal
 */
export function assert<T>(value: T | undefined, variableName: string): asserts value is T {
  if (value === undefined) {
    throw new Error(`[monitor-ui] \`${variableName}\` is undefined.`)
  }
}
