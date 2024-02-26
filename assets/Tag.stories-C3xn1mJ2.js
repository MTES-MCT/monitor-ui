import{aC as t,aQ as n,j as e,T as o,aR as c,R as d}from"./index-0nDB5Zzz.js";import{S as u}from"./index-DCc3o973.js";import{a as m,T as g}from"./constants-D7cOJi0A.js";import{g as p}from"./generateStoryDecorator-jcZX8bPx.js";import"./index-CBqU2yxZ.js";import"./_baseClone-CBkhujLI.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";const T={accent:t.PRIMARY,backgroundColor:void 0,borderColor:void 0,bullet:void 0,bulletColor:void 0,children:"A tag",color:void 0,Icon:void 0,iconColor:void 0,isLight:!1,withBullet:!1},B={title:"Elements/Tag",component:n,argTypes:{accent:{control:"radio",options:m},bullet:{control:"radio",options:[...g,void 0]},bulletColor:{control:{type:"color"}},color:{control:{type:"color"}},backgroundColor:{control:{type:"color"}},withBullet:{control:"boolean"},iconColor:{control:{type:"color"}}},args:T,decorators:[p({withBackgroundButton:!0})]};function r(s){return e.jsxs(e.Fragment,{children:[e.jsx(n,{...s,children:"A tag"}),e.jsxs(u,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(n,{accent:t.SECONDARY,children:"A secondary tag"}),e.jsx(n,{accent:t.TERTIARY,children:"A tertiary tag"}),e.jsx(n,{accent:t.TERTIARY,withBullet:!0,children:"A tertiary tag with bullet"}),e.jsx(n,{iconColor:o.color.mediumSeaGreen,withBullet:!0,children:"A tag with a green bullet"}),e.jsx(n,{bullet:c.DISK,bulletColor:o.color.mediumSeaGreen,children:"A tag with a green bullet OLD VERSION"}),e.jsx(n,{borderColor:o.color.slateGray,children:"A tag with a border"}),e.jsx(n,{backgroundColor:o.color.maximumRed15,color:o.color.charcoal,Icon:d,children:"A tag with custom colors and icon"})]})]})}r.__docgenInfo={description:"",methods:[],displayName:"_Tag",props:{Icon:{required:!1,tsType:{name:"union",raw:"FunctionComponent<IconProps> | undefined",elements:[{name:"FunctionComponent",elements:[{name:"intersection",raw:`SVGProps<SVGSVGElement> & {
  color?: string | undefined
  /** In pixels */
  size?: number | undefined
}`,elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"},{name:"signature",type:"object",raw:`{
  color?: string | undefined
  /** In pixels */
  size?: number | undefined
}`,signature:{properties:[{key:"color",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!1}},{key:"size",value:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}],required:!1},description:"In pixels"}]}}]}],raw:"FunctionComponent<IconProps>"},{name:"undefined"}]},description:""},accent:{required:!1,tsType:{name:"union",raw:"Accent | undefined",elements:[{name:"Accent"},{name:"undefined"}]},description:""},backgroundColor:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},borderColor:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},bullet:{required:!1,tsType:{name:"union",raw:"TagBullet | undefined",elements:[{name:"TagBullet"},{name:"undefined"}]},description:""},bulletColor:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},iconColor:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},isLight:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},withBullet:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""}}};var a,i,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`function _Tag(props: TagProps) {
  return <>
      <Tag {...props}>A tag</Tag>

      <Showcase style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <Tag accent={Accent.SECONDARY}>A secondary tag</Tag>
        <Tag accent={Accent.TERTIARY}>A tertiary tag</Tag>
        <Tag accent={Accent.TERTIARY} withBullet>
          A tertiary tag with bullet
        </Tag>
        <Tag iconColor={THEME.color.mediumSeaGreen} withBullet>
          A tag with a green bullet
        </Tag>
        <Tag bullet={TagBullet.DISK} bulletColor={THEME.color.mediumSeaGreen}>
          A tag with a green bullet OLD VERSION
        </Tag>
        <Tag borderColor={THEME.color.slateGray}>A tag with a border</Tag>
        <Tag backgroundColor={THEME.color.maximumRed15} color={THEME.color.charcoal} Icon={Icon.Link}>
          A tag with custom colors and icon
        </Tag>
      </Showcase>
    </>;
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const j=["_Tag"];export{r as _Tag,j as __namedExportsOrder,B as default};
