import{b5 as p,j as r,b3 as l,b4 as h}from"./index-0nDB5Zzz.js";import{a as d}from"./chunk-MZXVCX43-DWuJqIWT.js";import{l as i}from"./_baseClone-CBkhujLI.js";import{r as m}from"./index-CBqU2yxZ.js";import{O as g}from"./Output-Sfj1QWTd.js";import{g as F}from"./generateStoryDecorator-jcZX8bPx.js";import a from"./CheckPicker.stories-CkkW0XDD.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";import"./constants-D7cOJi0A.js";import"./fake_options-pLn6bACZ.js";import"./fake_text-B6tiQCXj.js";import"./useFieldControl-oDxVSMc2.js";const N={title:"Formiks/FormikCheckPicker",component:p,argTypes:i.omit(a.argTypes,["error","onChange","value"]),args:i.omit(a.args,["error","onChange","value"]),decorators:[F({box:{width:640},withBackgroundButton:!0})]};function e(o){const[t,c]=m.useState("∅"),k=m.useMemo(()=>o.name,[o.name]);return r.jsxs(r.Fragment,{children:[r.jsx(l,{initialValues:{},onSubmit:d("onSubmit"),children:r.jsxs(r.Fragment,{children:[r.jsx(h,{onChange:c}),r.jsx(p,{...o})]})},k),t!=="∅"&&r.jsx(g,{value:t})]})}e.__docgenInfo={description:"",methods:[],displayName:"_FormikCheckPicker"};var n,s,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`function _FormikCheckPicker(props: FormikCheckPickerProps) {
  const [outputValue, setOutputValue] = useState<{
    myCheckPicker?: string[];
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikCheckPicker {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const R=["_FormikCheckPicker"];export{e as _FormikCheckPicker,R as __namedExportsOrder,N as default};
