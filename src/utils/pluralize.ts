/**
 * Pluralize a given lowercase string.
 */
export function pluralize(text: string, count: number): string {
  if (!text.trim().length) {
    return ''
  }

  return text + (count > 1 ? 's' : '')
}
