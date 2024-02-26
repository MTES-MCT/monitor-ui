import{bp as l,j as n}from"./index-0nDB5Zzz.js";import{r as t}from"./index-CBqU2yxZ.js";import{O as c}from"./Output-Sfj1QWTd.js";import{S as f,C as b}from"./species-Ckei7gAd.js";import{g as y}from"./generateStoryDecorator-jcZX8bPx.js";import"./_baseClone-CBkhujLI.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";const h={error:"",isLabelHidden:!1,isLight:!1,label:"An autocompletable select",name:"autoComplete",placeholder:"Type what you want"},R={title:"Fields/Search (variations)",component:l,argTypes:{},args:h,decorators:[y({withBackgroundButton:!0})]};function e(m){const[r,d]=t.useState("∅"),i=t.useRef(f.map(a=>({label:`${a.code} - ${a.name}`,value:a}))),p=t.useRef(new b(i.current,[{name:"value.code",weight:.9},{name:"value.name",weight:.1}],{isStrict:!1,shouldIgnoreLocation:!0}));return n.jsxs(n.Fragment,{children:[n.jsx(l,{...m,customSearch:p.current,onChange:d,options:i.current,optionValueKey:"code"}),r!=="∅"&&n.jsx(c,{value:r})]})}e.__docgenInfo={description:"",methods:[],displayName:"WithCustomSearch",props:{MenuItem:{required:!1,tsType:{name:"union",raw:"ElementType | undefined",elements:[{name:"ElementType"},{name:"undefined"}]},description:""},baseContainer:{required:!1,tsType:{name:"union",raw:"Document | HTMLDivElement | null | undefined",elements:[{name:"Document"},{name:"HTMLDivElement"},{name:"null"},{name:"undefined"}]},description:"Used to pass something else than `window.document` as a base container to attach global events listeners."},customSearch:{required:!1,tsType:{name:"union",raw:"CustomSearch<Option<OptionValue>> | undefined",elements:[{name:"CustomSearch",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"children",value:{name:"never",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"OptionValue",required:!0}}]}}]}],raw:"Option<OptionValue>[]"},description:""},readOnly:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"OptionValue | undefined",elements:[{name:"OptionValue"},{name:"undefined"}]},description:""}}};var o,s,u;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`function WithCustomSearch(props: SearchProps) {
  const [outputValue, setOutputValue] = useState<any | undefined | '∅'>('∅');
  const optionsRef = useRef((SPECIES as Specy[]).map(specy => ({
    label: \`\${specy.code} - \${specy.name}\`,
    value: specy
  })));
  const customSearchRef = useRef(new CustomSearch(optionsRef.current, [{
    name: 'value.code',
    weight: 0.9
  }, {
    name: 'value.name',
    weight: 0.1
  }], {
    isStrict: false,
    shouldIgnoreLocation: true
  }));
  return <>
      <Search {...props} customSearch={customSearchRef.current} onChange={setOutputValue} options={optionsRef.current} optionValueKey="code" />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const k=["WithCustomSearch"];export{e as WithCustomSearch,k as __namedExportsOrder,R as default};
