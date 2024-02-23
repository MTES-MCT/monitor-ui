import{aH as s,a as t,j as e,aI as o,s as y,aJ as p,aC as a,aD as i}from"./index-ucqKeW45.js";import{g as d}from"./StoryDecorator-D_ImgbCs.js";import"./index-CBqU2yxZ.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-BXk91z3w.js";const m={children:"A warning message"},S={title:"Components/Message",component:s,argTypes:{},args:m,decorators:[d()]},g=()=>t(p,{children:[t("div",{children:[e("span",{children:"Une autre mission est encours avec cette unité."}),e("br",{}),e("span",{children:"Voulez-vous quand même conserver cette mission ?"})]}),t(h,{children:[e(a,{accent:i.WARNING,children:"Oui, la conserver"}),e(a,{accent:i.WARNING,children:"Non, l'abandonner"})]})]});function n(r){return t(u,{children:[e(s,{level:o.WARNING,...r}),e(s,{...r,children:"A very very very very very very very very very very very very very very very long text"}),e(s,{level:o.WARNING,children:g()})]})}const u=y.div`
  width: 450px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 16px;
  border: 1px solid ${r=>r.theme.color.slateGray};
`,h=y.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`;var c,l,v;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`function _Message(props: MessageProps) {
  return <StyledContainer>
      <Message level={Level.WARNING} {...props} />
      <Message {...props}>
        A very very very very very very very very very very very very very very very long text
      </Message>
      <Message level={Level.WARNING}>{childrenComponent()}</Message>
    </StyledContainer>;
}`,...(v=(l=n.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};const _=["_Message"];export{n as _Message,_ as __namedExportsOrder,S as default};
