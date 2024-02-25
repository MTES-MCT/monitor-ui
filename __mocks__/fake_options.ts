import { fromPairs } from 'lodash'

import { LOREM_IPSUM } from './fake_text'

import type { Option } from 'index'

export const FAKE_STRING_OPTIONS: Array<Option<string>> = [
  { label: 'First Option', value: 'FIRST_OPTION' },
  { label: 'Second Option', value: 'SECOND_OPTION' },
  { label: 'Third Option', value: 'THIRD_OPTION' },
  { label: LOREM_IPSUM, value: 'CHATTY_OPTION' },
  { isDisabled: true, label: 'Disabled Option', value: 'DISABLED_OPTION' }
]
export const FAKE_STRING_OPTIONS_AS_LABELS: string[] = FAKE_STRING_OPTIONS.map(option => option.label)
export const FAKE_STRING_OPTIONS_AS_MAPPING: Record<string, string> = fromPairs(
  FAKE_STRING_OPTIONS.map(option => [option.label, option.value])
)

export const FAKE_NUMBER_OPTIONS: Array<Option<number>> = [
  { label: 'First Option', value: 1 },
  { label: 'Second Option', value: 2 },
  { label: 'Third Option', value: 3 },
  { label: LOREM_IPSUM, value: 4 },
  { isDisabled: true, label: 'Disabled Option', value: 5 }
]
export const FAKE_NUMBER_OPTIONS_AS_LABELS: string[] = FAKE_NUMBER_OPTIONS.map(option => option.label)
export const FAKE_NUMBER_OPTIONS_AS_MAPPING: Record<string, number> = fromPairs(
  FAKE_NUMBER_OPTIONS.map(option => [option.label, option.value])
)

export type FakeObjectOptionValue = {
  id: number
  name: string
}
export const FAKE_OBJECT_OPTIONS: Array<Option<FakeObjectOptionValue>> = [
  { label: 'First Option', value: { id: 1, name: 'First Option Name' } },
  { label: 'Second Option', value: { id: 2, name: 'Second Option Name' } },
  { label: 'Third Option', value: { id: 3, name: 'Third Option Name' } },
  { label: LOREM_IPSUM, value: { id: 4, name: 'Chatty Option Name' } },
  { isDisabled: true, label: 'Disabled Option', value: { id: 5, name: 'Disabled Option Name' } }
]
export const FAKE_OBJECT_OPTIONS_AS_LABELS: string[] = FAKE_OBJECT_OPTIONS.map(option => option.label)
export const FAKE_OBJECT_OPTIONS_AS_MAPPING: Record<string, FakeObjectOptionValue> = fromPairs(
  FAKE_OBJECT_OPTIONS.map(option => [option.label, option.value])
)
