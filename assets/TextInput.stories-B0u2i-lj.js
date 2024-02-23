import{aL as o,bb as t,a as i,aJ as g,j as e,ag as I}from"./index-BnGWIf5W.js";import{r as v}from"./index-CBqU2yxZ.js";import{O as A}from"./Output-yz5BznoM.js";import{S as f}from"./index-Ho5nfGBp.js";import{g as C}from"./StoryDecorator-BYfjGXyr.js";import{u as p}from"./useFieldControl-BCWslox1.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const O={disabled:!1,error:"",isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,isUndefinedWhenDisabled:!1,isSearchInput:!1,label:"A text input",name:"myTextInput",placeholder:"A text input placeholder",size:o.NORMAL,value:void 0},R={title:"Fields/TextInput",component:t,argTypes:{isUndefinedWhenDisabled:{control:"boolean"},isSearchInput:{control:"boolean"},size:{control:"inline-radio",options:o},value:{control:"text"}},args:O,decorators:[C({hasDarkMode:!0})]};function a(n){const[l,r]=v.useState("∅"),{controlledOnChange:u,controlledValue:h}=p(n.value,r,""),{controlledOnChange:x,controlledValue:m}=p(n.value,r,"");return i(g,{children:[e(t,{...n,onChange:u,value:h}),e(t,{...n,isSearchInput:!0,label:"A search text input",onChange:x,value:m}),l!=="∅"&&e(A,{value:l}),i(f,{children:[e(t,{Icon:I,label:"A text input with an icon",name:"myTextInputWithAnIcon",onChange:u,placeholder:"A text input placeholder",size:o.LARGE}),e("div",{style:{marginTop:"32px"},children:e(t,{label:"A text input with plaintext prop",name:"myTextInputWithPlaintextProp",placeholder:"A text input placeholder",plaintext:!0,size:o.LARGE,value:"Plain text value"})})]})]})}var s,c,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`function _TextInput(props: TextInputProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅');
  const {
    controlledOnChange,
    controlledValue
  } = useFieldControl(props.value, setOutputValue, '');
  const {
    controlledOnChange: controlledOnChangeBis,
    controlledValue: controlledValueBis
  } = useFieldControl(props.value, setOutputValue, '');
  return <>
      <TextInput {...props} onChange={controlledOnChange} value={controlledValue} />

      <TextInput {...props} isSearchInput label="A search text input" onChange={controlledOnChangeBis} value={controlledValueBis} />

      {outputValue !== '∅' && <Output value={outputValue} />}

      <Showcase>
        <TextInput Icon={Icon.Search} label="A text input with an icon" name="myTextInputWithAnIcon" onChange={controlledOnChange} placeholder="A text input placeholder" size={Size.LARGE} />

        <div style={{
        marginTop: '32px'
      }}>
          <TextInput label="A text input with plaintext prop" name="myTextInputWithPlaintextProp" placeholder="A text input placeholder" plaintext size={Size.LARGE} value="Plain text value" />
        </div>
      </Showcase>
    </>;
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const _=["_TextInput"];export{a as _TextInput,_ as __namedExportsOrder,R as default};
