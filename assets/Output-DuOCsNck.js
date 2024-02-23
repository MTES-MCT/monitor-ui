import{s as n,a as s,aJ as i,j as r}from"./index-ucqKeW45.js";import{r as p}from"./index-CBqU2yxZ.js";function a({label:t="Output",value:e}){const o=p.useMemo(()=>e===void 0?"undefined":JSON.stringify(e,null,2),[e]);return s(i,{children:[r(u,{children:`${t} (type: ${typeof e=="object"?e.constructor.name:typeof e})`}),r(c,{className:"mui-output","data-cy":t,children:o})]})}const u=n.h3`
  font-size: 100%;
  line-height: 1.3846;
  margin: 16px 0 8px 0;
`,c=n.pre`
  background-color: #1e1e1e;
  color: #ffffff;
  margin: 0;
  padding: 8px;
`;try{a.displayName="Output",a.__docgenInfo={description:"",displayName:"Output",props:{label:{defaultValue:{value:"Output"},description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}}}}}catch{}export{a as O};
