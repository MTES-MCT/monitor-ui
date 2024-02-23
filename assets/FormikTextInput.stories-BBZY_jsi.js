import{bs as p,a as n,aJ as a,j as t,bf as k,aE as d,bg as f}from"./index-ucqKeW45.js";import{r as s}from"./index-CBqU2yxZ.js";import{O as x}from"./Output-DuOCsNck.js";import{g as F}from"./StoryDecorator-D_ImgbCs.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-BXk91z3w.js";const g={disabled:!1,isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,name:"myTextInput",label:"A text input"},j={title:"Formiks/FormikTextInput",component:p,argTypes:{},args:g,decorators:[F({hasDarkMode:!0})]};function e(o){const[r,l]=s.useState("∅"),c=s.useMemo(()=>o.name,[o.name]);return n(a,{children:[t(k,{initialValues:{},onSubmit:d.noop,children:n(a,{children:[t(f,{onChange:l}),t(p,{...o})]})},c),r!=="∅"&&t(x,{value:r})]})}var u,i,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`function _FormikTextInput(props: FormikTextInputProps) {
  const [outputValue, setOutputValue] = useState<{
    myTextInput?: string;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikTextInput {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const v=["_FormikTextInput"];export{e as _FormikTextInput,v as __namedExportsOrder,j as default};
