import{bg as p,j as t,b3 as k,b4 as d}from"./index-0nDB5Zzz.js";import{a as g}from"./chunk-MZXVCX43-DWuJqIWT.js";import{l as m}from"./_baseClone-CBkhujLI.js";import{r as a}from"./index-CBqU2yxZ.js";import{O as S}from"./Output-Sfj1QWTd.js";import{g as F}from"./generateStoryDecorator-jcZX8bPx.js";import n from"./Select.stories-E0JfVp2R.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";import"./constants-D7cOJi0A.js";import"./fake_options-pLn6bACZ.js";import"./fake_text-B6tiQCXj.js";import"./useFieldControl-oDxVSMc2.js";const P={title:"Formiks/FormikSelect",component:p,argTypes:m.omit(n.argTypes,["error","onChange","value"]),args:m.omit(n.args,["error","onChange","value"]),decorators:[F({box:{width:640},withBackgroundButton:!0})]};function e(o){const[r,c]=a.useState("∅"),l=a.useMemo(()=>o.name,[o.name]);return t.jsxs(t.Fragment,{children:[t.jsx(k,{initialValues:{},onSubmit:g("onSubmit"),children:t.jsxs(t.Fragment,{children:[t.jsx(d,{onChange:c}),t.jsx(p,{...o})]})},l),r!=="∅"&&t.jsx(S,{value:r})]})}e.__docgenInfo={description:"",methods:[],displayName:"_FormikSelect"};var i,s,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`function _FormikSelect(props: FormikSelectProps) {
  const [outputValue, setOutputValue] = useState<{
    mySelect?: string;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikSelect {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const R=["_FormikSelect"];export{e as _FormikSelect,R as __namedExportsOrder,P as default};
