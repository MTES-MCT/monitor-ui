import{b3 as n,a as c,aJ as O,j as a}from"./index-BnGWIf5W.js";import{r as d}from"./index-CBqU2yxZ.js";import{O as m}from"./Output-yz5BznoM.js";import{g as b}from"./StoryDecorator-BYfjGXyr.js";import{u as _}from"./useFieldControl-BCWslox1.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const h={disabled:!1,error:"",isErrorMessageHidden:!1,isInline:!1,isLabelHidden:!1,isLight:!1,label:"Pick some options",name:"myMultiCheckbox",options:[{label:"First Option",value:"FIRST_OPTION",isDisabled:!1},{label:"Second Option",value:"SECOND_OPTION",isDisabled:!0},{label:"Third Option",value:"THIRD_OPTION",isDisabled:!1},{label:"A Very Very Long Option",value:"A_VERY_VERY_LONG_OPTION",isDisabled:!1}],value:void 0},P={title:"Fields/MultiCheckbox",component:n,argTypes:{value:{control:"inline-check",options:["FIRST_OPTION","SECOND_OPTION","THIRD_OPTION","A_VERY_VERY_LONG_OPTION"]}},args:h,decorators:[b({hasDarkMode:!0})]};function e(o){const[t,u]=d.useState("∅"),{controlledOnChange:i,controlledValue:p}=_(o.value,u);return c(O,{children:[a(n,{...o,onChange:i,value:p}),t!=="∅"&&a(m,{value:t})]})}var l,r,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`function _MultiCheckbox(props: MultiCheckboxProps) {
  const [outputValue, setOutputValue] = useState<string[] | undefined | '∅'>('∅');
  const {
    controlledOnChange,
    controlledValue
  } = useFieldControl(props.value, setOutputValue);
  return <>
      <MultiCheckbox {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const E=["_MultiCheckbox"];export{e as _MultiCheckbox,E as __namedExportsOrder,P as default};
