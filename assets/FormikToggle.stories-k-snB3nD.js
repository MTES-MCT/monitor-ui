import{bj as p,j as o,b3 as l,b4 as k}from"./index-0nDB5Zzz.js";import{a as d}from"./chunk-MZXVCX43-DWuJqIWT.js";import{l as n}from"./_baseClone-CBkhujLI.js";import{r as a}from"./index-CBqU2yxZ.js";import{O as F}from"./Output-Sfj1QWTd.js";import{g as f}from"./generateStoryDecorator-jcZX8bPx.js";import m from"./Toggle.stories-CYAs48OI.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";import"./constants-D7cOJi0A.js";import"./useFieldControl-oDxVSMc2.js";const I={title:"Formiks/FormikToggle",component:p,argTypes:n.omit(m.argTypes,["checked","error","onChange"]),args:n.omit(m.args,["checked","error","onChange"]),decorators:[f({box:{width:640},withBackgroundButton:!0})]};function t(e){const[r,g]=a.useState("∅"),c=a.useMemo(()=>e.name,[e.name]);return o.jsxs(o.Fragment,{children:[o.jsx(l,{initialValues:{},onSubmit:d("onSubmit"),children:o.jsxs(o.Fragment,{children:[o.jsx(k,{onChange:g}),o.jsx(p,{...e})]})},c),r!=="∅"&&o.jsx(F,{value:r})]})}t.__docgenInfo={description:"",methods:[],displayName:"_FormikToggle"};var s,i,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`function _FormikToggle(props: FormikToggleProps) {
  const [outputValue, setOutputValue] = useState<{
    myToggle?: boolean;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikToggle {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const N=["_FormikToggle"];export{t as _FormikToggle,N as __namedExportsOrder,I as default};
