import type { TreeOption } from './types'
import type { ValueType } from 'rsuite/esm/CheckTreePicker'

export function fromRsuiteValue(
  selectedValues: ValueType,
  allOptions: TreeOption[],
  childrenKey: string = 'children',
  valueKey: string | number = 'value',
  labelKey: string = 'label'
): TreeOption[] | undefined {
  const formattedTree = getTreeOptionsBySelectedValues(selectedValues, allOptions, childrenKey, valueKey, labelKey)

  return formattedTree.length > 0 ? formattedTree : undefined
}

export function deepCloneExtensible<T>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map(item => deepCloneExtensible(item)) as unknown as T
  }

  // eslint-disable-next-line no-null/no-null
  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      acc[key] = deepCloneExtensible((obj as any)[key])

      return acc
    }, {} as any) as T
  }

  return obj
}

export function getTreeOptionsBySelectedValues(
  selectedValues: ValueType | undefined,
  options: TreeOption[],
  childrenKey: string = 'children',
  valueKey: string | number = 'value',
  labelKey: string = 'label'
): TreeOption[] {
  function preserveChildrenStructure(option: TreeOption): TreeOption {
    const children = option[childrenKey] as TreeOption[] | undefined
    const baseOption: TreeOption = {
      [labelKey]: option[labelKey],
      [valueKey]: option[valueKey]
    } as TreeOption

    if (children && Array.isArray(children)) {
      baseOption[childrenKey] = children.map(child => preserveChildrenStructure(child)) as any
    }

    return baseOption
  }

  function getOption(option: TreeOption): TreeOption | undefined {
    const children = option[childrenKey] as TreeOption[] | undefined
    if (children && Array.isArray(children)) {
      const filteredChildren = children
        .map(getOption)
        .filter((childOption): childOption is TreeOption => childOption !== undefined) as TreeOption[]

      if (filteredChildren.length > 0) {
        return {
          [childrenKey]: filteredChildren,
          [labelKey]: option[labelKey],
          [valueKey]: option[valueKey]
        } as TreeOption
      }
    }

    if (selectedValues?.includes(option[valueKey] as string | number)) {
      return preserveChildrenStructure(option)
    }

    return undefined
  }

  return options.map(getOption).filter((option): option is TreeOption => option !== undefined)
}

export function getParentRsuiteValue(
  options: TreeOption[] | undefined,
  valueKey: string = 'value',
  childrenKey: string = 'children'
): ValueType {
  if (!options) {
    return []
  }

  const parentValues: (string | number)[] = []

  function collectParents(items: TreeOption[]) {
    items.forEach(option => {
      const children = (option[childrenKey] as TreeOption[] | undefined) ?? []
      if (children.length > 0) {
        parentValues.push(option[valueKey] as string | number)
        collectParents(children)
      }
    })
  }

  collectParents(options)

  return parentValues
}

export function toRsuiteValue(
  uiValues: TreeOption[] | undefined,
  childrenKey: string = 'children',
  valueKey: string = 'value'
): ValueType | undefined {
  if (!uiValues) {
    return undefined
  }

  const rsuiteValues: (string | number)[] = []

  const collectValues = (items: TreeOption[]) => {
    items.forEach(item => {
      const children = item[childrenKey] as TreeOption[] | undefined

      // Add leaf node values (nodes without children)
      if (!children || children.length === 0) {
        rsuiteValues.push(item[valueKey] as string | number)
      } else {
        // Recursively collect from children
        collectValues(children)
      }
    })
  }

  collectValues(uiValues)

  return rsuiteValues.length > 0 ? rsuiteValues : undefined
}

export function computeDisabledValues(
  isMultiSelect: boolean,
  value: ValueType | undefined,
  options: TreeOption[],
  childrenKey: string = 'children',
  valueKey: string = 'value',
  labelKey: string = 'label'
) {
  if (isMultiSelect) {
    return []
  }

  const selectedOptions = getTreeOptionsBySelectedValues(value, options, childrenKey, valueKey, labelKey)

  const valuesToDisabled: ValueType = options
    .filter(option => selectedOptions.some(selectedOption => selectedOption[valueKey] !== option[valueKey]))
    .map(option => option[valueKey] as string | number)

  const subValuesToDisabled: ValueType = options
    .filter(option => selectedOptions.some(selectedOption => selectedOption[valueKey] !== option[valueKey]))
    .flatMap(option => option[childrenKey] as TreeOption[])
    .filter(Boolean)
    .flatMap(option => option[valueKey] as string | number)

  return [...valuesToDisabled, ...subValuesToDisabled]
}

export function getOptionsToDisplay(
  allOptions: TreeOption[],
  selectedOptions: TreeOption[],
  childrenKey: string = 'children',
  valueKey: string = 'value'
): TreeOption[] {
  const selectedMap = new Map(selectedOptions.map(opt => [opt[valueKey] as string | number, opt]))

  const result: TreeOption[] = []

  function findChildren(option: TreeOption) {
    const children = option[childrenKey] as TreeOption[] | undefined
    const value = option[valueKey] as string | number

    if (children && children.length > 0) {
      const hasAllChildrenSelected = children.every(child => selectedMap.has(child[valueKey] as string | number))

      if (hasAllChildrenSelected) {
        result.push(option) // on garde le parent seulement
        children.forEach(child => selectedMap.delete(child[valueKey] as string | number))
      } else {
        children.forEach(findChildren) // on descend chercher les enfants partiellement sélectionnés
      }
    } else if (selectedMap.has(value)) {
      result.push(option) // enfant orphelin sélectionné
    }
  }

  allOptions.forEach(findChildren)

  return result
}

export function hasThreeLevels(options: TreeOption[], childrenKey: string = 'children'): boolean {
  if (!options || options.length === 0) {
    return false
  }

  function checkDepth(items: TreeOption[], currentDepth: number): boolean {
    if (currentDepth >= 3) {
      return true
    }

    return items.some(item => {
      const children = item[childrenKey] as TreeOption[] | undefined
      if (children && Array.isArray(children) && children.length > 0) {
        return checkDepth(children, currentDepth + 1)
      }

      return false
    })
  }

  return checkDepth(options, 1)
}
