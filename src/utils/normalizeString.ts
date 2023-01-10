import { cleanString } from './cleanString'

/**
 * Normalize a string, making them undefined if empty-ish
 */
export function normalizeString(text?: string): string | undefined {
  if (!text) {
    return undefined
  }

  const cleanText = cleanString(text)

  return cleanText.length > 0 ? cleanText : undefined
}
