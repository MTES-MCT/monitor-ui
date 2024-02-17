import { throwError } from './throwError'

export function assertStringOrUndefined(value: any, element: string): asserts value is string | undefined {
  if (typeof value !== 'string' && value !== undefined) {
    throwError(
      `\`value\` should be of type \`string | undefined\` in \`cy.fill(labe, value)\` when used on a <${element} />.`
    )
  }
}
