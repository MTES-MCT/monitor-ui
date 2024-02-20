import{b9 as p,a as h,aJ as S,j as n}from"./index-DOn5IH5D.js";import{r as o}from"./index-CBqU2yxZ.js";import{O as f}from"./Output-o7hVPfWS.js";import{g as d}from"./StoryDecorator-CIMcLWSk.js";import{S as g,C}from"./species-D3JM9k4-.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DCTCzM4b.js";const R={error:"",isLabelHidden:!1,isLight:!1,label:"An autocompletable select",name:"autoComplete",placeholder:"Type what you want"},P={title:"Fields/Search",component:p,argTypes:{},args:R,decorators:[d({hasDarkMode:!0})]};function e(m){const[a,i]=o.useState("∅"),r=o.useRef(g.map(t=>({label:`${t.code} - ${t.name}`,value:t}))),l=o.useRef(new C(r.current,[{name:"value.code",weight:.9},{name:"value.name",weight:.1}],{isStrict:!1,shouldIgnoreLocation:!0}));return h(S,{children:[n(p,{...m,customSearch:l.current,onChange:i,options:r.current,optionValueKey:"code"}),a!=="∅"&&n(f,{value:a})]})}var s,u,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`function WithCustomSearch(props: SearchProps) {
  const [outputValue, setOutputValue] = useState<any | undefined | '∅'>('∅');
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
    isStrict: false,
    shouldIgnoreLocation: true
  }));
  return <>
      <Search {...props} customSearch={customSearchRef.current} onChange={setOutputValue} options={optionsRef.current} optionValueKey="code" />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const W=["WithCustomSearch"];export{e as WithCustomSearch,W as __namedExportsOrder,P as default};
