import{bj as p,a as o,aJ as s,j as e,bf as k,aE as d,bg as f}from"./index-BnGWIf5W.js";import{r as i}from"./index-CBqU2yxZ.js";import{O as D}from"./Output-yz5BznoM.js";import{g}from"./StoryDecorator-BYfjGXyr.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const F={baseContainer:void 0,disabled:!1,isErrorMessageHidden:!1,isHistorical:!1,isLabelHidden:!1,isLight:!1,isStringDate:!1,isUndefinedWhenDisabled:!1,label:"A date",name:"myDate",withTime:!0},M={title:"Formiks/FormikDatePicker",component:p,argTypes:{isStringDate:{control:{type:"boolean"}}},args:F,decorators:[g({hasDarkMode:!0})]};function t(a){const[r,l]=i.useState("∅"),c=i.useMemo(()=>a.name,[a.name]);return o(s,{children:[e(k,{initialValues:{},onSubmit:d.noop,children:o(s,{children:[e(f,{onChange:l}),e(p,{...a})]})},c),r!=="∅"&&e(D,{value:r})]})}var n,u,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`function _FormikDatePicker(props: any) {
  const [outputValue, setOutputValue] = useState<{
    myDate?: Date;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikDatePicker {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const v=["_FormikDatePicker"];export{t as _FormikDatePicker,v as __namedExportsOrder,M as default};
