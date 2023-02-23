import { ascend, concat, fromPairs, identity, map, pipe, sort, toPairs, values } from 'ramda'

export const getEnumValuesWithUndefined: (dictionary: Record<string, string>) => string[] = pipe(
  values,
  concat(['UNDEFINED']),
  sort(ascend(identity))
)

export const getUndefinedPropsFromUndefinedStringProps: <T extends Record<string, any>>(props: T) => T = pipe(
  toPairs,
  map(([key, value]) => [key, value === 'UNDEFINED' ? undefined : value]),
  fromPairs as any
)
