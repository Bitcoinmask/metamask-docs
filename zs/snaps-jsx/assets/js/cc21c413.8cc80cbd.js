"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2923],{3102:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var s=n(74848),t=n(28453),r=n(40267),i=n(19365);const l={description:"Display custom alert, confirmation, or prompt screens in MetaMask.",sidebar_position:2},o="Dialogs",d={id:"features/custom-ui/dialogs",title:"Dialogs",description:"Display custom alert, confirmation, or prompt screens in MetaMask.",source:"@site/snaps/features/custom-ui/dialogs.md",sourceDirName:"features/custom-ui",slug:"/features/custom-ui/dialogs",permalink:"/zs/snaps-jsx/snaps/features/custom-ui/dialogs",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-ui/dialogs.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Display custom alert, confirmation, or prompt screens in MetaMask.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Interactive UI",permalink:"/zs/snaps-jsx/snaps/features/custom-ui/interactive-ui"},next:{title:"Home pages",permalink:"/zs/snaps-jsx/snaps/features/custom-ui/home-pages"}},c={},p=[{value:"Request permission to display dialogs",id:"request-permission-to-display-dialogs",level:2},{value:"Display an alert dialog",id:"display-an-alert-dialog",level:2},{value:"Display a confirmation dialog",id:"display-a-confirmation-dialog",level:2},{value:"Display a prompt dialog",id:"display-a-prompt-dialog",level:2},{value:"Example",id:"example",level:2}];function u(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"dialogs",children:"Dialogs"}),"\n",(0,s.jsxs)(a.p,{children:["You can display a dialog in the MetaMask UI using the\n",(0,s.jsx)(a.a,{href:"/zs/snaps-jsx/snaps/reference/snaps-api#snap_dialog",children:(0,s.jsx)(a.code,{children:"snap_dialog"})})," API method.\nDialogs can contain ",(0,s.jsx)(a.a,{href:"/zs/snaps-jsx/snaps/features/custom-ui/",children:"custom UI"})," and ",(0,s.jsx)(a.a,{href:"/zs/snaps-jsx/snaps/features/custom-ui/interactive-ui",children:"interactive UI"})," components."]}),"\n",(0,s.jsxs)(a.p,{children:["There are three types of dialogs: ",(0,s.jsx)(a.a,{href:"#display-an-alert-dialog",children:"alerts"}),",\n",(0,s.jsx)(a.a,{href:"#display-a-confirmation-dialog",children:"confirmations"}),", and ",(0,s.jsx)(a.a,{href:"#display-a-prompt-dialog",children:"prompts"}),"."]}),"\n",(0,s.jsx)(a.admonition,{type:"caution",children:(0,s.jsxs)(a.p,{children:["Dialogs do not work when MetaMask is locked.\nTo check if MetaMask is locked, use\n",(0,s.jsx)(a.a,{href:"/zs/snaps-jsx/snaps/reference/snaps-api#snap_getclientstatus",children:(0,s.jsx)(a.code,{children:"snap_getClientStatus"})}),"."]})}),"\n",(0,s.jsx)(a.h2,{id:"request-permission-to-display-dialogs",children:"Request permission to display dialogs"}),"\n",(0,s.jsxs)(a.p,{children:["To display dialogs, first request the ",(0,s.jsx)(a.a,{href:"/zs/snaps-jsx/snaps/reference/snaps-api#snap_dialog",children:(0,s.jsx)(a.code,{children:"snap_dialog"})})," permission.\nAdd the following to your Snap's manifest file:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "snap_dialog": {}\n}\n'})}),"\n",(0,s.jsx)(a.h2,{id:"display-an-alert-dialog",children:"Display an alert dialog"}),"\n",(0,s.jsxs)(a.p,{children:["To display an alert that can only be acknowledged, call\n",(0,s.jsx)(a.a,{href:"/zs/snaps-jsx/snaps/reference/snaps-api#snap_dialog",children:(0,s.jsx)(a.code,{children:"snap_dialog"})})," with ",(0,s.jsx)(a.code,{children:'type: "alert"'}),".\nThe following example displays custom UI that alerts the user when something happens in the system:"]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(i.A,{value:"Functions",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import { panel, text, heading } from "@metamask/snaps-sdk";\n\nawait snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "alert",\n    content: panel([\n      heading("Something happened in the system"),\n      text("The thing that happened is..."),\n    ]),\n  },\n});\n\n// Code that should execute after the alert has been acknowledged.\n'})})}),(0,s.jsx)(i.A,{value:"JSX",flaskOnly:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-tsx",metastring:'title="index.tsx"',children:'import { Box, Text, Heading } from \'@metamask/snaps-sdk/jsx\';\n\nawait snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "alert",\n    content: (\n      <Box>\n        <Heading>Something happened in the system</Heading>\n        <Text>The thing that happened is...</Text>\n      </Box>\n    ),\n  },\n});\n\n// Code that should execute after the alert has been acknowledged.\n'})})})]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:n(44214).A,alt:"Alert dialog example",width:"360px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(a.h2,{id:"display-a-confirmation-dialog",children:"Display a confirmation dialog"}),"\n",(0,s.jsxs)(a.p,{children:["To display a confirmation that can be accepted or rejected, call\n",(0,s.jsx)(a.a,{href:"/zs/snaps-jsx/snaps/reference/snaps-api#snap_dialog",children:(0,s.jsx)(a.code,{children:"snap_dialog"})})," with ",(0,s.jsx)(a.code,{children:'type: "confirmation"'}),".\nThe following example displays custom UI that asks the user to confirm whether they would like to\ntake an action:"]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(i.A,{value:"Functions",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import { panel, text, heading } from "@metamask/snaps-sdk";\n\nconst result = await snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "confirmation",\n    content: panel([\n      heading("Would you like to take the action?"),\n      text("The action is..."),\n    ]),\n  },\n});\n\nif (result === true) {\n  // Do the action.\n}\n'})})}),(0,s.jsx)(i.A,{value:"JSX",flaskOnly:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-tsx",metastring:'title="index.tsx"',children:'import { Box, Text, Heading } from \'@metamask/snaps-sdk/jsx\';\n\nconst result = await snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "confirmation",\n    content: (\n      <Box>\n        <Heading>Would you like to take the action?</Heading>\n        <Text>The action is...</Text>\n      </Box>\n    ),\n  },\n});\n\nif (result === true) {\n  // Do the action.\n}\n'})})})]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:n(77609).A,alt:"Confirmation dialog example",width:"360px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(a.h2,{id:"display-a-prompt-dialog",children:"Display a prompt dialog"}),"\n",(0,s.jsxs)(a.p,{children:["To display a prompt where the user can enter a text response, call\n",(0,s.jsx)(a.a,{href:"/zs/snaps-jsx/snaps/reference/snaps-api#snap_dialog",children:(0,s.jsx)(a.code,{children:"snap_dialog"})})," with ",(0,s.jsx)(a.code,{children:'type: "prompt"'}),".\nPrompt dialogs also accept a ",(0,s.jsx)(a.code,{children:"placeholder"})," value that displays in the input field when no text is entered."]}),"\n",(0,s.jsx)(a.p,{children:"The following example displays custom UI that prompts the user to enter a wallet address:"}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(i.A,{value:"Functions",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import { panel, text, heading } from "@metamask/snaps-sdk";\n\nconst walletAddress = await snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "prompt",\n    content: panel([\n      heading("What is the wallet address?"),\n      text("Please enter the wallet address to be monitored"),\n    ]),\n    placeholder: "0x123...",\n  },\n});\n\n// walletAddress will be a string containing the address entered by the user.\n'})})}),(0,s.jsx)(i.A,{value:"JSX",flaskOnly:!0,children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-tsx",metastring:'title="index.tsx"',children:'import { Box, Text, Heading } from \'@metamask/snaps-sdk/jsx\';\n\nconst walletAddress = await snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "prompt",\n    content: (\n      <Box>\n        <Heading>What is the wallet address?</Heading>\n        <Text>Please enter the wallet address to be monitored</Text>\n      </Box>\n    ),\n    placeholder: "0x123...",\n  },\n});\n\n// walletAddress will be a string containing the address entered by the user.\n'})})})]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:n(9398).A,alt:"Prompt dialog example",width:"360px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(a.p,{children:["See the ",(0,s.jsx)(a.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/dialogs",children:(0,s.jsx)(a.code,{children:"@metamask/dialog-example-snap"})}),"\npackage for a full example of implementing dialogs.\nThis example exposes a ",(0,s.jsx)(a.a,{href:"/zs/snaps-jsx/snaps/learn/about-snaps/apis#custom-json-rpc-apis",children:"custom JSON-RPC API"}),"\nfor dapps to display dialogs."]})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>i});n(96540);var s=n(18215);const t={tabItem:"tabItem_Ymn6"};var r=n(74848);function i(e){let{children:a,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,i),hidden:n,children:a})}},40267:(e,a,n)=>{n.d(a,{A:()=>w});var s=n(96540),t=n(20053),r=n(23104),i=n(56347),l=n(205),o=n(57485),d=n(31682),c=n(89466);function p(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:a,children:n}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return p(e).map((e=>{let{props:{value:a,label:n,attributes:s,default:t}}=e;return{value:a,label:n,attributes:s,default:t}}))}(n);return function(e){const a=(0,d.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function h(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const t=(0,i.W6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,o.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace({...t.location,search:a.toString()})}),[r,t])]}function g(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,r=u(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:r}))),[d,p]=m({queryString:n,groupId:t}),[g,f]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,r]=(0,c.Dv)(n);return[t,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:t}),x=(()=>{const e=d??g;return h({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),f(e)}),[p,f,r]),tabValues:r}}var f=n(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb",flaskOnly:"flaskOnly_bhbK"};var b=n(74848),j=n(96763);function y(e){let{className:a,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;j.log(l);const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const a=e.currentTarget,n=o.indexOf(a),t=l[n].value;t!==s&&(d(a),i(t))},p=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1];break}}a?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},a),children:l.map((e=>{let{value:a,label:n,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>o.push(e),onKeyDown:p,onClick:c,...r,className:(0,t.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":s===a}),children:n??a},a)}))})}function v(e){let{lazy:a,children:n,selectedValue:t}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==t})))})}function k(e){const a=g(e),n={...a,tabValues:a.tabValues.map(((a,n)=>({...a,attributes:{...a.attributes,className:(0,t.A)(a.attributes?.className,{[x.flaskOnly]:e.children[n]?.props.flaskOnly})}})))};return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,b.jsx)(y,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function w(e){const a=(0,f.A)();return(0,b.jsx)(k,{...e,children:p(e.children)},String(a))}},20053:(e,a,n)=>{function s(e){var a,n,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(n=s(e[a]))&&(t&&(t+=" "),t+=n);else for(a in e)e[a]&&(t&&(t+=" "),t+=a);return t}n.d(a,{A:()=>t});const t=function(){for(var e,a,n=0,t="";n<arguments.length;)(e=arguments[n++])&&(a=s(e))&&(t&&(t+=" "),t+=a);return t}},44214:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/alert-dialog-c9346ea2c63a5fefb4be37b4101f37fd.png"},77609:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/confirmation-dialog-5dba2d923c22ac75a1a5f8f7b77da5b8.png"},9398:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/prompt-dialog-b54dc7e8a8621fb1f95b51685b60f44e.png"},28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>l});var s=n(96540);const t={},r=s.createContext(t);function i(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);