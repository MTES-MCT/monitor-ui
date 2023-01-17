import type { SVGProps } from 'react'

export type DateRange = [Date, Date]
export type DateAsStringRange = [string, string]

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

export type IconProps = SVGProps<SVGSVGElement> & {
  color?: string
  /** In pixels */
  size?: number
}

export type Option<V = string> = {
  label: string
  value: V
}
