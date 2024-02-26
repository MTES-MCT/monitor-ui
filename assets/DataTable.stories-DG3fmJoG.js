import{by as f,j as t}from"./index-0nDB5Zzz.js";import{g as u}from"./generateStoryDecorator-jcZX8bPx.js";import"./index-CBqU2yxZ.js";import"./_baseClone-CBkhujLI.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";const T=[{accessorFn:a=>a.id,enableSorting:!1,header:()=>"ID",id:"id",size:64},{accessorFn:a=>a.lastName,header:()=>"Last Name",id:"lastName"},{accessorFn:a=>a.firstName,header:()=>"First Name",id:"firstName",size:240}],e=[{firstName:"Alice",id:1,lastName:"Smith"},{firstName:"Bob",id:2,lastName:"Johnson"},{firstName:"Charlie",id:3,lastName:"Williams"},{firstName:"David",id:4,lastName:"Brown"},{firstName:"Emily",id:5,lastName:"Jones"},{firstName:"Fiona",id:6,lastName:"Garcia"},{firstName:"George",id:7,lastName:"Miller"},{firstName:"Hannah",id:8,lastName:"Davis"},{firstName:"Ivan",id:9,lastName:"Rodriguez"},{firstName:"Jenny",id:10,lastName:"Martinez"}],n={columns:T,data:e,initialSorting:[{desc:!1,id:"lastName"}]},F={title:"Tables/DataTable",component:f,argTypes:{},args:n,decorators:[u()]};function r(a){return t.jsx(t.Fragment,{children:t.jsx(f,{...a})})}r.__docgenInfo={description:"",methods:[],displayName:"_DataTable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnDef",elements:[{name:"T"}],raw:"ColumnDef<T>"}],raw:"Array<ColumnDef<T>>"},description:""},data:{required:!0,tsType:{name:"union",raw:"T[] | undefined",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"},{name:"undefined"}]},description:""},initialSorting:{required:!0,tsType:{name:"SortingState"},description:""}}};var s,i,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`[{
  firstName: 'Alice',
  id: 1,
  lastName: 'Smith'
}, {
  firstName: 'Bob',
  id: 2,
  lastName: 'Johnson'
}, {
  firstName: 'Charlie',
  id: 3,
  lastName: 'Williams'
}, {
  firstName: 'David',
  id: 4,
  lastName: 'Brown'
}, {
  firstName: 'Emily',
  id: 5,
  lastName: 'Jones'
}, {
  firstName: 'Fiona',
  id: 6,
  lastName: 'Garcia'
}, {
  firstName: 'George',
  id: 7,
  lastName: 'Miller'
}, {
  firstName: 'Hannah',
  id: 8,
  lastName: 'Davis'
}, {
  firstName: 'Ivan',
  id: 9,
  lastName: 'Rodriguez'
}, {
  firstName: 'Jenny',
  id: 10,
  lastName: 'Martinez'
}]`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var o,l,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  columns: COLUMNS,
  data: DATA,
  initialSorting: [{
    // eslint-disable-next-line @typescript-eslint/naming-convention
    desc: false,
    id: 'lastName'
  }]
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,N,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`function _DataTable(props: DataTableProps<(typeof DATA)[0]>) {
  return <>
      <DataTable {...props} />
    </>;
}`,...(p=(N=r.parameters)==null?void 0:N.docs)==null?void 0:p.source}}};const w=["DATA","args","_DataTable"];export{e as DATA,r as _DataTable,w as __namedExportsOrder,n as args,F as default};
