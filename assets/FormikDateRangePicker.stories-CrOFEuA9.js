import{b8 as u,j as e,b3 as d,b4 as g}from"./index-0nDB5Zzz.js";import{a as k}from"./chunk-MZXVCX43-DWuJqIWT.js";import{l as a}from"./_baseClone-CBkhujLI.js";import{r as n}from"./index-CBqU2yxZ.js";import{D}from"./Description-BP5_sGvL.js";import{O as f}from"./Output-Sfj1QWTd.js";import{g as y}from"./generateStoryDecorator-jcZX8bPx.js";import i from"./DateRangePicker.stories-DdikIcns.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";import"./constants-D7cOJi0A.js";const B={title:"Formiks/FormikDateRangePicker",component:u,argTypes:a.omit(i.argTypes,["defaultValue","error","onChange"]),args:a.omit(i.args,["defaultValue","error","onChange"]),decorators:[y({box:{width:640},withBackgroundButton:!0})]};function t(r){const[o,c]=n.useState("∅"),l=n.useMemo(()=>r.name,[r.name]);return e.jsxs(e.Fragment,{children:[e.jsx(D,{children:e.jsx("p",{children:"Dates are always picked and displayed in UTC, ignoring you local time zone."})}),e.jsx(d,{initialValues:{},onSubmit:k("onSubmit"),children:e.jsxs(e.Fragment,{children:[e.jsx(g,{onChange:c}),e.jsx(u,{...r})]})},l),o!=="∅"&&e.jsx(f,{value:o})]})}t.__docgenInfo={description:"",methods:[],displayName:"_FormikDateRangePicker",props:{name:{required:!0,tsType:{name:"string"},description:""}},composes:["Omit"]};var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`function _FormikDateRangePicker(props: FormikDateRangePickerWithDateDateProps) {
  const [outputValue, setOutputValue] = useState<{
    myDateRangePicker?: DateRange;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Description>
        <p>Dates are always picked and displayed in UTC, ignoring you local time zone.</p>
      </Description>

      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikDateRangePicker {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const M=["_FormikDateRangePicker"];export{t as _FormikDateRangePicker,M as __namedExportsOrder,B as default};
