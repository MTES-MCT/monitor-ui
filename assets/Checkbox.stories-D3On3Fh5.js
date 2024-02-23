import{aY as s,a as d,aJ as m,j as r}from"./index-BnGWIf5W.js";import{r as h}from"./index-CBqU2yxZ.js";import{O as i}from"./Output-yz5BznoM.js";import{g as C}from"./StoryDecorator-BYfjGXyr.js";import{u as k}from"./useFieldControl-BCWslox1.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const x={checked:!1,disabled:!1,error:"",label:"Check me",name:"myCheckbox",readOnly:!1},D={title:"Fields/Checkbox",component:s,argTypes:{},args:x,decorators:[C()]};function e(o){const[t,u]=h.useState("∅"),{controlledOnChange:l,controlledValue:p}=k(o.checked,u);return d(m,{children:[r(s,{...o,checked:p,onChange:l}),t!=="∅"&&r(i,{value:t})]})}var a,n,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`function _Checkbox(props: CheckboxProps) {
  const [outputValue, setOutputValue] = useState<boolean | '∅'>('∅');
  const {
    controlledOnChange,
    controlledValue: controlledChecked
  } = useFieldControl(props.checked, (setOutputValue as any));
  return <>
      <Checkbox {...props} checked={controlledChecked} onChange={controlledOnChange} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const J=["_Checkbox"];export{e as _Checkbox,J as __namedExportsOrder,D as default};
