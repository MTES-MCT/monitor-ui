import { throwError } from './throwError'

export function assertStringArrayOrUndefined(value: any, element: string): asserts value is string[] | undefined {
  if (value === undefined) {
    return
  }

  if (!!value && Array.isArray(value) && value.every(valueItem => typeof valueItem === 'string')) {
    return
  }

  throwError(
    `\`value\` should be of type \`string[] | undefined\` in \`cy.fill(label. value)\` when used on a \`<${element} />\`.`
  )
}
