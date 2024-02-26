import{bf as p,j as r,b3 as h,b4 as k}from"./index-0nDB5Zzz.js";import{a as d}from"./chunk-MZXVCX43-DWuJqIWT.js";import{l as a}from"./_baseClone-CBkhujLI.js";import{r as m}from"./index-CBqU2yxZ.js";import{O as S}from"./Output-Sfj1QWTd.js";import{g as f}from"./generateStoryDecorator-jcZX8bPx.js";import n from"./Search.stories-CfO3AYAl.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";import"./constants-D7cOJi0A.js";import"./fake_options-pLn6bACZ.js";import"./fake_text-B6tiQCXj.js";const N={title:"Formiks/FormikSearch",component:p,argTypes:a.omit(n.argTypes,["error","onChange","value"]),args:a.omit(n.args,["error","onChange","value"]),decorators:[f({box:{width:640},withBackgroundButton:!0})]};function o(t){const[e,c]=m.useState("∅"),l=m.useMemo(()=>t.name,[t.name]);return r.jsxs(r.Fragment,{children:[r.jsx(h,{initialValues:{},onSubmit:d("onSubmit"),children:r.jsxs(r.Fragment,{children:[r.jsx(k,{onChange:c}),r.jsx(p,{...t})]})},l),e!=="∅"&&r.jsx(S,{value:e})]})}o.__docgenInfo={description:"",methods:[],displayName:"_FormikSearch"};var i,s,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`function _FormikSearch(props: FormikSearchProps) {
  const [outputValue, setOutputValue] = useState<{
    mySearch?: string;
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikSearch {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(s=o.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const P=["_FormikSearch"];export{o as _FormikSearch,P as __namedExportsOrder,N as default};
