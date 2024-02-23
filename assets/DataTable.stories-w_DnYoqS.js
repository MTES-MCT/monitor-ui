import{bu as f,j as t,aJ as u}from"./index-BnGWIf5W.js";import{g}from"./StoryDecorator-BYfjGXyr.js";import"./index-CBqU2yxZ.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const D=[{accessorFn:a=>a.id,enableSorting:!1,header:()=>"ID",id:"id",size:64},{accessorFn:a=>a.lastName,header:()=>"Last Name",id:"lastName"},{accessorFn:a=>a.firstName,header:()=>"First Name",id:"firstName",size:240}],e=[{id:1,firstName:"Alice",lastName:"Smith"},{id:2,firstName:"Bob",lastName:"Johnson"},{id:3,firstName:"Charlie",lastName:"Williams"},{id:4,firstName:"David",lastName:"Brown"},{id:5,firstName:"Emily",lastName:"Jones"},{id:6,firstName:"Fiona",lastName:"Garcia"},{id:7,firstName:"George",lastName:"Miller"},{id:8,firstName:"Hannah",lastName:"Davis"},{id:9,firstName:"Ivan",lastName:"Rodriguez"},{id:10,firstName:"Jenny",lastName:"Martinez"}],s={columns:D,data:e,initialSorting:[{desc:!1,id:"lastName"}]},M={title:"Tables/DataTable",component:f,argTypes:{},args:s,decorators:[g()]};function r(a){return t(u,{children:t(f,{...a})})}var i,n,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`[{
  id: 1,
  firstName: 'Alice',
  lastName: 'Smith'
}, {
  id: 2,
  firstName: 'Bob',
  lastName: 'Johnson'
}, {
  id: 3,
  firstName: 'Charlie',
  lastName: 'Williams'
}, {
  id: 4,
  firstName: 'David',
  lastName: 'Brown'
}, {
  id: 5,
  firstName: 'Emily',
  lastName: 'Jones'
}, {
  id: 6,
  firstName: 'Fiona',
  lastName: 'Garcia'
}, {
  id: 7,
  firstName: 'George',
  lastName: 'Miller'
}, {
  id: 8,
  firstName: 'Hannah',
  lastName: 'Davis'
}, {
  id: 9,
  firstName: 'Ivan',
  lastName: 'Rodriguez'
}, {
  id: 10,
  firstName: 'Jenny',
  lastName: 'Martinez'
}]`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var o,l,d;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  columns: COLUMNS,
  data: DATA,
  initialSorting: [{
    // eslint-disable-next-line @typescript-eslint/naming-convention
    desc: false,
    id: 'lastName'
  }]
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var N,c,p;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`function _DataTable(props: DataTableProps<(typeof DATA)[0]>) {
  return <>
      <DataTable {...props} />
    </>;
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const _=["DATA","args","_DataTable"];export{e as DATA,r as _DataTable,_ as __namedExportsOrder,s as args,M as default};
