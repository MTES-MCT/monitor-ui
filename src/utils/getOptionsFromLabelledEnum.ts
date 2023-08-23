import { sortBy } from 'lodash/fp'

import type { Option } from '../types'

export function getOptionsFromLabelledEnum(labelledEnum: Record<string, string>, mustSort: boolean = false): Option[] {
  const formattedOptions = Object.entries(labelledEnum).map(([value, label]) => ({
    label,
    value
  }))

  if (mustSort) {
    return sortBy(['label'], formattedOptions)
  }

  return formattedOptions
}
