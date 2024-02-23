import{aK as t,j as o,a as r,b as a,a0 as d,az as l}from"./index-ucqKeW45.js";import{r as m}from"./index-CBqU2yxZ.js";import{g as p}from"./StoryDecorator-D_ImgbCs.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-BXk91z3w.js";const g={title:"Components/SideMenu",component:t,argTypes:{},decorators:[p()]};function e(){const[n,i]=m.useState("bouton 2");return o("div",{style:{height:"500px"},children:r(t,{children:[o(t.Button,{Icon:a,isActive:n==="bouton 1",onClick:()=>i("bouton 1"),title:"bouton 1"}),o(t.Button,{Icon:d,isActive:n==="bouton 2",onClick:()=>i("bouton 2"),title:"bouton 2"}),o(t.Button,{Icon:l,isActive:n==="bouton 3",onClick:()=>i("bouton 3"),title:"bouton 2"})]})})}var s,u,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`function _SideMenu() {
  const [selectedButton, setSelectedButton] = useState('bouton 2');
  return <div style={{
    height: '500px'
  }}>
      <SideMenu>
        <SideMenu.Button Icon={Icon.Alert} isActive={selectedButton === 'bouton 1'} onClick={() => setSelectedButton('bouton 1')} title="bouton 1" />
        <SideMenu.Button Icon={Icon.MissionAction} isActive={selectedButton === 'bouton 2'} onClick={() => setSelectedButton('bouton 2')} title="bouton 2" />
        <SideMenu.Button Icon={Icon.Vms} isActive={selectedButton === 'bouton 3'} onClick={() => setSelectedButton('bouton 3')} title="bouton 2" />
      </SideMenu>
    </div>;
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const h=["_SideMenu"];export{e as _SideMenu,h as __namedExportsOrder,g as default};
