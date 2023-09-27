/* eslint-disable no-console, no-null/no-null */

import { flexRender, getCoreRowModel, getSortedRowModel, type SortingState, useReactTable } from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual'
import { useCallback, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Accent, Dropdown, Icon, IconButton, TableWithSelectableRows } from '../../src'

import type { Meta } from '@storybook/react'

const fakeData1 = Array(100).fill({
  id: 4,
  reportingId: 2300004,
  sourceType: 'SEMAPHORE',
  semaphoreId: 33,
  controlUnitId: null,
  sourceName: null,
  displayedSource: 'Sémaphore de Boulogne sur mer',
  targetType: null,
  vehicleType: null,
  targetDetails: [],
  geom: {
    type: 'MultiPolygon',
    coordinates: [
      [
        [
          [-19.00097037, 49.57813235],
          [-14.5054498, 50.48083701],
          [-14.25087621, 49.53018118],
          [-19.00097037, 49.57813235]
        ]
      ]
    ]
  },
  seaFront: 'MED',
  description: null,
  reportType: 'INFRACTION_SUSPICION',
  theme: null,
  subThemes: [],
  actionTaken: null,
  isInfractionProven: false,
  isControlRequired: false,
  isUnitAvailable: null,
  createdAt: '2023-08-04T15:13:43.296Z',
  validityTime: 1,
  isArchived: false
})
const fakeData2 = Array(100).fill({
  id: 1,
  reportingId: 2300001,
  sourceType: 'SEMAPHORE',
  semaphoreId: 21,
  controlUnitId: null,
  sourceName: null,
  displayedSource: 'SEMAPHORE LE TOULINGUET',
  targetType: 'VEHICLE',
  vehicleType: 'VESSEL',
  targetDetails: [
    {
      mmsi: '012314231343',
      imo: null,
      externalReferenceNumber: null,
      vesselName: 'Vessel 1',
      operatorName: null,
      size: null
    }
  ],
  geom: {
    type: 'MultiPoint',
    coordinates: [[-4.93888188, 48.41495669]]
  },
  seaFront: 'NAMO',
  description: 'Description 1',
  reportType: 'OBSERVATION',
  theme: 'Rejets illicites',
  subThemes: ['Jet de déchet', 'Carénage sauvage'],
  actionTaken: 'ACTION TAKEN',
  isInfractionProven: true,
  isControlRequired: true,
  isUnitAvailable: true,
  createdAt: '2023-08-01T15:13:01.073587Z',
  validityTime: 24,
  isArchived: true
})

const data = [...fakeData1, ...fakeData2]

const meta: Meta<{}> = {
  title: 'Tables/TableWithSelectableRows',

  decorators: [generateStoryDecorator()]
}

export default meta

const ButtonsGroupRow = ({ id, onSelect }) => (
  <ButtonsGroup>
    <IconButton accent={Accent.TERTIARY} Icon={Icon.Duplicate} onClick={() => console.log(id)} />
    <IconButton accent={Accent.TERTIARY} Icon={Icon.Edit} onClick={() => console.log(id)} />

    <Dropdown accent={Accent.SECONDARY} Icon={Icon.More} onSelect={onSelect}>
      <Dropdown.Item accent={Accent.SECONDARY} eventKey="ARCHIVE" Icon={Icon.Archive} />
      <Dropdown.Item accent={Accent.SECONDARY} eventKey="DELETE" Icon={Icon.Delete} />
    </Dropdown>
  </ButtonsGroup>
)

export function _TableWithSelectableRows() {
  const [rowSelection, setRowSelection] = useState({})
  const [sorting, setSorting] = useState<SortingState>([{ id: 'createdAt', desc: false }])

  const doAction = (key, id) => {
    if (key === 'ARCHIVE') {
      console.log('we want to archive the reporting with id: ', id)
    } else {
      console.log('we want to delete the reporting with id: ', id)
    }
  }
  const columns = useMemo(
    () => [
      {
        id: 'select',
        size: 50,
        enableSorting: false,
        accessorFn: row => row.reportingId,
        header: ({ table }) => (
          <TableWithSelectableRows.RowCheckbox
            {...{
              isChecked: table.getIsAllRowsSelected(),
              isIndeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler()
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <TableWithSelectableRows.RowCheckbox
              {...{
                isChecked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                onChange: row.getToggleSelectedHandler(row)
              }}
            />
          </div>
        )
      },
      {
        accessorFn: row => row.reportingId,
        cell: info => info.getValue(),
        enableSorting: false,
        header: () => '',
        id: 'reportingId',
        size: 90
      },
      {
        accessorFn: row => row.createdAt,
        cell: info => info.getValue(),
        enableSorting: true,
        header: () => 'Ouverture',
        id: 'createdAt',
        size: 150
      },
      {
        accessorFn: row => row.validityTime,
        cell: info => info.getValue(),
        enableSorting: true,
        header: () => 'Fin dans',
        id: 'validityTime',
        size: 90
      },
      {
        accessorFn: row => row.displayedSource,
        cell: info => info.getValue(),
        enableSorting: true,
        header: () => 'Source',
        id: 'displayedSource',
        maxSize: 280,
        minSize: 230
      },
      {
        accessorFn: row => row.reportType,
        cell: info => info.getValue(),
        enableSorting: true,
        header: () => 'Type',
        id: 'reportType',
        size: 150
      },
      {
        accessorFn: row => row,
        cell: ({ row }) => (
          <span>
            {row.original.theme}: {row.original.subThemes ? row.original.subThemes.join(', ') : ''}
          </span>
        ),
        enableSorting: true,
        header: () => 'Thématique',
        id: 'theme',
        maxSize: 280,
        minSize: 230
      },
      {
        accessorFn: row => row.seaFront,
        cell: info => info.getValue(),
        enableSorting: true,
        header: () => 'Façade',
        id: 'seaFront',
        size: 100
      },
      {
        accessorFn: row => row.status,
        cell: info => info.getValue(),
        enableSorting: true,
        header: () => 'Statut',
        id: 'isArchived',
        size: 110
      },
      {
        accessorFn: row => row.geom,
        cell: info => (
          <IconButton accent={Accent.TERTIARY} Icon={Icon.FocusZones} onClick={() => console.log(info.getValue())} />
        ),
        enableSorting: false,
        header: () => '',
        id: 'geom',
        maxSize: 50,
        minSize: 50,
        size: 50
      },
      {
        accessorFn: row => row.id,
        cell: info => <ButtonsGroupRow id={info.getValue()} onSelect={key => doAction(key, info.getValue())} />,
        enableSorting: false,
        header: () => '',
        id: 'id',
        size: 120
      }
    ],
    []
  )

  const table = useReactTable({
    columns,
    data,
    state: {
      sorting,
      rowSelection
    },
    enableRowSelection: true,
    enableSortingRemoval: false,
    onRowSelectionChange: rowId => {
      setRowSelection(rowId)
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  })

  const selectedIds = useMemo(
    () => table.getSelectedRowModel().rows.map(({ original }) => original.id),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rowSelection]
  )

  // eslint-disable-next-line no-null/no-null
  const tableContainerRef = useRef<HTMLDivElement>(null)

  const { rows } = table.getRowModel()
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 10,
    overscan: 10,
    // Pass correct keys to virtualizer it's important when rows change position
    getItemKey: useCallback((index: number) => `${rows[index]?.id}`, [rows])
  })

  const virtualRows = rowVirtualizer.getVirtualItems()
  const [paddingTop, paddingBottom] =
    virtualRows.length > 0
      ? [
          Math.max(0, virtualRows[0]?.start || 0),
          Math.max(0, rowVirtualizer.getTotalSize() - (virtualRows[virtualRows.length - 1]?.end || 0))
        ]
      : [0, 0]

  const archiveReportings = () => {
    // eslint-disable-next-line no-console
    console.log('this reportings will be archived: ', selectedIds)
  }

  return (
    <>
      <div>
        <IconButton accent={Accent.SECONDARY} Icon={Icon.Archive} onClick={archiveReportings} />
      </div>
      <div ref={tableContainerRef}>
        <TableWithSelectableRows.Table>
          <TableWithSelectableRows.Head>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableWithSelectableRows.Th
                    key={header.id}
                    {...{
                      style: {
                        maxWidth: header.column.getSize(),
                        minWidth: header.column.getSize(),
                        width: header.column.getSize()
                      }
                    }}
                  >
                    {header.isPlaceholder ? undefined : (
                      <TableWithSelectableRows.SortContainer
                        {...{
                          className: header.column.getCanSort() ? 'cursor-pointer' : '',
                          onClick: header.column.getToggleSortingHandler()
                        }}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getCanSort() &&
                          ({
                            asc: <div>▲</div>,
                            desc: <div>▼</div>
                          }[header.column.getIsSorted() as string] ?? <Icon.SortingArrows size={14} />)}
                      </TableWithSelectableRows.SortContainer>
                    )}
                  </TableWithSelectableRows.Th>
                ))}
              </tr>
            ))}
          </TableWithSelectableRows.Head>
          <tbody>
            {paddingTop > 0 && (
              <tr>
                <td style={{ height: `${paddingTop}px` }} />
              </tr>
            )}
            {virtualRows.map(virtualRow => {
              const row = rows[virtualRow.index]

              return (
                <TableWithSelectableRows.BodyTr key={virtualRow.key}>
                  {row?.getVisibleCells().map(cell => (
                    <TableWithSelectableRows.Td
                      {...{
                        key: cell.id,
                        style: {
                          maxWidth: cell.column.getSize(),
                          minWidth: cell.column.getSize(),
                          width: cell.column.getSize()
                        },
                        $isCenter: !!(cell.column.id === 'geom' || cell.column.id === 'id'),
                        $hasRightBorder: !!(cell.column.id === 'geom')
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableWithSelectableRows.Td>
                  ))}
                </TableWithSelectableRows.BodyTr>
              )
            })}
            {paddingBottom > 0 && (
              <tr>
                <td style={{ height: `${paddingBottom}px` }} />
              </tr>
            )}
          </tbody>
        </TableWithSelectableRows.Table>
      </div>
    </>
  )
}

const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  position: relative;
  > button {
    padding: 0px;
  }
`