import { getRsuiteDataItemsFromOptions } from './getRsuiteDataItemsFromOptions'

export function handleCustomSearch(customSearchRef, nextQuery, rsuiteData, customSearchMinQueryLength, optionValueKey) {
  if (!customSearchRef.current || nextQuery.trim().length < customSearchMinQueryLength) {
    return rsuiteData
  }

  const nextControlledRsuiteData =
    nextQuery.trim().length >= customSearchMinQueryLength
      ? getRsuiteDataItemsFromOptions(customSearchRef.current.find(nextQuery), optionValueKey)
      : rsuiteData

  return nextControlledRsuiteData
}
