import{bk as p,a as o,aJ as n,j as e,bf as k,aE as g,bg as d}from"./index-DOn5IH5D.js";import{r as s}from"./index-CBqU2yxZ.js";import{O as f}from"./Output-o7hVPfWS.js";import{g as D}from"./StoryDecorator-CIMcLWSk.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DCTCzM4b.js";const F={baseContainer:void 0,disabled:!1,isErrorMessageHidden:!1,isHistorical:!1,isLabelHidden:!1,isLight:!1,isStringDate:!1,isUndefinedWhenDisabled:!1,label:"A date range",name:"myDateRange",withTime:!0},M={title:"Formiks/FormikDateRangePicker",component:p,argTypes:{isStringDate:{control:{type:"boolean"}}},args:F,decorators:[D({hasDarkMode:!0})]};function a(t){const[r,l]=s.useState("∅"),c=s.useMemo(()=>t.name,[t.name]);return o(n,{children:[e(k,{initialValues:{},onSubmit:g.noop,children:o(n,{children:[e(d,{onChange:l}),e(p,{...t})]})},c),r!=="∅"&&e(f,{value:r})]})}var i,u,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`function _FormikDateRangePicker(props: any) {
  const [outputValue, setOutputValue] = useState<{
    myDateRange?: DateRange;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikDateRangePicker {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const j=["_FormikDateRangePicker"];export{a as _FormikDateRangePicker,j as __namedExportsOrder,M as default};
