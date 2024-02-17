import { throwError } from '../../utils/throwError'

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

export function assertNumberOrUndefined(value: any, element: string): asserts value is number | undefined {
  if (typeof value !== 'number' && value !== undefined) {
    throwError(
      `\`value\` should be of type \`number | undefined\` in \`cy.fill(label, value)\` when used on a <${element} />.`
    )
  }
}

export function assertStringOrUndefined(value: any, element: string): asserts value is string | undefined {
  if (typeof value !== 'string' && value !== undefined) {
    throwError(
      `\`value\` should be of type \`string | undefined\` in \`cy.fill(label, value)\` when used on a <${element} />.`
    )
  }
}
