// TODO Migrate this story to the new Storybook structure. Example: stories/components/Banner.stories.tsx.
/* eslint-disable react-hooks/rules-of-hooks */

import { flexRender, getCoreRowModel, getSortedRowModel, type SortingState, useReactTable } from '@tanstack/react-table'
import { notUndefined, useVirtualizer } from '@tanstack/react-virtual'
import { useCallback, useMemo, useRef, useState } from 'react'

import { generateStoryDecorator } from '../../.storybook/utils/generateStoryDecorator'
import { Accent, Button, Icon, IconButton, Size, SimpleTable } from '../../src'

import type { Meta } from '@storybook/react-vite'

const fakeData1 = Array(100).fill({
  closedBy: 'TIM',
  controlUnits: [
    {
      administration: 'DDTM',
      contact: undefined,
      id: 10003,
      isArchived: false,
      name: 'DML 2A',
      resources: []
    }
  ],
  endDateTimeUtc: '19 juin 23, 09h28 (UTC)',
  envActions: [
    {
      actionNumberOfControls: 1,
      actionStartDateTimeUtc: undefined,
      actionTargetType: 'COMPANY',
      actionType: 'CONTROL',
      geom: { coordinates: [[-2.63708273, 48.17060427]], type: 'MultiPoint' },
      id: 'f3e90d3a-6ba4-4bb3-805e-d391508aa46d',
      infractions: [],
      observations: undefined,
      themes: [
        {
          protectedSpecies: ['MARINE_MAMMALS'],
          subThemes: ['Dérogations concernant les espèces protégées'],
          theme: 'Police des espèces protégées et de leurs habitats (faune et flore)'
        }
      ],
      vehicleType: undefined
    }
  ],
  facade: 'Guyane',
  geom: { type: 'MultiPolygon' },
  hasMissionOrder: false,
  id: 38,
  isClosed: true,
  isUnderJdp: false,
  missionNature: ['ENV', 'FISH'],
  missionSource: 'MONITORENV',
  missionTypes: ['LAND'],
  observationsCacem: 'Black bit sell. House relate policy once. White member worker east even anyone detail professor.',
  observationsCnsp: undefined,
  openBy: 'RAN',
  startDateTimeUtc: '23 juin 23, 05h57 (UTC)'
})
const fakeData2 = Array(100).fill({
  closedBy: 'TIM',
  controlUnits: [
    {
      administration: 'DDTM',
      contact: undefined,
      id: 10003,
      isArchived: false,
      name: 'DML 2A',
      resources: []
    }
  ],
  endDateTimeUtc: '23 juin 23, 09h28 (UTC)',
  envActions: [
    {
      actionNumberOfControls: 1,
      actionStartDateTimeUtc: undefined,
      actionTargetType: 'COMPANY',
      actionType: 'CONTROL',
      geom: { coordinates: [[-2.63708273, 48.17060427]], type: 'MultiPoint' },
      id: 'f3e90d3a-6ba4-4bb3-805e-d391508aa46d',
      infractions: [],
      observations: undefined,
      themes: [
        {
          protectedSpecies: ['MARINE_MAMMALS'],
          subThemes: ['Dérogations concernant les espèces protégées'],
          theme: 'Police des espèces protégées et de leurs habitats (faune et flore)'
        }
      ],
      vehicleType: undefined
    }
  ],
  facade: 'Guadeloupe',
  geom: { type: 'MultiPolygon' },
  hasMissionOrder: false,
  id: 38,
  isClosed: true,
  isUnderJdp: false,
  missionNature: ['ENV', 'FISH'],
  missionSource: 'MONITORENV',
  missionTypes: ['LAND'],
  observationsCacem: '',
  observationsCnsp: undefined,
  openBy: 'RAN',
  startDateTimeUtc: '01 mai 23, 05h57 (UTC)'
})

const data = [...fakeData1, ...fakeData2]

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<{}> = {
  title: 'Tables/SimpleTable',

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _SimpleTable() {
  const [sorting, setSorting] = useState<SortingState>([{ desc: false, id: 'dateDebut' }])

  const columns = useMemo(
    () => [
      {
        accessorFn: row => row.startDateTimeUtc,
        cell: info => info.getValue(),
        enableResizing: true,
        header: () => 'Début',
        id: 'dateDebut',
        size: 180
      },
      {
        accessorFn: row => row.endDateTimeUtc,
        cell: info => info.getValue(),
        enableResizing: true,
        header: () => 'Fin',
        id: 'dateFin',
        size: 180
      },
      {
        accessorFn: row => row.missionSource,
        cell: info => info.getValue(),
        enableResizing: true,
        header: () => 'Origine',
        id: 'missionSource',
        size: 90
      },
      {
        accessorFn: row =>
          row?.controlUnits?.map(controlUnit => `${controlUnit.name} (${controlUnit.administration})`).join(' / '),
        cell: info => info.getValue(),
        enableResizing: true,
        enableSorting: false,
        header: () => 'Unité (Administration)',
        id: 'Unit and Administration',
        maxSize: 280,
        minSize: 100,
        size: 200
      },
      {
        accessorFn: row => row.missionTypes,
        cell: info => info.getValue(),
        enableResizing: true,
        enableSorting: false,
        header: () => 'Type',
        id: 'type',
        size: 100
      },
      {
        accessorFn: row => row.facade,
        cell: info => info.getValue(),
        enableResizing: true,
        header: () => 'Facade',
        id: 'seaFront',
        size: 100
      },
      {
        accessorFn: row => row.observationsCacem,
        cell: info => info.getValue(),
        enableResizing: true,
        enableSorting: false,
        header: () => 'Thématiques',
        id: 'observationsCacem',
        maxSize: 280,
        minSize: 100,
        size: 200
      },
      {
        accessorFn: row => row.controlUnits.length,
        cell: info => info.getValue(),
        enableResizing: true,
        enableSorting: false,
        header: () => 'Nbre contrôles',
        id: 'controls',
        size: 100
      },
      {
        accessorFn: row => row.status,
        cell: info => info.getValue(),
        enableResizing: true,
        enableSorting: false,
        header: () => 'Statut',
        id: 'status',
        size: 100
      },
      {
        accessorFn: row => row.geom,
        cell: info => (
          <IconButton
            accent={Accent.SECONDARY}
            Icon={Icon.FocusZones}
            // eslint-disable-next-line no-console
            onClick={() => console.log(info.getValue())}
            size={Size.SMALL}
          />
        ),
        enableResizing: true,
        enableSorting: false,
        header: () => '',
        id: 'geom',
        size: 60
      },
      {
        accessorFn: row => row.id,
        cell: info => (
          // eslint-disable-next-line no-console
          <Button Icon={Icon.Edit} onClick={() => console.log(info.getValue())} size={Size.SMALL}>
            Editer
          </Button>
        ),
        enableResizing: true,
        enableSorting: false,
        header: () => '',
        id: 'edit',
        size: 160
      }
    ],
    []
  )

  const table = useReactTable({
    columns,
    data,
    enableSortingRemoval: false,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting
    }
  })

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
  const [before, after] =
    virtualRows.length > 0
      ? [
          notUndefined(virtualRows[0]).start - rowVirtualizer.options.scrollMargin,
          rowVirtualizer.getTotalSize() - notUndefined(virtualRows[virtualRows.length - 1]).end
        ]
      : [0, 0]

  return (
    <div ref={tableContainerRef}>
      <SimpleTable.Table>
        <SimpleTable.Head>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <SimpleTable.Th
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
                    <SimpleTable.SortContainer
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
                    </SimpleTable.SortContainer>
                  )}
                </SimpleTable.Th>
              ))}
            </tr>
          ))}
        </SimpleTable.Head>
        {before > 0 && (
          <tr>
            <td aria-label="padding before" colSpan={columns.length} style={{ height: before }} />
          </tr>
        )}
        <tbody>
          {virtualRows.map(virtualRow => {
            const row = rows[virtualRow.index]

            return (
              <SimpleTable.BodyTr
                key={virtualRow.key}
                ref={rowVirtualizer.measureElement} // measure dynamic row height
                data-index={virtualRow.index} // needed for dynamic row height measurement
              >
                {row?.getVisibleCells().map(cell => (
                  <SimpleTable.Td
                    {...{
                      $isCenter: !!(cell.column.id === 'geom' || cell.column.id === 'edit'),
                      key: cell.id,
                      style: {
                        maxWidth: cell.column.getSize(),
                        minWidth: cell.column.getSize(),
                        width: cell.column.getSize()
                      }
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </SimpleTable.Td>
                ))}
              </SimpleTable.BodyTr>
            )
          })}
        </tbody>
        {after > 0 && (
          <tr>
            <td aria-label="padding after" colSpan={columns.length} style={{ height: after }} />
          </tr>
        )}
      </SimpleTable.Table>
    </div>
  )
}
