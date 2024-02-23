import{aF as e,a as t,j as n,aa as i,J as s,L as E,ag as l,D as I,aD as c,a1 as D,d as _,s as w}from"./index-ucqKeW45.js";import{r as v}from"./index-CBqU2yxZ.js";import{O as N}from"./Output-DuOCsNck.js";import{g as y}from"./StoryDecorator-D_ImgbCs.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-BXk91z3w.js";const M={title:"A dropdow menu"},g={title:"Components/Dropdown",component:e,argTypes:{},args:M,decorators:[y()]};function o(p){const[m,r]=v.useState("∅");return t(S,{children:[t(e,{open:!0,...p,onSelect:r,children:[n(e.Item,{eventKey:"FIRST_MENU_ITEM",children:"First menu item"}),n(e.Item,{eventKey:"SECOND_MENU_ITEM",children:"Second menu item"}),n(e.Item,{eventKey:"THIRD_MENU_ITEM",children:"Third menu item"}),n(e.Item,{eventKey:"A_VERY_VERY_LONG_MENU_ITEM",children:"A very very long menu item"})]}),t(e,{Icon:i,onSelect:r,open:!0,title:"A dropdown menu with icons",children:[n(e.Item,{eventKey:"WE_FOUND_NEMO",Icon:s,children:"We found Nemo!"}),n(e.Item,{eventKey:"SECOND_MENU_ITEM",Icon:E,children:"A fancy boat"}),n(e.Item,{eventKey:"THIRD_MENU_ITEM",Icon:l,children:"Search a soul"}),n(e.Item,{eventKey:"A_VERY_VERY_LONG_MENU_ITEM",Icon:I,children:"Delete the entire universe"})]}),n("div",{children:t(e,{accent:c.SECONDARY,...p,Icon:D,onSelect:r,open:!0,title:"",children:[n(e.Item,{accent:c.SECONDARY,eventKey:"ARCHIVE",Icon:_}),n(e.Item,{accent:c.SECONDARY,eventKey:"DELETE",Icon:I})]})}),m!=="∅"&&n(N,{value:m})]})}const S=w.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;var a,d,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`function _Dropdown(props: DropdownProps) {
  const [outputValue, setOutputValue] = useState<boolean | '∅'>('∅');
  return <Box>
      <Dropdown open {...props} onSelect={setOutputValue}>
        <Dropdown.Item eventKey="FIRST_MENU_ITEM">First menu item</Dropdown.Item>
        <Dropdown.Item eventKey="SECOND_MENU_ITEM">Second menu item</Dropdown.Item>
        <Dropdown.Item eventKey="THIRD_MENU_ITEM">Third menu item</Dropdown.Item>
        <Dropdown.Item eventKey="A_VERY_VERY_LONG_MENU_ITEM">A very very long menu item</Dropdown.Item>
      </Dropdown>

      <Dropdown Icon={Icon.Plus} onSelect={setOutputValue} open title="A dropdown menu with icons">
        <Dropdown.Item eventKey="WE_FOUND_NEMO" Icon={Icon.Fishery}>
          We found Nemo!
        </Dropdown.Item>
        <Dropdown.Item eventKey="SECOND_MENU_ITEM" Icon={Icon.FleetSegment}>
          A fancy boat
        </Dropdown.Item>
        <Dropdown.Item eventKey="THIRD_MENU_ITEM" Icon={Icon.Search}>
          Search a soul
        </Dropdown.Item>
        <Dropdown.Item eventKey="A_VERY_VERY_LONG_MENU_ITEM" Icon={Icon.Delete}>
          Delete the entire universe
        </Dropdown.Item>
      </Dropdown>
      <div>
        <Dropdown accent={Accent.SECONDARY} {...props} Icon={Icon.More} onSelect={setOutputValue} open title="">
          <Dropdown.Item accent={Accent.SECONDARY} eventKey="ARCHIVE" Icon={Icon.Archive} />
          <Dropdown.Item accent={Accent.SECONDARY} eventKey="DELETE" Icon={Icon.Delete} />
        </Dropdown>
      </div>
      {outputValue !== '∅' && <Output value={outputValue} />}
    </Box>;
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const x=["_Dropdown"];export{o as _Dropdown,x as __namedExportsOrder,g as default};
