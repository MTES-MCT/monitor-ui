import{bc as p,j as t,b3 as k,b4 as d}from"./index-D3QtTYcx.js";import{a as S}from"./chunk-MZXVCX43-DWuJqIWT.js";import{l as i}from"./_baseClone-CBkhujLI.js";import{r as m}from"./index-CBqU2yxZ.js";import{O as g}from"./Output-CQAZDSvb.js";import{g as F}from"./generateStoryDecorator-DsoMrMh3.js";import a from"./MultiSelect.stories-CnU3VN8y.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-DeLdszCZ.js";import"./fr_FR-BAq5VERt.js";import"./constants-VGTGrGmu.js";import"./fake_options-pLn6bACZ.js";import"./fake_text-B6tiQCXj.js";import"./useFieldControl-hP0ART6Y.js";const P={title:"Formiks/FormikMultiSelect",component:p,argTypes:i.omit(a.argTypes,["error","onChange","value"]),args:i.omit(a.args,["error","onChange","value"]),decorators:[F({box:{width:640},withBackgroundButton:!0})]};function e(o){const[r,l]=m.useState("∅"),c=m.useMemo(()=>o.name,[o.name]);return t.jsxs(t.Fragment,{children:[t.jsx(k,{initialValues:{},onSubmit:S("onSubmit"),children:t.jsxs(t.Fragment,{children:[t.jsx(d,{onChange:l}),t.jsx(p,{...o})]})},c),r!=="∅"&&t.jsx(g,{value:r})]})}e.__docgenInfo={description:"",methods:[],displayName:"_FormikMultiSelect"};var n,u,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`function _FormikMultiSelect(props: FormikMultiSelectProps) {
  const [outputValue, setOutputValue] = useState<{
    myMultiSelect?: string[];
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikMultiSelect {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(s=(u=e.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};const R=["_FormikMultiSelect"];export{e as _FormikMultiSelect,R as __namedExportsOrder,P as default};
