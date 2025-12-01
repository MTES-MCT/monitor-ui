import type { TreeOption } from '../types'

/**
 * Builds the complete path from root to a node in a tree.
 *
 * @param value - The value of the node to find
 * @param options - The tree options
 * @param childrenKey - The key for children array in tree nodes
 * @param valueKey - The key for the value in tree nodes
 * @returns Array of TreeOptions representing the complete path from root to target node
 */
export function getNodePath(
  value: string | number,
  options: TreeOption[],
  childrenKey: string = 'children',
  valueKey: string = 'value'
): TreeOption[] {
  const path: TreeOption[] = []

  const findNodeWithPath = (nodes: TreeOption[]): boolean => {
    // eslint-disable-next-line no-restricted-syntax
    for (const node of nodes) {
      path.push(node)

      if (node[valueKey] === value) {
        return true
      }

      const children = node[childrenKey] as TreeOption[] | undefined
      if (children && Array.isArray(children)) {
        if (findNodeWithPath(children)) {
          return true
        }
      }

      path.pop()
    }

    return false
  }

  findNodeWithPath(options)

  return path
}

/**
 * Builds a formatted path string with labels separated by a delimiter.
 *
 * @param path - Array of TreeOptions representing the path
 * @param labelKey - The key for the label in tree nodes
 * @param delimiter - String to join path labels (default: ' / ')
 * @returns Formatted path string
 */
export function formatNodePath(path: TreeOption[], labelKey: string = 'label', delimiter: string = ' / '): string {
  return path.map(node => node[labelKey] as string).join(delimiter)
}

/**
 * Gets the formatted path string for a node in a tree.
 *
 * @param value - The value of the node to find
 * @param options - The tree options
 * @param childrenKey - The key for children array in tree nodes
 * @param valueKey - The key for the value in tree nodes
 * @param labelKey - The key for the label in tree nodes
 * @param delimiter - String to join path labels (default: ' / ')
 * @returns Formatted path string
 */
export function getFormattedNodePath(
  value: string | number,
  options: TreeOption[],
  childrenKey: string = 'children',
  valueKey: string = 'value',
  labelKey: string = 'label',
  delimiter: string = ' / '
): string {
  const path = getNodePath(value, options, childrenKey, valueKey)

  return formatNodePath(path, labelKey, delimiter)
}
