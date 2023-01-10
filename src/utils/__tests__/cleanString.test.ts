import { expect } from '@jest/globals'

import { cleanString } from '../cleanString'

describe('utils/cleanString()', () => {
  it('should return a trimmed and single-spaced string', () => {
    const text = ' à  l’ouest '

    const result = cleanString(text)

    expect(result).toStrictEqual('à l’ouest')
  })

  it('should return an empty string', () => {
    const text = ''

    const result = cleanString(text)

    expect(result).toStrictEqual('')
  })
})
