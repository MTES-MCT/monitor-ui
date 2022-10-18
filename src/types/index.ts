export type DateRange = [Date, Date]

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

export type Option<V = string> = {
  label: string
  value: V
}
