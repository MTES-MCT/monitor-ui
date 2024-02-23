import{j as t,aP as v,aD as M,O as x,aL as h,aC as D,E as V,bv as F,a as c,bw as o,bx as f,aq as A,by as U,bz as N}from"./index-ucqKeW45.js";import{u as I}from"./index-cnE3dYNg.js";import{r}from"./index-CBqU2yxZ.js";import{g as E}from"./StoryDecorator-D_ImgbCs.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-BXk91z3w.js";const k=Array(100).fill({closedBy:"TIM",controlUnits:[{administration:"DDTM",contact:void 0,id:10003,isArchived:!1,name:"DML 2A",resources:[]}],endDateTimeUtc:"19 juin 23, 09h28 (UTC)",envActions:[{actionNumberOfControls:1,actionStartDateTimeUtc:void 0,actionTargetType:"COMPANY",actionType:"CONTROL",geom:{type:"MultiPoint",coordinates:[[-2.63708273,48.17060427]]},id:"f3e90d3a-6ba4-4bb3-805e-d391508aa46d",infractions:[],observations:void 0,themes:[{protectedSpecies:["MARINE_MAMMALS"],subThemes:["Dérogations concernant les espèces protégées"],theme:"Police des espèces protégées et de leurs habitats (faune et flore)"}],vehicleType:void 0}],facade:"Guyane",geom:{type:"MultiPolygon"},hasMissionOrder:!1,id:38,isClosed:!0,isUnderJdp:!1,missionNature:["ENV","FISH"],missionSource:"MONITORENV",missionTypes:["LAND"],observationsCacem:"Black bit sell. House relate policy once. White member worker east even anyone detail professor.",observationsCnsp:void 0,openBy:"RAN",startDateTimeUtc:"23 juin 23, 05h57 (UTC)"}),O=Array(100).fill({closedBy:"TIM",controlUnits:[{administration:"DDTM",contact:void 0,id:10003,isArchived:!1,name:"DML 2A",resources:[]}],endDateTimeUtc:"23 juin 23, 09h28 (UTC)",envActions:[{actionNumberOfControls:1,actionStartDateTimeUtc:void 0,actionTargetType:"COMPANY",actionType:"CONTROL",geom:{type:"MultiPoint",coordinates:[[-2.63708273,48.17060427]]},id:"f3e90d3a-6ba4-4bb3-805e-d391508aa46d",infractions:[],observations:void 0,themes:[{protectedSpecies:["MARINE_MAMMALS"],subThemes:["Dérogations concernant les espèces protégées"],theme:"Police des espèces protégées et de leurs habitats (faune et flore)"}],vehicleType:void 0}],facade:"Guadeloupe",geom:{type:"MultiPolygon"},hasMissionOrder:!1,id:38,isClosed:!0,isUnderJdp:!1,missionNature:["ENV","FISH"],missionSource:"MONITORENV",missionTypes:["LAND"],observationsCacem:"",observationsCnsp:void 0,openBy:"RAN",startDateTimeUtc:"01 mai 23, 05h57 (UTC)"}),B=[...k,...O],K={title:"Tables/SimpleTable",decorators:[E()]};function l(){var S,p;const[w,C]=r.useState([{id:"dateDebut",desc:!1}]),y=r.useMemo(()=>[{accessorFn:e=>e.startDateTimeUtc,id:"dateDebut",cell:e=>e.getValue(),header:()=>"Début",enableResizing:!0,size:180},{accessorFn:e=>e.endDateTimeUtc,id:"dateFin",cell:e=>e.getValue(),header:()=>"Fin",enableResizing:!0,size:180},{accessorFn:e=>e.missionSource,id:"missionSource",cell:e=>e.getValue(),header:()=>"Origine",enableResizing:!0,size:90},{accessorFn:e=>{var n;return(n=e==null?void 0:e.controlUnits)==null?void 0:n.map(i=>`${i.name} (${i.administration})`).join(" / ")},id:"Unit and Administration",cell:e=>e.getValue(),header:()=>"Unité (Administration)",enableSorting:!1,enableResizing:!0,maxSize:280,minSize:100,size:200},{accessorFn:e=>e.missionTypes,id:"type",cell:e=>e.getValue(),header:()=>"Type",enableSorting:!1,enableResizing:!0,size:100},{accessorFn:e=>e.facade,id:"seaFront",cell:e=>e.getValue(),header:()=>"Facade",enableResizing:!0,size:100},{accessorFn:e=>e.observationsCacem,id:"observationsCacem",cell:e=>e.getValue(),header:()=>"Thématiques",enableSorting:!1,enableResizing:!0,maxSize:280,minSize:100,size:200},{accessorFn:e=>e.controlUnits.length,id:"controls",cell:e=>e.getValue(),header:()=>"Nbre contrôles",enableSorting:!1,enableResizing:!0,size:100},{accessorFn:e=>e.status,id:"status",cell:e=>e.getValue(),header:()=>"Statut",enableSorting:!1,enableResizing:!0,size:100},{accessorFn:e=>e.geom,id:"geom",cell:e=>t(v,{accent:M.SECONDARY,Icon:x,onClick:()=>console.log(e.getValue()),size:h.SMALL}),header:()=>"",enableSorting:!1,enableResizing:!0,size:60},{accessorFn:e=>e.id,id:"edit",cell:e=>t(D,{Icon:V,onClick:()=>console.log(e.getValue()),size:h.SMALL,children:"Editer"}),header:()=>"",enableSorting:!1,enableResizing:!0,size:160}],[]),d=F({columns:y,data:B,state:{sorting:w},enableSortingRemoval:!1,onSortingChange:C,getCoreRowModel:U(),getSortedRowModel:N()}),u=r.useRef(null),{rows:s}=d.getRowModel(),m=I({count:s.length,getScrollElement:()=>u.current,estimateSize:()=>10,overscan:10,getItemKey:r.useCallback(e=>{var n;return`${(n=s[e])==null?void 0:n.id}`},[s])}),a=m.getVirtualItems(),[g,b]=a.length>0?[Math.max(0,((S=a[0])==null?void 0:S.start)??0),Math.max(0,m.getTotalSize()-(((p=a[a.length-1])==null?void 0:p.end)??0))]:[0,0];return t("div",{ref:u,children:c(o.Table,{children:[t(o.Head,{children:d.getHeaderGroups().map(e=>t("tr",{children:e.headers.map(n=>t(o.Th,{style:{maxWidth:n.column.getSize(),minWidth:n.column.getSize(),width:n.column.getSize()},children:n.isPlaceholder?void 0:c(o.SortContainer,{className:n.column.getCanSort()?"cursor-pointer":"",onClick:n.column.getToggleSortingHandler(),children:[f(n.column.columnDef.header,n.getContext()),n.column.getCanSort()&&({asc:t("div",{children:"▲"}),desc:t("div",{children:"▼"})}[n.column.getIsSorted()]??t(A,{size:14}))]})},n.id))},e.id))}),c("tbody",{children:[g>0&&t("tr",{children:t("td",{style:{height:`${g}px`}})}),a.map(e=>{const n=s[e.index];return t(o.BodyTr,{children:n==null?void 0:n.getVisibleCells().map(i=>t(o.Td,{key:i.id,style:{maxWidth:i.column.getSize(),minWidth:i.column.getSize(),width:i.column.getSize()},$isCenter:i.column.id==="geom"||i.column.id==="edit",children:f(i.column.columnDef.cell,i.getContext())}))},e.key)}),b>0&&t("tr",{children:t("td",{style:{height:`${b}px`}})})]})]})})}var z,T,R;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`function _SimpleTable() {
  const [sorting, setSorting] = useState<SortingState>([{
    id: 'dateDebut',
    desc: false
  }]);
  const columns = useMemo(() => [{
    accessorFn: row => row.startDateTimeUtc,
    id: 'dateDebut',
    cell: info => info.getValue(),
    header: () => 'Début',
    enableResizing: true,
    size: 180
  }, {
    accessorFn: row => row.endDateTimeUtc,
    id: 'dateFin',
    cell: info => info.getValue(),
    header: () => 'Fin',
    enableResizing: true,
    size: 180
  }, {
    accessorFn: row => row.missionSource,
    id: 'missionSource',
    cell: info => info.getValue(),
    header: () => 'Origine',
    enableResizing: true,
    size: 90
  }, {
    accessorFn: row => row?.controlUnits?.map(controlUnit => \`\${controlUnit.name} (\${controlUnit.administration})\`).join(' / '),
    id: 'Unit and Administration',
    cell: info => info.getValue(),
    header: () => 'Unité (Administration)',
    enableSorting: false,
    enableResizing: true,
    maxSize: 280,
    minSize: 100,
    size: 200
  }, {
    accessorFn: row => row.missionTypes,
    id: 'type',
    cell: info => info.getValue(),
    header: () => 'Type',
    enableSorting: false,
    enableResizing: true,
    size: 100
  }, {
    accessorFn: row => row.facade,
    id: 'seaFront',
    cell: info => info.getValue(),
    header: () => 'Facade',
    enableResizing: true,
    size: 100
  }, {
    accessorFn: row => row.observationsCacem,
    id: 'observationsCacem',
    cell: info => info.getValue(),
    header: () => 'Thématiques',
    enableSorting: false,
    enableResizing: true,
    maxSize: 280,
    minSize: 100,
    size: 200
  }, {
    accessorFn: row => row.controlUnits.length,
    id: 'controls',
    cell: info => info.getValue(),
    header: () => 'Nbre contrôles',
    enableSorting: false,
    enableResizing: true,
    size: 100
  }, {
    accessorFn: row => row.status,
    id: 'status',
    cell: info => info.getValue(),
    header: () => 'Statut',
    enableSorting: false,
    enableResizing: true,
    size: 100
  }, {
    accessorFn: row => row.geom,
    id: 'geom',
    cell: info => <IconButton accent={Accent.SECONDARY} Icon={Icon.FocusZones}
    // eslint-disable-next-line no-console
    onClick={() => console.log(info.getValue())} size={Size.SMALL} />,
    header: () => '',
    enableSorting: false,
    enableResizing: true,
    size: 60
  }, {
    accessorFn: row => row.id,
    id: 'edit',
    cell: info =>
    // eslint-disable-next-line no-console
    <Button Icon={Icon.Edit} onClick={() => console.log(info.getValue())} size={Size.SMALL}>
            Editer
          </Button>,
    header: () => '',
    enableSorting: false,
    enableResizing: true,
    size: 160
  }], []);
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
  });

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
              key: cell.id,
              style: {
                maxWidth: cell.column.getSize(),
                minWidth: cell.column.getSize(),
                width: cell.column.getSize()
              },
              $isCenter: !!(cell.column.id === 'geom' || cell.column.id === 'edit')
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
}`,...(R=(T=l.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const Z=["_SimpleTable"];export{l as _SimpleTable,Z as __namedExportsOrder,K as default};
