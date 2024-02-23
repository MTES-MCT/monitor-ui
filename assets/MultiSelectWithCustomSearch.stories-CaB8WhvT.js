import{b5 as i,a as h,aJ as f,j as e}from"./index-ucqKeW45.js";import{r}from"./index-CBqU2yxZ.js";import{O as v}from"./Output-DuOCsNck.js";import{g as O}from"./StoryDecorator-D_ImgbCs.js";import{S as g,C}from"./species-BG9dpDGG.js";import{u as R}from"./useFieldControl-BeQ3CD53.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-BXk91z3w.js";const M={disabled:!1,error:"",isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,label:"A multiple select",name:"myMultiSelect",options:[],optionValueKey:"code",placeholder:"Pick some options",searchable:!0,value:void 0,virtualized:!0},D={title:"Fields/MultiSelect",component:i,argTypes:{value:{control:"inline-check",options:["FIRST_OPTION","SECOND_OPTION","THIRD_OPTION","LOREM_IPSUM"]}},args:M,decorators:[O({hasDarkMode:!0})]};function t(n){const a=r.useRef(g.map(o=>({label:`${o.code} - ${o.name}`,value:o}))),p=r.useRef(new C(a.current,[{name:"value.code",weight:.9},{name:"value.name",weight:.1}],{isStrict:!0})),[s,m]=r.useState("∅"),{controlledOnChange:d,controlledValue:S}=R(n.value,m);return h(f,{children:[e(i,{...n,customSearch:p.current,onChange:d,options:a.current,value:S}),e("div",{children:e("em",{children:"Loads a list of 10,000 users in order to check performances."})}),s!=="∅"&&e(v,{value:s})]})}var u,l,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`function MultiSelectWithCustomSearch(props: MultiSelectProps<Specy>) {
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
      <MultiSelect {...props} customSearch={customSearchRef.current} onChange={controlledOnChange} options={optionsRef.current} value={controlledValue} />
      <div>
        <em>Loads a list of 10,000 users in order to check performances.</em>
      </div>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const N=["MultiSelectWithCustomSearch"];export{t as MultiSelectWithCustomSearch,N as __namedExportsOrder,D as default};
