import{aT as m,j as e}from"./index-D3QtTYcx.js";import{r}from"./index-CBqU2yxZ.js";import{O as h}from"./Output-CQAZDSvb.js";import{L as v}from"./constants-VGTGrGmu.js";import{S as b,C as O}from"./species-BwcrnnNN.js";import{g}from"./generateStoryDecorator-DsoMrMh3.js";import"./_baseClone-CBkhujLI.js";import{u as y}from"./useFieldControl-hP0ART6Y.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-DeLdszCZ.js";import"./fr_FR-BAq5VERt.js";const S={disabled:!1,error:"",isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,label:"A check picker",name:"myCheckPicker",options:[{label:"First Option",value:"FIRST_OPTION"},{label:"Second Option",value:"SECOND_OPTION"},{label:"Third Option",value:"THIRD_OPTION"},{label:v,value:"LOREM_IPSUM"}],placeholder:"Pick some options",searchable:!0,value:[],virtualized:!1},j={title:"Fields/CheckPicker (variations)",component:m,argTypes:{value:{control:"inline-check",options:["FIRST_OPTION","SECOND_OPTION","THIRD_OPTION","LOREM_IPSUM"]}},args:S,decorators:[g({withBackgroundButton:!0})]};function n(t){const i=r.useRef(b.map(a=>({label:`${a.code} - ${a.name}`,value:a}))),d=r.useRef(new O(i.current,[{name:"value.code",weight:.9},{name:"value.name",weight:.1}],{isStrict:!0})),[l,c]=r.useState("∅"),{controlledOnChange:p,controlledValue:f}=y(t.value,c);return e.jsxs(e.Fragment,{children:[e.jsx(m,{...t,customSearch:d.current,onChange:p,options:i.current,optionValueKey:"code",value:f,virtualized:!0}),e.jsx("div",{children:e.jsx("em",{children:"Loads a list of 10,000 users in order to check performances."})}),l!=="∅"&&e.jsx(h,{value:l})]})}n.__docgenInfo={description:"",methods:[],displayName:"_CheckPickerWithCustomSearch",props:{customSearch:{required:!1,tsType:{name:"CustomSearch",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"children",value:{name:"never",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"OptionValue",required:!0}}]}}]}],raw:"Option<OptionValue>[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"OptionValue[] | undefined",elements:[{name:"Array",elements:[{name:"OptionValue"}],raw:"OptionValue[]"},{name:"undefined"}]},description:""}}};var o,s,u;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`function _CheckPickerWithCustomSearch(props: CheckPickerProps<Specy>) {
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
  const [outputValue, setOutputValue] = useState<Specy[] | undefined | '∅'>('∅');
  const {
    controlledOnChange,
    controlledValue
  } = useFieldControl(props.value, setOutputValue);
  return <>
      <CheckPicker {...props} customSearch={customSearchRef.current} onChange={controlledOnChange} options={optionsRef.current} optionValueKey="code" value={controlledValue} virtualized />
      <div>
        <em>Loads a list of 10,000 users in order to check performances.</em>
      </div>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(s=n.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const N=["_CheckPickerWithCustomSearch"];export{n as _CheckPickerWithCustomSearch,N as __namedExportsOrder,j as default};
