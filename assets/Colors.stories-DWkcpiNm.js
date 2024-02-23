import{s as t,j as e,T as c,a as n}from"./index-ucqKeW45.js";import{g as d}from"./StoryDecorator-D_ImgbCs.js";import"./index-CBqU2yxZ.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-BXk91z3w.js";const m=t.div`
  display: flex;
  flex-wrap: wrap;
`,x=t.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 16px;
  border: ${r=>`1px solid ${r.theme.color.lightGray}`};
  > span {
    font-size: 13px;
  }
`,l=t.div`
  width: 150px;
  height: 100px;
  background-color: ${r=>r.color};
  border: ${r=>`1px solid ${r.theme.color.lightGray}`};
`,_={title:"Colors",component:l,decorators:[d({fixedWidth:1e3})]};function o(){return e(m,{children:Object.entries(c.color).map(([r,a])=>n(x,{children:[n("span",{children:[r," ",e("br",{})," ",a]}),e(l,{color:a})]},r))})}var p,s,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`function _Colors() {
  return <Wrapper>
      {Object.entries(THEME.color).map(([key, value]) => <ColorContainer key={key}>
          <span>
            {key} <br /> {value}
          </span>
          <ColorSample color={value} />
        </ColorContainer>)}
    </Wrapper>;
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const $=["_Colors"];export{o as _Colors,$ as __namedExportsOrder,_ as default};
