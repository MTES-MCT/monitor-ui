import{j as n,bA as t,a as i,aW as y,T as g,U as B,aP as h,aD as r,O as N,bv as W,aJ as O,d as x,bx as v,aq as $,s as P,w as G,E as Y,aF as b,a1 as L,D as U,by as j,bz as _}from"./index-BnGWIf5W.js";import{u as q}from"./index-cnE3dYNg.js";import{r as a}from"./index-CBqU2yxZ.js";import{g as K}from"./StoryDecorator-BYfjGXyr.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const Z=Array(100).fill({id:4,reportingId:2300004,sourceType:"SEMAPHORE",semaphoreId:33,controlUnitId:null,sourceName:null,displayedSource:"Sémaphore de Boulogne sur mer",targetType:null,vehicleType:null,targetDetails:[],geom:{type:"MultiPolygon",coordinates:[[[[-19.00097037,49.57813235],[-14.5054498,50.48083701],[-14.25087621,49.53018118],[-19.00097037,49.57813235]]]]},seaFront:"MED",description:null,reportType:"INFRACTION_SUSPICION",theme:null,subThemes:[],actionTaken:null,isInfractionProven:!1,isControlRequired:!1,isUnitAvailable:null,createdAt:"2023-08-04T15:13:43.296Z",validityTime:1,isArchived:!1}),J=Array(100).fill({id:1,reportingId:2300001,sourceType:"SEMAPHORE",semaphoreId:21,controlUnitId:null,sourceName:null,displayedSource:"SEMAPHORE LE TOULINGUET",targetType:"VEHICLE",vehicleType:"VESSEL",targetDetails:[{mmsi:"012314231343",imo:null,externalReferenceNumber:null,vesselName:"Vessel 1",operatorName:null,size:null}],geom:{type:"MultiPoint",coordinates:[[-4.93888188,48.41495669]]},seaFront:"NAMO",description:"Description 1",reportType:"OBSERVATION",theme:"Rejets illicites",subThemes:["Jet de déchet","Carénage sauvage"],actionTaken:"ACTION TAKEN",isInfractionProven:!0,isControlRequired:!0,isUnitAvailable:!0,createdAt:"2023-08-01T15:13:01.073587Z",validityTime:24,isArchived:!0}),Q=[...Z,...J],ue={title:"Tables/TableWithSelectableRows",decorators:[K()]},X=({id:s,onSelect:m})=>i(ee,{children:[n(h,{accent:r.TERTIARY,Icon:G,onClick:()=>console.log(s)}),n(h,{accent:r.TERTIARY,Icon:Y,onClick:()=>console.log(s)}),i(b,{accent:r.SECONDARY,Icon:L,onSelect:m,children:[n(b.Item,{accent:r.SECONDARY,eventKey:"ARCHIVE",Icon:x}),n(b.Item,{accent:r.SECONDARY,eventKey:"DELETE",Icon:U})]})]});function u(){var f,I;const[s,m]=a.useState({}),[F,k]=a.useState([{id:"createdAt",desc:!1}]),V=(e,o)=>{console.log(e==="ARCHIVE"?"we want to archive the reporting with id: ":"we want to delete the reporting with id: ",o)},M=a.useMemo(()=>[{id:"select",size:25,enableSorting:!1,accessorFn:e=>e.reportingId,header:({table:e})=>n(t.RowCheckbox,{isChecked:e.getIsAllRowsSelected(),isIndeterminate:e.getIsSomeRowsSelected(),onChange:e.getToggleAllRowsSelectedHandler()}),cell:({row:e})=>n(t.RowCheckbox,{disabled:!e.getCanSelect(),isChecked:e.getIsSelected(),onChange:e.getToggleSelectedHandler(e)})},{accessorFn:e=>e.reportingId,cell:e=>e.getValue(),enableSorting:!1,header:()=>"",id:"reportingId",size:80},{accessorFn:e=>e.createdAt,cell:e=>e.getValue(),enableSorting:!0,header:()=>"Ouverture",id:"createdAt",size:105},{accessorFn:e=>e.validityTime,cell:e=>e.getValue(),enableSorting:!0,header:()=>"Fin dans",id:"validityTime",size:75},{accessorFn:e=>e.displayedSource,cell:e=>e.getValue(),enableSorting:!0,header:()=>"Source",id:"displayedSource",size:180},{accessorFn:e=>e.reportType,cell:e=>e.getValue(),enableSorting:!0,header:()=>"Type",id:"reportType",size:120},{accessorFn:e=>e,cell:({row:e})=>i("span",{children:[e.original.theme,": ",e.original.subThemes?e.original.subThemes.join(", "):""]}),enableSorting:!0,header:()=>"Thématique",id:"theme",size:165},{accessorFn:e=>e.seaFront,cell:e=>e.getValue(),enableSorting:!0,header:()=>"Façade",id:"seaFront",size:90},{accessorFn:e=>e.status,cell:e=>e.getValue(),enableSorting:!0,header:()=>"Statut",id:"isArchived",size:70},{accessorFn:e=>e.missionId,cell:()=>n(y,{backgroundColor:g.color.mediumSeaGreen,color:g.color.white,Icon:B,children:"Mission"}),enableSorting:!1,header:()=>"",id:"missionId",size:85},{accessorFn:e=>e.geom,cell:()=>n(y,{backgroundColor:g.color.gainsboro,iconColor:g.color.goldenPoppy,withBullet:!0,children:"Ctl fait"}),enableSorting:!1,header:()=>"",id:"actionStatus",size:85},{accessorFn:e=>e.geom,cell:e=>n(h,{accent:r.TERTIARY,Icon:N,onClick:()=>console.log(e.getValue())}),enableSorting:!1,header:()=>"",id:"geom",size:55},{accessorFn:e=>e.id,cell:e=>n(X,{id:e.getValue(),onSelect:o=>V(o,e.getValue())}),enableSorting:!1,header:()=>"",id:"id",size:120}],[]),S=W({columns:M,data:Q,state:{sorting:F,rowSelection:s},enableRowSelection:!0,enableSortingRemoval:!1,enableColumnResizing:!1,onRowSelectionChange:e=>{m(e)},onSortingChange:k,getCoreRowModel:j(),getSortedRowModel:_()}),H=a.useMemo(()=>S.getSelectedRowModel().rows.map(({original:e})=>e.id),[s]),p=a.useRef(null),{rows:d}=S.getRowModel(),T=q({count:d.length,getScrollElement:()=>p.current,estimateSize:()=>10,overscan:10,getItemKey:a.useCallback(e=>{var o;return`${(o=d[e])==null?void 0:o.id}`},[d])}),c=T.getVirtualItems(),[R,C]=c.length>0?[Math.max(0,((f=c[0])==null?void 0:f.start)??0),Math.max(0,T.getTotalSize()-(((I=c[c.length-1])==null?void 0:I.end)??0))]:[0,0],D=()=>{console.log("this reportings will be archived: ",H)};return i(O,{children:[n("div",{children:n(h,{accent:r.SECONDARY,Icon:x,onClick:D})}),n("div",{ref:p,style:{width:1776},children:i(t.Table,{children:[n(t.Head,{children:S.getHeaderGroups().map(e=>n("tr",{children:e.headers.map(o=>n(t.Th,{$width:o.column.getSize(),children:o.isPlaceholder?void 0:i(t.SortContainer,{className:o.column.getCanSort()?"cursor-pointer":"",onClick:o.column.getToggleSortingHandler(),children:[v(o.column.columnDef.header,o.getContext()),o.column.getCanSort()&&({asc:n("div",{children:"▲"}),desc:n("div",{children:"▼"})}[o.column.getIsSorted()]??n($,{size:14}))]})},o.id))},e.id))}),i("tbody",{children:[R>0&&n("tr",{children:n("td",{style:{height:`${R}px`}})}),c.map((e,o)=>{const w=d[e.index];return n(t.BodyTr,{$isHighlighted:o%2===0,children:w==null?void 0:w.getVisibleCells().map(l=>n(t.Td,{$hasRightBorder:l.column.id==="geom",$isCenter:l.column.id==="geom"||l.column.id==="id",$isHighlighted:o%2===0,$width:l.column.getSize(),children:v(l.column.columnDef.cell,l.getContext())},l.id))},e.key)}),C>0&&n("tr",{children:n("td",{style:{height:`${C}px`}})})]})]})})]})}const ee=P.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  position: relative;
  > button {
    padding: 0px;
  }
`;var A,E,z;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`function _TableWithSelectableRows() {
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([{
    id: 'createdAt',
    desc: false
  }]);
  const doAction = (key, id) => {
    if (key === 'ARCHIVE') {
      console.log('we want to archive the reporting with id: ', id);
    } else {
      console.log('we want to delete the reporting with id: ', id);
    }
  };
  const columns = useMemo(() => [{
    id: 'select',
    size: 25,
    enableSorting: false,
    accessorFn: row => row.reportingId,
    header: ({
      table
    }) => <TableWithSelectableRows.RowCheckbox isChecked={table.getIsAllRowsSelected()} isIndeterminate={table.getIsSomeRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />,
    cell: ({
      row
    }) => <TableWithSelectableRows.RowCheckbox disabled={!row.getCanSelect()} isChecked={row.getIsSelected()} onChange={row.getToggleSelectedHandler(row)} />
  }, {
    accessorFn: row => row.reportingId,
    cell: info => info.getValue(),
    enableSorting: false,
    header: () => '',
    id: 'reportingId',
    size: 80
  }, {
    accessorFn: row => row.createdAt,
    cell: info => info.getValue(),
    enableSorting: true,
    header: () => 'Ouverture',
    id: 'createdAt',
    size: 105
  }, {
    accessorFn: row => row.validityTime,
    cell: info => info.getValue(),
    enableSorting: true,
    header: () => 'Fin dans',
    id: 'validityTime',
    size: 75
  }, {
    accessorFn: row => row.displayedSource,
    cell: info => info.getValue(),
    enableSorting: true,
    header: () => 'Source',
    id: 'displayedSource',
    size: 180
  }, {
    accessorFn: row => row.reportType,
    cell: info => info.getValue(),
    enableSorting: true,
    header: () => 'Type',
    id: 'reportType',
    size: 120
  }, {
    accessorFn: row => row,
    cell: ({
      row
    }) => <span>
            {row.original.theme}: {row.original.subThemes ? row.original.subThemes.join(', ') : ''}
          </span>,
    enableSorting: true,
    header: () => 'Thématique',
    id: 'theme',
    size: 165
  }, {
    accessorFn: row => row.seaFront,
    cell: info => info.getValue(),
    enableSorting: true,
    header: () => 'Façade',
    id: 'seaFront',
    size: 90
  }, {
    accessorFn: row => row.status,
    cell: info => info.getValue(),
    enableSorting: true,
    header: () => 'Statut',
    id: 'isArchived',
    size: 70
  }, {
    accessorFn: row => row.missionId,
    cell: () => <Tag backgroundColor={THEME.color.mediumSeaGreen} color={THEME.color.white} Icon={Link}>
            Mission
          </Tag>,
    enableSorting: false,
    header: () => '',
    id: 'missionId',
    size: 85
  }, {
    accessorFn: row => row.geom,
    cell: () => <Tag backgroundColor={THEME.color.gainsboro} iconColor={THEME.color.goldenPoppy} withBullet>
            Ctl fait
          </Tag>,
    enableSorting: false,
    header: () => '',
    id: 'actionStatus',
    size: 85
  }, {
    accessorFn: row => row.geom,
    cell: info => <IconButton accent={Accent.TERTIARY} Icon={Icon.FocusZones} onClick={() => console.log(info.getValue())} />,
    enableSorting: false,
    header: () => '',
    id: 'geom',
    size: 55
  }, {
    accessorFn: row => row.id,
    cell: info => <ButtonsGroupRow id={info.getValue()} onSelect={key => doAction(key, info.getValue())} />,
    enableSorting: false,
    header: () => '',
    id: 'id',
    size: 120
  }], []);
  const table = useReactTable({
    columns,
    data,
    state: {
      sorting,
      rowSelection
    },
    enableRowSelection: true,
    enableSortingRemoval: false,
    enableColumnResizing: false,
    onRowSelectionChange: rowId => {
      setRowSelection(rowId);
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  });
  const selectedIds = useMemo(() => table.getSelectedRowModel().rows.map(({
    original
  }) => original.id),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [rowSelection]);

  // eslint-disable-next-line no-null/no-null
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const {
    rows
  } = table.getRowModel();
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 10,
    overscan: 10,
    // Pass correct keys to virtualizer it's important when rows change position
    getItemKey: useCallback((index: number) => \`\${rows[index]?.id}\`, [rows])
  });
  const virtualRows = rowVirtualizer.getVirtualItems();
  const [paddingTop, paddingBottom] = virtualRows.length > 0 ? [Math.max(0, virtualRows[0]?.start ?? 0), Math.max(0, rowVirtualizer.getTotalSize() - (virtualRows[virtualRows.length - 1]?.end ?? 0))] : [0, 0];
  const archiveReportings = () => {
    // eslint-disable-next-line no-console
    console.log('this reportings will be archived: ', selectedIds);
  };
  return <>
      <div>
        <IconButton accent={Accent.SECONDARY} Icon={Icon.Archive} onClick={archiveReportings} />
      </div>
      <div ref={tableContainerRef} style={{
      width: 1776
    }}>
        <TableWithSelectableRows.Table>
          <TableWithSelectableRows.Head>
            {table.getHeaderGroups().map(headerGroup => <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => <TableWithSelectableRows.Th key={header.id} $width={header.column.getSize()}>
                    {header.isPlaceholder ? undefined : <TableWithSelectableRows.SortContainer className={header.column.getCanSort() ? 'cursor-pointer' : ''} onClick={header.column.getToggleSortingHandler()}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getCanSort() && ({
                  asc: <div>▲</div>,
                  desc: <div>▼</div>
                }[(header.column.getIsSorted() as string)] ?? <Icon.SortingArrows size={14} />)}
                      </TableWithSelectableRows.SortContainer>}
                  </TableWithSelectableRows.Th>)}
              </tr>)}
          </TableWithSelectableRows.Head>
          <tbody>
            {paddingTop > 0 && <tr>
                <td style={{
              height: \`\${paddingTop}px\`
            }} />
              </tr>}
            {virtualRows.map((virtualRow, index) => {
            const row = rows[virtualRow.index];
            return <TableWithSelectableRows.BodyTr key={virtualRow.key} $isHighlighted={index % 2 === 0}>
                  {row?.getVisibleCells().map(cell => <TableWithSelectableRows.Td key={cell.id} $hasRightBorder={!!(cell.column.id === 'geom')} $isCenter={!!(cell.column.id === 'geom' || cell.column.id === 'id')} $isHighlighted={index % 2 === 0} $width={cell.column.getSize()}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableWithSelectableRows.Td>)}
                </TableWithSelectableRows.BodyTr>;
          })}
            {paddingBottom > 0 && <tr>
                <td style={{
              height: \`\${paddingBottom}px\`
            }} />
              </tr>}
          </tbody>
        </TableWithSelectableRows.Table>
      </div>
    </>;
}`,...(z=(E=u.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const he=["_TableWithSelectableRows"];export{u as _TableWithSelectableRows,he as __namedExportsOrder,ue as default};
