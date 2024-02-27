import{bF as C,az as f,T as g,j as e,aB as s,aI as i,aC as y,bG as A}from"./index-D3QtTYcx.js";import{r as t}from"./index-CBqU2yxZ.js";import"./_baseClone-CBkhujLI.js";import{S as M}from"./StoryBox-DeLdszCZ.js";function _(){return t.useContext(C)}function V({box:o,withBackgroundButton:c=!1,withNewWindowButton:n=!1,withPseudoStateButtons:r}={}){return function(d,{args:x}){const h=t.useRef(),[p,W]=t.useState(!1),[S,j]=t.useState(!1),[u,m]=t.useState(void 0),v={backgroundColor:p?g.color.gainsboro:g.color.white,...o?{borderRight:`1px solid ${g.color.lightGray}`,width:o.width+16}:{}},b=()=>{if(!r)return;document.querySelector(r.targetSelector).classList.remove("_hover","_focus","_active"),m(void 0)},w=l=>{if(!r)return;const L=document.querySelector(r.targetSelector);b(),L.classList.add(l),m(l)},k=()=>{W(l=>!l)};return e.jsxs(e.Fragment,{children:[!S&&e.jsx(N,{style:{},children:e.jsx(R,{style:v,children:e.jsx(d,{})})}),e.jsxs(E,{children:[!!r&&e.jsxs(e.Fragment,{children:[e.jsx(s,{disabled:!u,onClick:()=>b(),size:i.SMALL,children:":default"}),e.jsx(s,{disabled:u==="_hover",onClick:()=>w("_hover"),size:i.SMALL,children:":hover"}),e.jsx(s,{disabled:u==="_focus",onClick:()=>w("_focus"),size:i.SMALL,children:":focus"}),e.jsx(s,{disabled:u==="_active",onClick:()=>w("_active"),size:i.SMALL,children:":active"})]}),c&&e.jsx(s,{accent:y.PRIMARY,onClick:k,size:i.SMALL,children:`Set background to ${p?"White":"Gainsboro"}`}),n&&e.jsx(s,{accent:y.PRIMARY,onClick:()=>j(!0),size:i.SMALL,children:"Open in new window"})]}),n&&S&&e.jsx(A,{features:{height:600,width:800},onUnload:()=>j(!1),children:e.jsx(B,{ref:h,innerBoxStyle:v,Story:d,storyArgs:x})})]})}}function z({innerBoxStyle:o,Story:c,storyArgs:n},r){const a=t.useRef(null),[d,x]=t.useState(!0);t.useImperativeHandle(r,()=>a.current);const h=t.useMemo(()=>({newWindowContainerRef:a.current?a:{current:window.document.createElement("div")}}),[d]);return t.useEffect(()=>{x(!1)},[]),e.jsx(F,{ref:a,children:!d&&e.jsx(C.Provider,{value:h,children:e.jsx(M,{children:e.jsx(R,{style:o,children:e.jsx(I,{Story:c,storyArgs:n})})})})})}const B=t.forwardRef(z);function I({Story:o,storyArgs:c}){const{newWindowContainerRef:n}=_();return e.jsx(o,{args:{...c,baseContainer:n.current}})}const N=f.div`
  background-color: #f6f9fc;
  height: 100%;
  width: 100%;
`,R=f.div.attrs((...o)=>({...o,id:"storyInnerBox"}))`
  background-color: white;
  height: 100%;
  padding: 16px 32px;
  width: 100%;
`,E=f.div`
  position: fixed;
  right: 16px;
  bottom: 16px;

  > .Element-Button {
    margin-left: 8px;
  }
`,F=f.div`
  background-color: #f6f9fc;
  height: 100%;
  padding: 0;
  width: 100%;
`;export{V as g};
