import{aU as y,bQ as m,bR as O,bS as R,aT as b,bT as U,bU as C,bV as h,bW as S,bX as D,bY as P,bZ as N,b_ as M,aW as o,aD as g,b$ as I,a as F,j as a,T as s,U as z,s as Y}from"./index-DOn5IH5D.js";import{g as B}from"./StoryDecorator-CIMcLWSk.js";import{v as G}from"./values-Ct3p2cou.js";import"./index-CBqU2yxZ.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";import"./GlobalDecorator-DCTCzM4b.js";function f(t){var r=t.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return'"'+r.replace(/"/g,'\\"')+'"'}var u=function(r){return(r<10?"0":"")+r},H=typeof Date.prototype.toISOString=="function"?function(r){return r.toISOString()}:function(r){return r.getUTCFullYear()+"-"+u(r.getUTCMonth()+1)+"-"+u(r.getUTCDate())+"T"+u(r.getUTCHours())+":"+u(r.getUTCMinutes())+":"+u(r.getUTCSeconds())+"."+(r.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};function _(t,r){var e=function(d){var l=r.concat([t]);return R(d,l)?"<Circular>":_(d,l)},n=function(c,d){return m(function(l){return f(l)+": "+e(c[l])},d.slice().sort())};switch(Object.prototype.toString.call(t)){case"[object Arguments]":return"(function() { return arguments; }("+m(e,t).join(", ")+"))";case"[object Array]":return"["+m(e,t).concat(n(t,O(function(c){return/^\d+$/.test(c)},y(t)))).join(", ")+"]";case"[object Boolean]":return typeof t=="object"?"new Boolean("+e(t.valueOf())+")":t.toString();case"[object Date]":return"new Date("+(isNaN(t.valueOf())?e(NaN):f(H(t)))+")";case"[object Map]":return"new Map("+e(Array.from(t))+")";case"[object Null]":return"null";case"[object Number]":return typeof t=="object"?"new Number("+e(t.valueOf())+")":1/t===-1/0?"-0":t.toString(10);case"[object Set]":return"new Set("+e(Array.from(t).sort())+")";case"[object String]":return typeof t=="object"?"new String("+e(t.valueOf())+")":f(t);case"[object Undefined]":return"undefined";default:if(typeof t.toString=="function"){var i=t.toString();if(i!=="[object Object]")return i}return"{"+n(t,y(t)).join(", ")+"}"}}var T=b(function(r){return _(r,[])}),k=U(function(r,e,n){var i=r(e),c=r(n);return i<c?-1:i>c?1:0});function A(t){var r=Object.prototype.toString.call(t);return r==="[object Function]"||r==="[object AsyncFunction]"||r==="[object GeneratorFunction]"||r==="[object AsyncGeneratorFunction]"}var L=C(function(r,e){if(h(r)){if(h(e))return r.concat(e);throw new TypeError(T(e)+" is not an array")}if(S(r)){if(S(e))return r+e;throw new TypeError(T(e)+" is not a string")}if(r!=null&&A(r["fantasy-land/concat"]))return r["fantasy-land/concat"](e);if(r!=null&&A(r.concat))return r.concat(e);throw new TypeError(T(r)+' does not have a method named "concat" or "fantasy-land/concat"')}),V=b(function(r){for(var e={},n=0;n<r.length;)e[r[n][0]]=r[n][1],n+=1;return e});const $=V;var W=C(function(r,e){return Array.prototype.slice.call(e,0).sort(r)}),K=b(function(r){var e=[];for(var n in r)D(n,r)&&(e[e.length]=[n,r[n]]);return e});const Z=K,v=P(G,L(["UNDEFINED"]),W(k(N))),q=P(Z,M(([t,r])=>[t,r==="UNDEFINED"?void 0:r]),$),Q={children:"A tag",isLight:!1},sr={title:"Elements/Tag",component:o,argTypes:{accent:{control:"inline-radio",options:v(g)},bullet:{control:"inline-radio",options:v(I)},bulletColor:{control:"color"},color:{control:"color"},backgroundColor:{control:"color"},withBullet:{control:"boolean"},iconColor:{control:"color"}},args:Q,decorators:[B({hasDarkMode:!0})]};function p(t){const r=q(t);return F(X,{children:[a(o,{accent:g.PRIMARY,...r,children:"A primary tag"}),a(o,{accent:g.SECONDARY,...r,children:"A secondary tag"}),a(o,{accent:g.TERTIARY,...r,children:"A tertiary tag"}),a(o,{accent:g.TERTIARY,withBullet:!0,...r,children:"A tertiary tag with bullet"}),a(o,{iconColor:s.color.mediumSeaGreen,withBullet:!0,...r,children:"A tag with a green bullet"}),a(o,{bullet:I.DISK,bulletColor:s.color.mediumSeaGreen,...r,children:"A tag with a green bullet OLD VERSION"}),a(o,{borderColor:s.color.slateGray,...r,children:"A tag with a border"}),a(o,{backgroundColor:s.color.maximumRed15,color:s.color.charcoal,Icon:z,...r,children:"A tag with custom colors and icon"})]})}const X=Y.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;var E,w,j;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`function _Tag(props: TagProps) {
  const normalizedProps = getUndefinedPropsFromUndefinedStringProps(props);
  return <TagsContainer>
      <Tag accent={Accent.PRIMARY} {...normalizedProps}>
        A primary tag
      </Tag>
      <Tag accent={Accent.SECONDARY} {...normalizedProps}>
        A secondary tag
      </Tag>
      <Tag accent={Accent.TERTIARY} {...normalizedProps}>
        A tertiary tag
      </Tag>
      <Tag accent={Accent.TERTIARY} withBullet {...normalizedProps}>
        A tertiary tag with bullet
      </Tag>
      <Tag iconColor={THEME.color.mediumSeaGreen} withBullet {...normalizedProps}>
        A tag with a green bullet
      </Tag>
      <Tag bullet={TagBullet.DISK} bulletColor={THEME.color.mediumSeaGreen} {...normalizedProps}>
        A tag with a green bullet OLD VERSION
      </Tag>
      <Tag borderColor={THEME.color.slateGray} {...normalizedProps}>
        A tag with a border
      </Tag>
      <Tag backgroundColor={THEME.color.maximumRed15} color={THEME.color.charcoal} Icon={Icon.Link} {...normalizedProps}>
        A tag with custom colors and icon
      </Tag>
    </TagsContainer>;
}`,...(j=(w=p.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const ur=["_Tag"];export{p as _Tag,ur as __namedExportsOrder,sr as default};
