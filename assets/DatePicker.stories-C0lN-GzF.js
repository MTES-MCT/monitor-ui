import{b1 as o,a as p,aJ as l,j as t}from"./index-ucqKeW45.js";import{r as c}from"./index-CBqU2yxZ.js";import{O as d}from"./Output-DuOCsNck.js";import{g as m}from"./StoryDecorator-D_ImgbCs.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-BXk91z3w.js";const f={baseContainer:void 0,disabled:!1,error:"",isCompact:!1,isEndDate:!1,isErrorMessageHidden:!1,isHistorical:!1,isLabelHidden:!1,isLight:!1,isStringDate:!1,isUndefinedWhenDisabled:!1,label:"A date",withTime:!0},E={title:"Fields/DatePicker",component:o,argTypes:{defaultValue:{control:{type:"date"}},isEndDate:{control:{type:"boolean"}},isStringDate:{control:{type:"boolean"}}},args:f,decorators:[m({hasDarkMode:!0})]};function e(i){const[n,u]=c.useState();return p(l,{children:[t(o,{...i,onChange:u}),t(d,{value:n})]})}var a,r,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`function _DatePicker(props: any) {
  const [outputValue, setOutputValue] = useState<Date | string>();
  return <>
      <DatePicker {...props} onChange={setOutputValue} />

      <Output value={outputValue} />
    </>;
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const _=["_DatePicker"];export{e as _DatePicker,_ as __namedExportsOrder,E as default};
