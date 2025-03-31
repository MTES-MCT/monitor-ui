import type { TreeOption } from './types'
import type { ValueType } from 'rsuite/esm/CheckTreePicker'

export function fromRsuiteValue(
  selectedValues: ValueType,
  allOptions: TreeOption[],
  childrenKey: string = 'children'
): TreeOption[] | undefined {
  const formattedTree = getTreeOptionsBySelectedValues(selectedValues, allOptions, childrenKey)

  return formattedTree.length > 0 ? formattedTree : undefined
}

export function getTreeOptionsBySelectedValues(
  selectedValues: ValueType | undefined,
  options: TreeOption[],
  childrenKey: string = 'children'
): TreeOption[] {
  function getOption(option: TreeOption): TreeOption | undefined {
    const children = option[childrenKey] as TreeOption[] | undefined
    if (children && Array.isArray(children)) {
      const filteredChildren = children
        .map(getOption)
        .filter((childOption): childOption is TreeOption => childOption !== undefined) as TreeOption[]

      if (filteredChildren.length > 0) {
        return {
          [childrenKey]: filteredChildren.map(child => ({ label: child.label, value: child.value })),
          label: option.label,
          value: option.value
        }
      }
    }

    if (selectedValues?.includes(option.value)) {
      return {
        [childrenKey]: (option[childrenKey] ?? []).map(child => ({
          label: child.label,
          value: child.value
        })),
        label: option.label,
        value: option.value
      }
    }

    return undefined
  }

  // Appliquer la fonction filterOption à chaque option de départ
  return options.map(getOption).filter((option): option is TreeOption => option !== undefined)
}

export function toRsuiteValue(
  uiValues: TreeOption[] | undefined,
  childrenKey: string = 'children'
): ValueType | undefined {
  if (!uiValues) {
    return undefined
  }
  // set only childless and children values
  const rsuiteValues = uiValues.filter(uiValue => uiValue[childrenKey]?.length === 0).flatMap(({ value }) => value)

  const rsuiteChildrenValues = uiValues.flatMap(uiValue => (uiValue[childrenKey] ?? [])?.flatMap(({ value }) => value))

  return [...rsuiteValues, ...rsuiteChildrenValues]
}
