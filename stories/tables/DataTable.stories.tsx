import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { DataTable, type DataTableProps } from '../../src'

import type { Meta } from '@storybook/react'
import type { ColumnDef } from '@tanstack/react-table'

const COLUMNS: Array<ColumnDef<(typeof DATA)[0]>> = [
  {
    accessorFn: row => row.id,
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

export const DATA = [
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

export const args: DataTableProps<(typeof DATA)[0]> = {
  columns: COLUMNS,
  data: DATA,
  initialSorting: [
    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      desc: false,
      id: 'lastName'
    }
  ]
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<DataTableProps<(typeof DATA)[0]>> = {
  title: 'Tables/DataTable',
  component: DataTable,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _DataTable(props: DataTableProps<(typeof DATA)[0]>) {
  return (
    <>
      <DataTable {...props} />
    </>
  )
}
