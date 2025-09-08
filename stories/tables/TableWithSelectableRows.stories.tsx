// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { flexRender, getCoreRowModel, getSortedRowModel, type SortingState, useReactTable } from '@tanstack/react-table'
import { notUndefined, useVirtualizer } from '@tanstack/react-virtual'
import { useCallback, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Accent, Dropdown, Icon, IconButton, THEME, TableWithSelectableRows, Tag } from '../../src'
import { Link } from '../../src/icons'

import type { Meta } from '@storybook/react-vite'

/* eslint-disable no-null/no-null */
const fakeData1 = Array(5).fill({
  actionTaken: null,
  controlUnitId: null,
  createdAt: '2023-08-04T15:13:43.296Z',
  description: null,
  displayedSource: 'Sémaphore de Boulogne sur mer',
  geom: {
    coordinates: [
      [
        [
          [-19.00097037, 49.57813235],
          [-14.5054498, 50.48083701],
          [-14.25087621, 49.53018118],
          [-19.00097037, 49.57813235]
        ]
      ]
    ],
    type: 'MultiPolygon'
  },
  id: 4,
  isArchived: false,
  isControlRequired: false,
  isInfractionProven: false,
  isUnitAvailable: null,
  reportingId: 2300004,
  reportType: 'INFRACTION_SUSPICION',
  seaFront: 'MED',
  semaphoreId: 33,
  sourceName: null,
  sourceType: 'SEMAPHORE',
  subThemes: [],
  targetDetails: [],
  targetType: null,
  theme: null,
  validityTime: 1,
  vehicleType: null
})
const fakeData2 = Array(5).fill({
  actionTaken: 'ACTION TAKEN',
  controlUnitId: null,
  createdAt: '2023-08-01T15:13:01.073587Z',
  description: 'Description 1',
  displayedSource: 'SEMAPHORE LE TOULINGUET',
  geom: {
    coordinates: [[-4.93888188, 48.41495669]],
    type: 'MultiPoint'
  },
  id: 1,
  isArchived: true,
  isControlRequired: true,
  isInfractionProven: true,
  isUnitAvailable: true,
  reportingId: 2300001,
  reportType: 'OBSERVATION',
  seaFront: 'NAMO',
  semaphoreId: 21,
  sourceName: null,
  sourceType: 'SEMAPHORE',
  subThemes: ['Jet de déchet', 'Carénage sauvage'],
  targetDetails: [
    {
      externalReferenceNumber: null,
      imo: null,
      mmsi: '012314231343',
      operatorName: null,
      size: null,
      vesselName: 'Vessel 1'
    }
  ],
  targetType: 'VEHICLE',
  theme: 'Rejets illicites',
  validityTime: 24,
  vehicleType: 'VESSEL'
})
/* eslint-enable no-null/no-null */

const data = [...fakeData1, ...fakeData2]

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<{}> = {
  title: 'Tables/TableWithSelectableRows',

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

const ButtonsGroupRow = ({ id, onSelect }) => (
  <ButtonsGroup>
    {/* eslint-disable-next-line no-console */}
    <IconButton accent={Accent.TERTIARY} Icon={Icon.Duplicate} onClick={() => console.log(id)} />
    {/* eslint-disable-next-line no-console */}
    <IconButton accent={Accent.TERTIARY} Icon={Icon.Edit} onClick={() => console.log(id)} />

    <Dropdown accent={Accent.SECONDARY} Icon={Icon.More} onSelect={onSelect}>
      <Dropdown.Item accent={Accent.SECONDARY} eventKey="ARCHIVE" Icon={Icon.Archive} />
      <Dropdown.Item accent={Accent.SECONDARY} eventKey="DELETE" Icon={Icon.Delete} />
    </Dropdown>
  </ButtonsGroup>
)

export function _TableWithSelectableRows() {
  const [rowSelection, setRowSelection] = useState({})
  const [sorting, setSorting] = useState<SortingState>([{ desc: false, id: 'createdAt' }])

  const doAction = (key, id) => {
    if (key === 'ARCHIVE') {
      // eslint-disable-next-line no-console
      console.log('we want to archive the reporting with id: ', id)
    } else {
      // eslint-disable-next-line no-console
      console.log('we want to delete the reporting with id: ', id)
    }
  }
  const columns = useMemo(
    () => [
      {
        accessorFn: row => row.reportingId,
        cell: ({ row }) => (
          <TableWithSelectableRows.RowCheckbox
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onChange={row.getToggleSelectedHandler(row)}
          />
        ),
        enableSorting: false,
        header: ({ table }) => (
          <TableWithSelectableRows.RowCheckbox
            checked={table.getIsAllRowsSelected()}
            indeterminate={(() => {
              // eslint-disable-next-line no-console
              console.log('indeterminate', table.getIsSomeRowsSelected())

              return table.getIsSomeRowsSelected()
            })()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        ),
        id: 'select',

        size: 25 // 24px + 1px to avoid cutting the right border
      },
      {
        accessorFn: row => row.reportingId,
        cell: info => info.getValue(),
        enableSorting: false,
        header: () => '',
        id: 'reportingId',
        size: 80
      },
      {
        accessorFn: row => row.createdAt,
        cell: info => info.getValue(),
        enableSorting: true,
        header: () => 'Ouverture',
        id: 'createdAt',
        size: 105
      },
      {
        accessorFn: row => row.validityTime,
        cell: info => info.getValue(),
        enableSorting: true,
        header: () => 'Fin dans',
        id: 'validityTime',
        size: 75
      },
      {
        accessorFn: row => row.displayedSource,
        cell: info => info.getValue(),
        enableSorting: true,
        header: () => 'Source',
        id: 'displayedSource',
        size: 180
      },
      {
        accessorFn: row => row.reportType,
        cell: info => info.getValue(),
        enableSorting: true,
        header: () => 'Type',
        id: 'reportType',
        size: 120
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
        size: 165
      },
      {
        accessorFn: row => row.seaFront,
        cell: info => info.getValue(),
        enableSorting: true,
        header: () => 'Façade',
        id: 'seaFront',
        size: 90
      },
      {
        accessorFn: row => row.status,
        cell: info => info.getValue(),
        enableSorting: true,
        header: () => 'Statut',
        id: 'isArchived',
        size: 70
      },
      {
        accessorFn: row => row.missionId,
        cell: () => (
          <Tag backgroundColor={THEME.color.mediumSeaGreen} color={THEME.color.white} Icon={Link}>
            Mission
          </Tag>
        ),
        enableSorting: false,
        header: () => '',
        id: 'missionId',
        size: 120
      },
      {
        accessorFn: row => row.geom,
        cell: () => (
          <Tag
            backgroundColor={THEME.color.gainsboro}
            Icon={Icon.CircleFilled}
            iconColor={THEME.color.goldenPoppy}
            withCircleIcon
          >
            Ctl fait
          </Tag>
        ),
        enableSorting: false,
        header: () => '',
        id: 'actionStatus',
        size: 112
      },
      {
        accessorFn: row => row.geom,
        cell: info => (
          <IconButton
            accent={Accent.TERTIARY}
            Icon={Icon.FocusZones}
            isCompact
            // eslint-disable-next-line no-console
            onClick={() => console.log(info.getValue())}
          />
        ),
        enableSorting: false,
        header: () => '',
        id: 'geom',
        size: 55
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
    enableColumnResizing: false,
    enableRowSelection: true,
    enableSortingRemoval: false,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: rowId => {
      setRowSelection(rowId)
    },
    onSortingChange: setSorting,
    state: {
      rowSelection,
      sorting
    }
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
    estimateSize: () => 10,
    // Pass correct keys to virtualizer it's important when rows change position
    getItemKey: useCallback((index: number) => `${rows[index]?.id}`, [rows]),

    getScrollElement: () => tableContainerRef.current,

    overscan: 10
  })

  const virtualRows = rowVirtualizer.getVirtualItems()

  const archiveReportings = () => {
    // eslint-disable-next-line no-console
    console.log('this reportings will be archived: ', selectedIds)
  }

  const [before, after] =
    virtualRows.length > 0
      ? [
          notUndefined(virtualRows[0]).start - rowVirtualizer.options.scrollMargin,
          rowVirtualizer.getTotalSize() - notUndefined(virtualRows[virtualRows.length - 1]).end
        ]
      : [0, 0]

  return (
    <>
      <div>
        <IconButton accent={Accent.SECONDARY} Icon={Icon.Archive} onClick={archiveReportings} />
      </div>
      <div ref={tableContainerRef} style={{ width: 1776 }}>
        <TableWithSelectableRows.Table $withRowCheckbox>
          <TableWithSelectableRows.Head>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableWithSelectableRows.Th key={header.id} $width={header.column.getSize()}>
                    {header.id === 'select' && flexRender(header.column.columnDef.header, header.getContext())}
                    {header.id !== 'select' && !header.isPlaceholder && (
                      <TableWithSelectableRows.SortContainer
                        className={header.column.getCanSort() ? 'cursor-pointer' : ''}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getCanSort() &&
                          ({
                            asc: <Icon.SortSelectedDown size={14} />,
                            desc: <Icon.SortSelectedUp size={14} />
                          }[header.column.getIsSorted() as string] ?? <Icon.SortingArrows size={14} />)}
                      </TableWithSelectableRows.SortContainer>
                    )}
                  </TableWithSelectableRows.Th>
                ))}
              </tr>
            ))}
          </TableWithSelectableRows.Head>
          {before > 0 && (
            <tr>
              <td aria-label="padding before" colSpan={columns.length} style={{ height: before }} />
            </tr>
          )}
          <tbody>
            {virtualRows.map((virtualRow, index) => {
              const row = rows[virtualRow.index]

              return (
                <TableWithSelectableRows.BodyTr
                  key={virtualRow.key}
                  ref={rowVirtualizer.measureElement} // measure dynamic row height
                  $isHighlighted={index % 2 === 0}
                  data-cy="reporting-row"
                  data-index={virtualRow.index} // needed for dynamic row height measurement
                >
                  {row?.getVisibleCells().map(cell => (
                    <TableWithSelectableRows.Td
                      key={cell.id}
                      $hasRightBorder={!!(cell.column.id === 'geom')}
                      $isCenter={!!(cell.column.id === 'geom' || cell.column.id === 'id')}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableWithSelectableRows.Td>
                  ))}
                </TableWithSelectableRows.BodyTr>
              )
            })}
          </tbody>
          {after > 0 && (
            <tr>
              <td aria-label="padding after" colSpan={columns.length} style={{ height: after }} />
            </tr>
          )}
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
