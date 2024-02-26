import{bb as p,j as o,b3 as d,b4 as k}from"./index-0nDB5Zzz.js";import{a as g}from"./chunk-MZXVCX43-DWuJqIWT.js";import{l as i}from"./_baseClone-CBkhujLI.js";import{r as a}from"./index-CBqU2yxZ.js";import{O as F}from"./Output-Sfj1QWTd.js";import{g as f}from"./generateStoryDecorator-jcZX8bPx.js";import m from"./MultiRadio.stories-DUV5R-rf.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";import"./constants-D7cOJi0A.js";import"./fake_options-pLn6bACZ.js";import"./fake_text-B6tiQCXj.js";import"./useFieldControl-oDxVSMc2.js";const N={title:"Formiks/FormikMultiRadio",component:p,argTypes:i.omit(m.argTypes,["error","onChange","value"]),args:i.omit(m.args,["error","onChange","value"]),decorators:[f({box:{width:640},withBackgroundButton:!0})]};function t(r){const[e,l]=a.useState("∅"),c=a.useMemo(()=>r.name,[r.name]);return o.jsxs(o.Fragment,{children:[o.jsx(d,{initialValues:{},onSubmit:g("onSubmit"),children:o.jsxs(o.Fragment,{children:[o.jsx(k,{onChange:l}),o.jsx(p,{...r})]})},c),e!=="∅"&&o.jsx(F,{value:e})]})}t.__docgenInfo={description:"",methods:[],displayName:"_FormikMultiRadio"};var n,u,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`function _FormikMultiRadio(props: FormikMultiRadioProps) {
  const [outputValue, setOutputValue] = useState<{
    mySelect?: string;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikMultiRadio {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(s=(u=t.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};const P=["_FormikMultiRadio"];export{t as _FormikMultiRadio,P as __namedExportsOrder,N as default};
