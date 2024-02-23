import{bq as c,a as r,aJ as n,j as o,bf as h,aE as k,bg as b}from"./index-ucqKeW45.js";import{r as i}from"./index-CBqU2yxZ.js";import{O as f}from"./Output-DuOCsNck.js";import{g as d}from"./StoryDecorator-D_ImgbCs.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-BXk91z3w.js";const g={disabled:!1,falseOptionLabel:"Without something",isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,label:"Pick one, both or neither options:",name:"myRichBooleanCheckbox",trueOptionLabel:"With something"},L={title:"Formiks/FormikRichBooleanCheckbox",component:c,argTypes:{},args:g,decorators:[d({hasDarkMode:!0})]};function e(t){const[a,p]=i.useState("∅"),l=i.useMemo(()=>t.name,[t.name]);return r(n,{children:[o(h,{initialValues:{},onSubmit:k.noop,children:r(n,{children:[o(b,{onChange:p}),o(c,{...t})]})},l),a!=="∅"&&o(f,{value:a})]})}var s,m,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`function _FormikRichBooleanCheckbox(props: FormikRichBooleanCheckboxProps) {
  const [outputValue, setOutputValue] = useState<{
    myRichBooleanCheckbox?: string[];
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikRichBooleanCheckbox {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const M=["_FormikRichBooleanCheckbox"];export{e as _FormikRichBooleanCheckbox,M as __namedExportsOrder,L as default};
