export function getPseudoRandomString() {
  const nowAsString = new Date().toISOString()
  const token = Math.random().toString(36).slice(2)

  return `${nowAsString}${token}`
}
