import{bp as l,j as a}from"./index-D3QtTYcx.js";import{r as d}from"./index-CBqU2yxZ.js";import{O as m}from"./Output-CQAZDSvb.js";import{M as p,A as e}from"./constants-VGTGrGmu.js";import{g as c}from"./generateStoryDecorator-DsoMrMh3.js";import{F as f,a as O,b}from"./fake_options-pLn6bACZ.js";import"./_baseClone-CBkhujLI.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-DeLdszCZ.js";import"./fr_FR-BAq5VERt.js";import"./fake_text-B6tiQCXj.js";const P={...p,title:"Fields/Search",component:l,argTypes:{disabled:e.OPTIONAL_BOOLEAN,error:e.OPTIONAL_STRING,isErrorMessageHidden:e.OPTIONAL_BOOLEAN,isLabelHidden:e.OPTIONAL_BOOLEAN,isLight:e.OPTIONAL_BOOLEAN,isTransparent:e.OPTIONAL_BOOLEAN,isUndefinedWhenDisabled:e.OPTIONAL_BOOLEAN,options:e.NO_CONTROL_INPUT,readOnly:e.OPTIONAL_BOOLEAN,value:{...e.OPTIONAL_OPTION_VALUE,options:[...f,void 0],mapping:{...O,undefined:void 0}}},args:{disabled:!1,error:"",isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,isTransparent:!1,isUndefinedWhenDisabled:!1,label:"An autocomplete search input. Pick one option:",name:"mySearch",options:b,placeholder:'Type "first"',readOnly:!1},decorators:[c({box:{width:640},withBackgroundButton:!0})]};function n(o){const[i,u]=d.useState("∅");return a.jsxs(a.Fragment,{children:[a.jsx(l,{...o,MenuItem:void 0,onChange:u}),i!=="∅"&&a.jsx(m,{value:i})]})}n.__docgenInfo={description:"",methods:[],displayName:"_Search",props:{MenuItem:{required:!1,tsType:{name:"union",raw:"ElementType | undefined",elements:[{name:"ElementType"},{name:"undefined"}]},description:""},baseContainer:{required:!1,tsType:{name:"union",raw:"Document | HTMLDivElement | null | undefined",elements:[{name:"Document"},{name:"HTMLDivElement"},{name:"null"},{name:"undefined"}]},description:"Used to pass something else than `window.document` as a base container to attach global events listeners."},customSearch:{required:!1,tsType:{name:"union",raw:"CustomSearch<Option<OptionValue>> | undefined",elements:[{name:"CustomSearch",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"children",value:{name:"never",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"OptionValue",required:!0}}]}}]}],raw:"CustomSearch<Option<OptionValue>>"},{name:"undefined"}]},description:""},customSearchMinQueryLength:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:"Minimum search query length required to trigger custom search filtering."},disabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},error:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},isErrorMessageHidden:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isLabelHidden:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isLight:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isSearchIconHidden:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isTransparent:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isUndefinedWhenDisabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: OptionValue | undefined) => Promisable<void>",signature:{arguments:[{type:{name:"union",raw:"OptionValue | undefined",elements:[{name:"OptionValue"},{name:"undefined"}]},name:"nextValue"}],return:{name:"Promisable",elements:[{name:"void"}],raw:"Promisable<void>"}}},description:""},onQuery:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextQuery: string | undefined) => Promisable<void>",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"nextQuery"}],return:{name:"Promisable",elements:[{name:"void"}],raw:"Promisable<void>"}}},description:""},optionValueKey:{required:!1,tsType:{name:"union",raw:"keyof OptionValue | undefined",elements:[{name:"OptionValue"},{name:"undefined"}]},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"children",value:{name:"never",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"OptionValue",required:!0}}]}}]}],raw:"Option<OptionValue>[]"},description:""},readOnly:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"OptionValue | undefined",elements:[{name:"OptionValue"},{name:"undefined"}]},description:""}}};var r,t,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`function _Search(props: SearchProps) {
  const [outputValue, setOutputValue] = useState<any | undefined | '∅'>('∅');
  return <>
      <Search {...props} MenuItem={undefined} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(s=(t=n.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const D=["_Search"];export{n as _Search,D as __namedExportsOrder,P as default};
