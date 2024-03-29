/* eslint-disable no-null/no-null */

import { isArray } from './isArray'
import { isObject } from './isObject'

import type { NativeAny, NativeArray, NativeObject } from '../types/definitions'

type Nullify<T> = T extends undefined
  ? null
  : T extends Array<any>
    ? {
        [K in keyof T]: T[K] extends (infer U)[] ? Nullify<U>[] : Nullify<T[K]>
      }
    : T extends Record<string, any>
      ? {
          [K in keyof T]: T[K] extends (infer U)[] ? Nullify<U>[] : Nullify<T[K]>
        }
      : T

const nullifyArrayValues = <T extends NativeArray>(list: T): Nullify<T> => list.map(nullify as any) as any

const nullifyObjectProps = <T extends NativeObject>(record: T): Nullify<T> =>
  Object.fromEntries(Object.entries(record).map(([key, value]) => [key, nullify(value as any)])) as any

/**
 * Transform all `undefined` values into `null` ones in any type of value
 *
 * @description
 * The value must be of native type and only contains native types.
 */
export function nullify<T extends NativeAny>(value: T): Nullify<T> | null {
  if (value === null || value === undefined) {
    return null
  }

  if (typeof value === 'object') {
    if (isArray<NativeArray>(value)) {
      return nullifyArrayValues(value) as any
    }

    if (isObject<NativeObject>(value)) {
      return nullifyObjectProps(value) as any
    }

    throw new Error(`Can't handle type \`${(value as Object).constructor.name}\`.`)
  }

  return value as any
}
