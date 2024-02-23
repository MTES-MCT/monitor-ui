import{be as l,a as s,aJ as u,j as e,bf as S,aE as O,bg as V}from"./index-BnGWIf5W.js";import{k as v}from"./index-CMZNRRAH.js";import{r as a}from"./index-CBqU2yxZ.js";import{O as w}from"./Output-yz5BznoM.js";import{g as Q}from"./StoryDecorator-BYfjGXyr.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const j={isLabelHidden:!1,isLight:!1,label:"An autocompletable select",name:"autoComplete",placeholder:'Type "brew"'},J={title:"Formiks/FormikSearch",component:l,argTypes:{},args:j,decorators:[Q({hasDarkMode:!0})]},t=o=>{const[n,c]=a.useState("∅"),[d,y]=a.useState([]),b=async g=>{const r=await v.get(`https://api.openbrewerydb.org/breweries?by_name=${g}`).json(),h=r?r.map(({id:f,name:F})=>({label:F,value:f})):[];y(h)},k=a.useMemo(()=>o.name,[o.name]);return s(u,{children:[e(S,{initialValues:{},onSubmit:O.noop,children:s(u,{children:[e(V,{onChange:c}),e(l,{...o,onQuery:b,options:d})]})},k),n!=="∅"&&e(w,{value:n})]})};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`(props: FormikSearchProps) => {
  const [outputValue, setOutputValue] = useState<{
    mySelect?: string;
  } | '∅'>('∅');
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
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikSearch {...props} onQuery={onQuery} options={options} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const P=["WithQuery"];export{t as WithQuery,P as __namedExportsOrder,J as default};
