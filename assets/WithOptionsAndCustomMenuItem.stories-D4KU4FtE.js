import{bp as u,j as e}from"./index-0nDB5Zzz.js";import{r as o}from"./index-CBqU2yxZ.js";import{O as m}from"./Output-Sfj1QWTd.js";import{g as d}from"./generateStoryDecorator-jcZX8bPx.js";import"./_baseClone-CBkhujLI.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";function p({item:a}){return e.jsxs(e.Fragment,{children:["My custom menu item:",e.jsx("br",{}),a]})}const I={title:"Fields/Search (variations)",component:u,argTypes:{value:{control:"text"}},args:{error:"",isLabelHidden:!1,isLight:!1,isSearchIconHidden:!1,label:"An autocompletable select",MenuItem:p,name:"autoComplete",options:[{label:"First Option",value:{name:"First Option",subValue:"FIRST_OPTION"}},{label:"Second Option",value:{name:"Second Option",subValue:"SECOND_OPTION"}},{label:"Third Option",value:{name:"Third Option",subValue:"THIRD_OPTION"}},{label:"A Very Very Long Option",value:{name:"A Very Very Long  Option",subValue:"A_VERY_VERY_LONG_OPTION"}}],optionValueKey:"name",placeholder:'Type "first"'},decorators:[d({withBackgroundButton:!0})]};function n(a){const[t,s]=o.useState("∅");return e.jsxs(e.Fragment,{children:[e.jsx(u,{...a,onChange:s}),t!=="∅"&&e.jsx(m,{value:t})]})}n.__docgenInfo={description:"",methods:[],displayName:"WithOptionsAndCustomMenuItem",props:{MenuItem:{required:!1,tsType:{name:"union",raw:"ElementType | undefined",elements:[{name:"ElementType"},{name:"undefined"}]},description:""},baseContainer:{required:!1,tsType:{name:"union",raw:"Document | HTMLDivElement | null | undefined",elements:[{name:"Document"},{name:"HTMLDivElement"},{name:"null"},{name:"undefined"}]},description:"Used to pass something else than `window.document` as a base container to attach global events listeners."},customSearch:{required:!1,tsType:{name:"union",raw:"CustomSearch<Option<OptionValue>> | undefined",elements:[{name:"CustomSearch",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"children",value:{name:"never",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"OptionValue",required:!0}}]}}]}],raw:"Option<OptionValue>[]"},description:""},readOnly:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"OptionValue | undefined",elements:[{name:"OptionValue"},{name:"undefined"}]},description:""}}};var i,r,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`function WithOptionsAndCustomMenuItem(props: SearchProps<Value>) {
  const [outputValue, setOutputValue] = useState<any | undefined | '∅'>('∅');
  return <>
      <Search<Value> {...props} onChange={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(l=(r=n.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const D=["WithOptionsAndCustomMenuItem"];export{n as WithOptionsAndCustomMenuItem,D as __namedExportsOrder,I as default};
