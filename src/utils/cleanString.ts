/**
 * Trim and single-space a string
 */
export function cleanString(text: string): string {
  return text.replace(/\s+/g, ' ').trim()
}
