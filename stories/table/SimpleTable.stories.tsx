import { flexRender, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual'
import { useCallback, useMemo, useRef, useState } from 'react'

import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Accent, Button, Icon, IconButton, Size } from '../../src'
import {
  StyledBodyTr,
  StyledHead,
  StyledSortContainer,
  StyledTable,
  StyledTd,
  StyledTh
} from '../../src/elements/Table/SimpleTable'

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
  observationsCacem: 'Black bit sell. House relate policy once. White member worker east even anyone detail professor.',
  observationsCnsp: undefined,
  openBy: 'RAN',
  startDateTimeUtc: '01 mai 23, 05h57 (UTC)'
})

const data = [...fakeData1, ...fakeData2]

export default {
  title: 'Table/SimpleTable',
  decorators: [generateStoryDecorator()]
}

export function _SimpleTable() {
  const [sorting, setSorting] = useState<SortingState>([{ id: 'dateDebut', desc: false }])

  const columns = useMemo(
    () => [
      {
        accessorFn: row => row.startDateTimeUtc,
        id: 'dateDebut',
        cell: info => info.getValue(),
        header: () => 'Début'
      },
      {
        accessorFn: row => row.endDateTimeUtc,
        id: 'dateFin',
        cell: info => info.getValue(),
        header: () => 'Fin'
      },
      {
        accessorFn: row => row.missionSource,
        id: 'missionSource',
        cell: info => info.getValue(),
        header: () => 'Origine'
      },
      {
        accessorFn: row =>
          row?.controlUnits?.map(controlUnit => `${controlUnit.name} (${controlUnit.administration})`).join(' / '),
        id: 'Unit and Administration',
        cell: info => info.getValue(),
        header: () => 'Unité (Administration)',
        enableSorting: false
      },
      {
        accessorFn: row => row.missionTypes,
        id: 'type',
        cell: info => info.getValue(),
        header: () => 'Type',
        enableSorting: false
      },
      {
        accessorFn: row => row.facade,
        id: 'seaFront',
        cell: info => info.getValue(),
        header: () => 'Facade'
      },
      {
        accessorFn: row => row.observationsCacem,
        id: 'observationsCacem',
        cell: info => info.getValue(),
        header: () => 'Thématiques',
        enableSorting: false
      },
      {
        accessorFn: row => row.controlUnits.length,
        id: 'controls',
        cell: info => info.getValue(),
        header: () => 'Nbre contrôles',
        enableSorting: false
      },
      {
        accessorFn: row => row.status,
        id: 'status',
        cell: info => info.getValue(),
        header: () => 'Statut',
        enableSorting: false
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
        enableSorting: false
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
        enableSorting: false
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
    estimateSize: () => 40,
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

  return (
    <div ref={tableContainerRef}>
      <StyledTable>
        <StyledHead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <StyledTh key={header.id}>
                  {header.isPlaceholder ? undefined : (
                    <StyledSortContainer
                      {...{
                        className: header.column.getCanSort() ? 'cursor-pointer select-none' : '',
                        onClick: header.column.getToggleSortingHandler()
                      }}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getCanSort() &&
                        ({
                          asc: <Icon.Close />,
                          desc: <Icon.Chevron />
                        }[header.column.getIsSorted() as string] ?? <Icon.SortingArrows size={14} />)}
                    </StyledSortContainer>
                  )}
                </StyledTh>
              ))}
            </tr>
          ))}
        </StyledHead>
        <tbody>
          {paddingTop > 0 && (
            <tr>
              <td style={{ height: `${paddingTop}px` }} />
            </tr>
          )}
          {virtualRows.map(virtualRow => {
            const row = rows[virtualRow.index]

            return (
              <StyledBodyTr key={virtualRow.key}>
                {row?.getVisibleCells().map(cell => (
                  <StyledTd key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</StyledTd>
                ))}
              </StyledBodyTr>
            )
          })}
          {paddingBottom > 0 && (
            <tr>
              <td style={{ height: `${paddingBottom}px` }} />
            </tr>
          )}
        </tbody>
      </StyledTable>
    </div>
  )
}
