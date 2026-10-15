import { flexRender, type Header, type RowData } from '@tanstack/react-table'

import { SortingIcon } from './SortingIcon'
import { SortingArrows } from '../../icons'
import { SimpleTable } from '../SimpleTable'

import type { DataTableFeatures } from '.'
import type { ReactNode } from 'react'

export type ThProps<TData extends RowData, TValue = unknown> = {
  children?: ReactNode
  header: Header<DataTableFeatures, TData, TValue>
}

export function Th<TData extends RowData, TValue = unknown>({ children, header }: ThProps<TData, TValue>) {
  const controlledChildren =
    (children ?? !header.isPlaceholder) ? (
      <SimpleTable.SortContainer
        className={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}
        onClick={header.column.getToggleSortingHandler()}
      >
        {flexRender(header.column.columnDef.header, header.getContext())}

        {header.column.getCanSort() &&
          ({
            asc: <SortingIcon />,
            desc: <SortingIcon $isDescending />
          }[header.column.getIsSorted() as string] ?? <SortingArrows size={14} />)}
      </SimpleTable.SortContainer>
    ) : undefined

  return (
    <SimpleTable.Th
      key={header.id}
      style={{
        maxWidth: header.column.getSize() !== 150 ? header.column.getSize() : 'auto',
        minWidth: header.column.getSize() !== 150 ? header.column.getSize() : 'auto',
        width: header.column.getSize() !== 150 ? header.column.getSize() : 'auto'
      }}
    >
      {controlledChildren}
    </SimpleTable.Th>
  )
}
