import{b7 as s,a as i,aJ as c,j as o}from"./index-ucqKeW45.js";import{r as d}from"./index-CBqU2yxZ.js";import{O as b}from"./Output-DuOCsNck.js";import{g as f}from"./StoryDecorator-D_ImgbCs.js";import{u as g}from"./useFieldControl-BeQ3CD53.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-BXk91z3w.js";const O={disabled:!1,error:"",isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,name:"myNumberInput",label:"A number input",value:void 0},E={title:"Fields/NumberInput",component:s,argTypes:{value:{control:"number"}},args:O,decorators:[f({hasDarkMode:!0})]};function e(t){const[r,l]=d.useState("∅"),{controlledOnChange:p,controlledValue:m}=g(t.value,l,"");return i(c,{children:[o(s,{...t,onChange:p,value:m}),r!=="∅"&&o(b,{value:r})]})}var u,a,n;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`function _NumberInput(props: NumberInputProps) {
  const [outputValue, setOutputValue] = useState<number | undefined | '∅'>('∅');
  const {
    controlledOnChange,
    controlledValue
  } = useFieldControl(props.value, setOutputValue, ('' as any));
  return <>
      <NumberInput {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const D=["_NumberInput"];export{e as _NumberInput,D as __namedExportsOrder,E as default};
