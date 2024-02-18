import { throwError } from '../../utils/throwError'

const throwAssertionError = (expectedType: string, component: string) =>
  throwError(
    `\`value\` should be of type \`${expectedType}\` in \`cy.fill(label, value)\` when used on a <${component} />.`
  )

export function assertBooleanOrUndefined(value: any, component: string): asserts value is boolean | undefined {
  if (value === undefined || typeof value === 'boolean') {
    return
  }

  throwAssertionError('boolean | undefined', component)
}

export function assertDateTupleOrDateWithTimeTupleOrUndefined(
  value: any,
  component: string
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

  throwAssertionError('DateTuple | DateWithTimeTuple | undefined', component)
}

export function assertDateRangeTupleOrDateWithTimeRangeTupleOrUndefined(
  value: any,
  component: string
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

  throwAssertionError('DateRangeTuple | DateWithTimeRangeTuple | undefined', component)
}

export function assertNumberOrUndefined(value: any, component: string): asserts value is number | undefined {
  if (value === undefined || typeof value === 'number') {
    return
  }

  throwAssertionError('number | undefined', component)
}

export function assertString(value: any, component: string): asserts value is string {
  if (typeof value === 'string') {
    return
  }

  throwAssertionError('string', component)
}

export function assertStringOrUndefined(value: any, component: string): asserts value is string | undefined {
  if (value === undefined || typeof value === 'string') {
    return
  }

  throwAssertionError('string | undefined', component)
}

export function assertStringArrayOrUndefined(value: any, component: string): asserts value is string[] | undefined {
  if (value === undefined) {
    return
  }

  if (Array.isArray(value) && value.every(valueItem => typeof valueItem === 'string')) {
    return
  }

  throwAssertionError('string[] | undefined', component)
}
