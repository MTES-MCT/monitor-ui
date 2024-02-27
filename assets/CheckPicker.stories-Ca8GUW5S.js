import{aT as o,j as a}from"./index-D3QtTYcx.js";import{r as p}from"./index-CBqU2yxZ.js";import{O as c}from"./Output-CQAZDSvb.js";import{M as O,A as e}from"./constants-VGTGrGmu.js";import{g as f}from"./generateStoryDecorator-DsoMrMh3.js";import{F as b,a as h,b as g}from"./fake_options-pLn6bACZ.js";import"./_baseClone-CBkhujLI.js";import{u as T}from"./useFieldControl-hP0ART6Y.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-DeLdszCZ.js";import"./fr_FR-BAq5VERt.js";import"./fake_text-B6tiQCXj.js";const B={...O,title:"Fields/CheckPicker",component:o,argTypes:{customSearch:e.NO_CONTROL_INPUT,customSearchMinQueryLength:e.OPTIONAL_NUMBER_NO_CONTROL_INPUT,error:e.OPTIONAL_STRING,isErrorMessageHidden:e.OPTIONAL_BOOLEAN,isLabelHidden:e.OPTIONAL_BOOLEAN,isLight:e.OPTIONAL_BOOLEAN,isTransparent:e.OPTIONAL_BOOLEAN,isUndefinedWhenDisabled:e.OPTIONAL_BOOLEAN,options:e.NO_CONTROL_INPUT,optionValueKey:e.OPTIONAL_OPTION_VALUE_KEY,readOnly:e.OPTIONAL_BOOLEAN,searchable:e.BOOLEAN,value:{...e.OPTIONAL_OPTION_VALUES,options:[...b,void 0],mapping:{...h,undefined:void 0}}},args:{disabled:!1,error:"",isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,isTransparent:!1,isUndefinedWhenDisabled:!1,label:"A check picker. Pick some options:",name:"myCheckPicker",options:g,optionValueKey:void 0,placeholder:"Pick some options",readOnly:!1,searchable:!0,virtualized:!1},decorators:[f({box:{width:640},withBackgroundButton:!0,withPseudoStateButtons:{targetSelector:'[role="combobox"]'},withNewWindowButton:!0})]};function n(r){const[i,u]=p.useState("∅"),{controlledOnChange:d,controlledValue:m}=T(r.value,u);return a.jsxs(a.Fragment,{children:[a.jsx(o,{...r,onChange:d,value:m}),i!=="∅"&&a.jsx(c,{value:i})]})}n.__docgenInfo={description:"",methods:[],displayName:"_CheckPicker",props:{customSearch:{required:!1,tsType:{name:"CustomSearch",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"children",value:{name:"never",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"OptionValue",required:!0}}]}}]}],raw:"CustomSearch<Option<OptionValue>>"},description:""},customSearchMinQueryLength:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:"Minimum search query length required to trigger custom search filtering."},error:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},isErrorMessageHidden:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isLabelHidden:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isLight:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isTransparent:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isUndefinedWhenDisabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: OptionValue[] | undefined) => Promisable<void>",signature:{arguments:[{type:{name:"union",raw:"OptionValue[] | undefined",elements:[{name:"Array",elements:[{name:"OptionValue"}],raw:"OptionValue[]"},{name:"undefined"}]},name:"nextValue"}],return:{name:"Promisable",elements:[{name:"void"}],raw:"Promisable<void>"}}},description:""},optionValueKey:{required:!1,tsType:{name:"union",raw:"keyof OptionValue | undefined",elements:[{name:"OptionValue"},{name:"undefined"}]},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"children",value:{name:"never",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"OptionValue",required:!0}}]}}]}],raw:"Option<OptionValue>[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"OptionValue[] | undefined",elements:[{name:"Array",elements:[{name:"OptionValue"}],raw:"OptionValue[]"},{name:"undefined"}]},description:""}}};var t,l,s;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`function _CheckPicker(props: CheckPickerProps<string>) {
  const [outputValue, setOutputValue] = useState<string[] | undefined | '∅'>('∅');
  const {
    controlledOnChange,
    controlledValue
  } = useFieldControl(props.value, setOutputValue);
  return <>
      <CheckPicker {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const x=["_CheckPicker"];export{n as _CheckPicker,x as __namedExportsOrder,B as default};
