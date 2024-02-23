import{bB as h,s as c,T as p,bC as m,a as x,aJ as y,j as e,aC as N,aD as g,aL as S,bD as C}from"./index-BnGWIf5W.js";import{r as t}from"./index-CBqU2yxZ.js";import{G as D}from"./GlobalDecorator-DIeY2T5W.js";function R(){return t.useContext(h)}function w({fixedWidth:r,hasDarkMode:n=!1,withNewWindowButton:o=!1}={}){return function(i,{args:s}){const d=t.useRef(),[u,l]=t.useState(!1),W=t.useMemo(()=>({...r?{width:`${r}px`}:{},...n?{backgroundColor:s.isLight?p.color.gainsboro:p.color.white}:{}}),[s.isLight]),{forceUpdate:f}=m();return t.useEffect(()=>{f()},[f]),x(y,{children:[o&&e(B,{children:e(N,{accent:g.SECONDARY,onClick:()=>l(!0),size:S.SMALL,children:"OPEN IN NEW WINDOW"})}),!u&&e(_,{style:W,children:e(i,{})}),o&&u&&e(C,{features:{height:600,width:800},onUnload:()=>l(!1),children:e(v,{ref:d,Story:i,storyArgs:s})})]})}}function b({Story:r,storyArgs:n},o){const a=t.useRef(null),[i,s]=t.useState(!0);t.useImperativeHandle(o,()=>a.current);const d=t.useMemo(()=>({newWindowContainerRef:a.current?a:{current:window.document.createElement("div")}}),[i]);return t.useEffect(()=>{s(!1)},[]),e(I,{ref:a,children:!i&&e(h.Provider,{value:d,children:e(D,{children:e(E,{Story:r,storyArgs:n})})})})}const v=t.forwardRef(b);function E({Story:r,storyArgs:n}){const{newWindowContainerRef:o}=R();return e(r,{args:{...n,baseContainer:o.current}})}const _=c.div`
  height: 100%;
  padding: 16px;
  width: 100%;
`,B=c.div`
  position: fixed;
  right: 16px;
  top: 16px;
`,I=c.div`
  height: 100%;
  padding: 16px;
  width: 100%;
`;try{w.displayName="generateStoryDecorator",w.__docgenInfo={description:"",displayName:"generateStoryDecorator",props:{fixedWidth:{defaultValue:null,description:"",name:"fixedWidth",required:!1,type:{name:"number"}},hasDarkMode:{defaultValue:{value:"false"},description:"",name:"hasDarkMode",required:!1,type:{name:"boolean"}},withNewWindowButton:{defaultValue:{value:"false"},description:"",name:"withNewWindowButton",required:!1,type:{name:"boolean"}}}}}catch{}export{w as g};
