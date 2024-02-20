import{bp as p,a as u,aJ as n,j as e,bf as b,aE as k,bg as d}from"./index-DOn5IH5D.js";import{r as a}from"./index-CBqU2yxZ.js";import{O as f}from"./Output-o7hVPfWS.js";import{g as F}from"./StoryDecorator-CIMcLWSk.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DCTCzM4b.js";const g={disabled:!1,isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,name:"myNumberInput",label:"A number input"},j={title:"Formiks/FormikNumberInput",component:p,argTypes:{},args:g,decorators:[F({hasDarkMode:!0})]};function t(r){const[o,l]=a.useState("∅"),c=a.useMemo(()=>r.name,[r.name]);return u(n,{children:[e(b,{initialValues:{},onSubmit:k.noop,children:u(n,{children:[e(d,{onChange:l}),e(p,{...r})]})},c),o!=="∅"&&e(f,{value:o})]})}var s,m,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`function _FormikNumberInput(props: FormikNumberInputProps) {
  const [outputValue, setOutputValue] = useState<{
    myNumberInput?: number;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikNumberInput {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const v=["_FormikNumberInput"];export{t as _FormikNumberInput,v as __namedExportsOrder,j as default};
