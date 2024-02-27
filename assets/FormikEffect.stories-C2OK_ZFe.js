import{b4 as a,j as e,b3 as u,bw as p}from"./index-D3QtTYcx.js";import{a as s}from"./chunk-MZXVCX43-DWuJqIWT.js";import{r as l}from"./index-CBqU2yxZ.js";import{O as c}from"./Output-CQAZDSvb.js";import{g as d}from"./generateStoryDecorator-DsoMrMh3.js";import"./_baseClone-CBkhujLI.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-DeLdszCZ.js";import"./fr_FR-BAq5VERt.js";const w={title:"Formiks/FormikEffect",component:a,argTypes:{},args:{onChange:s("onChange")},decorators:[d()]};function t(){const[o,m]=l.useState("∅");return e.jsxs(e.Fragment,{children:[e.jsx(u,{initialValues:{},onSubmit:s("onSubmit"),children:e.jsxs(e.Fragment,{children:[e.jsx(a,{onChange:m}),e.jsxs("p",{children:[e.jsx("code",{children:"<FormikEffect />"})," doesn’t render anything. It’s an inner ",e.jsx("code",{children:"<Formik />"})," ","listener component allowing us to get form values outside of Formik context."]}),e.jsxs("p",{children:["Here is an example with a simple ",e.jsx("code",{children:"<Formik.Field />"})," input:"]}),e.jsx(p,{name:"aFormikField",placeholder:"Fill me!",style:{marginTop:16},type:"text"})]})}),o!=="∅"&&e.jsx(c,{value:o})]})}t.__docgenInfo={description:"",methods:[],displayName:"_FormikEffect"};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`function _FormikEffect() {
  const [outputValue, setOutputValue] = useState<{
    aFormikField?: string;
  } | '∅'>('∅');
  return <>
      <Formik initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <p>
            <code>{\`<FormikEffect />\`}</code> doesn’t render anything. It’s an inner <code>{\`<Formik />\`}</code>{' '}
            listener component allowing us to get form values outside of Formik context.
          </p>
          <p>
            Here is an example with a simple <code>{\`<Formik.Field />\`}</code> input:
          </p>
          <Field name="aFormikField" placeholder="Fill me!" style={{
          marginTop: 16
        }} type="text" />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const v=["_FormikEffect"];export{t as _FormikEffect,v as __namedExportsOrder,w as default};
