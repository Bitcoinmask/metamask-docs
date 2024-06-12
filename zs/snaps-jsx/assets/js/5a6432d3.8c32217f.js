"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9987],{78320:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=s(74848),i=s(28453);const a={sidebar_position:1,sidebar_label:"Connect and sign",tags:["Unity SDK"]},o="Connect and sign in Unity",r={id:"how-to/use-sdk/gaming/unity/connect-and-sign",title:"Connect and sign in Unity",description:"You can connect and sign in a single interaction from your Unity game.",source:"@site/wallet/how-to/use-sdk/gaming/unity/connect-and-sign.md",sourceDirName:"how-to/use-sdk/gaming/unity",slug:"/how-to/use-sdk/gaming/unity/connect-and-sign",permalink:"/zs/snaps-jsx/wallet/how-to/use-sdk/gaming/unity/connect-and-sign",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/connect-and-sign.md",tags:[{label:"Unity SDK",permalink:"/zs/snaps-jsx/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Connect and sign",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Unity",permalink:"/zs/snaps-jsx/wallet/how-to/use-sdk/gaming/unity/"},next:{title:"Set up Infura",permalink:"/zs/snaps-jsx/wallet/how-to/use-sdk/gaming/unity/infura"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"connect-and-sign-in-unity",children:"Connect and sign in Unity"}),"\n",(0,t.jsxs)(e.p,{children:["You can ",(0,t.jsx)(e.a,{href:"/zs/snaps-jsx/wallet/how-to/use-sdk/javascript/connect-and-sign",children:"connect and sign"})," in a single interaction from your Unity game."]}),"\n",(0,t.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/zs/snaps-jsx/wallet/how-to/use-sdk/gaming/unity/",children:"MetaMask SDK set up"})," in your Unity game."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"MetaMask Mobile version 7.10 or later.\nYour users must have an updated version of MetaMask Mobile for this feature to work correctly.\nFor older versions of MetaMask, this function may not work as expected."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Open your Unity project with the SDK installed."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["In your script, create a new function named ",(0,t.jsx)(e.code,{children:"ConnectAndSign"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-csharp",children:'public void ConnectAndSign()\n{\n  MetaMaskUnity.Instance.ConnectAndSign("This is a test message");\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"Replace the test message with any string message you want to sign."}),"\n",(0,t.jsx)(e.admonition,{title:"important",type:"caution",children:(0,t.jsxs)(e.p,{children:["Make sure you initialize ",(0,t.jsx)(e.a,{href:"/zs/snaps-jsx/wallet/reference/sdk-unity-api#instance",children:(0,t.jsx)(e.code,{children:"MetaMaskUnity.Instance"})}),"\nbefore using this function.\nTo do so, enable ",(0,t.jsx)(e.strong,{children:"Initialize On Awake"})," in the ",(0,t.jsx)(e.strong,{children:"MetaMask Unity"})," script inspector, or run\n",(0,t.jsx)(e.a,{href:"/zs/snaps-jsx/wallet/reference/sdk-unity-api#initialize",children:(0,t.jsx)(e.code,{children:"MetaMask.Instance.Initialize()"})}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Call the ",(0,t.jsx)(e.code,{children:"ConnectAndSign"})," function whenever you want to establish a connection and sign a message.\nFor example, you can call this function when a button is clicked:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-csharp",children:"public void OnButtonClick()\n{\n  ConnectAndSign();\n}\n"})}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>r});var t=s(96540);const i={},a=t.createContext(i);function o(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);