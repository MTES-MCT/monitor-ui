/* eslint-disable no-null/no-null */

import { isArray } from './isArray'
import { isObject } from './isObject'

import type { NativeAny, NativeArray, NativeObject } from '../types/definitions'

type Undefine<T> = T extends null
  ? undefined
  : T extends Array<any>
    ? {
        [K in keyof T]: T[K] extends (infer U)[] ? Undefine<U>[] : Undefine<T[K]>
      }
    : T extends Record<string, any>
      ? {
          [K in keyof T]: T[K] extends (infer U)[] ? Undefine<U>[] : Undefine<T[K]>
        }
      : T

const undefineArrayValues = <T extends NativeArray>(list: T): Undefine<T> => list.map(undefine as any) as any

const undefineObjectProps = <T extends NativeObject>(record: T): Undefine<T> =>
  Object.fromEntries(Object.entries(record).map(([key, value]) => [key, undefine(value as any)])) as any

/**
 * Transform all `null` values into `undefined` ones in any type of value
 *
 * @description
 * The value must be of native type and only contains native types.
 */
export function undefine<T extends NativeAny>(value: T): Undefine<T> | undefined {
  if (value === null || value === undefined) {
    return undefined
  }

  if (typeof value === 'object') {
    if (isArray<NativeArray>(value)) {
      return undefineArrayValues(value) as any
    }

    if (isObject<NativeObject>(value)) {
      return undefineObjectProps(value) as any
    }

    throw new Error(`Can't handle type \`${(value as Object).constructor.name}\`.`)
  }

  return value as any
}
