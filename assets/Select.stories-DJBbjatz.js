import{ba as n,a as c,aJ as d,j as o}from"./index-BnGWIf5W.js";import{r as O}from"./index-CBqU2yxZ.js";import{O as m}from"./Output-yz5BznoM.js";import{g as S}from"./StoryDecorator-BYfjGXyr.js";import{L as f}from"./constants-CtapknUb.js";import{u as b}from"./useFieldControl-BCWslox1.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const v={disabled:!1,error:"",isCleanable:!0,isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,label:"A select",name:"mySelect",options:[{label:"First Option",value:"FIRST_OPTION",isDisabled:!0},{label:"Second Option",value:"SECOND_OPTION",isDisabled:!1},{label:"Third Option",value:"THIRD_OPTION",isDisabled:!1},{label:f,value:"LOREM_IPSUM",isDisabled:!1}],placeholder:"Pick an option",searchable:!1,value:void 0,virtualized:!1},R={title:"Fields/Select",component:n,argTypes:{value:{control:"inline-radio",options:["FIRST_OPTION","SECOND_OPTION","THIRD_OPTION","LOREM_IPSUM"]}},args:v,decorators:[S({hasDarkMode:!0,withNewWindowButton:!0})]};function e(t){const[a,u]=O.useState("∅"),{controlledOnChange:i,controlledValue:p}=b(t.value,u);return c(d,{children:[o(n,{...t,onChange:i,value:p}),a!=="∅"&&o(m,{value:a})]})}var l,r,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`function _Select(props: SelectProps) {
  const [outputValue, setOutputValue] = useState<any>('∅');
  const {
    controlledOnChange,
    controlledValue
  } = useFieldControl(props.value, setOutputValue);
  return <>
      <Select {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const L=["_Select"];export{e as _Select,L as __namedExportsOrder,R as default};
