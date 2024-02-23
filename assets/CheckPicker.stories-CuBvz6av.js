import{aX as a,a as n,aJ as k,j as e,s as C}from"./index-ucqKeW45.js";import{r as l}from"./index-CBqU2yxZ.js";import{O as P}from"./Output-DuOCsNck.js";import{g}from"./StoryDecorator-D_ImgbCs.js";import{L as v}from"./constants-CtapknUb.js";import{u as V}from"./useFieldControl-BeQ3CD53.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-BXk91z3w.js";const f={disabled:!1,error:"",isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,label:"A check picker",name:"myCheckPicker",options:[{label:"First Option",value:"FIRST_OPTION"},{label:"Second Option",value:"SECOND_OPTION"},{label:"Third Option",value:"THIRD_OPTION"},{label:v,value:"LOREM_IPSUM"}],placeholder:"Pick some options",searchable:!0,value:[],virtualized:!1},L={title:"Fields/CheckPicker",component:a,argTypes:{value:{control:"inline-check",options:["FIRST_OPTION","SECOND_OPTION","THIRD_OPTION","LOREM_IPSUM"]}},args:f,decorators:[g({hasDarkMode:!0,withNewWindowButton:!0})]};function t(r){const[o,c]=l.useState("∅"),[p,d]=l.useState(),{controlledOnChange:h,controlledValue:m}=V(r.value,c);return n(k,{children:[n(I,{children:[e(a,{...r,onChange:h,style:{width:"300px"},value:m}),e(a,{...r,label:"A second check picker with custom renderValue",name:"myCheckPicker2",onChange:d,renderValue:O=>e("div",{children:`Items (${O.length})`}),style:{width:"300px"},value:p})]}),o!=="∅"&&e(P,{value:o})]})}const I=C.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;var u,s,i;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`function _CheckPicker(props: CheckPickerProps<string>) {
  const [outputValue, setOutputValue] = useState<string[] | undefined | '∅'>('∅');
  const [outputValue2, setOutputValue2] = useState<string[]>();
  const {
    controlledOnChange,
    controlledValue
  } = useFieldControl(props.value, setOutputValue);
  return <>
      <Container>
        <CheckPicker {...props} onChange={controlledOnChange} style={{
        width: '300px'
      }} value={controlledValue} />
        <CheckPicker {...props} label="A second check picker with custom renderValue" name="myCheckPicker2" onChange={setOutputValue2} renderValue={value => <div>{\`Items (\${value.length})\`}</div>} style={{
        width: '300px'
      }} value={outputValue2} />
      </Container>
      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const H=["_CheckPicker"];export{t as _CheckPicker,H as __namedExportsOrder,L as default};
