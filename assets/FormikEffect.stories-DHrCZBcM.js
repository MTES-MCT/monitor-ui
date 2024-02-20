import{bg as m,a as o,aJ as r,j as e,bf as p,aE as u,bl as c}from"./index-DOn5IH5D.js";import{r as d}from"./index-CBqU2yxZ.js";import{O as F}from"./Output-o7hVPfWS.js";import{g as f}from"./StoryDecorator-CIMcLWSk.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DCTCzM4b.js";const k={onChange:u.noop},v={title:"Formiks/FormikEffect",component:m,argTypes:{},args:k,decorators:[f()]};function t(){const[n,l]=d.useState("∅");return o(r,{children:[e(p,{initialValues:{},onSubmit:u.noop,children:o(r,{children:[e(m,{onChange:l}),o("p",{children:[e("code",{children:"<FormikEffect />"})," doesn’t show anything. It’s an inner ",e("code",{children:"<Formik />"})," listener component allowing us to get form values outside of Formik context."]}),o("p",{children:["Here is an example with a simple ",e("code",{children:"<Formik.Field />"})," input:"]}),e(c,{name:"aFormikField",placeholder:"Fill me!",type:"text"})]})}),n!=="∅"&&e(F,{value:n})]})}var i,a,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`function _FormikEffect() {
  const [outputValue, setOutputValue] = useState<{
    aFormikField?: string;
  } | '∅'>('∅');
  return <>
      <Formik initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <p>
            <code>{\`<FormikEffect />\`}</code> doesn’t show anything. It’s an inner <code>{\`<Formik />\`}</code> listener
            component allowing us to get form values outside of Formik context.
          </p>
          <p>
            Here is an example with a simple <code>{\`<Formik.Field />\`}</code> input:
          </p>
          <Field name="aFormikField" placeholder="Fill me!" type="text" />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const j=["_FormikEffect"];export{t as _FormikEffect,j as __namedExportsOrder,v as default};
