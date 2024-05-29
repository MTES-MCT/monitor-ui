import type { LocalStorageMigrationOperationType } from './constants'

export type LocalStorageMigration = {
  description: string
  operations: LocalStorageMigrationOperation[]
}

export type LocalStorageMigrationOperation =
  | DeleteKey
  | RenameKey
  | RenameJsonValuePropertyKey
  | UpdateJsonValuePropertyValue

export type DeleteKey = {
  key: string
  type: LocalStorageMigrationOperationType.DELETE_KEY
}

export type RenameKey = {
  from: string
  to: string
  type: LocalStorageMigrationOperationType.RENAME_KEY
}

export type RenameJsonValuePropertyKey = {
  key: string
  newJsonKey: string
  oldJsonKey: string
  type: LocalStorageMigrationOperationType.RENAME_JSON_VALUE_PROPERTY_KEY
}

export type UpdateJsonValuePropertyValue = {
  jsonKey: string
  key: string
  newJsonValue: string | number | boolean | null
  oldJsonValue: string | number | boolean | null
  type: LocalStorageMigrationOperationType.UPDATE_JSON_VALUE_PROPERTY_VALUE
}
