import{bd as p,j as t,b3 as k,b4 as b}from"./index-D3QtTYcx.js";import{a as d}from"./chunk-MZXVCX43-DWuJqIWT.js";import{l as m}from"./_baseClone-CBkhujLI.js";import{r as n}from"./index-CBqU2yxZ.js";import{O as F}from"./Output-CQAZDSvb.js";import{g as f}from"./generateStoryDecorator-DsoMrMh3.js";import u from"./NumberInput.stories-CYWYWZVj.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-DeLdszCZ.js";import"./fr_FR-BAq5VERt.js";import"./constants-VGTGrGmu.js";import"./useFieldControl-hP0ART6Y.js";const T={title:"Formiks/FormikNumberInput",component:p,argTypes:m.omit(u.argTypes,["error","onChange","value"]),args:m.omit(u.args,["error","onChange","value"]),decorators:[f({box:{width:640},withBackgroundButton:!0})]};function r(o){const[e,c]=n.useState("∅"),l=n.useMemo(()=>o.name,[o.name]);return t.jsxs(t.Fragment,{children:[t.jsx(k,{initialValues:{},onSubmit:d("onSubmit"),children:t.jsxs(t.Fragment,{children:[t.jsx(b,{onChange:c}),t.jsx(p,{...o})]})},l),e!=="∅"&&t.jsx(F,{value:e})]})}r.__docgenInfo={description:"",methods:[],displayName:"_FormikNumberInput"};var a,s,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`function _FormikNumberInput(props: FormikNumberInputProps) {
  const [outputValue, setOutputValue] = useState<{
    myNumberInput?: number;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikNumberInput {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const D=["_FormikNumberInput"];export{r as _FormikNumberInput,D as __namedExportsOrder,T as default};
