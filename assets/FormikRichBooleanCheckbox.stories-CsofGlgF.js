import{be as c,j as o,b3 as h,b4 as k}from"./index-0nDB5Zzz.js";import{a as x}from"./chunk-MZXVCX43-DWuJqIWT.js";import{l as a}from"./_baseClone-CBkhujLI.js";import{r as n}from"./index-CBqU2yxZ.js";import{O as b}from"./Output-Sfj1QWTd.js";import{g as d}from"./generateStoryDecorator-jcZX8bPx.js";import i from"./RichBooleanCheckbox.stories-CrqmqIoa.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./v4-D8aEg3BZ.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";import"./constants-D7cOJi0A.js";import"./useFieldControl-oDxVSMc2.js";const D={title:"Formiks/FormikRichBooleanCheckbox",component:c,argTypes:a.omit(i.argTypes,["error","onChange","value"]),args:a.omit(i.args,["error","onChange","value"]),decorators:[d({box:{width:640},withBackgroundButton:!0})]};function e(t){const[r,p]=n.useState("∅"),l=n.useMemo(()=>t.name,[t.name]);return o.jsxs(o.Fragment,{children:[o.jsx(h,{initialValues:{},onSubmit:x("onSubmit"),children:o.jsxs(o.Fragment,{children:[o.jsx(k,{onChange:p}),o.jsx(c,{...t})]})},l),r!=="∅"&&o.jsx(b,{value:r})]})}e.__docgenInfo={description:"",methods:[],displayName:"_FormikRichBooleanCheckbox"};var m,s,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`function _FormikRichBooleanCheckbox(props: FormikRichBooleanCheckboxProps) {
  const [outputValue, setOutputValue] = useState<{
    myRichBooleanCheckbox?: string[];
  } | '∅'>('∅');
  const key = useMemo(() => props.name, [props.name]);
  return <>
      <Formik key={key} initialValues={{}} onSubmit={action('onSubmit')}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikRichBooleanCheckbox {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const I=["_FormikRichBooleanCheckbox"];export{e as _FormikRichBooleanCheckbox,I as __namedExportsOrder,D as default};
