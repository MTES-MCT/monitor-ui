import{b4 as n,a as l,aJ as s,j as e,o as h,L as g,Q as N}from"./index-DOn5IH5D.js";import{r as d}from"./index-CBqU2yxZ.js";import{O as R}from"./Output-o7hVPfWS.js";import{g as S}from"./StoryDecorator-CIMcLWSk.js";import{u as C}from"./useFieldControl-BRRRQdpT.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DCTCzM4b.js";const M={disabled:!1,error:"",isErrorMessageHidden:!1,isInline:!1,isLabelHidden:!1,isLight:!1,label:"Pick an option",name:"myMultiRadio",options:[{label:"First Option",value:"FIRST_OPTION"},{label:"Second Option",value:"SECOND_OPTION",isDisabled:!0},{label:"Third Option",value:"THIRD_OPTION"},{label:"A Very Very Long Option",value:"A_VERY_VERY_LONG_OPTION"}],value:void 0},p=[{label:"Moyen de contrôle",value:{value:"CONTROL_ENTITY",Icon:h}},{label:"Navire de pêche",value:{value:"FISHING_VESSEL",Icon:g}},{label:"Autre point",value:{value:"OTHER",Icon:N}}],A={title:"Fields/MultiRadio",component:n,argTypes:{value:{control:"inline-radio",options:["FIRST_OPTION","SECOND_OPTION","THIRD_OPTION","A_VERY_VERY_LONG_OPTION"]}},args:M,decorators:[S({hasDarkMode:!0})]};function o(t){var r;const[u,m]=d.useState("∅"),{controlledOnChange:i,controlledValue:v}=C(t.value,m),[T,_]=d.useState((r=p[2])==null?void 0:r.value);return l(s,{children:[l("div",{style:{marginBottom:"32px"},children:[e(n,{...t,onChange:i,value:v}),u!=="∅"&&e(R,{value:u})]}),e(n,{...t,isReadOnly:!0,label:"Multiradio in readOnly mode",onChange:i,value:"FIRST_OPTION"}),e("div",{style:{marginTop:"32px"},children:e(n,{...t,label:"Multiradio with icons",onChange:a=>_(a),options:p,optionValueKey:"value",renderMenuItem:(a,V)=>l(s,{children:[e(V.Icon,{}),a]}),value:T})})]})}var O,c,I;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`function _MultiRadio(props: MultiRadioProps) {
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
      <MultiRadio {...props} isReadOnly label="Multiradio in readOnly mode" onChange={controlledOnChange} value="FIRST_OPTION" />
      <div style={{
      marginTop: '32px'
    }}>
        <MultiRadio {...props} label="Multiradio with icons" onChange={nextOptionValue => setOutputValueWithIcons(nextOptionValue)} options={OPTIONS_WITH_ICONS} optionValueKey="value" renderMenuItem={(label, value) => <>
              <value.Icon />
              {label}
            </>} value={outputValueWithIcon} />
      </div>
    </>;
}`,...(I=(c=o.parameters)==null?void 0:c.docs)==null?void 0:I.source}}};const j=["_MultiRadio"];export{o as _MultiRadio,j as __namedExportsOrder,A as default};
