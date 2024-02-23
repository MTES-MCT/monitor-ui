import{a$ as n,b0 as u,a as l,aJ as m,j as e}from"./index-BnGWIf5W.js";import{r as c}from"./index-CBqU2yxZ.js";import{O as f}from"./Output-yz5BznoM.js";import{g as C}from"./StoryDecorator-BYfjGXyr.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const g={defaultValue:void 0,coordinatesFormat:n.DEGREES_MINUTES_SECONDS,disabled:!1,error:"",isLabelHidden:!1,isLight:!1,label:"Some coordinates"},j={title:"Fields/CoordinatesInput",component:u,argTypes:{coordinatesFormat:{control:"inline-radio",options:n},defaultValue:{control:"string"}},args:g,decorators:[C({hasDarkMode:!0})]};function t(i){const[o,p]=c.useState("∅");return l(m,{children:[e(u,{...i,onChange:d=>p(d)}),o!=="∅"&&e(f,{value:o})]})}var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`function _CoordinatesInput(props: CoordinatesInputProps) {
  const [outputValue, setOutputValue] = useState<number[] | undefined | '∅'>('∅');
  return <>
      <CoordinatesInput {...props} onChange={nextCoordinates => setOutputValue(nextCoordinates)} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const v=["_CoordinatesInput"];export{t as _CoordinatesInput,v as __namedExportsOrder,j as default};
