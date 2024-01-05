"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={description:"Use a custom user interface.",sidebar_position:4},s="Use custom UI",i={unversionedId:"how-to/use-custom-ui",id:"how-to/use-custom-ui",title:"Use custom UI",description:"Use a custom user interface.",source:"@site/snaps/how-to/use-custom-ui.md",sourceDirName:"how-to",slug:"/how-to/use-custom-ui",permalink:"/snaps-homepages/snaps/how-to/use-custom-ui",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/use-custom-ui.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Use a custom user interface.",sidebar_position:4},sidebar:"snapsSidebar",previous:{title:"Manage keys",permalink:"/snaps-homepages/snaps/how-to/manage-keys"},next:{title:"Test a Snap",permalink:"/snaps-homepages/snaps/how-to/test-a-snap"}},p={},l=[{value:"Components",id:"components",level:2},{value:"copyable",id:"copyable",level:3},{value:"divider",id:"divider",level:3},{value:"heading",id:"heading",level:3},{value:"image",id:"image",level:3},{value:"panel",id:"panel",level:3},{value:"spinner",id:"spinner",level:3},{value:"text",id:"text",level:3},{value:"Markdown",id:"markdown",level:2},{value:"Emoji",id:"emoji",level:2}],c={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-custom-ui"},"Use custom UI"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/snaps-homepages/snaps/reference/rpc-api#snap_dialog"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_dialog"))," RPC method and\n",(0,r.kt)("a",{parentName:"p",href:"/snaps-homepages/snaps/reference/exports#ontransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"onTransaction"))," exported method use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-ui")," module to display custom user interface (UI) components."),(0,r.kt)("p",null,"To use custom UI, first install ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-ui")," using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/snaps-ui\n")),(0,r.kt)("p",null,"Then, whenever you're required to return a custom UI component, import the components from the\npackage and build your UI with them.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, text } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = panel([\n  heading('Alert heading'),\n  text('Something happened in the system.'),\n]);\n\nreturn content;\n")),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeType")," enum exported by ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/snaps-ui")," details the available components."),(0,r.kt)("h3",{id:"copyable"},"copyable"),(0,r.kt)("p",null,"Outputs a read-only text field with a copy-to-clipboard shortcut."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { copyable } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = copyable('Text to be copied');\n")),(0,r.kt)("h3",{id:"divider"},"divider"),(0,r.kt)("p",null,"Outputs a horizontal divider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, divider, text } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = panel([\n  text('Text before the divider'),\n  divider(),\n  text('Text after the divider'),\n]);\n")),(0,r.kt)("h3",{id:"heading"},"heading"),(0,r.kt)("p",null,"Outputs a heading.\nThis is useful for ",(0,r.kt)("a",{parentName:"p",href:"#panel"},"panel")," titles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, text } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = panel([\n  heading('Title of the panel'),\n  text('Text of the panel'),\n]);\n")),(0,r.kt)("h3",{id:"image"},"image"),(0,r.kt)("p",null,"Outputs an image.\nThis component takes an inline SVG.\nIt does not support remote URLs.\nYou can embed JPG or PNG in SVG using data URIs.\nThe SVG is rendered within an \\<img",">"," tag, which prevents JavaScript or interaction events from being supported."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { image } from \'@metamask/snaps-ui\';\n\n// ...\n\nconst content = image(\'<svg width="400" height="400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.514 17.874 9 5c.021.011.043.016.064.026s.051.021.078.031a.892.892 0 0 0 .688 0c.027-.01.052-.019.078-.031s.043-.015.064-.026l9-5A1 1 0 0 0 22 16.9L21 7V2a1 1 0 0 0-1.625-.781L14.649 5h-5.3L4.625 1.219A1 1 0 0 0 3 2v4.9l-1 10a1 1 0 0 0 .514.974ZM5 7V4.081l3.375 2.7A1 1 0 0 0 9 7h6a1 1 0 0 0 .625-.219L19 4.079V7.1l.934 9.345L13 20.3v-2.967l1.42-.946A1.3 1.3 0 0 0 15 15.3a1.3 1.3 0 0 0-1.3-1.3h-3.4A1.3 1.3 0 0 0 9 15.3a1.3 1.3 0 0 0 .58 1.084l1.42.946v2.97l-6.94-3.855Zm3.5 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm5-2a2 2 0 1 1 2 2 2 2 0 0 1-2-2Z"/></svg>\');\n')),(0,r.kt)("h3",{id:"panel"},"panel"),(0,r.kt)("p",null,"Outputs a panel, which can be used as a container for other components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, text } from '@metamask/snaps-ui';\n\n// ...\n\nconst insights = [\n  /*...*/\n];\nconst content = panel([\n  heading('Here are the transaction insights'),\n  ...insights.map((insight) => text(insight.description)),\n]);\n")),(0,r.kt)("h3",{id:"spinner"},"spinner"),(0,r.kt)("p",null,"Outputs a loading indicator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { panel, heading, spinner } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = panel([heading('Please wait...'), spinner()]);\n")),(0,r.kt)("h3",{id:"text"},"text"),(0,r.kt)("p",null,"Outputs text."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { text } from '@metamask/snaps-ui';\n\n// ...\n\nconst content = text('This is a simple text UI');\n")),(0,r.kt)("h2",{id:"markdown"},"Markdown"),(0,r.kt)("p",null,"Text-based components accept a very small subset of inline Markdown: ",(0,r.kt)("inlineCode",{parentName:"p"},"**bold**")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_italic_"),".\nThis subset will be increased in the future."),(0,r.kt)("h2",{id:"emoji"},"Emoji"),(0,r.kt)("p",null,"Text-based components accept emoji."))}u.isMDXComponent=!0}}]);