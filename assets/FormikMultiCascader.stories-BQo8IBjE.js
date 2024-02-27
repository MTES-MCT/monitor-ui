import{b9 as p,j as t,b3 as d,b4 as k}from"./index-D3QtTYcx.js";import{a as g}from"./chunk-MZXVCX43-DWuJqIWT.js";import{l as a}from"./_baseClone-CBkhujLI.js";import{r as i}from"./index-CBqU2yxZ.js";import{O as F}from"./Output-CQAZDSvb.js";import{g as f}from"./generateStoryDecorator-DsoMrMh3.js";import s from"./MultiCascader.stories-BOTmyRi5.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-DeLdszCZ.js";import"./fr_FR-BAq5VERt.js";import"./constants-VGTGrGmu.js";import"./fake_text-B6tiQCXj.js";import"./useFieldControl-hP0ART6Y.js";const N={title:"Formiks/FormikMultiCascader",component:p,argTypes:a.omit(s.argTypes,["error","onChange","value"]),args:a.omit(s.args,["error","onChange","value"]),decorators:[f({box:{width:640},withBackgroundButton:!0})]};function r(o){const[e,c]=i.useState("∅"),l=i.useMemo(()=>o.name,[o.name]);return t.jsxs(t.Fragment,{children:[t.jsx(d,{initialValues:{},onSubmit:g("onSubmit"),children:t.jsxs(t.Fragment,{children:[t.jsx(k,{onChange:c}),t.jsx(p,{...o})]})},l),e!=="∅"&&t.jsx(F,{value:e})]})}r.__docgenInfo={description:"",methods:[],displayName:"_FormikMultiCascader"};var n,m,u;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`function _FormikMultiCascader(props: FormikMultiCascaderProps<string>) {
  const [outputValue, setOutputValue] = useState<{
    myMultiCascader?: string[];
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikMultiCascader {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const P=["_FormikMultiCascader"];export{r as _FormikMultiCascader,P as __namedExportsOrder,N as default};
