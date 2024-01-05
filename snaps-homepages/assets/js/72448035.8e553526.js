"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7612],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),g=s,u=d["".concat(p,".").concat(g)]||d[g]||m[g]||r;return t?a.createElement(u,o(o({ref:n},l),{},{components:t})):a.createElement(u,o({ref:n},l))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},34545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(87462),s=(t(67294),t(3905));const r={description:"Use MetaMask SDK to connect and sign in a single interaction.",sidebar_position:1,tags:["JavaScript SDK","iOS SDK"]},o="Connect and sign",i={unversionedId:"how-to/sign-data/connect-and-sign",id:"how-to/sign-data/connect-and-sign",title:"Connect and sign",description:"Use MetaMask SDK to connect and sign in a single interaction.",source:"@site/wallet/how-to/sign-data/connect-and-sign.md",sourceDirName:"how-to/sign-data",slug:"/how-to/sign-data/connect-and-sign",permalink:"/snaps-homepages/wallet/how-to/sign-data/connect-and-sign",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/sign-data/connect-and-sign.md",tags:[{label:"JavaScript SDK",permalink:"/snaps-homepages/wallet/tags/java-script-sdk"},{label:"iOS SDK",permalink:"/snaps-homepages/wallet/tags/i-os-sdk"}],version:"current",sidebarPosition:1,frontMatter:{description:"Use MetaMask SDK to connect and sign in a single interaction.",sidebar_position:1,tags:["JavaScript SDK","iOS SDK"]},sidebar:"walletSidebar",previous:{title:"Sign data",permalink:"/snaps-homepages/wallet/how-to/sign-data/"},next:{title:"Sign in with Ethereum",permalink:"/snaps-homepages/wallet/how-to/sign-data/siwe"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use the connectAndSign method",id:"use-the-connectandsign-method",level:2},{value:"Examples",id:"examples",level:2}],l={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,s.kt)(d,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"connect-and-sign"},"Connect and sign"),(0,s.kt)("p",null,"You can connect to MetaMask and sign data in a single interaction from your JavaScript or iOS dapp\nusing ",(0,s.kt)("a",{parentName:"p",href:"/snaps-homepages/wallet/concepts/sdk/"},"MetaMask SDK"),"."),(0,s.kt)("p",null,"The SDK's ",(0,s.kt)("inlineCode",{parentName:"p"},"connectAndSign")," method provides a streamlined approach for dapps to interact with MetaMask.\nThis method combines the ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestAccounts"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," and ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/personal_sign"},(0,s.kt)("inlineCode",{parentName:"a"},"personal_sign"))," RPC methods, executing them sequentially.\n",(0,s.kt)("inlineCode",{parentName:"p"},"connectAndSign")," takes one parameter, the message string to be signed, and passes the message and\nthe output of ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestAccounts"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," directly to ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/personal_sign"},(0,s.kt)("inlineCode",{parentName:"a"},"personal_sign")),"."),(0,s.kt)("p",null,"This method enhances dapp user experience, especially on mobile platforms, by allowing users to\nconnect to MetaMask and sign a message in a single interaction, requiring only one switch between\nthe mobile dapp and MetaMask Mobile."),(0,s.kt)("p",{align:"center"},(0,s.kt)("video",{width:"350",controls:!0},(0,s.kt)("source",{src:"/connect-and-sign.mp4",type:"video/mp4"}))),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"MetaMask SDK set up in your ",(0,s.kt)("a",{parentName:"p",href:"/snaps-homepages/wallet/how-to/connect/set-up-sdk/javascript/"},"JavaScript")," or\n",(0,s.kt)("a",{parentName:"p",href:"/snaps-homepages/wallet/how-to/connect/set-up-sdk/mobile/ios"},"iOS")," dapp.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"MetaMask Mobile version 7.10 or later.\nYour users must have an updated version of MetaMask Mobile for this feature to work correctly.\nFor older versions of MetaMask, this function may not work as expected."))),(0,s.kt)("h2",{id:"use-the-connectandsign-method"},"Use the connectAndSign method"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"connectAndSign")," method as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const connectAndSign = async () => {\n  try {\n    const signResult = await sdk?.connectAndSign({\n      msg: "Connect + Sign message",\n    });\n    setResponse(signResult);\n  } catch (err) {\n    console.warn(`failed to connect..`, err);\n  }\n};\n')),(0,s.kt)("p",null,"To invoke ",(0,s.kt)("inlineCode",{parentName:"p"},"connectAndSign"),":"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Ensure the ",(0,s.kt)("inlineCode",{parentName:"li"},"MetaMaskSDK")," instance (",(0,s.kt)("inlineCode",{parentName:"li"},"sdk")," in this context) is properly initialized and available."),(0,s.kt)("li",{parentName:"ol"},"Call ",(0,s.kt)("inlineCode",{parentName:"li"},"connectAndSign")," with the message to be signed."),(0,s.kt)("li",{parentName:"ol"},"Handle the promise to process the response or catch any errors.")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"The following is an example of using the ",(0,s.kt)("inlineCode",{parentName:"p"},"connectAndSign")," method in a React dapp, integrating it\ninto a functional component:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'import React, { useState } from "react";\nimport { useSDK } from "@metamask/sdk-react";\n\nfunction MyComponent() {\n  const { sdk } = useSDK();\n  const [signedMessage, setSignedMessage] = useState("");\n\n  const handleConnectAndSign = async () => {\n    try {\n      const message = "Your message here";\n      const signature = await sdk.connectAndSign({ msg: message });\n      setSignedMessage(signature);\n    } catch (error) {\n      console.error("Error in signing:", error);\n    }\n  };\n\n  return (\n    <div>\n      <button onClick={handleConnectAndSign}>Connect and Sign</button>\n      {signedMessage && <p>Signed Message: {signedMessage}</p>}\n    </div>\n  );\n}\n')),(0,s.kt)("p",null,"For a comprehensive React example, see the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/blob/main/packages/examples/create-react-app/src/App.tsx"},(0,s.kt)("inlineCode",{parentName:"a"},"App.tsx")),"\nfile of the example React dapp."),(0,s.kt)("p",null,"For examples of using the ",(0,s.kt)("inlineCode",{parentName:"p"},"connectAndSign")," function in Next.js and Vue.js, see the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/nextjs-demo"},"example Next.js dapp"),"\nand ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/vuejs"},"example Vue.js dapp"),"\nin the JavaScript SDK GitHub repository."))}m.isMDXComponent=!0}}]);