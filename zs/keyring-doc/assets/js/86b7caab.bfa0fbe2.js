"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5027],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),c=a,g=m["".concat(o,".").concat(c)]||m[c]||k[c]||i;return t?r.createElement(g,p(p({ref:n},d),{},{components:t})):r.createElement(g,p({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:a,p[1]=s;for(var l=2;l<i;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},34809:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={sidebar_label:"SnapRpcSender"},p="Class: SnapRpcSender",s={unversionedId:"reference/keyring-api/Classes/class.SnapRpcSender",id:"reference/keyring-api/Classes/class.SnapRpcSender",title:"Class: SnapRpcSender",description:"Implementation of the Sender interface that can be used to send requests",source:"@site/snaps/reference/keyring-api/02-Classes/06-class.SnapRpcSender.md",sourceDirName:"reference/keyring-api/02-Classes",slug:"/reference/keyring-api/Classes/class.SnapRpcSender",permalink:"/zs/keyring-doc/snaps/reference/keyring-api/Classes/class.SnapRpcSender",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/02-Classes/06-class.SnapRpcSender.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"SnapRpcSender"},sidebar:"snapsSidebar",previous:{title:"MethodNotSupportedError",permalink:"/zs/keyring-doc/snaps/reference/keyring-api/Classes/class.MethodNotSupportedError"},next:{title:"Keyring",permalink:"/zs/keyring-doc/snaps/reference/keyring-api/Type Aliases/type-alias.Keyring"}},o={},l=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source",level:4},{value:"Properties",id:"properties",level:2},{value:"#origin",id:"origin",level:3},{value:"Source",id:"source-1",level:4},{value:"#provider",id:"provider",level:3},{value:"Source",id:"source-2",level:4},{value:"Methods",id:"methods",level:2},{value:"send",id:"send",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Source",id:"source-3",level:4}],d={toc:l},m="wrapper";function k(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-snaprpcsender"},"Class: SnapRpcSender"),(0,a.kt)("p",null,"Implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sender")," interface that can be used to send requests\nto a snap through the snap JSON-RPC API."),(0,a.kt)("h2",{id:"implements"},"Implements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zs/keyring-doc/snaps/reference/keyring-api/Type%20Aliases/type-alias.Sender"},(0,a.kt)("inlineCode",{parentName:"a"},"Sender")))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"new SnapRpcSender(origin, provider): SnapRpcSender\n")),(0,a.kt)("p",null,"Create a new instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"SnapRpcSender"),"."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"origin")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The caller's origin.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"provider")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"MetaMaskInpageProvider")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"MetaMaskInpageProvider")," instance to use.")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zs/keyring-doc/snaps/reference/keyring-api/Classes/class.SnapRpcSender"},(0,a.kt)("inlineCode",{parentName:"a"},"SnapRpcSender"))),(0,a.kt)("h4",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-snap-rpc-client.ts#L26"},"external/keyring-api/src/keyring-snap-rpc-client.ts:26")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"origin"},"#origin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"private #origin: string\n")),(0,a.kt)("h4",{id:"source-1"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-snap-rpc-client.ts#L16"},"external/keyring-api/src/keyring-snap-rpc-client.ts:16")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"provider"},"#provider"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"private #provider: MetaMaskInpageProvider\n")),(0,a.kt)("h4",{id:"source-2"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-snap-rpc-client.ts#L18"},"external/keyring-api/src/keyring-snap-rpc-client.ts:18")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"send"},"send"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'send(request): Promise< null | string[] | {\n  address: string;\n  id: string;\n  name: string;\n  options: null | Record< string, Json >;\n  supportedMethods: ("personal_sign" | "eth_sendTransaction" | "eth_sign" | "eth_signTransaction" | "eth_signTypedData" | "eth_signTypedData_v1" | "eth_signTypedData_v2" | "eth_signTypedData_v3" | "eth_signTypedData_v4")[];\n  type: "eip155:eoa" | "eip155:erc4337";\n } | {\n  account: string;\n  request: { id: string; jsonrpc: "2.0"; method: string; } | { id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json> | Json[]; };\n  scope: string;\n } | {\n  pending: true;\n } | {\n  pending: false;\n  result: Json;\n } | {\n  address: string;\n  id: string;\n  name: string;\n  options: null | Record< string, Json >;\n  supportedMethods: ("personal_sign" | "eth_sendTransaction" | "eth_sign" | "eth_signTransaction" | "eth_signTypedData" | "eth_signTypedData_v1" | "eth_signTypedData_v2" | "eth_signTypedData_v3" | "eth_signTypedData_v4")[];\n  type: "eip155:eoa" | "eip155:erc4337";\n }[] | {\n  account: string;\n  request: { id: string; jsonrpc: "2.0"; method: string; } | { id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json> | Json[]; };\n  scope: string;\n }[] >\n')),(0,a.kt)("p",null,"Send a request to the snap and return the response."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"request")),(0,a.kt)("td",{parentName:"tr",align:"left"},"{",(0,a.kt)("br",null),"  ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";",(0,a.kt)("br",null),"  ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";",(0,a.kt)("br",null),"  ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_listAccounts"'),";",(0,a.kt)("br",null)," } ","|"," ","{",(0,a.kt)("br",null),"  ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";",(0,a.kt)("br",null),"  ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";",(0,a.kt)("br",null),"  ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_getAccount"'),";",(0,a.kt)("br",null),"  ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"{ id: string; }"),";",(0,a.kt)("br",null)," } ","|"," ","{",(0,a.kt)("br",null),"  ",(0,a.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),";",(0,a.kt)("br",null),"  ",(0,a.kt)("inlineCode",{parentName:"td"},"jsonrpc"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"2.0"'),";",(0,a.kt)("br",null),"  ",(0,a.kt)("inlineCode",{parentName:"td"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"td"},'"keyring_createAccount"'),";",(0,a.kt)("br",null),"  ",(0,a.kt)("inlineCode",{parentName:"td"},"params"),": `{ name: string; options: Record<string, Json>"),(0,a.kt)("td",{parentName:"tr",align:"left"},"null; }",(0,a.kt)("inlineCode",{parentName:"td"},";<br /> } \\| \\{<br />  "),"id",(0,a.kt)("inlineCode",{parentName:"td"},": "),"string",(0,a.kt)("inlineCode",{parentName:"td"},";<br />  "),"jsonrpc",(0,a.kt)("inlineCode",{parentName:"td"},": "),'"2.0"',(0,a.kt)("inlineCode",{parentName:"td"},";<br />  "),"method",(0,a.kt)("inlineCode",{parentName:"td"},": "),'"keyring_filterAccountChains"',(0,a.kt)("inlineCode",{parentName:"td"},";<br />  "),"params",(0,a.kt)("inlineCode",{parentName:"td"},": "),"{ id: string; chains: string[]; }",(0,a.kt)("inlineCode",{parentName:"td"},";<br /> } \\| \\{<br />  "),"id",(0,a.kt)("inlineCode",{parentName:"td"},": "),"string",(0,a.kt)("inlineCode",{parentName:"td"},";<br />  "),"jsonrpc",(0,a.kt)("inlineCode",{parentName:"td"},": "),'"2.0"',(0,a.kt)("inlineCode",{parentName:"td"},";<br />  "),"method",(0,a.kt)("inlineCode",{parentName:"td"},": "),'"keyring_updateAccount"',(0,a.kt)("inlineCode",{parentName:"td"},";<br />  "),"params",(0,a.kt)("inlineCode",{parentName:"td"},": "),"{ account: { id: string; name: string; address: string; options: Record<string, Json>")))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\\< ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[] ","|"," ","{","\n",(0,a.kt)("inlineCode",{parentName:"p"},"address"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),";\n",(0,a.kt)("inlineCode",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),";\n",(0,a.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),";\n",(0,a.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),"\\< ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Json")," ",">",";\n",(0,a.kt)("inlineCode",{parentName:"p"},"supportedMethods"),": (",(0,a.kt)("inlineCode",{parentName:"p"},'"personal_sign"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eth_sendTransaction"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eth_sign"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eth_signTransaction"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eth_signTypedData"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eth_signTypedData_v1"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eth_signTypedData_v2"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eth_signTypedData_v3"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eth_signTypedData_v4"'),")[];\n",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"eip155:eoa"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eip155:erc4337"'),";\n} ","|"," ","{","\n",(0,a.kt)("inlineCode",{parentName:"p"},"account"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),";\n",(0,a.kt)("inlineCode",{parentName:"p"},"request"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'{ id: string; jsonrpc: "2.0"; method: string; }')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'{ id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json> | Json[]; }'),";\n",(0,a.kt)("inlineCode",{parentName:"p"},"scope"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),";\n} ","|"," ","{","\n",(0,a.kt)("inlineCode",{parentName:"p"},"pending"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),";\n} ","|"," ","{","\n",(0,a.kt)("inlineCode",{parentName:"p"},"pending"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),";\n",(0,a.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Json"),";\n} ","|"," ","{","\n",(0,a.kt)("inlineCode",{parentName:"p"},"address"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),";\n",(0,a.kt)("inlineCode",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),";\n",(0,a.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),";\n",(0,a.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),"\\< ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Json")," ",">",";\n",(0,a.kt)("inlineCode",{parentName:"p"},"supportedMethods"),": (",(0,a.kt)("inlineCode",{parentName:"p"},'"personal_sign"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eth_sendTransaction"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eth_sign"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eth_signTransaction"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eth_signTypedData"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eth_signTypedData_v1"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eth_signTypedData_v2"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eth_signTypedData_v3"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eth_signTypedData_v4"'),")[];\n",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"eip155:eoa"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"eip155:erc4337"'),";\n}[] ","|"," ","{","\n",(0,a.kt)("inlineCode",{parentName:"p"},"account"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),";\n",(0,a.kt)("inlineCode",{parentName:"p"},"request"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'{ id: string; jsonrpc: "2.0"; method: string; }')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'{ id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json> | Json[]; }'),";\n",(0,a.kt)("inlineCode",{parentName:"p"},"scope"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),";\n}[] ",">"),(0,a.kt)("p",null,"A promise that resolves to the response of the request."),(0,a.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,a.kt)("p",null,"Sender.send"),(0,a.kt)("h4",{id:"source-3"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-snap-rpc-client.ts#L37"},"external/keyring-api/src/keyring-snap-rpc-client.ts:37")))}k.isMDXComponent=!0}}]);