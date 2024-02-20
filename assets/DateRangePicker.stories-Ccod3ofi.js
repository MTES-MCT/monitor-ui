import{b2 as o,a as p,aJ as l,j as a}from"./index-DOn5IH5D.js";import{r as c}from"./index-CBqU2yxZ.js";import{O as m}from"./Output-o7hVPfWS.js";import{g}from"./StoryDecorator-CIMcLWSk.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DCTCzM4b.js";const d={baseContainer:void 0,disabled:!1,error:"",isCompact:!1,isErrorMessageHidden:!1,isHistorical:!1,isLabelHidden:!1,isLight:!1,isStringDate:!1,isUndefinedWhenDisabled:!1,label:"A date range",withTime:!0,hasSingleCalendar:!1},C={title:"Fields/DateRangePicker",component:o,argTypes:{isStringDate:{control:{type:"boolean"}}},args:d,decorators:[g({hasDarkMode:!0})]};function e(n){const[i,u]=c.useState();return p(l,{children:[a(o,{...n,onChange:u}),a(m,{value:i})]})}var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`function _DateRangePicker(props: any) {
  const [outputValue, setOutputValue] = useState<DateRange | DateAsStringRange>();
  return <>
      <DateRangePicker {...props} onChange={setOutputValue} />

      <Output value={outputValue} />
    </>;
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const _=["_DateRangePicker"];export{e as _DateRangePicker,_ as __namedExportsOrder,C as default};
