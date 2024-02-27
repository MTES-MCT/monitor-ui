import{bh as p,j as t,b3 as x,b4 as k}from"./index-D3QtTYcx.js";import{a as d}from"./chunk-MZXVCX43-DWuJqIWT.js";import{l as a}from"./_baseClone-CBkhujLI.js";import{r as n}from"./index-CBqU2yxZ.js";import{O as g}from"./Output-CQAZDSvb.js";import{g as F}from"./generateStoryDecorator-DsoMrMh3.js";import m from"./Textarea.stories-BSyEgF78.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-DeLdszCZ.js";import"./fr_FR-BAq5VERt.js";import"./constants-VGTGrGmu.js";import"./useFieldControl-hP0ART6Y.js";const I={title:"Formiks/FormikTextarea",component:p,argTypes:a.omit(m.argTypes,["error","onChange","value"]),args:a.omit(m.args,["error","onChange","value"]),decorators:[F({box:{width:640},withBackgroundButton:!0})]};function r(e){const[o,c]=n.useState("∅"),l=n.useMemo(()=>e.name,[e.name]);return t.jsxs(t.Fragment,{children:[t.jsx(x,{initialValues:{},onSubmit:d("onSubmit"),children:t.jsxs(t.Fragment,{children:[t.jsx(k,{onChange:c}),t.jsx(p,{...e})]})},l),o!=="∅"&&t.jsx(g,{value:o})]})}r.__docgenInfo={description:"",methods:[],displayName:"_FormikTextarea"};var s,i,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`function _FormikTextarea(props: FormikTextareaProps) {
  const [outputValue, setOutputValue] = useState<{
    myTextarea?: string;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikTextarea {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const N=["_FormikTextarea"];export{r as _FormikTextarea,N as __namedExportsOrder,I as default};
