import type { SVGProps } from 'react'

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
