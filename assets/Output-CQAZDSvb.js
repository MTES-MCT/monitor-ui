import{az as s,j as t}from"./index-D3QtTYcx.js";import{r as o}from"./index-CBqU2yxZ.js";function i({label:r="Output",value:e}){const n=o.useMemo(()=>e===void 0?"undefined":JSON.stringify(e,null,2),[e]);return t.jsxs(t.Fragment,{children:[t.jsx(p,{children:`${r} (type: ${typeof e=="object"?e.constructor.name:typeof e})`}),t.jsx(a,{className:"mui-output","data-cy":r,children:n})]})}const p=s.h3`
  font-size: 100%;
  line-height: 1.3846;
  margin: 16px 0 8px 0;
`,a=s.pre`
  background-color: #1e1e1e;
  color: #ffffff;
  margin: 0;
  padding: 8px;
`;i.__docgenInfo={description:"",methods:[],displayName:"Output",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Output'",computed:!1}},value:{required:!1,tsType:{name:"any"},description:""}}};export{i as O};
