import{bq as m,j as e}from"./index-D3QtTYcx.js";import{r}from"./index-CBqU2yxZ.js";import{O as h}from"./Output-CQAZDSvb.js";import{S as v,C as b}from"./species-BwcrnnNN.js";import{g}from"./generateStoryDecorator-DsoMrMh3.js";import"./_baseClone-CBkhujLI.js";import{u as y}from"./useFieldControl-hP0ART6Y.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-DeLdszCZ.js";import"./fr_FR-BAq5VERt.js";const O={disabled:!1,error:"",isCleanable:!0,isErrorMessageHidden:!1,isLabelHidden:!1,label:"A select",name:"mySelect",options:[],optionValueKey:"code",placeholder:"Pick an option",value:void 0,virtualized:!0},_={title:"Fields/Select (variations)",component:m,argTypes:{value:{control:"inline-radio",options:["FIRST_OPTION","SECOND_OPTION","THIRD_OPTION","LOREM_IPSUM"]}},args:O,decorators:[g({withBackgroundButton:!0})]};function n(i){const a=r.useRef(v.map(t=>({label:`${t.code} - ${t.name}`,value:t}))),d=r.useRef(new b(a.current,[{name:"value.code",weight:.9},{name:"value.name",weight:.1}],{isStrict:!0})),[l,c]=r.useState("∅"),{controlledOnChange:p,controlledValue:f}=y(i.value,c);return e.jsxs(e.Fragment,{children:[e.jsx(m,{...i,customSearch:d.current,onChange:p,options:a.current,value:f}),e.jsx("div",{children:e.jsxs("em",{children:["Loads a pre-shuffled list of ",a.current.length," species in order to check performances."]})}),l!=="∅"&&e.jsx(h,{value:l})]})}n.__docgenInfo={description:"",methods:[],displayName:"SelectWithCustomSearch",props:{customSearch:{required:!1,tsType:{name:"CustomSearch",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"children",value:{name:"never",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"OptionValue",required:!0}}]}}]}],raw:"CustomSearch<Option<OptionValue>>"},description:""},customSearchMinQueryLength:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:"Minimum search query length required to trigger custom search filtering."},error:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},isCleanable:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isErrorMessageHidden:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isLabelHidden:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isLight:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isTransparent:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isUndefinedWhenDisabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: OptionValue | undefined) => Promisable<void>",signature:{arguments:[{type:{name:"union",raw:"OptionValue | undefined",elements:[{name:"OptionValue"},{name:"undefined"}]},name:"nextValue"}],return:{name:"Promisable",elements:[{name:"void"}],raw:"Promisable<void>"}}},description:""},optionValueKey:{required:!1,tsType:{name:"union",raw:"keyof OptionValue | undefined",elements:[{name:"OptionValue"},{name:"undefined"}]},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"children",value:{name:"never",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"OptionValue",required:!0}}]}}]}],raw:"Option<OptionValue>[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"OptionValue | undefined",elements:[{name:"OptionValue"},{name:"undefined"}]},description:""}}};var o,s,u;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`function SelectWithCustomSearch(props: SelectProps<Specy>) {
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
    isStrict: true
  }));
  const [outputValue, setOutputValue] = useState<Specy | undefined | '∅'>('∅');
  const {
    controlledOnChange,
    controlledValue
  } = useFieldControl(props.value, setOutputValue);
  return <>
      <Select {...props} customSearch={customSearchRef.current} onChange={controlledOnChange} options={optionsRef.current} value={controlledValue} />
      <div>
        <em>Loads a pre-shuffled list of {optionsRef.current.length} species in order to check performances.</em>
      </div>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(s=n.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const L=["SelectWithCustomSearch"];export{n as SelectWithCustomSearch,L as __namedExportsOrder,_ as default};
