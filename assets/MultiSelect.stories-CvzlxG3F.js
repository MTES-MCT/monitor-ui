import{bm as o,j as a}from"./index-0nDB5Zzz.js";import{r as p}from"./index-CBqU2yxZ.js";import{O as c}from"./Output-Sfj1QWTd.js";import{M as O,A as e}from"./constants-D7cOJi0A.js";import{g as f}from"./generateStoryDecorator-jcZX8bPx.js";import{F as b,a as g,b as T}from"./fake_options-pLn6bACZ.js";import"./_baseClone-CBkhujLI.js";import{u as v}from"./useFieldControl-oDxVSMc2.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";import"./fake_text-B6tiQCXj.js";const B={...O,title:"Fields/MultiSelect",component:o,argTypes:{customSearch:e.NO_CONTROL_INPUT,customSearchMinQueryLength:e.OPTIONAL_NUMBER_NO_CONTROL_INPUT,error:e.OPTIONAL_STRING,isErrorMessageHidden:e.OPTIONAL_BOOLEAN,isLabelHidden:e.OPTIONAL_BOOLEAN,isLight:e.OPTIONAL_BOOLEAN,isTransparent:e.OPTIONAL_BOOLEAN,isUndefinedWhenDisabled:e.OPTIONAL_BOOLEAN,options:e.NO_CONTROL_INPUT,optionValueKey:e.OPTIONAL_OPTION_VALUE_KEY,readOnly:e.OPTIONAL_BOOLEAN,searchable:e.BOOLEAN,value:{...e.OPTIONAL_OPTION_VALUES,options:[...b,void 0],mapping:{...g,undefined:void 0}}},args:{disabled:!1,error:"",isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,isTransparent:!1,isUndefinedWhenDisabled:!1,label:"A multiple select",name:"myMultiSelect",options:T,placeholder:"A multiple select. Pick some options:",readOnly:!1,searchable:!0,virtualized:!1},decorators:[f({box:{width:640},withBackgroundButton:!0,withNewWindowButton:!0})]};function n(t){const[r,u]=p.useState("∅"),{controlledOnChange:d,controlledValue:m}=v(t.value,u);return a.jsxs(a.Fragment,{children:[a.jsx(o,{...t,onChange:d,value:m}),r!=="∅"&&a.jsx(c,{value:r})]})}n.__docgenInfo={description:"",methods:[],displayName:"_MultiSelect",props:{customSearch:{required:!1,tsType:{name:"CustomSearch",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"children",value:{name:"never",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"OptionValue",required:!0}}]}}]}],raw:"CustomSearch<Option<OptionValue>>"},description:"Used to pass something else than `window.document` as a base container to attach global events listeners."},customSearchMinQueryLength:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:"Minimum search query length required to trigger custom search filtering."},error:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},isErrorMessageHidden:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isLabelHidden:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isLight:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isTransparent:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isUndefinedWhenDisabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: OptionValue[] | undefined) => Promisable<void>",signature:{arguments:[{type:{name:"union",raw:"OptionValue[] | undefined",elements:[{name:"Array",elements:[{name:"OptionValue"}],raw:"OptionValue[]"},{name:"undefined"}]},name:"nextValue"}],return:{name:"Promisable",elements:[{name:"void"}],raw:"Promisable<void>"}}},description:""},optionValueKey:{required:!1,tsType:{name:"union",raw:"keyof OptionValue | undefined",elements:[{name:"OptionValue"},{name:"undefined"}]},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"children",value:{name:"never",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"OptionValue",required:!0}}]}}]}],raw:"Option<OptionValue>[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"OptionValue[] | undefined",elements:[{name:"Array",elements:[{name:"OptionValue"}],raw:"OptionValue[]"},{name:"undefined"}]},description:""}}};var i,l,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`function _MultiSelect(props: MultiSelectProps) {
  const [outputValue, setOutputValue] = useState<string[] | undefined | '∅'>('∅');
  const {
    controlledOnChange,
    controlledValue
  } = useFieldControl(props.value, setOutputValue);
  return <>
      <MultiSelect {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const k=["_MultiSelect"];export{n as _MultiSelect,k as __namedExportsOrder,B as default};
