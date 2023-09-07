import {
  type ColumnDef,
  type SortingState,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { useState } from 'react'

import { Td } from './Td'
import { Th } from './Th'
import { SimpleTable } from '../../elements/Table/SimpleTable'

export type DefaultTableProps<
  T extends {
    id: number
  }
> = {
  columns: Array<ColumnDef<T, any>>
  data: T[] | undefined
  initialSorting: SortingState
}
export function DefaultTable<
  T extends {
    id: number
  }
>({ columns, data, initialSorting }: DefaultTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>(initialSorting)

  const table = useReactTable({
    columns,
    data: data || [],
    // eslint-disable-next-line @typescript-eslint/naming-convention
    enableSortingRemoval: false,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting
    }
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
                  <SimpleTable.BodyTr key={row.id}>
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
