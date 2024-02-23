import{bn as m,a as r,aJ as i,j as e,bf as d,aE as O,bg as k}from"./index-BnGWIf5W.js";import{r as n}from"./index-CBqU2yxZ.js";import{O as f}from"./Output-yz5BznoM.js";import{g as F}from"./StoryDecorator-BYfjGXyr.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const g={disabled:!1,isErrorMessageHidden:!1,isInline:!1,isLabelHidden:!1,isLight:!1,label:"Pick an option",name:"myMultiRadio",options:[{label:"First Option",value:"FIRST_OPTION"},{label:"Second Option",value:"SECOND_OPTION"},{label:"Third Option",value:"THIRD_OPTION"},{label:"A Very Very Long Option",value:"A_VERY_VERY_LONG_OPTION"}]},v={title:"Formiks/FormikMultiRadio",component:m,argTypes:{},args:g,decorators:[F({hasDarkMode:!0})]};function o(t){const[a,p]=n.useState("∅"),c=n.useMemo(()=>t.name,[t.name]);return r(i,{children:[e(d,{initialValues:{},onSubmit:O.noop,children:r(i,{children:[e(k,{onChange:p}),e(m,{...t})]})},c),a!=="∅"&&e(f,{value:a})]})}var s,u,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`function _FormikMultiRadio(props: FormikMultiRadioProps) {
  const [outputValue, setOutputValue] = useState<{
    mySelect?: string;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikMultiRadio {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const N=["_FormikMultiRadio"];export{o as _FormikMultiRadio,N as __namedExportsOrder,v as default};
