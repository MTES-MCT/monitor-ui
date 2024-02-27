import{aA as n,j as o,aB as i,aC as t}from"./index-D3QtTYcx.js";import{l as a}from"./_baseClone-CBkhujLI.js";import{M as p,A as m}from"./constants-VGTGrGmu.js";import{g as d}from"./generateStoryDecorator-DsoMrMh3.js";import"./index-CBqU2yxZ.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-DeLdszCZ.js";import"./fr_FR-BAq5VERt.js";const j={...p,title:"Components/Dialog",component:n,argTypes:{isAbsolute:m.OPTIONAL_BOOLEAN},args:{isAbsolute:!1},decorators:[d()]};function e(c){return o.jsxs(n,{...c,children:[o.jsx(n.Title,{children:"Dialog Title"}),o.jsx(n.Body,{children:o.jsx("p",{children:"Dialog body."})}),o.jsxs(n.Action,{children:[o.jsx(i,{accent:t.TERTIARY,onClick:a.noop,children:"Cancel"}),o.jsx(i,{accent:t.PRIMARY,onClick:a.noop,children:"Confirm"})]})]})}e.__docgenInfo={description:"",methods:[],displayName:"_Dialog",props:{isAbsolute:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""}}};var r,s,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`function _Dialog(props: DialogProps) {
  return <Dialog {...props}>
      <Dialog.Title>Dialog Title</Dialog.Title>
      <Dialog.Body>
        <p>Dialog body.</p>
      </Dialog.Body>

      <Dialog.Action>
        <Button accent={Accent.TERTIARY} onClick={noop}>
          Cancel
        </Button>
        <Button accent={Accent.PRIMARY} onClick={noop}>
          Confirm
        </Button>
      </Dialog.Action>
    </Dialog>;
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const y=["_Dialog"];export{e as _Dialog,y as __namedExportsOrder,j as default};
