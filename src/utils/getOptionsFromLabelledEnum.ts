import type { Option } from '../types/definitions'

const byFrenchNaturalOrder = (a: Option, b: Option) => a.label.localeCompare(b.label, 'fr', { sensitivity: 'base' })

export function getOptionsFromLabelledEnum<T extends Record<string, string> = Record<string, string>>(
  labelledEnum: T,
  mustSort: boolean = false
): Option<keyof T>[] {
  const formattedOptions = Object.entries(labelledEnum).map(([value, label]) => ({
    label,
    value
  }))

  if (mustSort) {
    return formattedOptions.sort(byFrenchNaturalOrder)
  }

  return formattedOptions
}
