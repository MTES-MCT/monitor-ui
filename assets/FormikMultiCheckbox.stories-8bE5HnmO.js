import{bm as m,a,aJ as i,j as e,bf as k,aE as b,bg as O}from"./index-BnGWIf5W.js";import{r as n}from"./index-CBqU2yxZ.js";import{O as d}from"./Output-yz5BznoM.js";import{g as f}from"./StoryDecorator-BYfjGXyr.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const h={disabled:!1,isErrorMessageHidden:!1,isInline:!1,isLabelHidden:!1,isLight:!1,name:"myMultiCheckbox",options:[{label:"First Option",value:"FIRST_OPTION"},{label:"Second Option",value:"SECOND_OPTION"},{label:"Third Option",value:"THIRD_OPTION"},{label:"A Very Very Long Option",value:"A_VERY_VERY_LONG_OPTION"}],label:"Pick some options"},I={title:"Formiks/FormikMultiCheckbox",component:m,argTypes:{},args:h,decorators:[f({hasDarkMode:!0})]};function o(t){const[r,p]=n.useState("∅"),c=n.useMemo(()=>t.name,[t.name]);return a(i,{children:[e(k,{initialValues:{},onSubmit:b.noop,children:a(i,{children:[e(O,{onChange:p}),e(m,{...t})]})},c),r!=="∅"&&e(d,{value:r})]})}var s,u,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`function _FormikMultiCheckbox(props: FormikMultiCheckboxProps) {
  const [outputValue, setOutputValue] = useState<{
    myMultiCheckbox?: string[];
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikMultiCheckbox {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const v=["_FormikMultiCheckbox"];export{o as _FormikMultiCheckbox,v as __namedExportsOrder,I as default};
