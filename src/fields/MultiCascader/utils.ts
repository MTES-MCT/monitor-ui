import { ensure } from '@utils/ensure'
import { isEqual } from 'lodash-es'

import { assert } from '../../utils/assert'

import type { Option, OptionValueType, TreeOption } from '../../types/definitions'
import type { RsuiteTreeBranch, RsuiteTreeLeaf, RsuiteTreeItem } from '../../types/internals'

/**
 * Get all leaf options from the provided options if they are branchs.
 * Get the options itself if they are leaves.
 */
const getTreeOptionLeavesFromTreeOptions = <OptionValue extends OptionValueType>(
  treeOptions: Array<TreeOption<OptionValue>>
): Array<Option<OptionValue>> =>
  treeOptions.flatMap(treeOption =>
    'children' in treeOption && treeOption.children
      ? getTreeOptionLeavesFromTreeOptions(treeOption.children)
      : [treeOption as Option<OptionValue>]
  )

/**
 * Recursively navigates through the tree options based on the given path indices and collects all leaf options.
 */
function getSelectedOptionsFromTreeOptionsByTreePositionIndexes<OptionValue extends OptionValueType>(
  treeOptions: Array<TreeOption<OptionValue>>,
  pathIndexes: number[]
): Array<Option<OptionValue>> {
  if (pathIndexes.length === 0 || treeOptions.length === 0) {
    return []
  }

  const [currentIndex, ...remainingIndexes] = pathIndexes
  assert(currentIndex, 'currentIndex')
  const currentOption = treeOptions[currentIndex]
  assert(currentOption, 'currentOption')

  if ('children' in currentOption) {
    if (remainingIndexes.length > 0) {
      return getSelectedOptionsFromTreeOptionsByTreePositionIndexes(currentOption.children, remainingIndexes)
    }

    return getTreeOptionLeavesFromTreeOptions(currentOption.children)
  }

  return [currentOption as Option<OptionValue>]
}

/**
 * Asserts if the provided Rsuite tree item is a branch.
 */
const isRsuiteTreeBranch = <OptionValue extends OptionValueType>(
  rsuiteTreeItem: RsuiteTreeItem<OptionValue>
): rsuiteTreeItem is RsuiteTreeBranch<OptionValue> => 'children' in rsuiteTreeItem

/**
 * Converts a string tree position to numbered array one.
 */
const getTreePositionIndexesFromTreePosition = (path: string): number[] =>
  path.split('-').map(part => parseInt(part, 10))

/**
 * Counts the depth of a consistently (!) deep tree (array) of `TreeOption`.
 *
 * @description
 * Assumes the tree's depth is consistent across all branches.
 */
export function countTreeDepth<OptionValue extends OptionValueType>(
  treeOptions: Array<TreeOption<OptionValue>>
): number {
  if (treeOptions.length === 0) {
    return 0
  }

  const firstItem = ensure(treeOptions[0], 'treeOptions[0]')
  if ('children' in firstItem && firstItem.children) {
    return 1 + countTreeDepth(firstItem.children)
  }

  return 1
}

/**
 * Get Rsuite data items from the provided tree options.
 */
export function getRsuiteTreeItemsFromTreeOptions<OptionValue extends OptionValueType = string>(
  treeOptions: Array<TreeOption<OptionValue>>,
  parentTreePositionIndexes: number[] = []
): Array<RsuiteTreeItem<OptionValue>> {
  return treeOptions.map((treeOption, index) => {
    const treePositionIndexes = [...parentTreePositionIndexes, index]
    const treePosition = treePositionIndexes.join('-')

    if ('children' in treeOption) {
      return {
        ...treeOption,
        children: getRsuiteTreeItemsFromTreeOptions(treeOption.children, treePositionIndexes),
        value: treePosition
      } as RsuiteTreeBranch<OptionValue>
    }

    const { value: optionValue, ...rest } = treeOption

    return {
      ...rest,
      optionValue,
      value: treePosition
    } as RsuiteTreeLeaf<OptionValue>
  })
}

/**
 * @description
 * A tree position is a string that looks and works like this:
 * - "0" = either all the deepest children of the 1st root item are selected,
 *         or the 1st root item is selected if it has no children
 * - "1-2" = either all the deepest children of the 3rd child of the 2nd root item are selected,
 *           or the 3rd child of the 2nd root item is selected if it has no children
 */
export function getSelectedOptionsValuesFromSelectedTreePositions<OptionValue extends OptionValueType>(
  treeOptions: Array<TreeOption<OptionValue>>,
  treePositions: string[]
): OptionValue[] {
  const selectedOptions = treePositions.flatMap(path => {
    const pathIndexes = getTreePositionIndexesFromTreePosition(path)

    return getSelectedOptionsFromTreeOptionsByTreePositionIndexes<OptionValue>(treeOptions, pathIndexes)
  })

  return selectedOptions.map(option => option.value)
}

/**
 * Get Rsuite tree positions from the provided option values.
 *
 * @description
 * A tree position is a string that looks and works like this:
 * - "0" = either all the deepest children of the 1st root item are selected,
 *         or the 1st root item is selected if it has no children
 * - "1-2" = either all the deepest children of the 3rd child of the 2nd root item are selected,
 *           or the 3rd child of the 2nd root item is selected if it has no children
 */
export function getSelectedTreePositionsFromSelectedOptionValues<OptionValue extends OptionValueType = string>(
  allRsuiteTreeItems: Array<RsuiteTreeItem<OptionValue>>,
  selectedOptionValues: OptionValue[]
): string[] {
  return allRsuiteTreeItems
    .reduce<string[]>((previousTreePositions, rsuiteTreeItem) => {
      if (isRsuiteTreeBranch(rsuiteTreeItem)) {
        return [
          ...previousTreePositions,
          ...getSelectedTreePositionsFromSelectedOptionValues<OptionValue>(
            rsuiteTreeItem.children as Array<RsuiteTreeItem<OptionValue>>,
            selectedOptionValues
          )
        ]
      }

      if (selectedOptionValues.find(optionValue => isEqual(optionValue, rsuiteTreeItem.optionValue))) {
        return [...previousTreePositions, rsuiteTreeItem.value]
      }

      return previousTreePositions
    }, [])
    .flat()
}
