import{bh as p,a,aJ as n,j as e,bf as l,aE as b,bg as h}from"./index-BnGWIf5W.js";import{r as s}from"./index-CBqU2yxZ.js";import{O as f}from"./Output-yz5BznoM.js";import{g as d}from"./StoryDecorator-BYfjGXyr.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const x={disabled:!1,isErrorMessageHidden:!1,label:"Check me",name:"myCheckbox"},v={title:"Formiks/FormikCheckbox",component:p,argTypes:{},args:x,decorators:[d()]};function o(t){const[r,c]=s.useState("∅"),k=s.useMemo(()=>t.name,[t.name]);return a(n,{children:[e(l,{initialValues:{},onSubmit:b.noop,children:a(n,{children:[e(h,{onChange:c}),e(p,{...t})]})},k),r!=="∅"&&e(f,{value:r})]})}var m,u,i;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`function _FormikCheckbox(props: FormikCheckboxProps) {
  const [outputValue, setOutputValue] = useState<{
    myCheckbox?: boolean;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikCheckbox {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(i=(u=o.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const D=["_FormikCheckbox"];export{o as _FormikCheckbox,D as __namedExportsOrder,v as default};
