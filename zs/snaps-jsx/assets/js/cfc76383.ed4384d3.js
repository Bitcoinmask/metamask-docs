"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[792],{94800:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var i=s(74848),t=s(28453),r=s(40267),o=s(19365);const a={description:"See the Snaps permissions reference.",sidebar_position:5},c="Snaps permissions",l={id:"reference/permissions",title:"Snaps permissions",description:"See the Snaps permissions reference.",source:"@site/snaps/reference/permissions.md",sourceDirName:"reference",slug:"/reference/permissions",permalink:"/zs/snaps-jsx/snaps/reference/permissions",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/permissions.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"See the Snaps permissions reference.",sidebar_position:5},sidebar:"snapsSidebar",previous:{title:"Snaps entry points",permalink:"/zs/snaps-jsx/snaps/reference/entry-points"},next:{title:"Snaps known errors",permalink:"/zs/snaps-jsx/snaps/reference/known-errors"}},d={},h=[{value:"RPC API permissions",id:"rpc-api-permissions",level:2},{value:"Endowments",id:"endowments",level:2},{value:"<code>endowment:cronjob</code>",id:"endowmentcronjob",level:3},{value:"<code>endowment:ethereum-provider</code>",id:"endowmentethereum-provider",level:3},{value:"<code>endowment:page-home</code>",id:"endowmentpage-home",level:3},{value:"<code>endowment:keyring</code>",id:"endowmentkeyring",level:3},{value:"<code>endowment:lifecycle-hooks</code>",id:"endowmentlifecycle-hooks",level:3},{value:"<code>endowment:name-lookup</code>",id:"endowmentname-lookup",level:3},{value:"<code>endowment:network-access</code>",id:"endowmentnetwork-access",level:3},{value:"<code>endowment:rpc</code>",id:"endowmentrpc",level:3},{value:"Allowed origins",id:"allowed-origins",level:4},{value:"<code>endowment:transaction-insight</code>",id:"endowmenttransaction-insight",level:3},{value:"<code>endowment:signature-insight</code>",id:"endowmentsignature-insight",level:3},{value:"<code>endowment:webassembly</code>",id:"endowmentwebassembly",level:3},{value:"Snap-defined timeouts",id:"snap-defined-timeouts",level:3},{value:"Dynamic permissions",id:"dynamic-permissions",level:2},{value:"<code>eth_accounts</code>",id:"eth_accounts",level:3},{value:"Initial connections",id:"initial-connections",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"snaps-permissions",children:"Snaps permissions"}),"\n",(0,i.jsxs)(n.p,{children:["Snaps can ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/how-to/request-permissions",children:"request the following permissions"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"rpc-api-permissions",children:"RPC API permissions"}),"\n",(0,i.jsxs)(n.p,{children:["You must request permission to call ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/snaps-api",children:"Snaps API methods"}),".\nFor example, to request to call ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/snaps-api#snap_dialog",children:(0,i.jsx)(n.code,{children:"snap_dialog"})}),", add the following to the\nmanifest file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "snap_dialog": {}\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"endowments",children:"Endowments"}),"\n",(0,i.jsx)(n.h3,{id:"endowmentcronjob",children:(0,i.jsx)(n.code,{children:"endowment:cronjob"})}),"\n",(0,i.jsxs)(n.p,{children:["To run ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/features/cron-jobs",children:"cron jobs"})," for the user, a Snap must request the ",(0,i.jsx)(n.code,{children:"endowment:cronjob"})," permission.\nThis permission allows the Snap to specify cron jobs that trigger the\n",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/entry-points#oncronjob",children:(0,i.jsx)(n.code,{children:"onCronjob"})})," entry point."]}),"\n",(0,i.jsxs)(n.p,{children:["This permission takes an object with an array of ",(0,i.jsx)(n.code,{children:"jobs"}),", each containing two parameters:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"expression"})," - A ",(0,i.jsx)(n.a,{href:"https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm",children:"cron expression"}),"\nthat defines the schedule of the job."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"request"})," - A JSON-RPC request object that will be sent to the Snap's ",(0,i.jsx)(n.code,{children:"onCronjob"})," entry point when\nthe job is executed."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can modify the cron job's execution limit using ",(0,i.jsx)(n.a,{href:"#snap-defined-timeouts",children:"Snap-defined timeouts"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Specify this permission in the manifest file as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:cronjob": {\n    "jobs": [\n      {\n        "expression": "* * * * *",\n        "request": {\n          "method": "exampleMethodOne",\n          "params": {\n            "param1": "foo"\n          }\n        }\n      },\n      {\n        "expression": "*/2 * * * *",\n        "request": {\n          "method": "exampleMethodTwo",\n          "params": {\n            "param1": "bar"\n          }\n        }\n      }\n    ]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"endowmentethereum-provider",children:(0,i.jsx)(n.code,{children:"endowment:ethereum-provider"})}),"\n",(0,i.jsxs)(n.p,{children:["To communicate with a node using MetaMask, a Snap must request the ",(0,i.jsx)(n.code,{children:"endowment:ethereum-provider"})," permission.\nThis permission exposes the ",(0,i.jsx)(n.code,{children:"ethereum"})," global to the Snap execution environment, allowing Snaps to\ncall some ",(0,i.jsx)(n.a,{href:"/wallet/reference/json-rpc-api",children:"MetaMask JSON-RPC API"})," methods.\nThis global is an ",(0,i.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1193",children:"EIP-1193"})," provider."]}),"\n",(0,i.jsx)(n.p,{children:"Specify this permission in the manifest file as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:ethereum-provider": {}\n}\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ethereum"})," global available to Snaps has fewer capabilities than ",(0,i.jsx)(n.code,{children:"window.ethereum"})," for dapps.\nSee the ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/learn/about-snaps/apis#metamask-json-rpc-api",children:"list of methods"})," not available to Snaps."]})]}),"\n",(0,i.jsx)(n.h3,{id:"endowmentpage-home",children:(0,i.jsx)(n.code,{children:"endowment:page-home"})}),"\n",(0,i.jsxs)(n.p,{children:["To display a ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/features/custom-ui/home-pages",children:"home page"})," within MetaMask, a Snap must request\nthe ",(0,i.jsx)(n.code,{children:"endowment:page-home"})," permission.\nThis permission allows the Snap to present a dedicated UI by exposing the\n",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/entry-points#onhomepage",children:(0,i.jsx)(n.code,{children:"onHomePage"})})," entry point."]}),"\n",(0,i.jsx)(n.p,{children:"Specify this permission in the manifest file as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:page-home": {}\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"endowmentkeyring",children:(0,i.jsx)(n.code,{children:"endowment:keyring"})}),"\n",(0,i.jsxs)(n.p,{children:["For a dapp to call ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/keyring-api/account-management/",children:"Account Management API"})," methods on an\naccount management Snap to integrate ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/features/custom-evm-accounts/",children:"custom EVM accounts"}),",\nthe Snap must configure a list of allowed dapp URLs using the ",(0,i.jsx)(n.code,{children:"allowedOrigins"})," field of the ",(0,i.jsx)(n.code,{children:"endowment:keyring"})," permission.\nThis permission grants a Snap access to Account Management API requests sent to the Snap, using the\n",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/entry-points#onkeyringrequest",children:(0,i.jsx)(n.code,{children:"onKeyringRequest"})})," entry point."]}),"\n",(0,i.jsxs)(n.p,{children:["If a dapp hosted on a domain not listed in the ",(0,i.jsx)(n.code,{children:"allowedOrigins"})," attempts to call a Keyring API method,\nMetaMask rejects the request."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can modify the Account Management API's execution limit using ",(0,i.jsx)(n.a,{href:"#snap-defined-timeouts",children:"Snap-defined timeouts"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Specify this permission in the manifest file as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:keyring": {\n    "allowedOrigins": ["https://<dapp domain>"]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"endowmentlifecycle-hooks",children:(0,i.jsx)(n.code,{children:"endowment:lifecycle-hooks"})}),"\n",(0,i.jsxs)(n.p,{children:["To implement a ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/features/lifecycle-hooks",children:"lifecycle hook"})," that runs an action when a user\ninstalls or updates a Snap, the Snap must request the ",(0,i.jsx)(n.code,{children:"endowment:lifecycle-hooks"})," permission.\nThis permission allows the Snap to expose the\n",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/entry-points#oninstall",children:(0,i.jsx)(n.code,{children:"onInstall"})})," and\n",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/entry-points#onupdate",children:(0,i.jsx)(n.code,{children:"onUpdate"})}),"\nentry points, which MetaMask calls after a successful installation or update, respectively."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can modify the lifecycle hooks' execution limit using ",(0,i.jsx)(n.a,{href:"#snap-defined-timeouts",children:"Snap-defined timeouts"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Specify this permission in the manifest file as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:lifecycle-hooks": {}\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"endowmentname-lookup",children:(0,i.jsx)(n.code,{children:"endowment:name-lookup"})}),"\n",(0,i.jsx)(n.admonition,{type:"flaskOnly"}),"\n",(0,i.jsxs)(n.p,{children:["To provide ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/features/custom-name-resolution",children:"custom name resolution"}),", a Snap must request the\n",(0,i.jsx)(n.code,{children:"endowment:name-lookup"})," permission.\nThis permission grants the Snap read-only access to user input or an address by exporting the\n",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/entry-points#onnamelookup",children:(0,i.jsx)(n.code,{children:"onNameLookup"})})," entry point."]}),"\n",(0,i.jsx)(n.p,{children:"This permission takes an object with two optional properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"chains"})," - An array of ",(0,i.jsx)(n.a,{href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md",children:"CAIP-2"}),"\nchain IDs for which the Snap can resolve names and addresses.\nPass this array to reduce overhead on your Snap by making sure it only receives requests for\nchains it can resolve."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"matchers"})," - An object that helps reduce overhead by filtering the domains passed to your Snap.\nThis must contain at least one of the following properties:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tlds"})," - An array of strings for top-level domains that the Snap supports."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"schemes"})," - An array of strings for schemes that the Snap supports."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can modify the name lookup logic's execution limit using ",(0,i.jsx)(n.a,{href:"#snap-defined-timeouts",children:"Snap-defined timeouts"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Specify this permission in the manifest file as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:name-lookup": {\n    "chains": ["eip155:1"],\n    "matchers": {\n      "tlds": ["crypto"],\n      "schemes": ["farcaster"]\n    }\n  }\n},\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the Snap's ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/entry-points#onnamelookup",children:(0,i.jsx)(n.code,{children:"onNameLookup"})})," entry point would be\ncalled for domains such as ",(0,i.jsx)(n.code,{children:"someuser.crypto"})," or schemes such as ",(0,i.jsx)(n.code,{children:"farcaster:someuser"}),", as long as the\ndomain resolution is happening on Ethereum Mainnet."]}),"\n",(0,i.jsx)(n.h3,{id:"endowmentnetwork-access",children:(0,i.jsx)(n.code,{children:"endowment:network-access"})}),"\n",(0,i.jsxs)(n.p,{children:["To access the internet, a Snap must request the ",(0,i.jsx)(n.code,{children:"endowment:network-access"})," permission.\nThis permission exposes the global ",(0,i.jsx)(n.code,{children:"fetch"})," API to the Snaps execution environment."]}),"\n",(0,i.jsx)(n.p,{children:"Specify this permission in the manifest file as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:network-access": {}\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"endowmentrpc",children:(0,i.jsx)(n.code,{children:"endowment:rpc"})}),"\n",(0,i.jsxs)(n.p,{children:["To handle arbitrary JSON-RPC requests, a Snap must request the ",(0,i.jsx)(n.code,{children:"endowment:rpc"})," permission.\nThis permission grants a Snap access to JSON-RPC requests sent to the Snap, using the\n",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/entry-points#onrpcrequest",children:(0,i.jsx)(n.code,{children:"onRpcRequest"})})," entry point."]}),"\n",(0,i.jsxs)(n.p,{children:["This permission requires an object with a ",(0,i.jsx)(n.code,{children:"snaps"})," or ",(0,i.jsx)(n.code,{children:"dapps"})," property (or both), to signal if the\nSnap can receive JSON-RPC requests from other Snaps, or dapps, respectively.\nThe default for both properties is ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can modify the RPC API's execution limit using ",(0,i.jsx)(n.a,{href:"#snap-defined-timeouts",children:"Snap-defined timeouts"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Specify this permission in the manifest file as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:rpc": {\n    "dapps": true,\n    "snaps": false\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"allowed-origins",children:"Allowed origins"}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, you can specify the caveat ",(0,i.jsx)(n.code,{children:"allowedOrigins"})," to restrict all requests to specific domains or Snap IDs.\nCalls from any other origins are rejected."]}),"\n",(0,i.jsx)(n.p,{children:"Specify this caveat in the manifest file as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:rpc": { \n    "allowedOrigins": [\n      "https://metamask.io", \n      "https://consensys.io",\n      "npm:@metamask/example-snap"\n    ] \n  }\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you specify ",(0,i.jsx)(n.code,{children:"allowedOrigins"}),", you should not specify ",(0,i.jsx)(n.code,{children:"dapps"})," or ",(0,i.jsx)(n.code,{children:"snaps"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["If you want to grant a dapp or Snap an automatic connection to your Snap, skipping the need for\nusers to confirm a connection, you can use ",(0,i.jsx)(n.a,{href:"#initial-connections",children:(0,i.jsx)(n.code,{children:"initialConnections"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"endowmenttransaction-insight",children:(0,i.jsx)(n.code,{children:"endowment:transaction-insight"})}),"\n",(0,i.jsxs)(n.p,{children:["To provide ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/features/transaction-insights",children:"transaction insights"})," before a user signs a\ntransaction, a Snap must request the ",(0,i.jsx)(n.code,{children:"endowment:transaction-insight"})," permission.\nThis permission grants a Snap read-only access to raw transaction payloads, before they're accepted\nfor signing by the user, by exposing the ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/entry-points#ontransaction",children:(0,i.jsx)(n.code,{children:"onTransaction"})}),"\nentry point."]}),"\n",(0,i.jsxs)(n.p,{children:["This permission requires an object with an ",(0,i.jsx)(n.code,{children:"allowTransactionOrigin"})," property to signal if the Snap\nshould pass the ",(0,i.jsx)(n.code,{children:"transactionOrigin"})," property as part of the ",(0,i.jsx)(n.code,{children:"onTransaction"})," parameters.\nThis property represents the transaction initiator origin.\nThe default is ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can modify the transaction insight logic's execution limit using ",(0,i.jsx)(n.a,{href:"#snap-defined-timeouts",children:"Snap-defined timeouts"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Specify this permission in the manifest file as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:transaction-insight": {\n    "allowTransactionOrigin": true\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"endowmentsignature-insight",children:(0,i.jsx)(n.code,{children:"endowment:signature-insight"})}),"\n",(0,i.jsx)(n.admonition,{type:"flaskOnly"}),"\n",(0,i.jsxs)(n.p,{children:["To provide ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/features/signature-insights",children:"signature insights"}),", a Snap must request the\n",(0,i.jsx)(n.code,{children:"endowment:signature-insight"})," permission.\nThis permission grants a Snap read-only access to raw signature payloads, before they're accepted\nfor signing by the user, by exposing the ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/entry-points#onsignature",children:(0,i.jsx)(n.code,{children:"onSignature"})})," entry point."]}),"\n",(0,i.jsxs)(n.p,{children:["This permission requires an object with an ",(0,i.jsx)(n.code,{children:"allowSignatureOrigin"})," property to signal if the Snap\nshould pass the ",(0,i.jsx)(n.code,{children:"signatureOrigin"})," property as part of the ",(0,i.jsx)(n.code,{children:"onSignature"})," parameters.\nThis property represents the signature initiator origin.\nThe default is ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Specify this permission in the manifest file as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:signature-insight": {\n    "allowSignatureOrigin": true\n  }\n},\n'})}),"\n",(0,i.jsx)(n.h3,{id:"endowmentwebassembly",children:(0,i.jsx)(n.code,{children:"endowment:webassembly"})}),"\n",(0,i.jsxs)(n.p,{children:["To use WebAssembly, a Snap must request the ",(0,i.jsx)(n.code,{children:"endowment:webassembly"})," permission.\nThis permission exposes the global ",(0,i.jsx)(n.code,{children:"WebAssembly"})," API to the Snap execution environment."]}),"\n",(0,i.jsx)(n.p,{children:"Specify this permission in the manifest file as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:webassembly": {}\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"snap-defined-timeouts",children:"Snap-defined timeouts"}),"\n",(0,i.jsx)(n.p,{children:"Many endowments entail having MetaMask run arbitrary code defined in the Snap.\nThe default execution timeout is 60000 milliseconds, or one minute."}),"\n",(0,i.jsxs)(n.p,{children:["You can modify this execution timeout by adding a caveat ",(0,i.jsx)(n.code,{children:"maxRequestTime"})," to the permission.\nIt can take values from ",(0,i.jsx)(n.code,{children:"5000"})," (5 seconds) to ",(0,i.jsx)(n.code,{children:"180000"})," (3 minutes).\nFor example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:transaction-insight": {\n    "maxRequestTime": 10000\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"The following endowments accept this caveat:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#endowmentcronjob",children:(0,i.jsx)(n.code,{children:"endowment:cronjob"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#endowmentkeyring",children:(0,i.jsx)(n.code,{children:"endowment:keyring"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#endowmentlifecycle-hooks",children:(0,i.jsx)(n.code,{children:"endowment:lifecycle-hooks"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#endowmentname-lookup",children:(0,i.jsx)(n.code,{children:"endowment:name-lookup"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#endowmentpage-home",children:(0,i.jsx)(n.code,{children:"endowment:page-home"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#endowmentrpc",children:(0,i.jsx)(n.code,{children:"endowment:rpc"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#endowmenttransaction-insight",children:(0,i.jsx)(n.code,{children:"endowment:transaction-insight"})})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dynamic-permissions",children:"Dynamic permissions"}),"\n",(0,i.jsx)(n.h3,{id:"eth_accounts",children:(0,i.jsx)(n.code,{children:"eth_accounts"})}),"\n",(0,i.jsxs)(n.p,{children:["A Snap can request permission to call the ",(0,i.jsx)(n.a,{href:"/wallet/reference/eth_accounts",children:(0,i.jsx)(n.code,{children:"eth_accounts"})})," MetaMask\nJSON-RPC API method by calling ",(0,i.jsx)(n.a,{href:"/wallet/reference/eth_requestaccounts",children:(0,i.jsx)(n.code,{children:"eth_requestAccounts"})}),".\nCalling ",(0,i.jsx)(n.code,{children:"eth_requestAccounts"})," requires the\n",(0,i.jsx)(n.a,{href:"#endowmentethereum-provider",children:(0,i.jsx)(n.code,{children:"endowment:ethereum-provider"})})," permission:"]}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsx)(o.A,{value:"Manifest file",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:ethereum-provider": {}\n}\n'})})}),(0,i.jsx)(o.A,{value:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:'await ethereum.request({ "method": "eth_requestAccounts" });\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["You can check the presence of the permission by calling\n",(0,i.jsx)(n.a,{href:"/wallet/reference/wallet_getpermissions",children:(0,i.jsx)(n.code,{children:"wallet_getPermissions"})}),".\nIf the permission is present, the result contains a permission with a ",(0,i.jsx)(n.code,{children:"parentCapability"})," of ",(0,i.jsx)(n.code,{children:"eth_accounts"}),".\nThe permission contains a ",(0,i.jsx)(n.code,{children:"restrictReturnedAccounts"})," caveat, an array of all the accounts the user\nallows for this Snap.\nThe following is an example ",(0,i.jsx)(n.code,{children:"eth_accounts"})," permission:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "47vm2UUi1pccNAeYKGmwF",\n  "parentCapability": "eth_accounts",\n  "invoker": "npm:SNAP_ID",\n  "caveats": [\n    {\n      "type": "restrictReturnedAccounts",\n      "value": [\n        "0xc403b37bf1e700cb214ea1be9de066824b420de6"\n      ]\n    }\n  ],\n  "date": 1692616452846\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The user can revoke this permission by going to the Snap's settings under ",(0,i.jsx)(n.strong,{children:"Snap permissions"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"initial-connections",children:"Initial connections"}),"\n",(0,i.jsxs)(n.p,{children:["A Snap can authorize specific dapps or Snaps to automatically connect,\nskipping the need for users to manually confirm a connection when the dapp or Snap calls\n",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps",children:(0,i.jsx)(n.code,{children:"wallet_requestSnaps"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The following is an example of specifying ",(0,i.jsx)(n.code,{children:"initialConnections"})," for a dapp:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialConnections": {\n  "https://voyager-snap.linea.build": {}\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When a user visits the dapp and the dapp calls ",(0,i.jsx)(n.code,{children:"wallet_requestSnaps"}),", if the Snap is already\ninstalled, the dapp connects immediately and can make further calls to the Snap.\nIf the Snap is not installed, the user sees a confirmation to install the Snap."]}),"\n",(0,i.jsxs)(n.p,{children:["Learn more about ",(0,i.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/how-to/allow-automatic-connections",children:"allowing automatic connections"}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"important",type:"caution",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"initialConnections"})," is not a replacement for ",(0,i.jsx)(n.a,{href:"#endowmentrpc",children:(0,i.jsx)(n.code,{children:"endowment:rpc"})}),".\n",(0,i.jsx)(n.code,{children:"endowment:rpc"})," is still required to allow dapps or Snaps to call RPC methods of your Snap."]})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>o});s(96540);var i=s(18215);const t={tabItem:"tabItem_Ymn6"};var r=s(74848);function o(e){let{children:n,hidden:s,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,o),hidden:s,children:n})}},40267:(e,n,s)=>{s.d(n,{A:()=>S});var i=s(96540),t=s(20053),r=s(23104),o=s(56347),a=s(205),c=s(57485),l=s(31682),d=s(89466);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:i,default:t}}=e;return{value:n,label:s,attributes:i,default:t}}))}(s);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:s}=e;const t=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,r=p(e),[o,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=s.find((e=>e.default))??s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[l,h]=u({queryString:s,groupId:t}),[j,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,d.Dv)(s);return[t,(0,i.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),f=(()=>{const e=l??j;return m({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{f&&c(f)}),[f]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),x(e)}),[h,x,r]),tabValues:r}}var x=s(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb",flaskOnly:"flaskOnly_bhbK"};var g=s(74848),w=s(96763);function y(e){let{className:n,block:s,selectedValue:i,selectValue:o,tabValues:a}=e;w.log(a);const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),t=a[s].value;t!==i&&(l(n),o(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...r,className:(0,t.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":i===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:t}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=j(e),s={...n,tabValues:n.tabValues.map(((n,s)=>({...n,attributes:{...n.attributes,className:(0,t.A)(n.attributes?.className,{[f.flaskOnly]:e.children[s]?.props.flaskOnly})}})))};return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,g.jsx)(y,{...s,...e}),(0,g.jsx)(b,{...s,...e})]})}function S(e){const n=(0,x.A)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(n))}},20053:(e,n,s)=>{function i(e){var n,s,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(s=i(e[n]))&&(t&&(t+=" "),t+=s);else for(n in e)e[n]&&(t&&(t+=" "),t+=n);return t}s.d(n,{A:()=>t});const t=function(){for(var e,n,s=0,t="";s<arguments.length;)(e=arguments[s++])&&(n=i(e))&&(t&&(t+=" "),t+=n);return t}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(96540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);