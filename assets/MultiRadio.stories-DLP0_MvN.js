import{bl as t,j as n,n as v,J as y,O as g}from"./index-D3QtTYcx.js";import{r as s}from"./index-CBqU2yxZ.js";import{O as N}from"./Output-CQAZDSvb.js";import{M as _,A as e}from"./constants-VGTGrGmu.js";import{g as V}from"./generateStoryDecorator-DsoMrMh3.js";import{F as h,a as A,b as L}from"./fake_options-pLn6bACZ.js";import"./_baseClone-CBkhujLI.js";import{u as P}from"./useFieldControl-hP0ART6Y.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-DeLdszCZ.js";import"./fr_FR-BAq5VERt.js";import"./fake_text-B6tiQCXj.js";const u=[{label:"Moyen de contrôle",value:{Icon:v,value:"CONTROL_ENTITY"}},{label:"Navire de pêche",value:{Icon:y,value:"FISHING_VESSEL"}},{label:"Autre point",value:{Icon:g,value:"OTHER"}}],G={..._,title:"Fields/MultiRadio",component:t,argTypes:{className:e.NO_CONTROL,disabled:e.OPTIONAL_BOOLEAN,error:e.OPTIONAL_STRING,isErrorMessageHidden:e.OPTIONAL_BOOLEAN,isInline:e.OPTIONAL_BOOLEAN,isLabelHidden:e.OPTIONAL_BOOLEAN,isLight:e.OPTIONAL_BOOLEAN,isTransparent:e.OPTIONAL_BOOLEAN,isUndefinedWhenDisabled:e.OPTIONAL_BOOLEAN,optionValueKey:e.OPTIONAL_OPTION_VALUE_KEY,options:e.NO_CONTROL_INPUT,readOnly:e.OPTIONAL_BOOLEAN,style:e.NO_CONTROL,value:{...e.OPTIONAL_OPTION_VALUE,options:[...h,void 0],mapping:{...A,undefined:void 0}}},args:{disabled:!1,error:"",isErrorMessageHidden:!1,isInline:!1,isLabelHidden:!1,isLight:!1,isTransparent:!1,isUndefinedWhenDisabled:!1,label:"A multiple radio. Pick one option:",name:"myMultiRadio",options:L,readOnly:!1,value:void 0},decorators:[V({box:{width:640},withBackgroundButton:!0})]};function a(o){var l;const[r,O]=s.useState("∅"),{controlledOnChange:c,controlledValue:f}=P(o.value,O),[T,I]=s.useState((l=u[2])==null?void 0:l.value);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{marginBottom:"32px"},children:[n.jsx(t,{...o,onChange:c,value:f}),r!=="∅"&&n.jsx(N,{value:r})]}),n.jsx("div",{style:{marginTop:"32px"},children:n.jsx(t,{label:"Multiradio with icons",name:"myMultiRadioWithIcons",onChange:i=>I(i),options:u,optionValueKey:"value",renderMenuItem:(i,b)=>n.jsxs(n.Fragment,{children:[n.jsx(b.Icon,{}),i]}),value:T})})]})}a.__docgenInfo={description:"",methods:[],displayName:"_MultiRadio",props:{className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},disabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},error:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},isErrorMessageHidden:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isInline:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isLabelHidden:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isLight:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isTransparent:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isUndefinedWhenDisabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: OptionValue | undefined) => Promisable<void>",signature:{arguments:[{type:{name:"union",raw:"OptionValue | undefined",elements:[{name:"OptionValue"},{name:"undefined"}]},name:"nextValue"}],return:{name:"Promisable",elements:[{name:"void"}],raw:"Promisable<void>"}}},description:""},optionValueKey:{required:!1,tsType:{name:"OptionValue"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<
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
}`,signature:{properties:[{key:"children",value:{name:"never",required:!1}},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"OptionValue",required:!0}}]}}]}],raw:"Option<OptionValue>[]"},description:""},readOnly:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},renderMenuItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string, value: OptionValue) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"label"},{type:{name:"OptionValue"},name:"value"}],return:{name:"ReactNode"}}},description:""},style:{required:!1,tsType:{name:"union",raw:"CSSProperties | undefined",elements:[{name:"CSSProperties"},{name:"undefined"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"OptionValue | undefined",elements:[{name:"OptionValue"},{name:"undefined"}]},description:""}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`function _MultiRadio(props: MultiRadioProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅');
  const {
    controlledOnChange,
    controlledValue
  } = useFieldControl(props.value, setOutputValue);
  const [outputValueWithIcon, setOutputValueWithIcons] = useState<InterestPointOptionValueType | undefined>(OPTIONS_WITH_ICONS[2]?.value);
  return <>
      <div style={{
      marginBottom: '32px'
    }}>
        <MultiRadio {...props} onChange={controlledOnChange} value={controlledValue} />

        {outputValue !== '∅' && <Output value={outputValue} />}
      </div>

      <div style={{
      marginTop: '32px'
    }}>
        <MultiRadio label="Multiradio with icons" name="myMultiRadioWithIcons" onChange={nextOptionValue => setOutputValueWithIcons(nextOptionValue)} options={OPTIONS_WITH_ICONS} optionValueKey="value" renderMenuItem={(label, value) => <>
              <value.Icon />
              {label}
            </>} value={outputValueWithIcon} />
      </div>
    </>;
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const k=["_MultiRadio"];export{a as _MultiRadio,k as __namedExportsOrder,G as default};
