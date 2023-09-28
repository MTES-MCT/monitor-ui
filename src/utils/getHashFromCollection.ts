import objectHash from 'object-hash'

import type {} from '../types'
import type { AnyObject } from 'yup'

/**
 * Generates a simple hash from a collection regardless of order.
 *
 * @param   collection  An array of objects
 * @returns             A hash string representation of the collection
 */
export function getHashFromCollection<T extends AnyObject = AnyObject>(collection: T[]): string {
  return objectHash(collection, {
    // The name of this option is misleading:
    // `true` ensures that the same hash is returned regardless of collection order
    // https://github.com/puleos/object-hash#hashvalue-options
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unorderedArrays: true
  })
}
