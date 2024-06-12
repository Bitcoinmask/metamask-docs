"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2169],{8906:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var s=t(74848),i=t(28453),r=t(40267),a=t(19365);const o={description:"Provide insights to your users in MetaMask's signature confirmation flow.",sidebar_position:11,sidebar_custom_props:{flask_only:!0}},l="Signature insights",u={id:"features/signature-insights",title:"Signature insights",description:"Provide insights to your users in MetaMask's signature confirmation flow.",source:"@site/snaps/features/signature-insights.md",sourceDirName:"features",slug:"/features/signature-insights",permalink:"/zs/snaps-jsx/snaps/features/signature-insights",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/signature-insights.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{description:"Provide insights to your users in MetaMask's signature confirmation flow.",sidebar_position:11,sidebar_custom_props:{flask_only:!0}},sidebar:"snapsSidebar",previous:{title:"Notifications",permalink:"/zs/snaps-jsx/snaps/features/notifications"},next:{title:"Static files",permalink:"/zs/snaps-jsx/snaps/features/static-files"}},c={},d=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to display signature insights",id:"1-request-permission-to-display-signature-insights",level:3},{value:"2. Implement the <code>onSignature</code> entry point",id:"2-implement-the-onsignature-entry-point",level:3},{value:"Example",id:"example",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"signature-insights",children:"Signature insights"}),"\n",(0,s.jsx)(n.admonition,{type:"flaskOnly"}),"\n",(0,s.jsx)(n.p,{children:"You can provide signature insights before a user signs a message.\nFor example, you can warn the user about potentially dangerous signature requests."}),"\n",(0,s.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(n.h3,{id:"1-request-permission-to-display-signature-insights",children:"1. Request permission to display signature insights"}),"\n",(0,s.jsxs)(n.p,{children:["Request the ",(0,s.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/permissions#endowmentsignature-insight",children:(0,s.jsx)(n.code,{children:"endowment:signature-insight"})}),"\npermission by adding the following to your Snap's manifest file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:signature-insight": {}\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If you need to receive the origin of the signature request, add ",(0,s.jsx)(n.code,{children:"allowSignatureOrigin"})," to the\npermission object, and set it to ",(0,s.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:signature-insight": {\n    "allowSignatureOrigin": true\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"2-implement-the-onsignature-entry-point",children:["2. Implement the ",(0,s.jsx)(n.code,{children:"onSignature"})," entry point"]}),"\n",(0,s.jsxs)(n.p,{children:["Expose an ",(0,s.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/entry-points#onsignature",children:(0,s.jsx)(n.code,{children:"onSignature"})})," entry point, which receives a\n",(0,s.jsx)(n.code,{children:"signature"})," object.\nThe shape of this object depends on the chain and the signing method used.\nThis is why it's typed as ",(0,s.jsx)(n.code,{children:"Record<string, unknown>"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For Ethereum and Ethereum-compatible chains, the ",(0,s.jsx)(n.code,{children:"signature"})," object can have one of the following\nshapes, depending on the signing method used:"]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(a.A,{value:"eth_sign",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'interface EthSignature {\n  from: string;\n  data: string;\n  signatureMethod: "eth_sign";\n}\n'})})}),(0,s.jsx)(a.A,{value:"personal_sign",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'interface PersonalSignature {\n  from: string;\n  data: string;\n  signatureMethod: "personal_sign";\n}\n'})})}),(0,s.jsx)(a.A,{value:"eth_signTypedData",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'interface SignTypedDataSignature {\n  from: string;\n  data: Record<string, any>[];\n  signatureMethod: "eth_signTypedData";\n}\n'})})}),(0,s.jsx)(a.A,{value:"eth_signTypedData_v3",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'interface SignTypedDataV3Signature {\n  from: string;\n  data: Record<string, any>;\n  signatureMethod: "eth_signTypedData_v3";\n}\n'})})}),(0,s.jsx)(a.A,{value:"eth_signTypedData_v4",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'interface SignTypedDataV4Signature {\n  from: string;\n  data: Record<string, any>;\n  signatureMethod: "eth_signTypedData_v4";\n}\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Your Snap should use ",(0,s.jsx)(n.code,{children:"signatureMethod"})," as the source of truth to identify the signature scheme it is\nproviding insights for."]}),"\n",(0,s.jsxs)(n.p,{children:["Once you've identified the signature object, your Snap can run any logic, including calling APIs.\nThen, your Snap must either return ",(0,s.jsx)(n.code,{children:"null"})," if it has no insights to provide, or an object with a\n",(0,s.jsx)(n.code,{children:"content"})," property and an optional ",(0,s.jsx)(n.code,{children:"severity"})," property as specified in the\n",(0,s.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/entry-points#onsignature",children:(0,s.jsx)(n.code,{children:"onSignature"})})," entry point."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Due to current MetaMask UI limitations, signature insights will only be displayed if your Snap's\nlogic deems the signature to be one that a user shouldn't sign, that is, if you return a severity\nlevel of ",(0,s.jsx)(n.code,{children:"SeverityLevel.Critical"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["The following is an example implementation of ",(0,s.jsx)(n.code,{children:"onSignature"}),":"]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(a.A,{value:"Functions",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnSignatureHandler, SeverityLevel } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nexport const onSignature: OnSignatureHandler = async ({\n  signature,\n  signatureOrigin,\n}) => {\n  const insights = /* Get insights based on custom logic */;\n  return {\n    content: panel([\n      heading("My Signature Insights"),\n      text("Here are the insights:"),\n      ...(insights.map((insight) => text(insight.value))),\n    ]),\n    severity: SeverityLevel.Critical,\n  };\n};\n'})})}),(0,s.jsx)(a.A,{value:"JSX",flaskOnly:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="index.tsx"',children:"import type { OnSignatureHandler, SeverityLevel } from \"@metamask/snaps-sdk\";\nimport { Box, Heading, Text } from '@metamask/snaps-sdk/jsx';\n\nexport const onSignature: OnSignatureHandler = async ({\n  signature,\n  signatureOrigin,\n}) => {\n  const insights = /* Get insights based on custom logic */;\n  return {\n    content: (\n      <Box>\n        <Heading>My Signature Insights</Heading>\n        <Text>Here are the insights:</Text>\n        {insights.map((insight) => (\n          <Text>{insight.value}</Text>\n        ))}\n      </Box>\n    ),\n    severity: SeverityLevel.Critical,\n  };\n};\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["When your Snap returns a signature insight with a ",(0,s.jsx)(n.code,{children:"severity"})," of ",(0,s.jsx)(n.code,{children:"SeverityLevel.Critical"}),", the custom\nUI displays in a modal after the user selects the ",(0,s.jsx)(n.strong,{children:"Sign"})," button.\nFor example:"]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Signature insights warning",src:t(27543).A+"",width:"354",height:"582"})})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/signature-insights",children:(0,s.jsx)(n.code,{children:"@metamask/signature-insights-example-snap"})}),"\npackage for a full example of implementing signature insights."]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var s=t(18215);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,a),hidden:t,children:n})}},40267:(e,n,t)=>{t.d(n,{A:()=>k});var s=t(96540),i=t(20053),r=t(23104),a=t(56347),o=t(205),l=t(57485),u=t(31682),c=t(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[u,d]=p({queryString:t,groupId:i}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,c.Dv)(t);return[i,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),x=(()=>{const e=u??m;return g({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=t(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb",flaskOnly:"flaskOnly_bhbK"};var y=t(74848),j=t(96763);function b(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:o}=e;j.log(o);const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==s&&(u(n),a(i))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...r,className:(0,i.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function S(e){const n=m(e),t={...n,tabValues:n.tabValues.map(((n,t)=>({...n,attributes:{...n.attributes,className:(0,i.A)(n.attributes?.className,{[x.flaskOnly]:e.children[t]?.props.flaskOnly})}})))};return(0,y.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,y.jsx)(b,{...t,...e}),(0,y.jsx)(v,{...t,...e})]})}function k(e){const n=(0,f.A)();return(0,y.jsx)(S,{...e,children:d(e.children)},String(n))}},20053:(e,n,t)=>{function s(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=s(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}t.d(n,{A:()=>i});const i=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=s(e))&&(i&&(i+=" "),i+=n);return i}},27543:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/signature-insights-warning-7b5808128e4d993228ee01b8e75a9f84.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);