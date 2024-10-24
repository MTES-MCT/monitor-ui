import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import {
  FAKE_BASIC_TABLE_COLUMNS,
  FAKE_BASIC_TABLE_DATA,
  type FakeBasicTableDataItem
} from '../../__mocks__/fake_table_columns_and_data'
import { DataTable, type DataTableProps } from '../../src'

import type { Meta } from '@storybook/react'

const args: DataTableProps<FakeBasicTableDataItem> = {
  columns: FAKE_BASIC_TABLE_COLUMNS,
  data: FAKE_BASIC_TABLE_DATA,
  initialSorting: [
    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      desc: false,
      id: 'lastName'
    }
  ]
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<DataTableProps<FakeBasicTableDataItem>> = {
  title: 'Tables/DataTable',
  component: DataTable,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _DataTable(props: DataTableProps<FakeBasicTableDataItem>) {
  return (
    <>
      <DataTable {...props} />
    </>
  )
}
