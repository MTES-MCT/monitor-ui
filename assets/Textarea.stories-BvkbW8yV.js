import{bc as u,a as c,aJ as d,j as r}from"./index-ucqKeW45.js";import{r as m}from"./index-CBqU2yxZ.js";import{O as x}from"./Output-DuOCsNck.js";import{g}from"./StoryDecorator-D_ImgbCs.js";import{u as f}from"./useFieldControl-BeQ3CD53.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-BXk91z3w.js";const h={disabled:!1,error:"",isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,label:"A textarea",name:"myTextarea",placeholder:"A textarea placeholder",value:void 0},A={title:"Fields/Textarea",component:u,argTypes:{value:{control:"text"}},args:h,decorators:[g({hasDarkMode:!0})]};function e(t){const[a,l]=m.useState("∅"),{controlledOnChange:p,controlledValue:i}=f(t.value,l,"");return c(d,{children:[r(u,{...t,onChange:p,value:i}),a!=="∅"&&r(x,{value:a})]})}var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`function _Textarea(props: TextareaProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅');
  const {
    controlledOnChange,
    controlledValue
  } = useFieldControl(props.value, setOutputValue, '');
  return <>
      <Textarea {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const D=["_Textarea"];export{e as _Textarea,D as __namedExportsOrder,A as default};
