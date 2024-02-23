import{be as m,a as r,aJ as n,j as e,bf as O,aE as d,bg as h}from"./index-BnGWIf5W.js";import{r as s}from"./index-CBqU2yxZ.js";import{O as k}from"./Output-yz5BznoM.js";import{g as f}from"./StoryDecorator-BYfjGXyr.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const S={isLabelHidden:!1,isLight:!1,label:"An autocompletable select",name:"autoComplete",options:[{label:"First Option",value:"FIRST_OPTION"},{label:"Second Option",value:"SECOND_OPTION"},{label:"Third Option",value:"THIRD_OPTION"},{label:"A Very Very Long Option",value:"A_VERY_VERY_LONG_OPTION"}],placeholder:'Type "first"'},x={title:"Formiks/FormikSearch",component:m,argTypes:{},args:S,decorators:[f({hasDarkMode:!0})]},t=o=>{const[a,l]=s.useState("∅"),c=s.useMemo(()=>o.name,[o.name]);return r(n,{children:[e(O,{initialValues:{},onSubmit:d.noop,children:r(n,{children:[e(h,{onChange:l}),e(m,{...o})]})},c),a!=="∅"&&e(k,{value:a})]})};var i,u,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`(props: FormikSearchProps) => {
  const [outputValue, setOutputValue] = useState<{
    mySelect?: string;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikSearch {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const P=["WithOptions"];export{t as WithOptions,P as __namedExportsOrder,x as default};
