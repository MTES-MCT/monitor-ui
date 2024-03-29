import { flexRender, type Cell } from '@tanstack/react-table'

import { SimpleTable } from '../SimpleTable'

import type { ReactNode } from 'react'

export type TdProps = {
  cell: Cell<any, unknown>
  children?: ReactNode
}
export function Td({ cell, children }: TdProps) {
  const controlledChildren = children ?? flexRender(cell.column.columnDef.cell, cell.getContext())

  return (
    <SimpleTable.Td
      key={cell.id}
      $isCenter={false}
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
