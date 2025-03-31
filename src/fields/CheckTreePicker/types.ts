export type TreeOption =
  | ({
      label: string
      value: string | number
    } & Record<string, TreeOption[] | undefined>)
  | { label: string; value: string | number }
