import{ba as p,j as o,b3 as k,b4 as x}from"./index-D3QtTYcx.js";import{a as h}from"./chunk-MZXVCX43-DWuJqIWT.js";import{l as i}from"./_baseClone-CBkhujLI.js";import{r as a}from"./index-CBqU2yxZ.js";import{O as b}from"./Output-CQAZDSvb.js";import{g as d}from"./generateStoryDecorator-DsoMrMh3.js";import m from"./MultiCheckbox.stories-CA3peIcr.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-DeLdszCZ.js";import"./fr_FR-BAq5VERt.js";import"./constants-VGTGrGmu.js";import"./fake_options-pLn6bACZ.js";import"./fake_text-B6tiQCXj.js";import"./useFieldControl-hP0ART6Y.js";const P={title:"Formiks/FormikMultiCheckbox",component:p,argTypes:i.omit(m.argTypes,["error","onChange","value"]),args:i.omit(m.args,["error","onChange","value"]),decorators:[d({box:{width:640},withBackgroundButton:!0})]};function t(r){const[e,c]=a.useState("∅"),l=a.useMemo(()=>r.name,[r.name]);return o.jsxs(o.Fragment,{children:[o.jsx(k,{initialValues:{},onSubmit:h("onSubmit"),children:o.jsxs(o.Fragment,{children:[o.jsx(x,{onChange:c}),o.jsx(p,{...r})]})},l),e!=="∅"&&o.jsx(b,{value:e})]})}t.__docgenInfo={description:"",methods:[],displayName:"_FormikMultiCheckbox"};var n,u,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`function _FormikMultiCheckbox(props: FormikMultiCheckboxProps) {
  const [outputValue, setOutputValue] = useState<{
    myMultiCheckbox?: string[];
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikMultiCheckbox {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(s=(u=t.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};const R=["_FormikMultiCheckbox"];export{t as _FormikMultiCheckbox,R as __namedExportsOrder,P as default};
