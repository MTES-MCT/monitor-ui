import { throwError } from '../../utils/throwError'

export function assertDateTupleOrDateWithTimeTupleOrUndefined(
  value: any,
  element: string
): asserts value is Cypress.DateTuple | Cypress.DateWithTimeTuple | undefined {
  if (value === undefined) {
    return
  }

  if (
    Array.isArray(value) &&
    (value.length === 3 || value.length === 5) &&
    value.every(valueItem => typeof valueItem === 'number')
  ) {
    return
  }

  throwError(
    `\`value\` should be of type \`DateTuple | DateWithTimeTuple | undefined\` in \`cy.fill(label, value)\` when used on a <${element} />.`
  )
}

export function assertDateRangeTupleOrDateWithTimeRangeTupleOrUndefined(
  value: any,
  element: string
): asserts value is Cypress.DateRangeTuple | Cypress.DateWithTimeRangeTuple | undefined {
  if (value === undefined) {
    return
  }

  if (
    Array.isArray(value) &&
    value.length === 2 &&
    ((Array.isArray(value[0]) && value[0].length === 3 && value[1].length === 3) ||
      (Array.isArray(value[0]) && value[0].length === 5 && value[1].length === 5)) &&
    value.every(
      valueItem => Array.isArray(valueItem) && valueItem.every(valueItemItem => typeof valueItemItem === 'number')
    )
  ) {
    return
  }

  throwError(
    `\`value\` should be of type \`DateRangeTuple | DateWithTimeRangeTuple | undefined\` in \`cy.fill(label, value)\` when used on a <${element} />.`
  )
}

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
