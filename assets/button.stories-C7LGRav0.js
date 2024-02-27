import{j as t,aB as e}from"./index-D3QtTYcx.js";import{r}from"./index-CBqU2yxZ.js";import{O as s}from"./Output-CQAZDSvb.js";import"./_baseClone-CBkhujLI.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";const T={title:"Tests/Button",parameters:{options:{showPanel:!1}}};function a(){const[i,n]=r.useState("∅");return t.jsxs(t.Fragment,{children:[t.jsx(e,{onClick:()=>n("A button"),children:"A button"}),t.jsx(e,{"aria-label":"A button aria label",onClick:()=>n("A button aria label"),children:"A button with an aria label"}),t.jsx(e,{onClick:()=>n("A button title"),title:"A button title",children:"A button with a title"}),t.jsx("table",{children:t.jsxs("tbody",{children:[t.jsx("tr",{"data-id":"0",children:t.jsx("td",{children:t.jsx(e,{onClick:()=>n("The first line button"),children:"The first line button"})})}),t.jsx("tr",{"data-id":"1",children:t.jsx("td",{children:t.jsx(e,{"aria-label":"The second line button aria label",onClick:()=>n("The second line button aria label"),children:"A second line button with an aria label"})})}),t.jsx("tr",{"data-id":"2",children:t.jsx("td",{children:t.jsx(e,{onClick:()=>n("The third line button title"),title:"The third line button title",children:"A third line button with a title"})})})]})}),i!=="∅"&&t.jsx(s,{value:i})]})}a.__docgenInfo={description:"",methods:[],displayName:"Template"};var l,o,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`function Template() {
  const [outputValue, setOutputValue] = useState<any>('∅');
  return <>
      <Button onClick={() => setOutputValue('A button')}>A button</Button>
      <Button aria-label="A button aria label" onClick={() => setOutputValue('A button aria label')}>
        A button with an aria label
      </Button>
      <Button onClick={() => setOutputValue('A button title')} title="A button title">
        A button with a title
      </Button>

      <table>
        <tbody>
          <tr data-id="0">
            <td>
              <Button onClick={() => setOutputValue('The first line button')}>The first line button</Button>
            </td>
          </tr>
          <tr data-id="1">
            <td>
              <Button aria-label="The second line button aria label" onClick={() => setOutputValue('The second line button aria label')}>
                A second line button with an aria label
              </Button>
            </td>
          </tr>
          <tr data-id="2">
            <td>
              <Button onClick={() => setOutputValue('The third line button title')} title="The third line button title">
                A third line button with a title
              </Button>
            </td>
          </tr>
        </tbody>
      </table>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(u=(o=a.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const B=["Template"];export{a as Template,B as __namedExportsOrder,T as default};
