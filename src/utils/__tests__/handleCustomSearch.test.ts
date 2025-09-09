import { describe, expect, it } from '@jest/globals'

import { handleCustomSearch } from '../handleCustomSearch'

const mockGetRsuiteDataItemsFromOptions = jest.fn()
jest.mock('../getRsuiteDataItemsFromOptions', () => ({
  getRsuiteDataItemsFromOptions: (...args) => mockGetRsuiteDataItemsFromOptions(...args)
}))

describe('utils/handleCustomSearch()', () => {
  const rsuiteData = [
    { label: 'Amérique', optionValue: { value: 1 }, value: '1' },
    { label: 'France', optionValue: { value: 2 }, value: '2' },
    { label: 'Canada', optionValue: { value: 3 }, value: '3' },
    { label: 'Indonésie', optionValue: { value: 4 }, value: '4' }
  ]

  const optionValueKey = 'value'
  const customSearchMinQueryLength = 3

  let customSearchRef

  beforeEach(() => {
    mockGetRsuiteDataItemsFromOptions.mockReset()
    customSearchRef = { current: { find: jest.fn() } }
  })

  it('returns rsuiteData if customSearchRef.current is falsy', () => {
    customSearchRef.current = undefined
    const result = handleCustomSearch(customSearchMinQueryLength, customSearchRef, 'fra', optionValueKey, rsuiteData)
    expect(result).toEqual(rsuiteData)
  })

  it('returns rsuiteData if nextQuery is shorter than min length', () => {
    const result = handleCustomSearch(customSearchMinQueryLength, customSearchRef, 'fr', optionValueKey, rsuiteData)
    expect(result).toBe(rsuiteData)
    expect(customSearchRef.current.find).not.toHaveBeenCalled()
  })

  it('calls getRsuiteDataItemsFromOptions with found options when query is long enough', () => {
    const foundOptions = [{ label: 'Amérique', value: 1 }]
    customSearchRef.current.find.mockReturnValue(foundOptions)
    mockGetRsuiteDataItemsFromOptions.mockReturnValue(['result'])
    const result = handleCustomSearch(customSearchMinQueryLength, customSearchRef, 'amer', optionValueKey, rsuiteData)
    expect(customSearchRef.current.find).toHaveBeenCalledWith('amer')
    expect(mockGetRsuiteDataItemsFromOptions).toHaveBeenCalledWith(foundOptions, optionValueKey)
    expect(result).toEqual(['result'])
  })

  it('trims nextQuery before checking length', () => {
    const foundOptions = [{ label: 'C', value: 3 }]
    customSearchRef.current.find.mockReturnValue(foundOptions)
    mockGetRsuiteDataItemsFromOptions.mockReturnValue(['trimmed'])
    const result = handleCustomSearch(
      customSearchMinQueryLength,
      customSearchRef,
      '   abcd   ',
      optionValueKey,
      rsuiteData
    )
    expect(customSearchRef.current.find).toHaveBeenCalledWith('   abcd   ')
    expect(result).toEqual(['trimmed'])
  })
})
