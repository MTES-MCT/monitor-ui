import{b7 as p,j as e,b3 as k,b4 as d}from"./index-0nDB5Zzz.js";import{a as g}from"./chunk-MZXVCX43-DWuJqIWT.js";import{l as a}from"./_baseClone-CBkhujLI.js";import{r as i}from"./index-CBqU2yxZ.js";import{D}from"./Description-BP5_sGvL.js";import{O as f}from"./Output-Sfj1QWTd.js";import{g as F}from"./generateStoryDecorator-jcZX8bPx.js";import n from"./DatePicker.stories-BAIpoiyt.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";import"./constants-D7cOJi0A.js";const M={title:"Formiks/FormikDatePicker",component:p,argTypes:a.omit(n.argTypes,["defaultValue","error","onChange"]),args:a.omit(n.args,["defaultValue","error","onChange"]),decorators:[F({box:{width:640},withBackgroundButton:!0})]};function t(r){const[o,c]=i.useState("∅"),l=i.useMemo(()=>r.name,[r.name]);return e.jsxs(e.Fragment,{children:[e.jsx(D,{children:e.jsx("p",{children:"Dates are always picked and displayed in UTC, ignoring you local time zone."})}),e.jsx(k,{initialValues:{},onSubmit:g("onSubmit"),children:e.jsxs(e.Fragment,{children:[e.jsx(d,{onChange:c}),e.jsx(p,{...r})]})},l),o!=="∅"&&e.jsx(f,{value:o})]})}t.__docgenInfo={description:"",methods:[],displayName:"_FormikDatePicker"};var s,m,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`function _FormikDatePicker(props: FormikDatePickerWithDateDateProps) {
  const [outputValue, setOutputValue] = useState<{
    myDatePicker?: Date;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Description>
        <p>Dates are always picked and displayed in UTC, ignoring you local time zone.</p>
      </Description>

      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikDatePicker {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const U=["_FormikDatePicker"];export{t as _FormikDatePicker,U as __namedExportsOrder,M as default};
