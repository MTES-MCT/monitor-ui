import{ba as p,a as u,aJ as h,j as r}from"./index-DOn5IH5D.js";import{r as n}from"./index-CBqU2yxZ.js";import{O as g}from"./Output-o7hVPfWS.js";import{g as v}from"./StoryDecorator-CIMcLWSk.js";import{S as O,C}from"./species-D3JM9k4-.js";import{u as R}from"./useFieldControl-BRRRQdpT.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DCTCzM4b.js";const V={disabled:!1,error:"",isCleanable:!0,isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,label:"A select",name:"mySelect",options:[],optionValueKey:"code",placeholder:"Pick an option",value:void 0,virtualized:!0},M={title:"Fields/Select",component:p,argTypes:{value:{control:"inline-radio",options:["FIRST_OPTION","SECOND_OPTION","THIRD_OPTION","LOREM_IPSUM"]}},args:V,decorators:[v({hasDarkMode:!0})]};function e(a){const t=n.useRef(O.map(o=>({label:`${o.code} - ${o.name}`,value:o}))),m=n.useRef(new C(t.current,[{name:"value.code",weight:.9},{name:"value.name",weight:.1}],{isStrict:!0})),[s,d]=n.useState("∅"),{controlledOnChange:S,controlledValue:f}=R(a.value,d);return u(h,{children:[r(p,{...a,customSearch:m.current,onChange:S,options:t.current,value:f}),r("div",{children:u("em",{children:["Loads a pre-shuffled list of ",t.current.length," species in order to check performances."]})}),s!=="∅"&&r(g,{value:s})]})}var c,l,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`function SelectWithCustomSearch(props: SelectProps<Specy>) {
  const optionsRef = useRef((SPECIES as Specy[]).map(specy => ({
    label: \`\${specy.code} - \${specy.name}\`,
    value: specy
  })));
  const customSearchRef = useRef(new CustomSearch(optionsRef.current, [{
    name: 'value.code',
    weight: 0.9
  }, {
    name: 'value.name',
    weight: 0.1
  }], {
    isStrict: true
  }));
  const [outputValue, setOutputValue] = useState<Specy | undefined | '∅'>('∅');
  const {
    controlledOnChange,
    controlledValue
  } = useFieldControl(props.value, setOutputValue);
  return <>
      <Select {...props} customSearch={customSearchRef.current} onChange={controlledOnChange} options={optionsRef.current} value={controlledValue} />
      <div>
        <em>Loads a pre-shuffled list of {optionsRef.current.length} species in order to check performances.</em>
      </div>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const N=["SelectWithCustomSearch"];export{e as SelectWithCustomSearch,N as __namedExportsOrder,M as default};
