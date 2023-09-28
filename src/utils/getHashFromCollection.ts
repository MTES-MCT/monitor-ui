/* eslint-disable no-bitwise */

import { sortBy } from 'lodash/fp'

/**
 * Generates a simple hash from a collection.
 *
 * @description
 * The function converts the collection into a string representation (JSON) to generate a hash for that string.
 *
 * In order to keep the hash generation independant from the collection order, you should provide a sorting key.
 *
 * Note: This hash is designed for simplicity and speed, it can't be used for cryptographic security.
 *
 * @param   collection  An array of objects
 * @param   sortingKey  A sortable object key to keep the hash consistent regardless of the collection order
 * @returns             A string representation of the hash
 */
export function getHashFromCollection<T extends Record<string, any> = Record<string, any>>(
  collection: T[],
  sortingKey?: keyof T
): string {
  // If the collection is empty, simply return "0"
  if (collection.length === 0) {
    return '0'
  }

  const sortedCollection = sortingKey ? sortBy([sortingKey], collection) : collection

  const collectionAsJson = JSON.stringify(sortedCollection)

  // Initialize hash value
  let hashAsNumber = 0

  let characterAsUnicodeValue: number

  // Iterate over each character in the string representation of the collection
  for (let index = 0; index < collectionAsJson.length; index += 1) {
    characterAsUnicodeValue = collectionAsJson.charCodeAt(index)

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
