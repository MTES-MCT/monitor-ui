import{bk as l,j as a}from"./index-0nDB5Zzz.js";import{r as p}from"./index-CBqU2yxZ.js";import{O}from"./Output-Sfj1QWTd.js";import{A as e}from"./constants-D7cOJi0A.js";import{g as c}from"./generateStoryDecorator-jcZX8bPx.js";import{F as f,a as b,b as T}from"./fake_options-pLn6bACZ.js";import"./_baseClone-CBkhujLI.js";import{u as g}from"./useFieldControl-oDxVSMc2.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";import"./fake_text-B6tiQCXj.js";const k={title:"Fields/MultiCheckbox",component:l,argTypes:{className:e.NO_CONTROL,disabled:e.OPTIONAL_BOOLEAN,error:{control:"text"},isErrorMessageHidden:e.OPTIONAL_BOOLEAN,isInline:e.OPTIONAL_BOOLEAN,isLabelHidden:e.OPTIONAL_BOOLEAN,isLight:e.OPTIONAL_BOOLEAN,isTransparent:e.OPTIONAL_BOOLEAN,isUndefinedWhenDisabled:e.OPTIONAL_BOOLEAN,readOnly:e.OPTIONAL_BOOLEAN,style:e.NO_CONTROL,value:{...e.OPTIONAL_OPTION_VALUES,options:[...f,void 0],mapping:{...b,undefined:void 0}}},args:{disabled:!1,error:"",isErrorMessageHidden:!1,isInline:!1,isLabelHidden:!1,isLight:!1,isTransparent:!1,isUndefinedWhenDisabled:!1,label:"A multiple checkbox. Pick some options:",name:"myMultiCheckbox",options:T,readOnly:!1,value:void 0},decorators:[c({box:{width:640},withBackgroundButton:!0})]};function n(i){const[r,u]=p.useState("∅"),{controlledOnChange:d,controlledValue:m}=g(i.value,u);return a.jsxs(a.Fragment,{children:[a.jsx(l,{...i,onChange:d,value:m}),r!=="∅"&&a.jsx(O,{value:r})]})}n.__docgenInfo={description:"",methods:[],displayName:"_MultiCheckbox",props:{className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},disabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},error:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},isErrorMessageHidden:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isInline:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isLabelHidden:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isLight:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isTransparent:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isUndefinedWhenDisabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: OptionValue[] | undefined) => Promisable<void>",signature:{arguments:[{type:{name:"union",raw:"OptionValue[] | undefined",elements:[{name:"Array",elements:[{name:"OptionValue"}],raw:"OptionValue[]"},{name:"undefined"}]},name:"nextValue"}],return:{name:"Promisable",elements:[{name:"void"}],raw:"Promisable<void>"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
  ItemDataType<string>,
  'children' | 'label' | 'value'
> & {
  children?: never
  isDisabled?: boolean
  label: string
  value: OptionValue
}`,elements:[{name:"Omit",elements:[{name:"ItemDataType",elements:[{name:"string"}],raw:"ItemDataType<string>"},{name:"union",raw:"'children' | 'label' | 'value'",elements:[{name:"literal",value:"'children'"},{name:"literal",value:"'label'"},{name:"literal",value:"'value'"}]}],raw:`Omit<
  ItemDataType<string>,
  'children' | 'label' | 'value'
>`},{name:"signature",type:"object",raw:`{
  children?: never
  isDisabled?: boolean
  label: string
  value: OptionValue
}`,signature:{properties:[{key:"children",value:{name:"never",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"OptionValue",required:!0}}]}}]}],raw:"Option<OptionValue>[]"},description:""},readOnly:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},style:{required:!1,tsType:{name:"union",raw:"CSSProperties | undefined",elements:[{name:"CSSProperties"},{name:"undefined"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"OptionValue[] | undefined",elements:[{name:"Array",elements:[{name:"OptionValue"}],raw:"OptionValue[]"},{name:"undefined"}]},description:""}}};var t,o,s;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`function _MultiCheckbox(props: MultiCheckboxProps) {
  const [outputValue, setOutputValue] = useState<string[] | undefined | '∅'>('∅');
  const {
    controlledOnChange,
    controlledValue
  } = useFieldControl(props.value, setOutputValue);
  return <>
      <MultiCheckbox {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const M=["_MultiCheckbox"];export{n as _MultiCheckbox,M as __namedExportsOrder,k as default};
