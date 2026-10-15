import {
  type ColumnDef,
  columnVisibilityFeature,
  columnSizingFeature,
  createExpandedRowModel,
  createSortedRowModel,
  type ExpandedState,
  type SortingState,
  type TableOptions,
  rowExpandingFeature,
  rowSortingFeature,
  tableFeatures,
  useTable
} from '@tanstack/react-table'
import { type ReactNode, useState } from 'react'
import { styled } from 'styled-components'

import { Td } from './Td'
import { Th } from './Th'
import { SimpleTable } from '../SimpleTable'

import type { AnyObject } from '../../types/definitions'

export const dataTableFeatures = tableFeatures({
  columnSizingFeature,
  columnVisibilityFeature,
  expandedRowModel: createExpandedRowModel(),
  rowExpandingFeature,
  rowSortingFeature,
  sortedRowModel: createSortedRowModel()
})

export type DataTableFeatures = typeof dataTableFeatures

type DataTableRow = AnyObject & {
  subRows?: DataTableRow[]
}

export type DataTableProps<T extends AnyObject> = {
  columns: Array<ColumnDef<typeof dataTableFeatures, T>>
  data: T[] | undefined
  emptyLabel?: ReactNode
  initialSorting: SortingState
  tableOptions?: Partial<TableOptions<typeof dataTableFeatures, T>>
  withoutHead?: boolean
}

export function DataTable<T extends AnyObject>({
  columns,
  data,
  emptyLabel,
  initialSorting,
  tableOptions,
  withoutHead = false
}: DataTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>(initialSorting)
  const [expanded, setExpanded] = useState<ExpandedState>({})

  const table = useTable({
    columns,
    data: data ?? [],
    // eslint-disable-next-line @typescript-eslint/naming-convention
    enableSortingRemoval: false,
    features: dataTableFeatures,
    getSubRows: (row: T) => (row as DataTableRow).subRows as T[] | undefined,
    onExpandedChange: setExpanded,
    onSortingChange: setSorting,
    ...tableOptions,
    state: {
      ...tableOptions?.state,
      expanded,
      sorting
    }
  })

  const { rows } = table.getRowModel()

  return (
    <>
      {!data && <p className="Table-DataTable--loadingLabel">Chargement en cours...</p>}

      {data && (
        <>
          {!data.length && (emptyLabel ?? <p className="Table-DataTable--emptyLabel">Aucune donnée.</p>)}

          {data.length > 0 && (
            <SimpleTable.Table>
              {!withoutHead && (
                <SimpleTable.Head>
                  {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map(header => (
                        <Th header={header} key={header.id} />
                      ))}
                    </tr>
                  ))}
                </SimpleTable.Head>
              )}

              <TBody $withTopBorder={withoutHead}>
                {rows.map(row => (
                  <SimpleTable.BodyTr
                    // `data-id` is expected by `cy.getTableRowById()`
                    data-id={'id' in row.original ? row.original.id : row.id}
                    key={row.id}
                    onClick={() => {
                      if (row.getCanExpand()) {
                        row.toggleExpanded()
                      }
                    }}
                  >
                    {row.getVisibleCells().map(cell => (
                      <Td cell={cell} key={cell.id} />
                    ))}
                  </SimpleTable.BodyTr>
                ))}
              </TBody>
            </SimpleTable.Table>
          )}
        </>
      )}
    </>
  )
}

const TBody = styled.tbody<{
  $withTopBorder: boolean
}>`
  > tr {
    > td {
      border-top: ${p => (p.$withTopBorder ? `1px solid ${p.theme.color.lightGray}` : 0)};
    }
  }
`
