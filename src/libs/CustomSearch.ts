import diacritics from 'diacritics'
import Fuse from 'fuse.js'
import { update } from 'lodash'

export type CustomSearchOptions = Partial<{
  /** Cache search index to avoid Must be unique in the entire application. */
  cacheKey: string | undefined
  isCaseSensitive: boolean
  isDiacriticSensitive: boolean
}>

export type CustomSearchKey<T> = string | Fuse.FuseOptionKeyObject<T>

const CACHE: Record<
  string,
  {
    fuseIndex: any
    normalizedCollection: any
    originalCollection: any
  }
> = {}

export class CustomSearch<T extends Record<string, any> = Record<string, any>> {
  #originalCollection: T[]
  #fuse: Fuse<T>
  #isDiacriticSensitive: boolean

  constructor(
    collection: T[],
    keys: Array<CustomSearchKey<T>>,
    { cacheKey, isCaseSensitive = false, isDiacriticSensitive = false }: CustomSearchOptions = {}
  ) {
    const maybeCache = cacheKey ? CACHE[cacheKey] : undefined
    // eslint-disable-next-line no-nested-ternary
    const normalizedCollection: T[] = maybeCache
      ? maybeCache.normalizedCollection
      : isDiacriticSensitive
      ? collection
      : CustomSearch.cleanCollectionDiacritics(collection, keys)

    this.#fuse = new Fuse(
      normalizedCollection,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      { isCaseSensitive, keys, useExtendedSearch: true },
      maybeCache ? Fuse.parseIndex<T>(maybeCache.fuseIndex) : undefined
    )
    this.#isDiacriticSensitive = isDiacriticSensitive
    this.#originalCollection = maybeCache ? maybeCache.originalCollection : collection

    if (cacheKey && !maybeCache) {
      CACHE[cacheKey] = {
        fuseIndex: this.#fuse.getIndex(),
        normalizedCollection,
        originalCollection: collection
      }
    }
  }

  public find(query: string, limit: number = 10): T[] {
    const normalizedQuery = this.#isDiacriticSensitive ? query : diacritics.remove(query)
    const extendedQuery = normalizedQuery
      .split(/\s+/)
      .map(keyword => `'${keyword}`)
      .join(' ')

    return this.#fuse.search(extendedQuery, { limit }).map(({ refIndex }) => this.#originalCollection[refIndex] as T)
  }

  public static cleanCollectionDiacritics<T extends Record<string, any> = Record<string, any>>(
    collection: T[],
    keys: Array<CustomSearchKey<T>>
  ): T[] {
    const keysAsStrings = keys.map(key => (typeof key === 'string' ? key : key.name))

    // TODO This does not follow FP principles. Maybe there is an FP-friendly solution using Lodash or vanilla JS?
    return collection.map(item => {
      // We have to destructure the collection item in order to avoid pointer modifications since `update()` is not FP
      const itemClone = { ...item }

      // Be careful here, nested keys are expected to be dot-separated (i.e.: 'my.deep.property')
      keysAsStrings.forEach(keyAsString => {
        update(itemClone, keyAsString, itemPropValue =>
          // The type check is a safeguard against unexpected properties values
          typeof itemPropValue === 'string' ? diacritics.remove(itemPropValue) : itemPropValue
        )
      })

      return itemClone
    })
  }
}
