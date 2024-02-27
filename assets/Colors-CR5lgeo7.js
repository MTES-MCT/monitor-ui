import{j as o,T as c}from"./index-D3QtTYcx.js";import{useMDXComponents as s}from"./index-DSz_1G2r.js";import{l as m}from"./_baseClone-CBkhujLI.js";import{C as l,d}from"./index-JFuh5IDx.js";import{D as p}from"./DocumentationBox-FUpCxQWd.js";import"./index-CBqU2yxZ.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./iframe-CNw6UkNo.js";import"../sb-preview/runtime.js";import"./index-CEV1QwRH.js";import"./fr_FR-BAq5VERt.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return o.jsxs(p,{children:[o.jsx(t.h1,{id:"colors",children:"Colors"}),o.jsx(t.h2,{id:"usage",children:"Usage"}),o.jsxs(t.p,{children:["You can use them in your components either within ",o.jsx(t.code,{children:"styled-components"}),":"]}),o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`import styled from 'styled-components'

const MyComponent = styled.div\`
  background-color: \${p => p.theme.color.gainsboro};
\`
`})}),o.jsxs(t.p,{children:["or by using the ",o.jsx(t.code,{children:"THEME"})," constant directly:"]}),o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-tsx",children:`import { THEME } from '@mtes-mct/monitor-ui'

const MyComponent = () => (
  <div style={{ backgroundColor: THEME.color.gainsboro }} />
)
`})}),o.jsx(t.h2,{id:"list",children:"List"}),o.jsx(l,{children:m.sortBy(Object.entries(c.color),[([e])=>e]).map(([e,i])=>o.jsx(d,{colors:{[e]:i},subtitle:"",title:e},e))})]})}function X(n={}){const{wrapper:t}={...s(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(r,{...n})}):r(n)}export{X as default};
