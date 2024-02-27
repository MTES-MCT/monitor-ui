import{aF as s,j as e,aG as m,aB as a,aC as o,az as p}from"./index-D3QtTYcx.js";import{S as t}from"./index-BbcyF1sc.js";import{M as u,A as r,L as h}from"./constants-VGTGrGmu.js";import{g as x}from"./generateStoryDecorator-DsoMrMh3.js";import"./index-CBqU2yxZ.js";import"./_baseClone-CBkhujLI.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-DeLdszCZ.js";import"./fr_FR-BAq5VERt.js";const I={...u,title:"Components/Message",component:s,argTypes:{children:r.REACT_NODE,level:r.OPTIONAL_LEVEL},args:{children:"A warning message"},decorators:[x({box:{width:640}})]};function n(d){return e.jsxs(e.Fragment,{children:[e.jsx(s,{...d}),e.jsxs(t,{children:[e.jsx(t.Subtitle,{children:"With a long text"}),e.jsx(s,{children:h}),e.jsx(t.Subtitle,{children:"With actions"}),e.jsxs(s,{level:m.WARNING,children:[e.jsxs("div",{children:[e.jsx("span",{children:"Une autre mission est encours avec cette unité."}),e.jsx("br",{}),e.jsx("span",{children:"Voulez-vous quand même conserver cette mission ?"})]}),e.jsxs(g,{children:[e.jsx(a,{accent:o.WARNING,children:"Oui, la conserver"}),e.jsx(a,{accent:o.WARNING,children:"Non, l'abandonner"})]})]})]})]})}const g=p.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`;n.__docgenInfo={description:"",methods:[],displayName:"_Message",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},level:{required:!1,tsType:{name:"union",raw:"Level | undefined",elements:[{name:"Level"},{name:"undefined"}]},description:""}}};var i,c,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`function _Message(props: MessageProps) {
  return <>
      <Message {...props} />

      <Showcase>
        <Showcase.Subtitle>With a long text</Showcase.Subtitle>

        <Message>{LOREM_IPSUM}</Message>

        <Showcase.Subtitle>With actions</Showcase.Subtitle>

        <Message level={Level.WARNING}>
          <div>
            <span>Une autre mission est encours avec cette unité.</span>
            <br />
            <span>Voulez-vous quand même conserver cette mission ?</span>
          </div>

          <ActionBox>
            <Button accent={Accent.WARNING}>Oui, la conserver</Button>
            <Button accent={Accent.WARNING}>Non, l&apos;abandonner</Button>
          </ActionBox>
        </Message>
      </Showcase>
    </>;
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const W=["_Message"];export{n as _Message,W as __namedExportsOrder,I as default};
