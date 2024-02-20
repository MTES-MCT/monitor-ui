import{b5 as n,a as c,aJ as d,j as l}from"./index-DOn5IH5D.js";import{r as m}from"./index-CBqU2yxZ.js";import{O}from"./Output-o7hVPfWS.js";import{g as S}from"./StoryDecorator-CIMcLWSk.js";import{L as M}from"./constants-CtapknUb.js";import{u as f}from"./useFieldControl-BRRRQdpT.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DCTCzM4b.js";const g={disabled:!1,error:"",isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,label:"A multiple select",name:"myMultiSelect",options:[{label:"First Option",value:"FIRST_OPTION"},{label:"Second Option",value:"SECOND_OPTION"},{label:"Third Option",value:"THIRD_OPTION"},{label:M,value:"LOREM_IPSUM"}],placeholder:"Pick some options",searchable:!0,value:void 0,virtualized:!1},D={title:"Fields/MultiSelect",component:n,argTypes:{value:{control:"inline-check",options:["FIRST_OPTION","SECOND_OPTION","THIRD_OPTION","LOREM_IPSUM"]}},args:g,decorators:[S({hasDarkMode:!0,withNewWindowButton:!0})]};function e(t){const[o,s]=m.useState("∅"),{controlledOnChange:i,controlledValue:p}=f(t.value,s);return c(d,{children:[l(n,{...t,onChange:i,value:p}),o!=="∅"&&l(O,{value:o})]})}var a,r,u;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`function _MultiSelect(props: MultiSelectProps) {
  const [outputValue, setOutputValue] = useState<string[] | undefined | '∅'>('∅');
  const {
    controlledOnChange,
    controlledValue
  } = useFieldControl(props.value, setOutputValue);
  return <>
      <MultiSelect {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(r=e.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};const L=["_MultiSelect"];export{e as _MultiSelect,L as __namedExportsOrder,D as default};
