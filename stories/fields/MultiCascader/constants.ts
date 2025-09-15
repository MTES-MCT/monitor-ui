/* eslint-disable sort-keys-fix/sort-keys-fix */

import { faker } from '@faker-js/faker'
import { fromPairs } from 'lodash-es'

import type { TreeOption } from '../../../src'

export type FakeCity = {
  id: string
  name: string
  zipCode: string
}

// =============================================================================
// 2 levels deep fake tree options

export type FakeCountryWithCities = {
  cities: FakeCity[]
  name: string
}

export type FakeCountryWithStatesWithCities = {
  name: string
  states: FakeState[]
}

const generateFakeCity = (): FakeCity => ({
  id: faker.string.uuid(),
  name: faker.location.city(),
  zipCode: faker.location.zipCode()
})

const generateFakeCountryWithCities = (): FakeCountryWithCities => ({
  cities: Array.from({ length: 10 }, generateFakeCity),
  name: faker.location.country()
})

const FAKE_COUNTRIES_WITH_CITIES = Array.from({ length: 10 }, generateFakeCountryWithCities)

export const FAKE_COUNTRIES_WITH_CITIES_AS_TREE_OPTIONS: Array<TreeOption<FakeCity>> = FAKE_COUNTRIES_WITH_CITIES.map(
  country => ({
    children: country.cities.map(city => ({
      label: city.name,
      value: city
    })),
    label: country.name
  })
)

// Storybook-only variables
export const FAKE_CITIES_AS_LABELS_FOR_DEPTH_2_STORY: string[] = FAKE_COUNTRIES_WITH_CITIES.flatMap(country =>
  country.cities.map(city => city.name)
)
export const FAKE_CITIES_AS_MAPPING_FOR_DEPTH_2_STORY: Record<string, FakeCity> = fromPairs(
  FAKE_COUNTRIES_WITH_CITIES.flatMap(country => country.cities.map(city => [city.name, city]))
)

// =============================================================================
// 3 levels deep fake tree options

export type FakeState = {
  cities: FakeCity[]
  name: string
}

const generateFakeStateWithCities = (): FakeState => ({
  cities: Array.from({ length: 10 }, generateFakeCity),
  name: faker.location.state()
})

const generateFakeCountryWithStatesWithCities = (): FakeCountryWithStatesWithCities => ({
  name: faker.location.country(),
  states: Array.from({ length: 10 }, generateFakeStateWithCities)
})

const FAKE_COUNTRIES_WITH_STATES_WITH_CITIES = Array.from({ length: 10 }, generateFakeCountryWithStatesWithCities)

export const FAKE_COUNTRIES_WITH_STATES_WITH_CITIES_AS_TREE_OPTIONS: Array<TreeOption<FakeCity>> =
  FAKE_COUNTRIES_WITH_STATES_WITH_CITIES.map(country => ({
    children: country.states.map(state => ({
      label: state.name,
      children: state.cities.map(city => ({
        label: city.name,
        value: city
      }))
    })),
    label: country.name
  }))

// Storybook-only variables
export const FAKE_CITIES_AS_LABELS_FOR_DEPTH_3_STORY: string[] = FAKE_COUNTRIES_WITH_CITIES.flatMap(country =>
  country.cities.map(city => city.name)
)
export const FAKE_CITIES_AS_MAPPING_FOR_DEPTH_3_STORY: Record<string, FakeCity> = fromPairs(
  FAKE_COUNTRIES_WITH_CITIES.flatMap(country => country.cities.map(city => [city.name, city]))
)
