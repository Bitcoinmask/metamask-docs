"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={description:"Learn about the Snaps execution environment.",sidebar_position:4},o="Snaps execution environment",s={unversionedId:"concepts/execution-environment",id:"concepts/execution-environment",title:"Snaps execution environment",description:"Learn about the Snaps execution environment.",source:"@site/snaps/concepts/execution-environment.md",sourceDirName:"concepts",slug:"/concepts/execution-environment",permalink:"/restructure/snaps/concepts/execution-environment",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/concepts/execution-environment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Learn about the Snaps execution environment.",sidebar_position:4},sidebar:"snapsSidebar",previous:{title:"Snaps user interface",permalink:"/restructure/snaps/concepts/user-interface"},next:{title:"Snaps design guidelines",permalink:"/restructure/snaps/concepts/design-guidelines"}},l={},p=[{value:"Secure ECMAScript (SES)",id:"secure-ecmascript-ses",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snaps-execution-environment"},"Snaps execution environment"),(0,a.kt)("p",null,"Snaps are untrusted JavaScript programs that execute safely in a sandboxed environment that runs\n",(0,a.kt)("a",{parentName:"p",href:"#secure-ecmascript-ses"},"Secure ECMAScript (SES)"),".\nThere's no DOM, no Node.js built-ins, and no platform-specific APIs other than MetaMask's ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet"),"\nglobal object.\nAlmost all standard JavaScript globals contained in\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects"},"this list")," that\nare also in Node.js are available as normal.\nThis includes globals such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Math"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Set"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Reflect"),"."),(0,a.kt)("p",null,"The following globals are also available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"console")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"crypto")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fetch")," (with the\n",(0,a.kt)("a",{parentName:"li",href:"/restructure/snaps/reference/permissions#endowmentnetwork-access"},(0,a.kt)("inlineCode",{parentName:"a"},"endowment:network-access"))," permission)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setTimeout")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"clearTimeout")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setInterval")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"clearInterval")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SubtleCrypto")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WebAssembly")," (with the\n",(0,a.kt)("a",{parentName:"li",href:"/restructure/snaps/reference/permissions#endowmentwebassembly"},(0,a.kt)("inlineCode",{parentName:"a"},"endowment:webassembly"))," permission)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TextEncoder")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"TextDecoder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"atob")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"btoa")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"URL"))),(0,a.kt)("p",null,"The execution environment is instrumented in this way to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Prevent snaps from influencing any other running code, including MetaMask itself.\nThat is, prevent all snaps from polluting the global environment and malicious snaps from\nstealing the user's stuff."),(0,a.kt)("li",{parentName:"ol"},"Prevent snaps from accessing sensitive JavaScript APIs (such as ",(0,a.kt)("inlineCode",{parentName:"li"},"fetch"),") without permission."),(0,a.kt)("li",{parentName:"ol"},'Ensure that the execution environment is "fully virtualizable," that is, platform-independent.')),(0,a.kt)("p",null,"This allows you to safely execute snaps anywhere, without the snap needing to worry about where and\nhow it's executed."),(0,a.kt)("h2",{id:"secure-ecmascript-ses"},"Secure ECMAScript (SES)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/endojs/endo/tree/master/packages/ses"},"Secure ECMAScript (SES)"),", is a subset of\nthe JavaScript language designed to enable mutually suspicious programs to execute in the same\nJavaScript process (or more accurately, the same ",(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#realm"},"realm"),").\nYou can think of it as a more severe form of\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"},"strict mode"),"."))}m.isMDXComponent=!0}}]);