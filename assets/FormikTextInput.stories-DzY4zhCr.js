import{bi as p,j as t,b3 as x,b4 as k}from"./index-0nDB5Zzz.js";import{a as d}from"./chunk-MZXVCX43-DWuJqIWT.js";import{l as n}from"./_baseClone-CBkhujLI.js";import{r as a}from"./index-CBqU2yxZ.js";import{O as g}from"./Output-Sfj1QWTd.js";import{g as F}from"./generateStoryDecorator-jcZX8bPx.js";import m from"./TextInput.stories-BhpU0u1l.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";import"./constants-D7cOJi0A.js";import"./useFieldControl-oDxVSMc2.js";const D={title:"Formiks/FormikTextInput",component:p,argTypes:n.omit(m.argTypes,["error","onChange","value"]),args:n.omit(m.args,["error","onChange","value"]),decorators:[F({box:{width:640},withBackgroundButton:!0})]};function o(r){const[e,c]=a.useState("∅"),l=a.useMemo(()=>r.name,[r.name]);return t.jsxs(t.Fragment,{children:[t.jsx(x,{initialValues:{},onSubmit:d("onSubmit"),children:t.jsxs(t.Fragment,{children:[t.jsx(k,{onChange:c}),t.jsx(p,{...r})]})},l),e!=="∅"&&t.jsx(g,{value:e})]})}o.__docgenInfo={description:"",methods:[],displayName:"_FormikTextInput"};var u,i,s;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`function _FormikTextInput(props: FormikTextInputProps) {
  const [outputValue, setOutputValue] = useState<{
    myTextInput?: string;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikTextInput {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const N=["_FormikTextInput"];export{o as _FormikTextInput,N as __namedExportsOrder,D as default};
