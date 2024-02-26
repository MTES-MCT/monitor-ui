import{b6 as p,j as t,b3 as l,b4 as k}from"./index-0nDB5Zzz.js";import{a as f}from"./chunk-MZXVCX43-DWuJqIWT.js";import{l as n}from"./_baseClone-CBkhujLI.js";import{r as a}from"./index-CBqU2yxZ.js";import{O as g}from"./Output-Sfj1QWTd.js";import{g as F}from"./generateStoryDecorator-jcZX8bPx.js";import s from"./CoordinatesInput.stories-Bjz2CpsO.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";import"./constants-D7cOJi0A.js";const M={title:"Formiks/FormikCoordinatesInput",component:p,argTypes:n.omit(s.argTypes,["defaultValue","error","onChange"]),args:n.omit(s.args,["defaultValue","error","onChange"]),decorators:[F({box:{width:640},withBackgroundButton:!0})]};function o(r){const[e,d]=a.useState("∅"),c=a.useMemo(()=>r.name,[r.name]);return t.jsxs(t.Fragment,{children:[t.jsx(l,{initialValues:{},onSubmit:f("onSubmit"),children:t.jsxs(t.Fragment,{children:[t.jsx(k,{onChange:d}),t.jsx(p,{...r})]})},c),e!=="∅"&&t.jsx(g,{value:e})]})}o.__docgenInfo={description:"",methods:[],displayName:"_FormikCoordinatesInput",props:{name:{required:!0,tsType:{name:"string"},description:""}}};var i,u,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`function _FormikCoordinatesInput(props: FormikCoordinatesInputProps) {
  const [outputValue, setOutputValue] = useState<{
    myCoordinatesInput?: number[];
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikCoordinatesInput {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const q=["_FormikCoordinatesInput"];export{o as _FormikCoordinatesInput,q as __namedExportsOrder,M as default};
