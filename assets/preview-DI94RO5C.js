import{_ as a}from"./iframe-DCzrE5Jh.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-56ZJCE2Q-BSvnAV7D.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-56ZJCE2Q-BSvnAV7D.js","./iframe-DCzrE5Jh.js","./index-CBqU2yxZ.js","./_commonjsHelpers-BosuxZz1.js","./client-ZyxuJmmV.js","./index-Ch9hqOxJ.js","./index-CygCE5OQ.js","./_baseClone-CBkhujLI.js","./mapValues-CZXAhdHD.js","./index-CEV1QwRH.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
