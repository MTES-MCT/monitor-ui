import{bo as m,a,aJ as i,j as e,bf as O,aE as d,bg as k}from"./index-DOn5IH5D.js";import{r as s}from"./index-CBqU2yxZ.js";import{O as S}from"./Output-o7hVPfWS.js";import{g as f}from"./StoryDecorator-CIMcLWSk.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DCTCzM4b.js";const F={disabled:!1,isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,label:"A multiple select",name:"myMultiSelect",options:[{label:"First Option",value:"FIRST_OPTION"},{label:"Second Option",value:"SECOND_OPTION"},{label:"Third Option",value:"THIRD_OPTION"},{label:"A Very Very Long Option",value:"A_VERY_VERY_LONG_OPTION"}],placeholder:"Pick some options"},N={title:"Formiks/FormikMultiSelect",component:m,argTypes:{},args:F,decorators:[f({hasDarkMode:!0})]};function t(o){const[r,p]=s.useState("∅"),c=s.useMemo(()=>o.name,[o.name]);return a(i,{children:[e(O,{initialValues:{},onSubmit:d.noop,children:a(i,{children:[e(k,{onChange:p}),e(m,{...o})]})},c),r!=="∅"&&e(S,{value:r})]})}var n,l,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`function _FormikMultiSelect(props: FormikMultiSelectProps) {
  const [outputValue, setOutputValue] = useState<{
    myMultiSelect?: string[];
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikMultiSelect {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const P=["_FormikMultiSelect"];export{t as _FormikMultiSelect,P as __namedExportsOrder,N as default};
