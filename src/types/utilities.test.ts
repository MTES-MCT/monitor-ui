import type { Define, PartialExcept, Undefine, UndefineExcept } from './utilities'

interface MyInterface {
  aNecessaryProp: Date
  aRequiredProp: number
  anArrayProp: string[]
  anOptionalProp?: string
  anotherNecessaryProp: boolean
}

// =========================================================
// `Undefine<T>`

type MyFullyUndefinedInterface = Undefine<MyInterface>

// @ts-expect-no-error
export const myFullyUndefinableInterface: MyFullyUndefinedInterface = {
  anArrayProp: undefined,
  aNecessaryProp: undefined,
  anOptionalProp: undefined,
  anotherNecessaryProp: undefined,
  aRequiredProp: undefined
}

// @ts-expect-no-error
export const myFullyUndefinableInterface2: MyFullyUndefinedInterface = {
  anArrayProp: undefined,
  aNecessaryProp: undefined,
  // anOptionalProp: undefined,
  anotherNecessaryProp: undefined,
  aRequiredProp: undefined
}

// @ts-expect-error `[...] Property 'anArrayProp' is missing [...]`
export const myFullyUndefinableInterfaceWithMissingProp: MyFullyUndefinedInterface = {
  aNecessaryProp: undefined,
  anOptionalProp: undefined,
  anotherNecessaryProp: undefined,
  aRequiredProp: undefined
}

// =========================================================
// `Define<T>`

type MyFullyDefinedInterface = Define<MyPartiallyUndefinedInterface>

// @ts-expect-no-error
export const myFullyDefinedInterface: MyFullyDefinedInterface = {
  anArrayProp: ['string'],
  aNecessaryProp: new Date(),
  anOptionalProp: 'string',
  anotherNecessaryProp: true,
  aRequiredProp: 1
}

// @ts-expect-no-error
export const myFullyDefinedInterface2: MyFullyDefinedInterface = {
  anArrayProp: ['string'],
  aNecessaryProp: new Date(),
  // anOptionalProp: 'string',
  anotherNecessaryProp: true,
  aRequiredProp: 1
}

// @ts-expect-error `[...] Property 'anArrayProp' is missing [...]`
export const myFullyDefinedInterfaceWithMissingProp: MyFullyDefinedInterface = {
  aNecessaryProp: new Date(),
  anOptionalProp: 'string',
  anotherNecessaryProp: true,
  aRequiredProp: 1
}

// =========================================================
// `PartialExcept<T>`

type MyPartiallyPartialInterface = PartialExcept<MyInterface, 'aNecessaryProp' | 'anotherNecessaryProp'>

// @ts-expect-no-error
export const myPartiallyPartialInterface: MyPartiallyPartialInterface = {
  aNecessaryProp: new Date(),
  anotherNecessaryProp: true
}

// @ts-expect-error `[...] Type 'undefined' is not assignable to type 'string[]'.`
export const myPartiallyPartialInterfaceWithWrongUndefinedProp: MyPartiallyPartialInterface = {
  anArrayProp: undefined,
  aNecessaryProp: new Date(),
  anotherNecessaryProp: true
}

// =========================================================
// `UndefineExpect<T>`

type MyPartiallyUndefinedInterface = UndefineExcept<MyInterface, 'aNecessaryProp' | 'anotherNecessaryProp'>

// @ts-expect-no-error
export const myPartiallyUndefinableInterface: MyPartiallyUndefinedInterface = {
  anArrayProp: undefined,
  aNecessaryProp: new Date(),
  anOptionalProp: undefined,
  anotherNecessaryProp: true,
  aRequiredProp: 1
}

// @ts-expect-no-error
export const myPartiallyUndefinableInterface2: MyPartiallyUndefinedInterface = {
  anArrayProp: undefined,
  aNecessaryProp: new Date(),
  // anOptionalProp: undefined,
  anotherNecessaryProp: true,
  aRequiredProp: 1
}

// @ts-expect-error `[...] Property 'anArrayProp' is missing [...]`
export const myPartiallyUndefinableInterfaceWithMissingProp: MyPartiallyUndefinedInterface = {
  aNecessaryProp: new Date(),
  anOptionalProp: undefined,
  anotherNecessaryProp: true,
  aRequiredProp: 1
}

export const myPartiallyUndefinableInterfaceWithWrongUndefinedProp: MyPartiallyUndefinedInterface = {
  anArrayProp: undefined,
  // @ts-expect-error `Type 'undefined' is not assignable to type 'Date'.`
  aNecessaryProp: undefined,
  anOptionalProp: undefined,
  anotherNecessaryProp: true,
  aRequiredProp: 1
}

describe('types', () => {
  /**
   * This test is required by jest to pass the error : "Your test suite must contain at least one test."
   *
   * Type-checking tests are run via `yarn test:type`.
   */
  it('is a dummy test for type-checking unit tests', async () => {})
})
