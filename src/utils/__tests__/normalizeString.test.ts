import { describe, expect, it } from '@jest/globals'

import { normalizeString } from '../normalizeString'

describe('utils/normalizeString()', () => {
  it('should return undefined with an undefined <text>', () => {
    const text = undefined

    const result = normalizeString(text)

    expect(result).toBeUndefined()
  })

  it('should return undefined with an empty <text>', () => {
    const text = ''

    const result = normalizeString(text)

    expect(result).toBeUndefined()
  })

  it('should return undefined with an empty-ish <text>', () => {
    const text = ' '

    const result = normalizeString(text)

    expect(result).toBeUndefined()
  })

  it('should return aa normalize string with a dirty <text>', () => {
    const text = '  too  many  spaces  '

    const result = normalizeString(text)

    expect(result).toStrictEqual('too many spaces')
  })
})
