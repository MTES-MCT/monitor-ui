import{a$ as p,bi as c,a,aJ as n,j as o,bf as k,aE as F,bg as f}from"./index-BnGWIf5W.js";import{r as s}from"./index-CBqU2yxZ.js";import{O as C}from"./Output-yz5BznoM.js";import{g}from"./StoryDecorator-BYfjGXyr.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const E={coordinatesFormat:p.DECIMAL_DEGREES,isLight:!1,label:"Some coordinates",name:"myCoordinates"},j={title:"Formiks/FormikCoordinatesInput",component:c,argTypes:{coordinatesFormat:{control:"inline-radio",options:p}},args:E,decorators:[g({hasDarkMode:!0})]};function t(r){const[e,d]=s.useState("∅"),l=s.useMemo(()=>r.name,[r.name]);return a(n,{children:[o(k,{initialValues:{},onSubmit:F.noop,children:a(n,{children:[o(f,{onChange:d}),o(c,{...r})]})},l),e!=="∅"&&o(C,{value:e})]})}var i,u,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`function _FormikCoordinatesInput(props: FormikCoordinatesInputProps) {
  const [outputValue, setOutputValue] = useState<{
    myCoordinates?: number[];
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikCoordinatesInput {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const v=["_FormikCoordinatesInput"];export{t as _FormikCoordinatesInput,v as __namedExportsOrder,j as default};
