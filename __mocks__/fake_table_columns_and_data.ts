import type { ColumnDef } from '@tanstack/react-table'

export const FAKE_BASIC_TABLE_COLUMNS: Array<ColumnDef<FakeBasicTableDataItem>> = [
  {
    accessorFn: row => row.id,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    enableSorting: false,
    header: () => 'ID',
    id: 'id',
    size: 64
  },
  {
    accessorFn: row => row.lastName,
    header: () => 'Last Name',
    id: 'lastName'
  },
  {
    accessorFn: row => row.firstName,
    header: () => 'First Name',
    id: 'firstName',
    size: 240
  }
]

export type FakeBasicTableDataItem = {
  firstName: string
  id: number
  lastName: string
}
export const FAKE_BASIC_TABLE_DATA: FakeBasicTableDataItem[] = [
  { firstName: 'Alice', id: 1, lastName: 'Smith' },
  { firstName: 'Bob', id: 2, lastName: 'Johnson' },
  { firstName: 'Charlie', id: 3, lastName: 'Williams' },
  { firstName: 'David', id: 4, lastName: 'Brown' },
  { firstName: 'Emily', id: 5, lastName: 'Jones' },
  { firstName: 'Fiona', id: 6, lastName: 'Garcia' },
  { firstName: 'George', id: 7, lastName: 'Miller' },
  { firstName: 'Hannah', id: 8, lastName: 'Davis' },
  { firstName: 'Ivan', id: 9, lastName: 'Rodriguez' },
  { firstName: 'Jenny', id: 10, lastName: 'Martinez' }
]
