import{aX as l,a as S,aJ as f,j as e}from"./index-BnGWIf5W.js";import{r}from"./index-CBqU2yxZ.js";import{O}from"./Output-yz5BznoM.js";import{g as C}from"./StoryDecorator-BYfjGXyr.js";import{L as v}from"./constants-CtapknUb.js";import{S as k,C as P}from"./species-BtztT_Xj.js";import{u as R}from"./useFieldControl-BCWslox1.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const g={disabled:!1,error:"",isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,label:"A check picker",name:"myCheckPicker",options:[{label:"First Option",value:"FIRST_OPTION"},{label:"Second Option",value:"SECOND_OPTION"},{label:"Third Option",value:"THIRD_OPTION"},{label:v,value:"LOREM_IPSUM"}],placeholder:"Pick some options",searchable:!0,value:[],virtualized:!1},H={title:"Fields/CheckPicker",component:l,argTypes:{value:{control:"inline-check",options:["FIRST_OPTION","SECOND_OPTION","THIRD_OPTION","LOREM_IPSUM"]}},args:g,decorators:[C({hasDarkMode:!0})]};function t(a){const n=r.useRef(k.map(o=>({label:`${o.code} - ${o.name}`,value:o}))),p=r.useRef(new P(n.current,[{name:"value.code",weight:.9},{name:"value.name",weight:.1}],{isStrict:!0})),[s,m]=r.useState("∅"),{controlledOnChange:d,controlledValue:h}=R(a.value,m);return S(f,{children:[e(l,{...a,customSearch:p.current,onChange:d,options:n.current,optionValueKey:"code",value:h,virtualized:!0}),e("div",{children:e("em",{children:"Loads a list of 10,000 users in order to check performances."})}),s!=="∅"&&e(O,{value:s})]})}var c,u,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`function CheckPickerWithCustomSearch(props: CheckPickerProps<Specy>) {
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
  const [outputValue, setOutputValue] = useState<Specy[] | undefined | '∅'>('∅');
  const {
    controlledOnChange,
    controlledValue
  } = useFieldControl(props.value, setOutputValue);
  return <>
      <CheckPicker {...props} customSearch={customSearchRef.current} onChange={controlledOnChange} options={optionsRef.current} optionValueKey="code" value={controlledValue} virtualized />
      <div>
        <em>Loads a list of 10,000 users in order to check performances.</em>
      </div>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const $=["CheckPickerWithCustomSearch"];export{t as CheckPickerWithCustomSearch,$ as __namedExportsOrder,H as default};
