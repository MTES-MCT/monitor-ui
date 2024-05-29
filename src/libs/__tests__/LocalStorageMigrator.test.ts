import { describe, expect, it, beforeEach } from '@jest/globals'
import { LAST_MIGRATION_VERSION_KEY } from '@libs/LocalStorageMigrator/constants'

import {
  LocalStorageMigrator,
  LocalStorageMigrationOperationType,
  type LocalStorageMigration
} from '../LocalStorageMigrator'

import type {
  DeleteKey,
  RenameJsonValuePropertyKey,
  RenameKey,
  UpdateJsonValuePropertyValue
} from '@libs/LocalStorageMigrator/types'

const TEST_MIGRATIONS: LocalStorageMigration[] = [
  {
    description: 'Rename "oldKey" to "newKey"',
    operations: [
      {
        from: 'oldKey',
        to: 'newKey',
        type: LocalStorageMigrationOperationType.RENAME_KEY
      } as RenameKey
    ]
  },
  {
    description: 'Delete "deprecatedKey"',
    operations: [
      {
        key: 'deprecatedKey',
        type: LocalStorageMigrationOperationType.DELETE_KEY
      } as DeleteKey
    ]
  },
  {
    description: 'Rename JSON property key "oldJsonKey" to "newJsonKey"',
    operations: [
      {
        key: 'jsonKey1',
        newJsonKey: 'newJsonKey',
        oldJsonKey: 'oldJsonKey',
        type: LocalStorageMigrationOperationType.RENAME_JSON_VALUE_PROPERTY_KEY
      } as RenameJsonValuePropertyKey
    ]
  },
  {
    description: 'Update JSON property value from `OLD_VALUE` to `NEW_VALUE`',
    operations: [
      {
        jsonKey: 'key',
        key: 'jsonKey2',
        newJsonValue: 'NEW_VALUE',
        oldJsonValue: 'OLD_VALUE',
        type: LocalStorageMigrationOperationType.UPDATE_JSON_VALUE_PROPERTY_VALUE
      } as UpdateJsonValuePropertyValue
    ]
  }
]

describe('libs/LocalStorageMigrator', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should apply rename operation', () => {
    localStorage.setItem('oldKey', 'value')
    const migrator = new LocalStorageMigrator(TEST_MIGRATIONS)

    migrator.run()

    expect(localStorage.getItem('oldKey')).toBeNull()
    expect(localStorage.getItem('newKey')).toBe('value')
  })

  it('should apply delete operation', () => {
    localStorage.setItem('deprecatedKey', 'value')
    const migrator = new LocalStorageMigrator(TEST_MIGRATIONS)

    migrator.run()

    expect(localStorage.getItem('deprecatedKey')).toBeNull()
  })

  it('should rename a JSON property key', () => {
    localStorage.setItem('jsonKey1', JSON.stringify({ oldJsonKey: 'value' }))
    const migrator = new LocalStorageMigrator(TEST_MIGRATIONS)
    migrator.run()

    const updatedValue = JSON.parse(localStorage.getItem('jsonKey1') as string)
    expect(updatedValue.oldJsonKey).toBeUndefined()
    expect(updatedValue.newJsonKey).toBe('value')
  })

  it('should update a JSON property value', () => {
    localStorage.setItem('jsonKey2', JSON.stringify({ key: 'OLD_VALUE' }))
    const migrator = new LocalStorageMigrator(TEST_MIGRATIONS)

    migrator.run()

    const updatedValue = JSON.parse(localStorage.getItem('jsonKey2') as string)
    expect(updatedValue.key).toBe('NEW_VALUE')
  })

  it('should only apply new migrations', () => {
    localStorage.setItem(LAST_MIGRATION_VERSION_KEY, '3')
    localStorage.setItem('jsonKey1', JSON.stringify({ oldJsonKey: 'value' }))
    localStorage.setItem('jsonKey2', JSON.stringify({ key: 'OLD_VALUE' }))
    const migrator = new LocalStorageMigrator(TEST_MIGRATIONS)

    migrator.run()

    // JSON property key renaming is the 3rd migration (= v3), it should have been skipped
    const nonUpdatedValue = JSON.parse(localStorage.getItem('jsonKey1') as string)
    expect(nonUpdatedValue.oldJsonKey).toBeDefined()
    expect(nonUpdatedValue.newJsonKey).toBeUndefined()

    // JSON property value update is the 4th migration (= v4), it should have been applied
    const updatedValue = JSON.parse(localStorage.getItem('jsonKey2') as string)
    expect(updatedValue.key).toBe('NEW_VALUE')
  })

  it('should set the correct migration version after applying migrations', () => {
    const migrator = new LocalStorageMigrator(TEST_MIGRATIONS)

    migrator.run()

    expect(localStorage.getItem(LAST_MIGRATION_VERSION_KEY)).toBe('4')
  })

  it('should handle empty migrations', () => {
    const migrator = new LocalStorageMigrator([])

    migrator.run()

    expect(localStorage.getItem(LAST_MIGRATION_VERSION_KEY)).toBeNull()
  })

  it('should throw an error for unknown operation types', () => {
    const invalidMigration: LocalStorageMigration = {
      description: 'Invalid operation type',
      operations: [
        {
          key: 'invalidKey',
          // @ts-ignore
          type: 'INVALID_TYPE'
        }
      ]
    }
    const migrator = new LocalStorageMigrator([...TEST_MIGRATIONS, invalidMigration])

    expect(() => migrator.run()).toThrowError('[LocalStorageMigrator] Unknown operation type: "INVALID_TYPE".')
  })
})
