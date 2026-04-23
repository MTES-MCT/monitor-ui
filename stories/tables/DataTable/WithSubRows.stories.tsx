import { DataTable, type DataTableProps } from '@tables/DataTable'

import { ARG_TYPE } from '../../../.storybook/constants'
import { generateStoryDecorator } from '../../../.storybook/utils/generateStoryDecorator'
import {
  FAKE_BASIC_TABLE_COLUMNS,
  FAKE_BASIC_TABLE_DATA_WITH_SUBROWS,
  type FakeBasicTableDataItem
} from '../../../__mocks__/fake_table_columns_and_data'

import type { Meta } from '@storybook/react-vite'

const args: DataTableProps<FakeBasicTableDataItem> = {
  columns: FAKE_BASIC_TABLE_COLUMNS,
  data: FAKE_BASIC_TABLE_DATA_WITH_SUBROWS,
  initialSorting: [
    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      desc: false,
      id: 'id'
    }
  ],
  tableOptions: undefined,
  withoutHead: false
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<DataTableProps<FakeBasicTableDataItem>> = {
  title: 'Tables/DataTable (variations)',
  component: DataTable,

  argTypes: {
    emptyLabel: ARG_TYPE.OPTIONAL_REACT_NODE,
    tableOptions: {
      ...ARG_TYPE.NO_CONTROL_INPUT,
      table: {
        type: {
          detail: 'Overrides options internally passed to `useReactTable()`.',
          summary: `import('@tanstack/react-table').TableOptions | undefined`
        }
      }
    },
    withoutHead: ARG_TYPE.OPTIONAL_BOOLEAN
  },

  args,

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _DataTable(props: DataTableProps<FakeBasicTableDataItem>) {
  return <DataTable {...props} />
}
