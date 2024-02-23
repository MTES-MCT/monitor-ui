import{br as m,a,aJ as n,j as e,bf as O,aE as d,bg as k}from"./index-BnGWIf5W.js";import{r as s}from"./index-CBqU2yxZ.js";import{O as S}from"./Output-yz5BznoM.js";import{g as f}from"./StoryDecorator-BYfjGXyr.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const F={disabled:!1,isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,label:"A select",name:"mySelect",options:[{label:"First Option",value:"FIRST_OPTION"},{label:"Second Option",value:"SECOND_OPTION"},{label:"Third Option",value:"THIRD_OPTION"},{label:"A Very Very Long Option",value:"A_VERY_VERY_LONG_OPTION"}],placeholder:"Pick an option"},P={title:"Formiks/FormikSelect",component:m,argTypes:{},args:F,decorators:[f({hasDarkMode:!0})]};function t(o){const[r,p]=s.useState("∅"),c=s.useMemo(()=>o.name,[o.name]);return a(n,{children:[e(O,{initialValues:{},onSubmit:d.noop,children:a(n,{children:[e(k,{onChange:p}),e(m,{...o})]})},c),r!=="∅"&&e(S,{value:r})]})}var i,l,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`function _FormikSelect(props: FormikSelectProps) {
  const [outputValue, setOutputValue] = useState<{
    mySelect?: string;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikSelect {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const x=["_FormikSelect"];export{t as _FormikSelect,x as __namedExportsOrder,P as default};
