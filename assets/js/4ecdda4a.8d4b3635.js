"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(o,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,l(l({ref:t},h),{},{components:n})):a.createElement(k,l({ref:t},h))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},l="MetaMask Keyring API",s={unversionedId:"reference/keyring-api/index",id:"reference/keyring-api/index",title:"MetaMask Keyring API",description:"This TypeScript module is maintained in the style of the MetaMask team.",source:"@site/snaps/reference/keyring-api/index.md",sourceDirName:"reference/keyring-api",slug:"/reference/keyring-api/",permalink:"/snaps/reference/keyring-api/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/index.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Subcommands",permalink:"/snaps/reference/cli/subcommands"},next:{title:"API",permalink:"/snaps/reference/keyring-api/exports"}},o={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"In a snap",id:"in-a-snap",level:3},{value:"API",id:"api",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Setup",id:"setup",level:3},{value:"Testing and Linting",id:"testing-and-linting",level:3},{value:"Release &amp; Publishing",id:"release--publishing",level:3}],h={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metamask-keyring-api"},"MetaMask Keyring API"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This TypeScript module is maintained in the style of the MetaMask team.")),(0,r.kt)("p",null,"This TypeScript module simplifies the integration of snaps with MetaMask using\nthe Keyring API."),(0,r.kt)("p",null,"Features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Keyring API Interface"),": The module exposes an interface representing the\nKeyring API. Snaps can implement this interface to seamlessly interact with\nMetaMask and leverage its functionality.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DApp Client"),": The module includes a client that enables dApps to\ncommunicate with the Keyring snap. This client allows dApps to send requests\nto the snap, such as retrieving account information or submitting requests.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MetaMask Client"),": The module provides a client specifically designed for\nMetaMask integration. This client enables MetaMask to send requests directly\nto the Keyring snap, facilitating smooth interoperability between the two\napplications.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Request Handler Helper Functions"),": The module offers a set of helper\nfunctions to simplify the implementation of the request handler in the\nKeyring snap. These functions assist in processing incoming requests,\nvalidating data, and handling various request types from dApps and MetaMask."))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yarn add @metamask/keyring-api")),(0,r.kt)("p",null,"or"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm install @metamask/keyring-api")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"in-a-snap"},"In a snap"),(0,r.kt)("p",null,"Inside the snap, implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class MySnapKeyring implements Keyring {\n  // Implement the required methods.\n}\n")),(0,r.kt)("p",null,"Then create a handler that uses an instance of your keyring:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { keyringRpcDispatcher } from '@metamask/keyring-api';\n\n// Create a new MySnapKeyring instance\nkeyring = new MySnapKeyring(keyringState);\n// ...\n\n// And wrap it in a handler\nconst keyringHandler: OnRpcRequestHandler = async ({ request }) => {\n  // Load the keyring state if needed\n  // ...\n  return await keyringRpcDispatcher(keyring, request);\n};\n")),(0,r.kt)("p",null,"Now expose this handler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const onRpcRequest: OnRpcRequestHandler = keyringHandler;\n")),(0,r.kt)("p",null,"Or chain it with other handlers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { chainHandlers } from '@metamask/keyring-api';\n\nexport const onRpcRequest: OnRpcRequestHandler = chainHandlers(\n  // Other handlers...\n  keyringHandler,\n  // Other handlers...\n);\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"See our documentation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metamask.github.io/keyring-api/latest/"},"Latest published API documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metamask.github.io/keyring-api/staging/"},"Latest development API documentation"))),(0,r.kt)("h2",{id:"contributing"},"Contributing"),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org"},"Node.js")," version 16",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you are using ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/creationix/nvm#installation"},"nvm")," (recommended) running ",(0,r.kt)("inlineCode",{parentName:"li"},"nvm use")," will automatically choose the right node version for you."))),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://yarnpkg.com/getting-started/install"},"Yarn v3")),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn install")," to install dependencies and run any required post-install scripts")),(0,r.kt)("h3",{id:"testing-and-linting"},"Testing and Linting"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test")," to run the tests once. To run tests on file changes, run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test:watch"),"."),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn lint")," to run the linter, or run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn lint:fix")," to run the linter and fix any automatically fixable issues."),(0,r.kt)("h3",{id:"release--publishing"},"Release & Publishing"),(0,r.kt)("p",null,"The project follows the same release process as the other libraries in the MetaMask organization. The GitHub Actions ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/action-create-release-pr"},(0,r.kt)("inlineCode",{parentName:"a"},"action-create-release-pr"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/action-publish-release"},(0,r.kt)("inlineCode",{parentName:"a"},"action-publish-release"))," are used to automate the release process; see those repositories for more information about how they work."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose a release version."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The release version should be chosen according to SemVer. Analyze the changes to see whether they include any breaking changes, new features, or deprecations, then choose the appropriate SemVer version. See ",(0,r.kt)("a",{parentName:"li",href:"https://semver.org/"},"the SemVer specification")," for more information."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If this release is backporting changes onto a previous release, then ensure there is a major version branch for that version (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"1.x")," for a ",(0,r.kt)("inlineCode",{parentName:"p"},"v1")," backport release)."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The major version branch should be set to the most recent release with that major version. For example, when backporting a ",(0,r.kt)("inlineCode",{parentName:"li"},"v1.0.2")," release, you'd want to ensure there was a ",(0,r.kt)("inlineCode",{parentName:"li"},"1.x")," branch that was set to the ",(0,r.kt)("inlineCode",{parentName:"li"},"v1.0.1")," tag."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Trigger the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/reference/events-that-trigger-workflows#workflow_dispatch"},(0,r.kt)("inlineCode",{parentName:"a"},"workflow_dispatch"))," event ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow"},"manually")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create Release Pull Request")," action to create the release PR."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For a backport release, the base branch should be the major version branch that you ensured existed in step 2. For a normal release, the base branch should be the main branch for that repository (which should be the default value)."),(0,r.kt)("li",{parentName:"ul"},"This should trigger the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/action-create-release-pr"},(0,r.kt)("inlineCode",{parentName:"a"},"action-create-release-pr"))," workflow to create the release PR."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the changelog to move each change entry into the appropriate change category (",(0,r.kt)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.0.0/#types"},"See here")," for the full list of change categories, and the correct ordering), and edit them to be more easily understood by users of the package."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Generally any changes that don't affect consumers of the package (e.g. lockfile changes or development environment changes) are omitted. Exceptions may be made for changes that might be of interest despite not having an effect upon the published package (e.g. major test improvements, security improvements, improved documentation, etc.)."),(0,r.kt)("li",{parentName:"ul"},"Try to explain each change in terms that users of the package would understand (e.g. avoid referencing internal variables/concepts)."),(0,r.kt)("li",{parentName:"ul"},"Consolidate related changes into one change entry if it makes it easier to explain."),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn auto-changelog validate --rc")," to check that the changelog is correctly formatted."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review and QA the release."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If changes are made to the base branch, the release branch will need to be updated with these changes and review/QA will need to restart again. As such, it's probably best to avoid merging other PRs into the base branch while review is underway."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Squash & Merge the release."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This should trigger the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/action-publish-release"},(0,r.kt)("inlineCode",{parentName:"a"},"action-publish-release"))," workflow to tag the final release commit and publish the release on GitHub."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Publish the release on npm."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Wait for the ",(0,r.kt)("inlineCode",{parentName:"li"},"publish-release")," GitHub Action workflow to finish. This should trigger a second job (",(0,r.kt)("inlineCode",{parentName:"li"},"publish-npm"),"), which will wait for a run approval by the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/orgs/MetaMask/teams/npm-publishers"},(0,r.kt)("inlineCode",{parentName:"a"},"npm publishers"))," team."),(0,r.kt)("li",{parentName:"ul"},"Approve the ",(0,r.kt)("inlineCode",{parentName:"li"},"publish-npm")," job (or ask somebody on the npm publishers team to approve it for you)."),(0,r.kt)("li",{parentName:"ul"},"Once the ",(0,r.kt)("inlineCode",{parentName:"li"},"publish-npm")," job has finished, check npm to verify that it has been published.")))))}c.isMDXComponent=!0}}]);