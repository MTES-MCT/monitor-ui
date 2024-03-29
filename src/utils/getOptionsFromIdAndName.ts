import type { Option } from '../types/definitions'

export function getOptionsFromIdAndName(
  collection:
    | Array<{
        id: number
        name: string
      }>
    | undefined
): Array<Option<number>> | undefined {
  return collection?.map(({ id, name }) => ({
    label: name,
    value: id
  }))
}
