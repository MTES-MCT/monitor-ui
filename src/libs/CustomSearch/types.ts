import type { AnyObject } from '../../types/definitions'
import type { FuseOptionKeyObject } from 'fuse.js'

export type CustomSearchCache = Record<string, CustomSearchCacheRecord>
export type CustomSearchCacheRecord = {
  fuseSearchIndex: any
  normalizedCollection: AnyObject[]
  originalCollection: AnyObject[]
  originalCollectionHash: string
}

export type CustomSearchKey<T> = string | FuseOptionKeyObject<T>

export type CustomSearchOptions = Partial<{
  /** Cache search index to avoid Must be unique in the entire application. */
  cacheKey: string | undefined

  childrenKey?: any

  /**
   * Indicates whether comparisons should be case sensitive.
   *
   * @default false
   * @see https://fusejs.io/api/options.html#iscasesensitive
   */
  isCaseSensitive: boolean

  /** Indicates whether comparisons should be diacritic (= accent) sensitive. */
  isDiacriticSensitive: boolean

  /**
   * Use strict keywords matching, disabling fuzziness.
   *
   * @default false
   * @description
   * Looking for "emoi" in ["mÉMOIre", "mÉMOrIsable"] will return only the first one if `isStrict` is `true`,
   * instead of returning both by default (`false`).
   */
  isStrict: boolean

  /**
   * By default, location is set to 0 and distance to 100
   * When isStrict is false, for something to be considered a match, it would have to be within
   * (threshold) 0.4 x (distance) 100 = 40 characters away from the expected location 0. (i.e. the first 40 characters)
   * When true, search will ignore location and distance, so it won't matter where in the string the pattern appears.
   *
   * @default true
   * @see https://www.fusejs.io/concepts/scoring-theory.html#scoring-theory
   */
  shouldIgnoreLocation: boolean

  /**
   * At what point does the match algorithm give up.
   *
   * @default 0.4
   * @description
   * A threshold of `0.0` requires a perfect match (of both letters and location),
   * a threshold of `1.0` would match anything.
   *
   * @see https://fusejs.io/api/options.html#threshold
   */
  threshold: number
  /** Invalidate cached index when the collection changes. */
  withCacheInvalidation: boolean
}>
