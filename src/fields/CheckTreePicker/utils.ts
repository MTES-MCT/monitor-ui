import type { TreeOption } from './types'
import type { ValueType } from 'rsuite/esm/CheckTreePicker'

function getHash(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    hash = (hash ^ str.charCodeAt(i)) * 16777619
  }

  // eslint-disable-next-line no-bitwise
  return hash >>> 0
}

export function generateUniqueIds(
  options: TreeOption[],
  childrenKey: string = 'children',
  valueKey: string | number = 'value',
  labelKey: string = 'label'
): TreeOption[] {
  function processNode(option: TreeOption, parentLabel?: string | number): TreeOption {
    const label = option[labelKey] as string
    const value = option[valueKey] as string | number
    const children = option[childrenKey] as TreeOption[] | undefined

    const uniqueValue = parentLabel ? `${value}_${getHash(String(parentLabel))}` : value

    const processedNode: TreeOption = {
      ...option,
      [labelKey]: label,
      [valueKey]: uniqueValue
    }

    if (children && Array.isArray(children)) {
      processedNode[childrenKey] = children.map(child => processNode(child, value)) as any
    }

    return processedNode
  }

  return options.map(option => processNode(option))
}

export function fromRsuiteValue(
  selectedValues: ValueType,
  allOptions: TreeOption[],
  isConvertingOriginalValues: boolean = false,
  childrenKey: string = 'children',
  valueKey: string | number = 'value',
  labelKey: string = 'label'
): TreeOption[] | undefined {
  const formattedTree = getTreeOptionsBySelectedValues(
    selectedValues,
    allOptions,
    isConvertingOriginalValues,
    childrenKey,
    valueKey,
    labelKey
  )

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
  isConvertingOriginalValues: boolean = false,
  childrenKey: string = 'children',
  valueKey: string | number = 'value',
  labelKey: string = 'label'
): TreeOption[] {
  function preserveChildrenStructure(option: TreeOption): TreeOption {
    const children = option[childrenKey] as TreeOption[] | undefined
    const baseOption: TreeOption = {
      [labelKey]: option[labelKey],
      [valueKey]:
        typeof option[valueKey] === 'string' && isConvertingOriginalValues
          ? option[valueKey].replace(/_\d+$/, '')
          : option[valueKey]
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
          [valueKey]:
            typeof option[valueKey] === 'string' && isConvertingOriginalValues
              ? option[valueKey].replace(/_\d+$/, '')
              : option[valueKey]
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
  optionsWithIds?: TreeOption[],
  childrenKey: string = 'children',
  valueKey: string = 'value'
): ValueType | undefined {
  if (!uiValues) {
    return undefined
  }

  const rsuiteValues: (string | number)[] = []

  // Helper function to find a matching option by value path in the options tree
  const findOptionByPath = (
    valuePath: (string | number)[],
    options?: TreeOption[],
    currentIndex: number = 0
  ): TreeOption | undefined => {
    if (!options || currentIndex >= valuePath.length) {
      return undefined
    }

    const targetValue = valuePath[currentIndex]

    return options.reduce((found: TreeOption | undefined, option) => {
      if (found) {
        return found
      }

      // Extract the base value without hash for comparison
      const optionValue = option[valueKey] as string | number
      const baseOptionValue = typeof optionValue === 'string' ? optionValue.replace(/_\d+$/, '') : optionValue

      if (baseOptionValue === targetValue) {
        // If this is the last value in the path, we found it
        if (currentIndex === valuePath.length - 1) {
          return option
        }

        // Otherwise, continue searching in children
        const children = option[childrenKey] as TreeOption[] | undefined
        if (children && children.length > 0) {
          return findOptionByPath(valuePath, children, currentIndex + 1)
        }
      }

      return undefined
    }, undefined)
  }

  // Build value paths for each leaf node
  const collectValues = (uiItems: TreeOption[], currentPath: (string | number)[] = []) => {
    uiItems.forEach(uiItem => {
      const children = uiItem[childrenKey] as TreeOption[] | undefined
      const uiValue = uiItem[valueKey] as string | number
      const newPath = [...currentPath, uiValue]

      // Add leaf node values (nodes without children) first
      if (!children || children.length === 0) {
        // Find the matching option with the hash suffix using the full path
        const matchingOption = findOptionByPath(newPath, optionsWithIds)
        const valueToUse = matchingOption?.[valueKey] ?? uiValue
        rsuiteValues.push(valueToUse as string | number)
      }
    })

    // Then recursively collect from children
    uiItems.forEach(uiItem => {
      const children = uiItem[childrenKey] as TreeOption[] | undefined
      const uiValue = uiItem[valueKey] as string | number
      const newPath = [...currentPath, uiValue]

      if (children && children.length > 0) {
        collectValues(children, newPath)
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

  const selectedOptions = getTreeOptionsBySelectedValues(value, options, false, childrenKey, valueKey, labelKey)

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

export function flattenAllDescendants(nodes: TreeOption[], childrenKey: string = 'children'): TreeOption[] {
  return nodes.flatMap(node => {
    const nodeChildren = (node[childrenKey] as TreeOption[]) || []

    return [...nodeChildren, ...flattenAllDescendants(nodeChildren, childrenKey)]
  })
}

export function getOptionsToDisplay(
  allOptions: TreeOption[],
  selectedOptions: TreeOption[],
  childrenKey: string = 'children',
  valueKey: string = 'value'
): TreeOption[] {
  const selectedMap = new Map(selectedOptions.map(opt => [opt[valueKey] as string | number, opt]))

  const result: TreeOption[] = []

  function findChildren(option: TreeOption): void {
    const children = option[childrenKey] as TreeOption[] | undefined
    const value = option[valueKey] as string | number

    if (children && children.length > 0) {
      // Check if all children are selected BEFORE recursion
      const hasAllChildrenSelected = children.every(child => selectedMap.has(child[valueKey] as string | number))

      if (hasAllChildrenSelected) {
        result.push(option) // on garde le parent seulement
        children.forEach(child => selectedMap.delete(child[valueKey] as string | number))
      } else {
        // Only recurse if not all children are selected
        children.forEach(findChildren)
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

export function mergeResultsByParent(
  items: TreeOption[],
  childrenKey: string = 'children',
  valueKey: string = 'value',
  labelKey: string = 'label'
): TreeOption[] {
  // First, collect all children from all items to merge recursively
  const allChildren: TreeOption[] = []
  items.forEach(item => {
    const children = item[childrenKey] as TreeOption[] | undefined
    if (children && children.length > 0) {
      allChildren.push(...children)
    }
  })

  // Merge items at current level
  const parentMap = items.reduce((acc, item) => {
    const parentId = item[valueKey] as string
    if (!parentId) {
      return acc
    }

    const children = item[childrenKey] as TreeOption[] | undefined

    const formattedItem: any = {
      [labelKey]: item[labelKey],
      [valueKey]: item[valueKey]
    }
    if (children?.length && children?.length > 0) {
      formattedItem[childrenKey] = item[childrenKey]
    }
    const existing = acc.get(parentId)
    if (!existing) {
      acc.set(parentId, formattedItem)
    } else if (
      formattedItem[childrenKey] &&
      Array.isArray(formattedItem[childrenKey]) &&
      formattedItem[childrenKey].length > 0
    ) {
      if (!existing[childrenKey]) {
        existing[childrenKey] = []
      }
      const existingChildren = Array.isArray(existing[childrenKey]) ? (existing[childrenKey] as TreeOption[]) : []
      const seen = new Set(existingChildren.map(child => child[valueKey]))

      formattedItem[childrenKey].forEach(child => {
        if (!seen.has(child[valueKey])) {
          existingChildren.push(child)
        }
      })
    }

    return acc
  }, new Map<string, TreeOption>())

  // Recursively merge children if any exist
  const result = Array.from(parentMap.values())
  if (allChildren.length > 0) {
    const mergedChildren = mergeResultsByParent(allChildren, childrenKey, valueKey, labelKey)

    // Replace children in result with merged children
    return result.map(item => {
      const itemChildren = item[childrenKey] as TreeOption[] | undefined
      if (itemChildren && itemChildren.length > 0) {
        const relevantChildren = mergedChildren.filter(child => itemChildren.some(c => c[valueKey] === child[valueKey]))

        return {
          ...item,
          [childrenKey]: relevantChildren
        }
      }

      return item
    })
  }

  return result
}
