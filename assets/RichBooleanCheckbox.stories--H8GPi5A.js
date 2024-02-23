import{b8 as s,a as p,aJ as h,j as a}from"./index-ucqKeW45.js";import{r as m}from"./index-CBqU2yxZ.js";import{O as d}from"./Output-DuOCsNck.js";import{g as O}from"./StoryDecorator-D_ImgbCs.js";import{u as C}from"./useFieldControl-BeQ3CD53.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-BXk91z3w.js";const b={disabled:!1,error:"",falseOptionLabel:"Without something",isErrorMessageHidden:!1,isInline:!1,isLabelHidden:!1,isLight:!1,label:"Pick one, both or neither options:",name:"myRichBooleanCheckbox",trueOptionLabel:"With something",value:void 0},N={title:"Fields/RichBooleanCheckbox",component:s,argTypes:{value:{control:"inline-check",options:["FIRST_OPTION","SECOND_OPTION","THIRD_OPTION","A_VERY_VERY_LONG_OPTION"]}},args:b,decorators:[O({hasDarkMode:!0})]};function e(o){const[t,u]=m.useState("∅"),{controlledOnChange:i,controlledValue:c}=C(o.value,u);return p(h,{children:[a(s,{...o,onChange:i,value:c}),t!=="∅"&&a(d,{value:t})]})}var n,r,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`function _RichBooleanCheckbox(props: RichBooleanCheckboxProps) {
  const [outputValue, setOutputValue] = useState<RichBoolean | undefined | '∅'>('∅');
  const {
    controlledOnChange,
    controlledValue
  } = useFieldControl(props.value, setOutputValue);
  return <>
      <RichBooleanCheckbox {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const P=["_RichBooleanCheckbox"];export{e as _RichBooleanCheckbox,P as __namedExportsOrder,N as default};
