import{a as i,aJ as d,j as t,aC as e}from"./index-BnGWIf5W.js";import{r as b}from"./index-CBqU2yxZ.js";import{O as s}from"./Output-yz5BznoM.js";import"./isPlainObject-ByolnvGK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-y2Dgfp-9.js";import"./index-Ch9hqOxJ.js";import"./debounce-S-gaweFD.js";import"./_arrayIncludesWith-DoLrk8sb.js";const O={title:"Tests/Button",parameters:{options:{showPanel:!1}}};function a(){const[l,n]=b.useState("∅");return i(d,{children:[t(e,{onClick:()=>n("A button"),children:"A button"}),t(e,{"aria-label":"A button aria label",onClick:()=>n("A button aria label"),children:"A button with an aria label"}),t(e,{onClick:()=>n("A button title"),title:"A button title",children:"A button with a title"}),t("table",{children:i("tbody",{children:[t("tr",{"data-id":"0",children:t("td",{children:t(e,{onClick:()=>n("The first line button"),children:"The first line button"})})}),t("tr",{"data-id":"1",children:t("td",{children:t(e,{"aria-label":"The second line button aria label",onClick:()=>n("The second line button aria label"),children:"A second line button with an aria label"})})}),t("tr",{"data-id":"2",children:t("td",{children:t(e,{onClick:()=>n("The third line button title"),title:"The third line button title",children:"A third line button with a title"})})})]})}),l!=="∅"&&t(s,{value:l})]})}var o,u,r;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`function Template() {
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
}`,...(r=(u=a.parameters)==null?void 0:u.docs)==null?void 0:r.source}}};const V=["Template"];export{a as Template,V as __namedExportsOrder,O as default};
