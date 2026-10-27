import { flexRender, type Cell, type RowData } from '@tanstack/react-table'

import { SimpleTable } from '../SimpleTable'

import type { DataTableFeatures } from '.'
import type { ReactNode } from 'react'

export type TdProps<TData extends RowData, TValue = unknown> = {
  cell: Cell<DataTableFeatures, TData, TValue>
  children?: ReactNode
}

export function Td<TData extends RowData, TValue = unknown>({ cell, children }: TdProps<TData, TValue>) {
  const controlledChildren = children ?? flexRender(cell.column.columnDef.cell, cell.getContext())

  return (
    <SimpleTable.Td
      $isCenter={false}
      key={cell.id}
      style={{
        maxWidth: cell.column.getSize() !== 150 ? cell.column.getSize() : 'auto',
        minWidth: cell.column.getSize() !== 150 ? cell.column.getSize() : 'auto',
        width: cell.column.getSize() !== 150 ? cell.column.getSize() : 'auto'
      }}
    >
      {controlledChildren}
    </SimpleTable.Td>
  )
}
