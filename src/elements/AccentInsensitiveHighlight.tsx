import diacritics from 'diacritics'

export type AccentInsensitiveHighlightProps = {
  label: string
  query: string
}
export function AccentInsensitiveHighlight({ label, query }: AccentInsensitiveHighlightProps) {
  if (!query) {
    return label
  }
  const normalize = (str: string) => diacritics.remove(str).toLowerCase().trim()

  const raw = label
  const normLabel = normalize(raw)
  const normQuery = normalize(query)

  const index = normLabel.indexOf(normQuery)
  if (index === -1) {
    return raw
  }

  const before = raw.slice(0, index)
  const match = raw.slice(index, index + query.length)
  const after = raw.slice(index + query.length)

  return (
    <>
      {before}
      <mark>{match}</mark>
      {after}
    </>
  )
}
