import type { TreeOption } from './types'
import type { ValueType } from 'rsuite/esm/CheckTreePicker'

export function fromRsuiteValue(selectedValues: ValueType, allOptions: TreeOption[]): TreeOption[] | undefined {
  const formattedTree = getTreeOptionsBySelectedValues(selectedValues, allOptions)

  return formattedTree.length > 0 ? formattedTree : undefined
}

export function getTreeOptionsBySelectedValues(
  selectedValues: ValueType | undefined,
  options: TreeOption[]
): TreeOption[] {
  function getOption(option: TreeOption): TreeOption | undefined {
    if (option.children) {
      const filteredChildren = option.children
        .map(getOption)
        .filter((childOption): childOption is TreeOption => childOption !== undefined)

      if (filteredChildren.length > 0) {
        return {
          children: filteredChildren.map(child => ({ label: child.label, value: child.value })),
          label: option.label,
          value: option.value
        }
      }
    }

    if (selectedValues?.includes(option.value)) {
      return {
        children: (option.children ?? []).map(child => ({ label: child.label, value: child.value })),
        label: option.label,
        value: option.value
      }
    }

    return undefined
  }

  // Appliquer la fonction filterOption à chaque option de départ
  return options.map(getOption).filter((option): option is TreeOption => option !== undefined)
}

export function toRsuiteValue(uiValues: TreeOption[] | undefined): ValueType | undefined {
  if (!uiValues) {
    return undefined
  }
  // set only childless and children values
  const rsuiteValues = uiValues.filter(uiValue => uiValue.children?.length === 0).flatMap(({ value }) => value)

  const rsuiteChildrenValues = uiValues.flatMap(({ children }) => (children ?? [])?.flatMap(({ value }) => value))

  return [...rsuiteValues, ...rsuiteChildrenValues]
}
