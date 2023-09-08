import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
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

const DATA = [
  { id: 1, firstName: 'Alice', lastName: 'Smith' },
  { id: 2, firstName: 'Bob', lastName: 'Johnson' },
  { id: 3, firstName: 'Charlie', lastName: 'Williams' },
  { id: 4, firstName: 'David', lastName: 'Brown' },
  { id: 5, firstName: 'Emily', lastName: 'Jones' },
  { id: 6, firstName: 'Fiona', lastName: 'Garcia' },
  { id: 7, firstName: 'George', lastName: 'Miller' },
  { id: 8, firstName: 'Hannah', lastName: 'Davis' },
  { id: 9, firstName: 'Ivan', lastName: 'Rodriguez' },
  { id: 10, firstName: 'Jenny', lastName: 'Martinez' }
]

const args: DataTableProps<(typeof DATA)[0]> = {
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

const meta: Meta<DataTableProps<(typeof DATA)[0]>> = {
  title: 'Tables/DataTable',
  component: DataTable,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}

export default meta

export function _DataTable(props: DataTableProps<(typeof DATA)[0]>) {
  return (
    <>
      <DataTable {...props} />
    </>
  )
}
