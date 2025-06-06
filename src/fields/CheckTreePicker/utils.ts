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

export function getTreeOptionsBySelectedValues(
  selectedValues: ValueType | undefined,
  options: TreeOption[],
  childrenKey: string = 'children',
  valueKey: string | number = 'value',
  labelKey: string = 'label'
): TreeOption[] {
  function getOption(option: TreeOption): TreeOption | undefined {
    const children = option[childrenKey] as TreeOption[] | undefined
    if (children && Array.isArray(children)) {
      const filteredChildren = children
        .map(getOption)
        .filter((childOption): childOption is TreeOption => childOption !== undefined) as TreeOption[]

      if (filteredChildren.length > 0) {
        return {
          [childrenKey]: filteredChildren.map(child => ({ [labelKey]: child[labelKey], [valueKey]: child[valueKey] })),
          [labelKey]: option[labelKey],
          [valueKey]: option[valueKey]
        } as TreeOption
      }
    }

    if (selectedValues?.includes(option[valueKey] as string | number)) {
      return {
        [childrenKey]: ((option[childrenKey] as TreeOption[]) ?? []).map(child => ({
          [labelKey]: child[labelKey],
          [valueKey]: child[valueKey]
        })),
        [labelKey]: option[labelKey],
        [valueKey]: option[valueKey]
      } as TreeOption
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

  return options
    .filter(option => ((option[childrenKey] as TreeOption[]) ?? []).length > 0)
    .flatMap(option => option[valueKey] as string | number)
}

export function toRsuiteValue(
  uiValues: TreeOption[] | undefined,
  childrenKey: string = 'children',
  valueKey: string = 'value'
): ValueType | undefined {
  if (!uiValues) {
    return undefined
  }
  // set only childless and children values
  const rsuiteValues = uiValues
    .filter(uiValue => uiValue[childrenKey] === undefined || (uiValue[childrenKey] as TreeOption[]).length === 0)
    .flatMap(option => option[valueKey] as string | number)

  const rsuiteChildrenValues = uiValues.flatMap(uiValue =>
    ((uiValue[childrenKey] as TreeOption[]) ?? []).flatMap(child => child[valueKey] as string | number)
  )

  return [...rsuiteValues, ...rsuiteChildrenValues]
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
