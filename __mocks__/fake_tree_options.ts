/* eslint-disable sort-keys-fix/sort-keys-fix */

import fromPairs from 'lodash/fromPairs'

import { LOREM_IPSUM } from './fake_text'

import type { TreeOption } from 'index'

export const FAKE_STRING_TREE_OPTIONS: Array<TreeOption<string>> = [
  {
    label: 'First Branch',
    children: [
      { label: 'First Option', value: 'FIRST_OPTION' },
      { label: 'Second Option', value: 'SECOND_OPTION' }
    ]
  },
  {
    label: 'Second Branch',
    children: [
      { label: 'Third Option', value: 'THIRD_OPTION' },
      { label: LOREM_IPSUM, value: 'CHATTY_OPTION' },
      { isDisabled: true, label: 'Disabled Option', value: 'DISABLED_OPTION' }
    ]
  }
]
export const FAKE_STRING_TREE_OPTIONS_AS_LABELS: string[] = FAKE_STRING_TREE_OPTIONS.map(option => option.label)
export const FAKE_STRING_TREE_OPTIONS_AS_MAPPING: Record<string, string> = fromPairs(
  FAKE_STRING_TREE_OPTIONS.flatMap(branch => branch.children!.map(leaf => [leaf.label, leaf.value]))
)

export const FAKE_NUMBER_TREE_OPTIONS: Array<TreeOption<number>> = [
  {
    label: 'First Branch',
    children: [
      { label: 'First Option', value: 1 },
      { label: 'Second Option', value: 2 }
    ]
  },
  {
    label: 'Second Branch',
    children: [
      { label: 'Third Option', value: 3 },
      { label: LOREM_IPSUM, value: 4 },
      { isDisabled: true, label: 'Disabled Option', value: 5 }
    ]
  }
]
export const FAKE_NUMBER_TREE_OPTIONS_AS_LABELS: string[] = FAKE_NUMBER_TREE_OPTIONS.map(option => option.label)
export const FAKE_NUMBER_TREE_OPTIONS_AS_MAPPING: Record<string, number> = fromPairs(
  FAKE_NUMBER_TREE_OPTIONS.flatMap(branch => branch.children!.map(leaf => [leaf.label, leaf.value]))
)

export type FakeObjectOptionValue = {
  id: number
  name: string
}
export const FAKE_OBJECT_TREE_OPTIONS: Array<TreeOption<FakeObjectOptionValue>> = [
  {
    label: 'First Branch',
    children: [
      { label: 'First Option', value: { id: 1, name: 'First Option Name' } },
      { label: 'Second Option', value: { id: 2, name: 'Second Option Name' } }
    ]
  },
  {
    label: 'Second Branch',
    children: [
      { label: 'Third Option', value: { id: 3, name: 'Third Option Name' } },
      { label: LOREM_IPSUM, value: { id: 4, name: 'Chatty Option Name' } },
      { isDisabled: true, label: 'Disabled Option', value: { id: 5, name: 'Disabled Option Name' } }
    ]
  }
]
export const FAKE_OBJECT_TREE_OPTIONS_AS_LABELS: string[] = FAKE_OBJECT_TREE_OPTIONS.map(option => option.label)
export const FAKE_OBJECT_TREE_OPTIONS_AS_MAPPING: Record<string, FakeObjectOptionValue> = fromPairs(
  FAKE_OBJECT_TREE_OPTIONS.flatMap(branch => branch.children!.map(leaf => [leaf.label, leaf.value]))
)
