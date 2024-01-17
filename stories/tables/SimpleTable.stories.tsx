import { flexRender, getCoreRowModel, getSortedRowModel, type SortingState, useReactTable } from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual'
import { useCallback, useMemo, useRef, useState } from 'react'

import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Accent, Button, Icon, IconButton, Size, SimpleTable } from '../../src'

import type { Meta } from '@storybook/react'

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
      geom: { type: 'MultiPoint', coordinates: [[-2.63708273, 48.17060427]] },
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
      geom: { type: 'MultiPoint', coordinates: [[-2.63708273, 48.17060427]] },
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

const meta: Meta<{}> = {
  title: 'Tables/SimpleTable',

  decorators: [generateStoryDecorator()]
}

export default meta

export function _SimpleTable() {
  const [sorting, setSorting] = useState<SortingState>([{ id: 'dateDebut', desc: false }])

  const columns = useMemo(
    () => [
      {
        accessorFn: row => row.startDateTimeUtc,
        id: 'dateDebut',
        cell: info => info.getValue(),
        header: () => 'Début',
        enableResizing: true,
        size: 180
      },
      {
        accessorFn: row => row.endDateTimeUtc,
        id: 'dateFin',
        cell: info => info.getValue(),
        header: () => 'Fin',
        enableResizing: true,
        size: 180
      },
      {
        accessorFn: row => row.missionSource,
        id: 'missionSource',
        cell: info => info.getValue(),
        header: () => 'Origine',
        enableResizing: true,
        size: 90
      },
      {
        accessorFn: row =>
          row?.controlUnits?.map(controlUnit => `${controlUnit.name} (${controlUnit.administration})`).join(' / '),
        id: 'Unit and Administration',
        cell: info => info.getValue(),
        header: () => 'Unité (Administration)',
        enableSorting: false,
        enableResizing: true,
        maxSize: 280,
        minSize: 100,
        size: 200
      },
      {
        accessorFn: row => row.missionTypes,
        id: 'type',
        cell: info => info.getValue(),
        header: () => 'Type',
        enableSorting: false,
        enableResizing: true,
        size: 100
      },
      {
        accessorFn: row => row.facade,
        id: 'seaFront',
        cell: info => info.getValue(),
        header: () => 'Facade',
        enableResizing: true,
        size: 100
      },
      {
        accessorFn: row => row.observationsCacem,
        id: 'observationsCacem',
        cell: info => info.getValue(),
        header: () => 'Thématiques',
        enableSorting: false,
        enableResizing: true,
        maxSize: 280,
        minSize: 100,
        size: 200
      },
      {
        accessorFn: row => row.controlUnits.length,
        id: 'controls',
        cell: info => info.getValue(),
        header: () => 'Nbre contrôles',
        enableSorting: false,
        enableResizing: true,
        size: 100
      },
      {
        accessorFn: row => row.status,
        id: 'status',
        cell: info => info.getValue(),
        header: () => 'Statut',
        enableSorting: false,
        enableResizing: true,
        size: 100
      },
      {
        accessorFn: row => row.geom,
        id: 'geom',
        cell: info => (
          <IconButton
            accent={Accent.SECONDARY}
            Icon={Icon.FocusZones}
            // eslint-disable-next-line no-console
            onClick={() => console.log(info.getValue())}
            size={Size.SMALL}
          />
        ),
        header: () => '',
        enableSorting: false,
        enableResizing: true,
        size: 60
      },
      {
        accessorFn: row => row.id,
        id: 'edit',
        cell: info => (
          // eslint-disable-next-line no-console
          <Button Icon={Icon.Edit} onClick={() => console.log(info.getValue())} size={Size.SMALL}>
            Editer
          </Button>
        ),
        header: () => '',
        enableSorting: false,
        enableResizing: true,
        size: 160
      }
    ],
    []
  )

  const table = useReactTable({
    columns,
    data,
    state: {
      sorting
    },
    enableSortingRemoval: false,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  })

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
          Math.max(0, virtualRows[0]?.start ?? 0),
          Math.max(0, rowVirtualizer.getTotalSize() - (virtualRows[virtualRows.length - 1]?.end ?? 0))
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
        <tbody>
          {paddingTop > 0 && (
            <tr>
              <td style={{ height: `${paddingTop}px` }} />
            </tr>
          )}
          {virtualRows.map(virtualRow => {
            const row = rows[virtualRow.index]

            return (
              <SimpleTable.BodyTr key={virtualRow.key}>
                {row?.getVisibleCells().map(cell => (
                  <SimpleTable.Td
                    {...{
                      key: cell.id,
                      style: {
                        maxWidth: cell.column.getSize(),
                        minWidth: cell.column.getSize(),
                        width: cell.column.getSize()
                      },
                      $isCenter: !!(cell.column.id === 'geom' || cell.column.id === 'edit')
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </SimpleTable.Td>
                ))}
              </SimpleTable.BodyTr>
            )
          })}
          {paddingBottom > 0 && (
            <tr>
              <td style={{ height: `${paddingBottom}px` }} />
            </tr>
          )}
        </tbody>
      </SimpleTable.Table>
    </div>
  )
}
