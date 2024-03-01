/**
 * Removes a sub-list from an array starting at a specified index and containing a specified number of elements.
 *
 * @param start The starting index of the sub-list to remove.
 * @param count The number of elements to remove from the sub-list.
 * @param list The original array to remove the sub-list from.
 * @returns A copy of the original array with the specified sub-list removed.
 *
 * @example
 * ```ts
 * remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 * ```
 *
 * @internal
 */
export function remove<T>(start: number, count: number, list: T[]): T[] {
  const newList = [...list.slice(0, start), ...list.slice(start + count)]

  return newList
}
