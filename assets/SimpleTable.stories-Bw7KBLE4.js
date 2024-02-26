import{j as t,aM as x,aC as y,M as v,aI as S,aB as M,E as D,bz as V,bA as o,bB as h,ao as A,bC as F,bD as U}from"./index-0nDB5Zzz.js";import{u as N}from"./index-cnE3dYNg.js";import{r as l}from"./index-CBqU2yxZ.js";import{g as j}from"./generateStoryDecorator-jcZX8bPx.js";import"./_baseClone-CBkhujLI.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";const I=Array(100).fill({closedBy:"TIM",controlUnits:[{administration:"DDTM",contact:void 0,id:10003,isArchived:!1,name:"DML 2A",resources:[]}],endDateTimeUtc:"19 juin 23, 09h28 (UTC)",envActions:[{actionNumberOfControls:1,actionStartDateTimeUtc:void 0,actionTargetType:"COMPANY",actionType:"CONTROL",geom:{coordinates:[[-2.63708273,48.17060427]],type:"MultiPoint"},id:"f3e90d3a-6ba4-4bb3-805e-d391508aa46d",infractions:[],observations:void 0,themes:[{protectedSpecies:["MARINE_MAMMALS"],subThemes:["Dérogations concernant les espèces protégées"],theme:"Police des espèces protégées et de leurs habitats (faune et flore)"}],vehicleType:void 0}],facade:"Guyane",geom:{type:"MultiPolygon"},hasMissionOrder:!1,id:38,isClosed:!0,isUnderJdp:!1,missionNature:["ENV","FISH"],missionSource:"MONITORENV",missionTypes:["LAND"],observationsCacem:"Black bit sell. House relate policy once. White member worker east even anyone detail professor.",observationsCnsp:void 0,openBy:"RAN",startDateTimeUtc:"23 juin 23, 05h57 (UTC)"}),E=Array(100).fill({closedBy:"TIM",controlUnits:[{administration:"DDTM",contact:void 0,id:10003,isArchived:!1,name:"DML 2A",resources:[]}],endDateTimeUtc:"23 juin 23, 09h28 (UTC)",envActions:[{actionNumberOfControls:1,actionStartDateTimeUtc:void 0,actionTargetType:"COMPANY",actionType:"CONTROL",geom:{coordinates:[[-2.63708273,48.17060427]],type:"MultiPoint"},id:"f3e90d3a-6ba4-4bb3-805e-d391508aa46d",infractions:[],observations:void 0,themes:[{protectedSpecies:["MARINE_MAMMALS"],subThemes:["Dérogations concernant les espèces protégées"],theme:"Police des espèces protégées et de leurs habitats (faune et flore)"}],vehicleType:void 0}],facade:"Guadeloupe",geom:{type:"MultiPolygon"},hasMissionOrder:!1,id:38,isClosed:!0,isUnderJdp:!1,missionNature:["ENV","FISH"],missionSource:"MONITORENV",missionTypes:["LAND"],observationsCacem:"",observationsCnsp:void 0,openBy:"RAN",startDateTimeUtc:"01 mai 23, 05h57 (UTC)"}),B=[...I,...E],K={title:"Tables/SimpleTable",decorators:[j()]};function s(){var b,p;const[R,C]=l.useState([{desc:!1,id:"dateDebut"}]),w=l.useMemo(()=>[{accessorFn:e=>e.startDateTimeUtc,cell:e=>e.getValue(),enableResizing:!0,header:()=>"Début",id:"dateDebut",size:180},{accessorFn:e=>e.endDateTimeUtc,cell:e=>e.getValue(),enableResizing:!0,header:()=>"Fin",id:"dateFin",size:180},{accessorFn:e=>e.missionSource,cell:e=>e.getValue(),enableResizing:!0,header:()=>"Origine",id:"missionSource",size:90},{accessorFn:e=>{var n;return(n=e==null?void 0:e.controlUnits)==null?void 0:n.map(i=>`${i.name} (${i.administration})`).join(" / ")},cell:e=>e.getValue(),enableResizing:!0,enableSorting:!1,header:()=>"Unité (Administration)",id:"Unit and Administration",maxSize:280,minSize:100,size:200},{accessorFn:e=>e.missionTypes,cell:e=>e.getValue(),enableResizing:!0,enableSorting:!1,header:()=>"Type",id:"type",size:100},{accessorFn:e=>e.facade,cell:e=>e.getValue(),enableResizing:!0,header:()=>"Facade",id:"seaFront",size:100},{accessorFn:e=>e.observationsCacem,cell:e=>e.getValue(),enableResizing:!0,enableSorting:!1,header:()=>"Thématiques",id:"observationsCacem",maxSize:280,minSize:100,size:200},{accessorFn:e=>e.controlUnits.length,cell:e=>e.getValue(),enableResizing:!0,enableSorting:!1,header:()=>"Nbre contrôles",id:"controls",size:100},{accessorFn:e=>e.status,cell:e=>e.getValue(),enableResizing:!0,enableSorting:!1,header:()=>"Statut",id:"status",size:100},{accessorFn:e=>e.geom,cell:e=>t.jsx(x,{accent:y.SECONDARY,Icon:v,onClick:()=>console.log(e.getValue()),size:S.SMALL}),enableResizing:!0,enableSorting:!1,header:()=>"",id:"geom",size:60},{accessorFn:e=>e.id,cell:e=>t.jsx(M,{Icon:D,onClick:()=>console.log(e.getValue()),size:S.SMALL,children:"Editer"}),enableResizing:!0,enableSorting:!1,header:()=>"",id:"edit",size:160}],[]),c=V({columns:w,data:B,enableSortingRemoval:!1,getCoreRowModel:F(),getSortedRowModel:U(),onSortingChange:C,state:{sorting:R}}),d=l.useRef(null),{rows:r}=c.getRowModel(),m=N({count:r.length,estimateSize:()=>10,getItemKey:l.useCallback(e=>{var n;return`${(n=r[e])==null?void 0:n.id}`},[r]),getScrollElement:()=>d.current,overscan:10}),a=m.getVirtualItems(),[u,g]=a.length>0?[Math.max(0,((b=a[0])==null?void 0:b.start)??0),Math.max(0,m.getTotalSize()-(((p=a[a.length-1])==null?void 0:p.end)??0))]:[0,0];return t.jsx("div",{ref:d,children:t.jsxs(o.Table,{children:[t.jsx(o.Head,{children:c.getHeaderGroups().map(e=>t.jsx("tr",{children:e.headers.map(n=>t.jsx(o.Th,{style:{maxWidth:n.column.getSize(),minWidth:n.column.getSize(),width:n.column.getSize()},children:n.isPlaceholder?void 0:t.jsxs(o.SortContainer,{className:n.column.getCanSort()?"cursor-pointer":"",onClick:n.column.getToggleSortingHandler(),children:[h(n.column.columnDef.header,n.getContext()),n.column.getCanSort()&&({asc:t.jsx("div",{children:"▲"}),desc:t.jsx("div",{children:"▼"})}[n.column.getIsSorted()]??t.jsx(A,{size:14}))]})},n.id))},e.id))}),t.jsxs("tbody",{children:[u>0&&t.jsx("tr",{children:t.jsx("td",{style:{height:`${u}px`}})}),a.map(e=>{const n=r[e.index];return t.jsx(o.BodyTr,{children:n==null?void 0:n.getVisibleCells().map(i=>t.jsx(o.Td,{$isCenter:i.column.id==="geom"||i.column.id==="edit",key:i.id,style:{maxWidth:i.column.getSize(),minWidth:i.column.getSize(),width:i.column.getSize()},children:h(i.column.columnDef.cell,i.getContext())}))},e.key)}),g>0&&t.jsx("tr",{children:t.jsx("td",{style:{height:`${g}px`}})})]})]})})}s.__docgenInfo={description:"",methods:[],displayName:"_SimpleTable"};var f,z,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`function _SimpleTable() {
  const [sorting, setSorting] = useState<SortingState>([{
    desc: false,
    id: 'dateDebut'
  }]);
  const columns = useMemo(() => [{
    accessorFn: row => row.startDateTimeUtc,
    cell: info => info.getValue(),
    enableResizing: true,
    header: () => 'Début',
    id: 'dateDebut',
    size: 180
  }, {
    accessorFn: row => row.endDateTimeUtc,
    cell: info => info.getValue(),
    enableResizing: true,
    header: () => 'Fin',
    id: 'dateFin',
    size: 180
  }, {
    accessorFn: row => row.missionSource,
    cell: info => info.getValue(),
    enableResizing: true,
    header: () => 'Origine',
    id: 'missionSource',
    size: 90
  }, {
    accessorFn: row => row?.controlUnits?.map(controlUnit => \`\${controlUnit.name} (\${controlUnit.administration})\`).join(' / '),
    cell: info => info.getValue(),
    enableResizing: true,
    enableSorting: false,
    header: () => 'Unité (Administration)',
    id: 'Unit and Administration',
    maxSize: 280,
    minSize: 100,
    size: 200
  }, {
    accessorFn: row => row.missionTypes,
    cell: info => info.getValue(),
    enableResizing: true,
    enableSorting: false,
    header: () => 'Type',
    id: 'type',
    size: 100
  }, {
    accessorFn: row => row.facade,
    cell: info => info.getValue(),
    enableResizing: true,
    header: () => 'Facade',
    id: 'seaFront',
    size: 100
  }, {
    accessorFn: row => row.observationsCacem,
    cell: info => info.getValue(),
    enableResizing: true,
    enableSorting: false,
    header: () => 'Thématiques',
    id: 'observationsCacem',
    maxSize: 280,
    minSize: 100,
    size: 200
  }, {
    accessorFn: row => row.controlUnits.length,
    cell: info => info.getValue(),
    enableResizing: true,
    enableSorting: false,
    header: () => 'Nbre contrôles',
    id: 'controls',
    size: 100
  }, {
    accessorFn: row => row.status,
    cell: info => info.getValue(),
    enableResizing: true,
    enableSorting: false,
    header: () => 'Statut',
    id: 'status',
    size: 100
  }, {
    accessorFn: row => row.geom,
    cell: info => <IconButton accent={Accent.SECONDARY} Icon={Icon.FocusZones}
    // eslint-disable-next-line no-console
    onClick={() => console.log(info.getValue())} size={Size.SMALL} />,
    enableResizing: true,
    enableSorting: false,
    header: () => '',
    id: 'geom',
    size: 60
  }, {
    accessorFn: row => row.id,
    cell: info =>
    // eslint-disable-next-line no-console
    <Button Icon={Icon.Edit} onClick={() => console.log(info.getValue())} size={Size.SMALL}>
            Editer
          </Button>,
    enableResizing: true,
    enableSorting: false,
    header: () => '',
    id: 'edit',
    size: 160
  }], []);
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
  });

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
  return <div ref={tableContainerRef}>
      <SimpleTable.Table>
        <SimpleTable.Head>
          {table.getHeaderGroups().map(headerGroup => <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => <SimpleTable.Th key={header.id} {...{
            style: {
              maxWidth: header.column.getSize(),
              minWidth: header.column.getSize(),
              width: header.column.getSize()
            }
          }}>
                  {header.isPlaceholder ? undefined : <SimpleTable.SortContainer {...{
              className: header.column.getCanSort() ? 'cursor-pointer' : '',
              onClick: header.column.getToggleSortingHandler()
            }}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getCanSort() && ({
                asc: <div>▲</div>,
                desc: <div>▼</div>
              }[(header.column.getIsSorted() as string)] ?? <Icon.SortingArrows size={14} />)}
                    </SimpleTable.SortContainer>}
                </SimpleTable.Th>)}
            </tr>)}
        </SimpleTable.Head>
        <tbody>
          {paddingTop > 0 && <tr>
              <td style={{
            height: \`\${paddingTop}px\`
          }} />
            </tr>}
          {virtualRows.map(virtualRow => {
          const row = rows[virtualRow.index];
          return <SimpleTable.BodyTr key={virtualRow.key}>
                {row?.getVisibleCells().map(cell => <SimpleTable.Td {...{
              $isCenter: !!(cell.column.id === 'geom' || cell.column.id === 'edit'),
              key: cell.id,
              style: {
                maxWidth: cell.column.getSize(),
                minWidth: cell.column.getSize(),
                width: cell.column.getSize()
              }
            }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </SimpleTable.Td>)}
              </SimpleTable.BodyTr>;
        })}
          {paddingBottom > 0 && <tr>
              <td style={{
            height: \`\${paddingBottom}px\`
          }} />
            </tr>}
        </tbody>
      </SimpleTable.Table>
    </div>;
}`,...(T=(z=s.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};const Z=["_SimpleTable"];export{s as _SimpleTable,Z as __namedExportsOrder,K as default};
