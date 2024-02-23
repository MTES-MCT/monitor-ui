import{aS as t,a as s,j as o,s as l,aE as p}from"./index-BnGWIf5W.js";import{g}from"./StoryDecorator-BYfjGXyr.js";import"./index-CBqU2yxZ.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DIeY2T5W.js";const d={children:"A single deletable tag",onDelete:p.noop},j={title:"Elements/SingleTag",component:t,argTypes:{},args:d,decorators:[g()]};function r(e){return s(m,{children:[o(t,{...e}),o(t,{...e,children:"A very very very very very very long text"})]})}const m=l.div`
  width: 250px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 16px;
  border: 1px solid ${e=>e.theme.color.slateGray};
`;var n,a,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`function _SingleTag(props: SingleTagProps) {
  return <StyledContainer>
      <SingleTag {...props} />
      <SingleTag {...props}>A very very very very very very long text</SingleTag>
    </StyledContainer>;
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const A=["_SingleTag"];export{r as _SingleTag,A as __namedExportsOrder,j as default};
