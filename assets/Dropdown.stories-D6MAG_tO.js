import{aD as n,j as e,a8 as l,G as I,J as E,ae as D,D as m,aC as r,$ as _,c as S}from"./index-D3QtTYcx.js";import{r as w}from"./index-CBqU2yxZ.js";import{O as h}from"./Output-CQAZDSvb.js";import{S as s}from"./index-BbcyF1sc.js";import{M as N,A as c}from"./constants-VGTGrGmu.js";import{g as y}from"./generateStoryDecorator-DsoMrMh3.js";import"./_baseClone-CBkhujLI.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-DeLdszCZ.js";import"./fr_FR-BAq5VERt.js";const G={...N,title:"Components/Dropdown",component:n,argTypes:{accent:c.OPTIONAL_ACCENT,Icon:c.OPTIONAL_ICON,title:c.REACT_NODE},args:{title:"A dropdow"},decorators:[y()]};function t(d){const[i,o]=w.useState("∅");return e.jsxs(e.Fragment,{children:[e.jsxs(n,{...d,onSelect:o,children:[e.jsx(n.Item,{eventKey:"FIRST_MENU_ITEM",children:"First menu item"}),e.jsx(n.Item,{eventKey:"SECOND_MENU_ITEM",children:"Second menu item"}),e.jsx(n.Item,{eventKey:"THIRD_MENU_ITEM",children:"Third menu item"}),e.jsx(n.Item,{eventKey:"A_VERY_VERY_LONG_MENU_ITEM",children:"A very very long menu item"})]}),i!=="∅"&&e.jsx(h,{value:i}),e.jsxs(s,{children:[e.jsx(s.Subtitle,{children:"With icons"}),e.jsxs(n,{Icon:l,onSelect:o,title:"A dropdown with icons",children:[e.jsx(n.Item,{eventKey:"WE_FOUND_NEMO",Icon:I,children:"We found Nemo!"}),e.jsx(n.Item,{eventKey:"SECOND_MENU_ITEM",Icon:E,children:"A fancy boat"}),e.jsx(n.Item,{eventKey:"THIRD_MENU_ITEM",Icon:D,children:"Search a soul"}),e.jsx(n.Item,{eventKey:"A_VERY_VERY_LONG_MENU_ITEM",Icon:m,children:"Delete the entire universe"})]}),e.jsx(s.Subtitle,{children:'With "more" ellipsis'}),e.jsxs(n,{accent:r.SECONDARY,Icon:_,onSelect:o,children:[e.jsx(n.Item,{accent:r.SECONDARY,eventKey:"ARCHIVE",Icon:S}),e.jsx(n.Item,{accent:r.SECONDARY,eventKey:"DELETE",Icon:m})]})]})]})}t.__docgenInfo={description:"",methods:[],displayName:"_Dropdown",props:{Icon:{required:!1,tsType:{name:"FunctionComponent",elements:[{name:"intersection",raw:`SVGProps<SVGSVGElement> & {
  color?: string | undefined
  /** In pixels */
  size?: number | undefined
}`,elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"},{name:"signature",type:"object",raw:`{
  color?: string | undefined
  /** In pixels */
  size?: number | undefined
}`,signature:{properties:[{key:"color",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!1}},{key:"size",value:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}],required:!1},description:"In pixels"}]}}]}],raw:"FunctionComponent<IconProps>"},description:""},accent:{required:!1,tsType:{name:"union",raw:"Accent | undefined",elements:[{name:"Accent"},{name:"undefined"}]},description:""}}};var a,p,u;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`function _Dropdown(props: DropdownProps) {
  const [outputValue, setOutputValue] = useState<boolean | '∅'>('∅');
  return <>
      <Dropdown {...props} onSelect={setOutputValue}>
        <Dropdown.Item eventKey="FIRST_MENU_ITEM">First menu item</Dropdown.Item>
        <Dropdown.Item eventKey="SECOND_MENU_ITEM">Second menu item</Dropdown.Item>
        <Dropdown.Item eventKey="THIRD_MENU_ITEM">Third menu item</Dropdown.Item>
        <Dropdown.Item eventKey="A_VERY_VERY_LONG_MENU_ITEM">A very very long menu item</Dropdown.Item>
      </Dropdown>

      {outputValue !== '∅' && <Output value={outputValue} />}

      <Showcase>
        <Showcase.Subtitle>With icons</Showcase.Subtitle>

        <Dropdown Icon={Icon.Plus} onSelect={setOutputValue} title="A dropdown with icons">
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

        <Showcase.Subtitle>With &quot;more&quot; ellipsis</Showcase.Subtitle>
        <Dropdown accent={Accent.SECONDARY} Icon={Icon.More} onSelect={setOutputValue}>
          <Dropdown.Item accent={Accent.SECONDARY} eventKey="ARCHIVE" Icon={Icon.Archive} />
          <Dropdown.Item accent={Accent.SECONDARY} eventKey="DELETE" Icon={Icon.Delete} />
        </Dropdown>
      </Showcase>
    </>;
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const Y=["_Dropdown"];export{t as _Dropdown,Y as __namedExportsOrder,G as default};
