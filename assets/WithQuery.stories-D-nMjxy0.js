import{b9 as p,a as g,aJ as f,j as o}from"./index-BnGWIf5W.js";import{k as O}from"./index-CMZNRRAH.js";import{r}from"./index-CBqU2yxZ.js";import{O as S}from"./Output-yz5BznoM.js";import{g as Q}from"./StoryDecorator-BYfjGXyr.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const v={error:"",isLabelHidden:!1,isLight:!1,label:"An autocompletable select",name:"autoComplete",placeholder:'Type "brew"'},$={title:"Fields/Search",component:p,argTypes:{},args:v,decorators:[Q({hasDarkMode:!0})]};function e(i){const[t,l]=r.useState("∅"),[m,c]=r.useState([]);return g(f,{children:[o(p,{...i,onChange:l,onQuery:async d=>{const a=await O.get(`https://api.openbrewerydb.org/breweries?by_name=${d}`).json(),y=a?a.map(({id:b,name:h})=>({label:h,value:b})):[];c(y)},options:m}),t!=="∅"&&o(S,{value:t})]})}var n,s,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`function WithQuery(props: SearchProps) {
  const [outputValue, setOutputValue] = useState<any | undefined | '∅'>('∅');
  const [options, setOptions] = useState<{
    label: any;
    value: any;
  }[]>([]);
  const onQuery = async value => {
    const results: Record<string, any>[] = await ky.get(\`https://api.openbrewerydb.org/breweries?by_name=\${value}\`).json();
    const dataFormatted = results ? results.map(({
      id,
      name
    }) => ({
      label: name,
      value: id
    })) : [];
    setOptions(dataFormatted);
  };
  return <>
      <Search {...props} onChange={setOutputValue} onQuery={onQuery} options={options} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const A=["WithQuery"];export{e as WithQuery,A as __namedExportsOrder,$ as default};
