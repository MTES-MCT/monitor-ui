import{aH as o,j as t,a as r,_ as d,ax as a}from"./index-D3QtTYcx.js";import{r as l}from"./index-CBqU2yxZ.js";import{g as m}from"./generateStoryDecorator-DsoMrMh3.js";import"./_baseClone-CBkhujLI.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-DeLdszCZ.js";import"./fr_FR-BAq5VERt.js";const g={title:"Components/SideMenu",component:o,argTypes:{},decorators:[m()]};function e(){const[n,i]=l.useState("bouton 2");return t.jsx("div",{style:{height:"500px"},children:t.jsxs(o,{children:[t.jsx(o.Button,{Icon:r,isActive:n==="bouton 1",onClick:()=>i("bouton 1"),title:"bouton 1"}),t.jsx(o.Button,{Icon:d,isActive:n==="bouton 2",onClick:()=>i("bouton 2"),title:"bouton 2"}),t.jsx(o.Button,{Icon:a,isActive:n==="bouton 3",onClick:()=>i("bouton 3"),title:"bouton 2"})]})})}e.__docgenInfo={description:"",methods:[],displayName:"_SideMenu"};var s,u,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`function _SideMenu() {
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
