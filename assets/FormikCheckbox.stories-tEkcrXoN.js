import{b2 as p,j as o,b3 as l,b4 as h}from"./index-D3QtTYcx.js";import{a as x}from"./chunk-MZXVCX43-DWuJqIWT.js";import{l as n}from"./_baseClone-CBkhujLI.js";import{r as a}from"./index-CBqU2yxZ.js";import{O as d}from"./Output-CQAZDSvb.js";import{g as b}from"./generateStoryDecorator-DsoMrMh3.js";import m from"./Checkbox.stories-DyIJOZ7G.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-DeLdszCZ.js";import"./fr_FR-BAq5VERt.js";import"./constants-VGTGrGmu.js";import"./useFieldControl-hP0ART6Y.js";const I={title:"Formiks/FormikCheckbox",component:p,argTypes:n.omit(m.argTypes,["checked","error","onChange"]),args:n.omit(m.args,["checked","error","onChange"]),decorators:[b({box:{width:640},withBackgroundButton:!0})]};function t(e){const[r,c]=a.useState("∅"),k=a.useMemo(()=>e.name,[e.name]);return o.jsxs(o.Fragment,{children:[o.jsx(l,{initialValues:{},onSubmit:x("onSubmit"),children:o.jsxs(o.Fragment,{children:[o.jsx(h,{onChange:c}),o.jsx(p,{...e})]})},k),r!=="∅"&&o.jsx(d,{value:r})]})}t.__docgenInfo={description:"",methods:[],displayName:"_FormikCheckbox"};var s,i,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`function _FormikCheckbox(props: FormikCheckboxProps) {
  const [outputValue, setOutputValue] = useState<{
    myCheckbox?: boolean;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikCheckbox {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const N=["_FormikCheckbox"];export{t as _FormikCheckbox,N as __namedExportsOrder,I as default};
