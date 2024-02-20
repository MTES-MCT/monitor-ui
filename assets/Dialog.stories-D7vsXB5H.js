import{aB as n,a,j as o,aC as i,aD as r,aE as e}from"./index-DOn5IH5D.js";import{g}from"./StoryDecorator-CIMcLWSk.js";import"./index-CBqU2yxZ.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DCTCzM4b.js";const m={isAbsolute:!1},y={title:"Components/Dialog",component:n,argTypes:{},args:m,decorators:[g()]};function t(p){return a(n,{...p,children:[o(n.Title,{children:"Dialog Title"}),o(n.Body,{children:o("p",{children:"Dialog body."})}),a(n.Action,{children:[o(i,{accent:r.TERTIARY,onClick:e.noop,children:"Cancel"}),o(i,{accent:r.PRIMARY,onClick:e.noop,children:"Confirm"})]})]})}var c,l,s;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`function _Dialog(props: DialogProps) {
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
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const _=["_Dialog"];export{t as _Dialog,_ as __namedExportsOrder,y as default};
