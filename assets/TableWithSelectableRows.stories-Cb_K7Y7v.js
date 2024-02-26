import{j as n,bE as t,aQ as x,T as g,R as H,aM as u,aC as i,M as D,bz as B,c as A,bB as I,ao as N,az as W,u as $,E as O,aD as w,$ as P,D as G,bC as Y,bD as _}from"./index-0nDB5Zzz.js";import{u as L}from"./index-cnE3dYNg.js";import{r}from"./index-CBqU2yxZ.js";import{g as U}from"./generateStoryDecorator-jcZX8bPx.js";import"./_baseClone-CBkhujLI.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";const K=Array(100).fill({actionTaken:null,controlUnitId:null,createdAt:"2023-08-04T15:13:43.296Z",description:null,displayedSource:"Sémaphore de Boulogne sur mer",geom:{coordinates:[[[[-19.00097037,49.57813235],[-14.5054498,50.48083701],[-14.25087621,49.53018118],[-19.00097037,49.57813235]]]],type:"MultiPolygon"},id:4,isArchived:!1,isControlRequired:!1,isInfractionProven:!1,isUnitAvailable:null,reportingId:2300004,reportType:"INFRACTION_SUSPICION",seaFront:"MED",semaphoreId:33,sourceName:null,sourceType:"SEMAPHORE",subThemes:[],targetDetails:[],targetType:null,theme:null,validityTime:1,vehicleType:null}),q=Array(100).fill({actionTaken:"ACTION TAKEN",controlUnitId:null,createdAt:"2023-08-01T15:13:01.073587Z",description:"Description 1",displayedSource:"SEMAPHORE LE TOULINGUET",geom:{coordinates:[[-4.93888188,48.41495669]],type:"MultiPoint"},id:1,isArchived:!0,isControlRequired:!0,isInfractionProven:!0,isUnitAvailable:!0,reportingId:2300001,reportType:"OBSERVATION",seaFront:"NAMO",semaphoreId:21,sourceName:null,sourceType:"SEMAPHORE",subThemes:["Jet de déchet","Carénage sauvage"],targetDetails:[{externalReferenceNumber:null,imo:null,mmsi:"012314231343",operatorName:null,size:null,vesselName:"Vessel 1"}],targetType:"VEHICLE",theme:"Rejets illicites",validityTime:24,vehicleType:"VESSEL"}),Z=[...K,...q],ge={title:"Tables/TableWithSelectableRows",decorators:[U()]},J=({id:a,onSelect:h})=>n.jsxs(Q,{children:[n.jsx(u,{accent:i.TERTIARY,Icon:$,onClick:()=>console.log(a)}),n.jsx(u,{accent:i.TERTIARY,Icon:O,onClick:()=>console.log(a)}),n.jsxs(w,{accent:i.SECONDARY,Icon:P,onSelect:h,children:[n.jsx(w.Item,{accent:i.SECONDARY,eventKey:"ARCHIVE",Icon:A}),n.jsx(w.Item,{accent:i.SECONDARY,eventKey:"DELETE",Icon:G})]})]});function c(){var C,f;const[a,h]=r.useState({}),[z,k]=r.useState([{desc:!1,id:"createdAt"}]),F=(e,o)=>{console.log(e==="ARCHIVE"?"we want to archive the reporting with id: ":"we want to delete the reporting with id: ",o)},M=r.useMemo(()=>[{accessorFn:e=>e.reportingId,cell:({row:e})=>n.jsx(t.RowCheckbox,{disabled:!e.getCanSelect(),isChecked:e.getIsSelected(),onChange:e.getToggleSelectedHandler(e)}),enableSorting:!1,header:({table:e})=>n.jsx(t.RowCheckbox,{isChecked:e.getIsAllRowsSelected(),isIndeterminate:e.getIsSomeRowsSelected(),onChange:e.getToggleAllRowsSelectedHandler()}),id:"select",size:25},{accessorFn:e=>e.reportingId,cell:e=>e.getValue(),enableSorting:!1,header:()=>"",id:"reportingId",size:80},{accessorFn:e=>e.createdAt,cell:e=>e.getValue(),enableSorting:!0,header:()=>"Ouverture",id:"createdAt",size:105},{accessorFn:e=>e.validityTime,cell:e=>e.getValue(),enableSorting:!0,header:()=>"Fin dans",id:"validityTime",size:75},{accessorFn:e=>e.displayedSource,cell:e=>e.getValue(),enableSorting:!0,header:()=>"Source",id:"displayedSource",size:180},{accessorFn:e=>e.reportType,cell:e=>e.getValue(),enableSorting:!0,header:()=>"Type",id:"reportType",size:120},{accessorFn:e=>e,cell:({row:e})=>n.jsxs("span",{children:[e.original.theme,": ",e.original.subThemes?e.original.subThemes.join(", "):""]}),enableSorting:!0,header:()=>"Thématique",id:"theme",size:165},{accessorFn:e=>e.seaFront,cell:e=>e.getValue(),enableSorting:!0,header:()=>"Façade",id:"seaFront",size:90},{accessorFn:e=>e.status,cell:e=>e.getValue(),enableSorting:!0,header:()=>"Statut",id:"isArchived",size:70},{accessorFn:e=>e.missionId,cell:()=>n.jsx(x,{backgroundColor:g.color.mediumSeaGreen,color:g.color.white,Icon:H,children:"Mission"}),enableSorting:!1,header:()=>"",id:"missionId",size:85},{accessorFn:e=>e.geom,cell:()=>n.jsx(x,{backgroundColor:g.color.gainsboro,iconColor:g.color.goldenPoppy,withBullet:!0,children:"Ctl fait"}),enableSorting:!1,header:()=>"",id:"actionStatus",size:85},{accessorFn:e=>e.geom,cell:e=>n.jsx(u,{accent:i.TERTIARY,Icon:D,onClick:()=>console.log(e.getValue())}),enableSorting:!1,header:()=>"",id:"geom",size:55},{accessorFn:e=>e.id,cell:e=>n.jsx(J,{id:e.getValue(),onSelect:o=>F(o,e.getValue())}),enableSorting:!1,header:()=>"",id:"id",size:120}],[]),m=B({columns:M,data:Z,enableColumnResizing:!1,enableRowSelection:!0,enableSortingRemoval:!1,getCoreRowModel:Y(),getSortedRowModel:_(),onRowSelectionChange:e=>{h(e)},onSortingChange:k,state:{rowSelection:a,sorting:z}}),j=r.useMemo(()=>m.getSelectedRowModel().rows.map(({original:e})=>e.id),[a]),b=r.useRef(null),{rows:d}=m.getRowModel(),p=L({count:d.length,estimateSize:()=>10,getItemKey:r.useCallback(e=>{var o;return`${(o=d[e])==null?void 0:o.id}`},[d]),getScrollElement:()=>b.current,overscan:10}),s=p.getVirtualItems(),[R,T]=s.length>0?[Math.max(0,((C=s[0])==null?void 0:C.start)??0),Math.max(0,p.getTotalSize()-(((f=s[s.length-1])==null?void 0:f.end)??0))]:[0,0],V=()=>{console.log("this reportings will be archived: ",j)};return n.jsxs(n.Fragment,{children:[n.jsx("div",{children:n.jsx(u,{accent:i.SECONDARY,Icon:A,onClick:V})}),n.jsx("div",{ref:b,style:{width:1776},children:n.jsxs(t.Table,{children:[n.jsx(t.Head,{children:m.getHeaderGroups().map(e=>n.jsx("tr",{children:e.headers.map(o=>n.jsx(t.Th,{$width:o.column.getSize(),children:o.isPlaceholder?void 0:n.jsxs(t.SortContainer,{className:o.column.getCanSort()?"cursor-pointer":"",onClick:o.column.getToggleSortingHandler(),children:[I(o.column.columnDef.header,o.getContext()),o.column.getCanSort()&&({asc:n.jsx("div",{children:"▲"}),desc:n.jsx("div",{children:"▼"})}[o.column.getIsSorted()]??n.jsx(N,{size:14}))]})},o.id))},e.id))}),n.jsxs("tbody",{children:[R>0&&n.jsx("tr",{children:n.jsx("td",{style:{height:`${R}px`}})}),s.map((e,o)=>{const S=d[e.index];return n.jsx(t.BodyTr,{$isHighlighted:o%2===0,children:S==null?void 0:S.getVisibleCells().map(l=>n.jsx(t.Td,{$hasRightBorder:l.column.id==="geom",$isCenter:l.column.id==="geom"||l.column.id==="id",$isHighlighted:o%2===0,$width:l.column.getSize(),children:I(l.column.columnDef.cell,l.getContext())},l.id))},e.key)}),T>0&&n.jsx("tr",{children:n.jsx("td",{style:{height:`${T}px`}})})]})]})})]})}const Q=W.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  position: relative;
  > button {
    padding: 0px;
  }
`;c.__docgenInfo={description:"",methods:[],displayName:"_TableWithSelectableRows"};var y,v,E;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`function _TableWithSelectableRows() {
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([{
    desc: false,
    id: 'createdAt'
  }]);
  const doAction = (key, id) => {
    if (key === 'ARCHIVE') {
      console.log('we want to archive the reporting with id: ', id);
    } else {
      console.log('we want to delete the reporting with id: ', id);
    }
  };
  const columns = useMemo(() => [{
    accessorFn: row => row.reportingId,
    cell: ({
      row
    }) => <TableWithSelectableRows.RowCheckbox disabled={!row.getCanSelect()} isChecked={row.getIsSelected()} onChange={row.getToggleSelectedHandler(row)} />,
    enableSorting: false,
    header: ({
      table
    }) => <TableWithSelectableRows.RowCheckbox isChecked={table.getIsAllRowsSelected()} isIndeterminate={table.getIsSomeRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />,
    id: 'select',
    size: 25
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
    enableColumnResizing: false,
    enableRowSelection: true,
    enableSortingRemoval: false,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: rowId => {
      setRowSelection(rowId);
    },
    onSortingChange: setSorting,
    state: {
      rowSelection,
      sorting
    }
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
    estimateSize: () => 10,
    // Pass correct keys to virtualizer it's important when rows change position
    getItemKey: useCallback((index: number) => \`\${rows[index]?.id}\`, [rows]),
    getScrollElement: () => tableContainerRef.current,
    overscan: 10
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
}`,...(E=(v=c.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};const ue=["_TableWithSelectableRows"];export{c as _TableWithSelectableRows,ue as __namedExportsOrder,ge as default};
