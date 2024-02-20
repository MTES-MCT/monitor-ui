import{bd as n,j as e,aJ as p,a as l,s as C}from"./index-DOn5IH5D.js";import{r as a}from"./index-CBqU2yxZ.js";import{g as m}from"./StoryDecorator-CIMcLWSk.js";import{u as f}from"./useFieldControl-BRRRQdpT.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DCTCzM4b.js";const T={isChecked:!1,onChange:()=>{},error:void 0,isLabelHidden:!1,isErrorMessageHidden:!1,label:"A toggle",name:"toggle"},j={title:"Fields/Toggle",component:n,argTypes:{error:{control:"text"},isChecked:{control:"boolean"},isErrorMessageHidden:{control:"boolean"},onChange:{action:"onChange"}},args:T,decorators:[m({hasDarkMode:!0})]};function r(o){const[,g]=a.useState(!1),{controlledOnChange:c,controlledValue:t}=f(o.isChecked,g),[u,h]=a.useState(!1);return e(p,{children:l(k,{children:[l("div",{children:[e(n,{...o,error:o.error,isChecked:!!t,onChange:c}),e("span",{children:`Toggle is : ${t?"ON":"OFF"}`})]}),e("div",{children:e(n,{...o,isChecked:!1,label:"Read only toggle",onChange:()=>{},readOnly:!0})}),e("div",{children:e(n,{...o,disabled:!0,isChecked:!0,label:"Disabled toggle",onChange:()=>{}})}),e("div",{children:e(n,{...o,error:"Toggle with an error",isChecked:u,onChange:h})})]})})}const k=C.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;var s,d,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`function _Toggle(props: ToggleProps) {
  const [, setOutputValue1] = useState<boolean>(false);
  const {
    controlledOnChange,
    controlledValue: controlledChecked
  } = useFieldControl(props.isChecked, (setOutputValue1 as any));
  const [outputValue2, setOutputValue2] = useState<boolean>(false);
  return <>
      <ToggleContainer>
        <div>
          <Toggle {...props} error={props.error} isChecked={!!controlledChecked} onChange={controlledOnChange} />
          <span>{\`Toggle is : \${controlledChecked ? 'ON' : 'OFF'}\`}</span>
        </div>
        <div>
          <Toggle {...props} isChecked={false} label="Read only toggle" onChange={() => {}} readOnly />
        </div>

        <div>
          <Toggle {...props} disabled isChecked label="Disabled toggle" onChange={() => {}} />
        </div>

        <div>
          <Toggle {...props} error="Toggle with an error" isChecked={outputValue2} onChange={setOutputValue2} />
        </div>
      </ToggleContainer>
    </>;
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const H=["_Toggle"];export{r as _Toggle,H as __namedExportsOrder,j as default};
