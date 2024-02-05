"use strict";(self.webpackChunk_mtes_mct_monitor_ui_root=self.webpackChunk_mtes_mct_monitor_ui_root||[]).push([[2139],{"./stories/components/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Dropdown:()=>_Dropdown,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_storybook_components_Output__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/components/Output.tsx"),_storybook_components_StoryDecorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/components/StoryDecorator.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Dropdown",component:_src__WEBPACK_IMPORTED_MODULE_3__.Lt,argTypes:{},args:{title:"A dropdow menu"},decorators:[(0,_storybook_components_StoryDecorator__WEBPACK_IMPORTED_MODULE_2__.N)()]};function _Dropdown(props){const[outputValue,setOutputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("∅");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Box,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.Lt,{open:!0,...props,onSelect:setOutputValue,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.Lt.Item,{eventKey:"FIRST_MENU_ITEM",children:"First menu item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.Lt.Item,{eventKey:"SECOND_MENU_ITEM",children:"Second menu item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.Lt.Item,{eventKey:"THIRD_MENU_ITEM",children:"Third menu item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.Lt.Item,{eventKey:"A_VERY_VERY_LONG_MENU_ITEM",children:"A very very long menu item"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.Lt,{Icon:_src__WEBPACK_IMPORTED_MODULE_3__.JO.Plus,onSelect:setOutputValue,open:!0,title:"A dropdown menu with icons",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.Lt.Item,{eventKey:"WE_FOUND_NEMO",Icon:_src__WEBPACK_IMPORTED_MODULE_3__.JO.Fishery,children:"We found Nemo!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.Lt.Item,{eventKey:"SECOND_MENU_ITEM",Icon:_src__WEBPACK_IMPORTED_MODULE_3__.JO.FleetSegment,children:"A fancy boat"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.Lt.Item,{eventKey:"THIRD_MENU_ITEM",Icon:_src__WEBPACK_IMPORTED_MODULE_3__.JO.Search,children:"Search a soul"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.Lt.Item,{eventKey:"A_VERY_VERY_LONG_MENU_ITEM",Icon:_src__WEBPACK_IMPORTED_MODULE_3__.JO.Delete,children:"Delete the entire universe"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.Lt,{accent:_src__WEBPACK_IMPORTED_MODULE_3__.Le.SECONDARY,...props,Icon:_src__WEBPACK_IMPORTED_MODULE_3__.JO.More,onSelect:setOutputValue,open:!0,title:"",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.Lt.Item,{accent:_src__WEBPACK_IMPORTED_MODULE_3__.Le.SECONDARY,eventKey:"ARCHIVE",Icon:_src__WEBPACK_IMPORTED_MODULE_3__.JO.Archive}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.Lt.Item,{accent:_src__WEBPACK_IMPORTED_MODULE_3__.Le.SECONDARY,eventKey:"DELETE",Icon:_src__WEBPACK_IMPORTED_MODULE_3__.JO.Delete})]})}),"∅"!==outputValue&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_components_Output__WEBPACK_IMPORTED_MODULE_1__.r,{value:outputValue})]})}_Dropdown.displayName="_Dropdown";const Box=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;_Dropdown.parameters={..._Dropdown.parameters,docs:{..._Dropdown.parameters?.docs,source:{originalSource:'function _Dropdown(props: DropdownProps) {\n  const [outputValue, setOutputValue] = useState<boolean | \'∅\'>(\'∅\');\n  return <Box>\n      <Dropdown open {...props} onSelect={setOutputValue}>\n        <Dropdown.Item eventKey="FIRST_MENU_ITEM">First menu item</Dropdown.Item>\n        <Dropdown.Item eventKey="SECOND_MENU_ITEM">Second menu item</Dropdown.Item>\n        <Dropdown.Item eventKey="THIRD_MENU_ITEM">Third menu item</Dropdown.Item>\n        <Dropdown.Item eventKey="A_VERY_VERY_LONG_MENU_ITEM">A very very long menu item</Dropdown.Item>\n      </Dropdown>\n\n      <Dropdown Icon={Icon.Plus} onSelect={setOutputValue} open title="A dropdown menu with icons">\n        <Dropdown.Item eventKey="WE_FOUND_NEMO" Icon={Icon.Fishery}>\n          We found Nemo!\n        </Dropdown.Item>\n        <Dropdown.Item eventKey="SECOND_MENU_ITEM" Icon={Icon.FleetSegment}>\n          A fancy boat\n        </Dropdown.Item>\n        <Dropdown.Item eventKey="THIRD_MENU_ITEM" Icon={Icon.Search}>\n          Search a soul\n        </Dropdown.Item>\n        <Dropdown.Item eventKey="A_VERY_VERY_LONG_MENU_ITEM" Icon={Icon.Delete}>\n          Delete the entire universe\n        </Dropdown.Item>\n      </Dropdown>\n      <div>\n        <Dropdown accent={Accent.SECONDARY} {...props} Icon={Icon.More} onSelect={setOutputValue} open title="">\n          <Dropdown.Item accent={Accent.SECONDARY} eventKey="ARCHIVE" Icon={Icon.Archive} />\n          <Dropdown.Item accent={Accent.SECONDARY} eventKey="DELETE" Icon={Icon.Delete} />\n        </Dropdown>\n      </div>\n      {outputValue !== \'∅\' && <Output value={outputValue} />}\n    </Box>;\n}',..._Dropdown.parameters?.docs?.source}}};const __namedExportsOrder=["_Dropdown"];try{_Dropdown.displayName="_Dropdown",_Dropdown.__docgenInfo={description:"",displayName:"_Dropdown",props:{Icon:{defaultValue:null,description:"",name:"Icon",required:!1,type:{name:"FunctionComponent<IconProps>"}},accent:{defaultValue:null,description:"",name:"accent",required:!1,type:{name:"enum",value:[{value:'"PRIMARY"'},{value:'"SECONDARY"'},{value:'"TERTIARY"'},{value:'"WARNING"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/components/Dropdown.stories.tsx#_Dropdown"]={docgenInfo:_Dropdown.__docgenInfo,name:"_Dropdown",path:"stories/components/Dropdown.stories.tsx#_Dropdown"})}catch(__react_docgen_typescript_loader_error){}},"./.storybook/components/Output.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Output});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Output({label="Output",value}){const valueAsString=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>void 0===value?"undefined":JSON.stringify(value,null,2)),[value]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Title,{children:`${label} (type: ${"object"==typeof value?value.constructor.name:typeof value})`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Value,{className:"mui-output","data-cy":label,children:valueAsString})]})}const Title=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h3`
  font-size: 100%;
  line-height: 1.3846;
  margin: 16px 0 8px 0;
`,Value=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.pre`
  background-color: #1e1e1e;
  color: #ffffff;
  margin: 0;
  padding: 8px;
`;try{Output.displayName="Output",Output.__docgenInfo={description:"",displayName:"Output",props:{label:{defaultValue:{value:"Output"},description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/Output.tsx#Output"]={docgenInfo:Output.__docgenInfo,name:"Output",path:".storybook/components/Output.tsx#Output"})}catch(__react_docgen_typescript_loader_error){}},"./.storybook/components/StoryDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>generateStoryDecorator});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_GlobalDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/components/GlobalDecorator.tsx"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function generateStoryDecorator({fixedWidth,hasDarkMode=!1,withNewWindowButton=!1}={}){return function StoryDecorator(Story,{args}){const newWindowRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[isNewWindowOpen,setIsNewWindowOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),style=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...fixedWidth?{width:`${fixedWidth}px`}:{},...hasDarkMode?{backgroundColor:args.isLight?_src__WEBPACK_IMPORTED_MODULE_2__.C6.color.gainsboro:_src__WEBPACK_IMPORTED_MODULE_2__.C6.color.white}:{}})),[args.isLight]),{forceUpdate}=(0,_src__WEBPACK_IMPORTED_MODULE_2__.NW)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{forceUpdate()}),[forceUpdate]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[withNewWindowButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(NewWindowButtonBox,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.zx,{accent:_src__WEBPACK_IMPORTED_MODULE_2__.Le.SECONDARY,onClick:()=>setIsNewWindowOpen(!0),size:_src__WEBPACK_IMPORTED_MODULE_2__.$u.SMALL,children:"OPEN IN NEW WINDOW"})}),!isNewWindowOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StoryBox,{style,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})}),withNewWindowButton&&isNewWindowOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.YO,{features:{height:600,width:800},onUnload:()=>setIsNewWindowOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(NewWindowStoryWrapper,{ref:newWindowRef,Story,storyArgs:args})})]})}}function NewWindowStoryWrapperWithRef({Story,storyArgs},ref){const wrapperRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[isFirstRender,setIsFirstRender]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,(()=>wrapperRef.current));const newWindowContextProviderValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({newWindowContainerRef:wrapperRef.current?wrapperRef:{current:window.document.createElement("div")}})),[isFirstRender]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsFirstRender(!1)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(NewWindowStoryBox,{ref:wrapperRef,children:!isFirstRender&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.xo.Provider,{value:newWindowContextProviderValue,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_GlobalDecorator__WEBPACK_IMPORTED_MODULE_1__.y,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(NewWindowStory,{Story,storyArgs})})})})}NewWindowStoryWrapperWithRef.displayName="NewWindowStoryWrapperWithRef";const NewWindowStoryWrapper=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(NewWindowStoryWrapperWithRef);function NewWindowStory({Story,storyArgs}){const{newWindowContainerRef}=(0,_src__WEBPACK_IMPORTED_MODULE_2__.dG)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{args:{...storyArgs,baseContainer:newWindowContainerRef.current}})}NewWindowStory.displayName="NewWindowStory";const StoryBox=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div`
  height: 100%;
  padding: 16px;
  width: 100%;
`,NewWindowButtonBox=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div`
  position: fixed;
  right: 16px;
  top: 16px;
`,NewWindowStoryBox=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div`
  height: 100%;
  padding: 16px;
  width: 100%;
`;try{generateStoryDecorator.displayName="generateStoryDecorator",generateStoryDecorator.__docgenInfo={description:"",displayName:"generateStoryDecorator",props:{fixedWidth:{defaultValue:null,description:"",name:"fixedWidth",required:!1,type:{name:"number"}},hasDarkMode:{defaultValue:{value:"false"},description:"",name:"hasDarkMode",required:!1,type:{name:"boolean"}},withNewWindowButton:{defaultValue:{value:"false"},description:"",name:"withNewWindowButton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/StoryDecorator.tsx#generateStoryDecorator"]={docgenInfo:generateStoryDecorator.__docgenInfo,name:"generateStoryDecorator",path:".storybook/components/StoryDecorator.tsx#generateStoryDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Dropdown-stories.23f13406.iframe.bundle.js.map