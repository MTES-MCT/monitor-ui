/* eslint-disable no-bitwise */

// We use the growing `json-stringify-deterministic` library rather than the `json-stable-stringify` one because:
// https://www.npmjs.com/package/json-stringify-deterministic#json-stringify-deterministic
import jsonStringifyDeterministic from 'json-stringify-deterministic'

import type { AnyObject } from '../types'

/**
 * Generates a deterministic hash from a collection, regardless of items and props order.
 *
 * @description
 * The function converts the collection into a deterministic string representation (JSON)
 * to generate a deterministic hash for that string.
 *
 * Note: This hash is designed for simplicity and speed, it can't be used for cryptographic security.
 *
 * @param   collection  An array of objects
 * @returns             A hash string representation of the collection
 */
export function getHashFromCollection<T extends AnyObject = AnyObject>(collection: T[]): string {
  // If the collection is empty, simply return "0"
  if (collection.length === 0) {
    return '0'
  }

  // An order-independent string representation of the collection
  const collectionAsDeterministicJson = `[${collection
    .map(collectionItem => jsonStringifyDeterministic(collectionItem))
    .sort()
    .join(',')}]`

  // Initialize hash value
  let hashAsNumber = 0

  let characterAsUnicodeValue: number

  // Iterate over each character in the string representation of the collection
  for (let index = 0; index < collectionAsDeterministicJson.length; index += 1) {
    characterAsUnicodeValue = collectionAsDeterministicJson.charCodeAt(index)

    // Modify the hash value based on the current character's code.
    // The operation `(hashAsNumber << 5) - hashAsNumber` rapidly increases the hash value,
    // and adding the character code `+ characterAsUnicodeValue` further modifies it.
    // This produces a wide range of hash values for different inputs.
    hashAsNumber = (hashAsNumber << 5) - hashAsNumber + characterAsUnicodeValue

    // This operation ensures we get a 32-bit integer, effectively wrapping the hash value if it exceeds 32 bit
    hashAsNumber |= 0
  }

  return hashAsNumber.toString()
}
