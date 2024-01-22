import { sortBy } from 'lodash/fp'

import type { Option } from '../types'

export function getOptionsFromLabelledEnum<T extends Record<string, string> = Record<string, string>>(
  labelledEnum: T,
  mustSort: boolean = false
): Option<keyof T>[] {
  const formattedOptions = Object.entries(labelledEnum).map(([value, label]) => ({
    label,
    value
  }))

  if (mustSort) {
    return sortBy(['label'], formattedOptions)
  }

  return formattedOptions
}
