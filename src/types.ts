import type { SVGProps } from 'react'

export type Coordinates = [number, number]

export type DateRange = [Date, Date]
export type DateAsStringRange = [string, string]

export type IconProps = SVGProps<SVGSVGElement> & {
  color?: string | undefined
  /** In pixels */
  size?: number | undefined
}

export type Option<V = string> = {
  label: string
  value: V
}

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
