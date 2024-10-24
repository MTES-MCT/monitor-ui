import {
  type ColumnDef,
  type SortingState,
  type TableOptions,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { useState } from 'react'

import { Td } from './Td'
import { Th } from './Th'
import { SimpleTable } from '../SimpleTable'

import type { AnyObject } from '../../types/definitions'

export type DataTableProps<T extends AnyObject> = {
  columns: Array<ColumnDef<T>>
  data: T[] | undefined
  initialSorting: SortingState
  tableOptions?: TableOptions<T> | undefined
}
export function DataTable<T extends AnyObject>({ columns, data, initialSorting, tableOptions }: DataTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>(initialSorting)

  const table = useReactTable({
    columns,
    data: data ?? [],
    // eslint-disable-next-line @typescript-eslint/naming-convention
    enableSortingRemoval: false,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting
    },
    ...tableOptions
  })

  const { rows } = table.getRowModel()

  return (
    <>
      {!data && <p>Chargement en cours...</p>}

      {data && (
        <>
          {!data.length && <p>Aucune donnée.</p>}

          {data.length > 0 && (
            <SimpleTable.Table>
              <SimpleTable.Head>
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <Th key={header.id} header={header} />
                    ))}
                  </tr>
                ))}
              </SimpleTable.Head>

              <tbody>
                {rows.map(row => (
                  <SimpleTable.BodyTr key={row.id} data-id={'id' in row.original ? row.original.id : row.id}>
                    {row.getVisibleCells().map(cell => (
                      <Td key={cell.id} cell={cell} />
                    ))}
                  </SimpleTable.BodyTr>
                ))}
              </tbody>
            </SimpleTable.Table>
          )}
        </>
      )}
    </>
  )
}
