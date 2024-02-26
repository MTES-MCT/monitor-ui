import{aP as t,j as n,az as s}from"./index-0nDB5Zzz.js";import{a as p}from"./chunk-MZXVCX43-DWuJqIWT.js";import{M as m,A as l}from"./constants-D7cOJi0A.js";import{g as d}from"./generateStoryDecorator-jcZX8bPx.js";import"./index-CBqU2yxZ.js";import"./_baseClone-CBkhujLI.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";const c={children:"A single deletable tag",onDelete:p("onDelete")},D={...m,title:"Elements/SingleTag",component:t,argTypes:{accent:l.OPTIONAL_ACCENT},args:c,decorators:[d()]};function e(r){return n.jsxs(g,{children:[n.jsx(t,{...r}),n.jsx(t,{...r,children:"A very very very very very very long text"})]})}const g=s.div`
  width: 250px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 16px;
  border: 1px solid ${r=>r.theme.color.slateGray};
`;e.__docgenInfo={description:"",methods:[],displayName:"_SingleTag",props:{accent:{required:!1,tsType:{name:"union",raw:"Accent | undefined",elements:[{name:"Accent"},{name:"undefined"}]},description:""},children:{required:!0,tsType:{name:"string"},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promisable<void>",signature:{arguments:[],return:{name:"Promisable",elements:[{name:"void"}],raw:"Promisable<void>"}}},description:""}}};var o,i,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`function _SingleTag(props: SingleTagProps) {
  return <Box>
      <SingleTag {...props} />
      <SingleTag {...props}>A very very very very very very long text</SingleTag>
    </Box>;
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const w=["_SingleTag"];export{e as _SingleTag,w as __namedExportsOrder,D as default};
