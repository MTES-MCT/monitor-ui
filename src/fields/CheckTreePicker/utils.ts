import { difference } from 'lodash'

import type { TreeOption } from './types'
import type { ValueType } from 'rsuite/esm/CheckTreePicker'

export function fromRsuiteValue(
  selectedValues: ValueType,
  allOptions: TreeOption[],
  previousSelectedValues?: ValueType
): TreeOption[] | undefined {
  const findAndFormatItems = (values: ValueType, options: TreeOption[]): TreeOption[] =>
    values.map(value => findItemAndFormat(value, options)).filter((item): item is TreeOption => item !== undefined)

  const findItemAndFormat = (value: string | number, options: TreeOption[]): TreeOption | undefined => {
    const item = findItemByValue(options, value)
    if (!item) {
      return undefined
    }

    return item.parent ? formatParentItem(item.item, item.parent) : formatChildItem(item, selectedValues)
  }

  let formattedTree = findAndFormatItems(selectedValues, allOptions)
  formattedTree = groupByValue(formattedTree)

  if (previousSelectedValues) {
    formattedTree = handleUnselect(previousSelectedValues, selectedValues, formattedTree, allOptions)
  }

  return formattedTree.length > 0 ? formattedTree : undefined
}
export const findItemByValue = (
  options: TreeOption[],
  value: string | number
): { item: TreeOption; parent: TreeOption | undefined } | undefined => {
  for (let i = 0; i < options.length; i += 1) {
    const item = options[i]

    if (item?.value === value) {
      return { item, parent: undefined }
    }

    if (item?.children) {
      const found = findItemByValue(item.children, value)
      if (found) {
        return {
          item: found.item,
          parent: item
        }
      }
    }
  }

  return undefined
}

export function toRsuiteValue(uiValues: TreeOption[] | undefined): ValueType | undefined {
  if (!uiValues) {
    return undefined
  }

  const rsuiteValues = uiValues.flatMap(({ value }) => value)
  const rsuiteChildrenValues = uiValues.flatMap(({ children }) => (children ?? [])?.flatMap(({ value }) => value))

  return [...rsuiteValues, ...rsuiteChildrenValues]
}

const formatParentItem = (child: TreeOption, parent: TreeOption): TreeOption => ({
  children: (parent.children ?? [])
    .filter(parentChild => parentChild === child)
    .map(parentChild => ({ label: parentChild.label, value: parentChild.value })),
  label: parent.label,
  value: parent.value
})

const formatChildItem = (
  item: { item: TreeOption; parent: TreeOption | undefined },
  values: ValueType
): TreeOption => ({
  children: (item.item.children ?? [])
    .filter(child => values.includes(child.value))
    .map(child => ({ label: child.label, value: child.value })),
  label: item.item.label,
  value: item.item.value
})

const groupByValue = (formattedItems: TreeOption[]): TreeOption[] =>
  Object.values(
    formattedItems.reduce(
      (acc, item) => {
        if (!acc[item.value]) {
          acc[item.value] = { ...item, children: [] }
        }

        const existingChildren = new Set(acc[item.value]?.children?.map(c => c.value))
        item.children?.forEach(child => {
          if (!existingChildren.has(child.value)) {
            acc[item.value]?.children?.push(child)
            existingChildren.add(child.value)
          }
        })

        return acc
      },
      {} as Record<string, TreeOption>
    )
  )

const handleUnselect = (
  previousValues: ValueType,
  values: ValueType,
  formattedTree: TreeOption[],
  options: TreeOption[]
): TreeOption[] => {
  const removedItem = difference(previousValues, values)
  if (removedItem.length > 0 && removedItem[0]) {
    const item = findItemByValue(options, removedItem[0])
    if (item?.parent) {
      return formattedTree
    }

    return formattedTree.filter(value => value.value !== item?.item.value)
  }

  return formattedTree
}
