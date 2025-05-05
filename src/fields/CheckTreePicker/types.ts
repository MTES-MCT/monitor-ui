// default is {label: string, value: string | number, children: [{label: string, value: string | number}]}
export type TreeOption = {
  [key: string]: string | number | TreeOption[] | undefined
}
