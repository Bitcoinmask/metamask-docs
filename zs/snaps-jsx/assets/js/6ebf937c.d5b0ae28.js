"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5690],{69315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(74848),a=n(28453);const o={description:"Create a multi-component React dapp with global state.",toc_max_heading_level:4,sidebar_position:2},i="Create a React dapp with global state",r={id:"tutorials/react-dapp-global-state",title:"Create a React dapp with global state",description:"Create a multi-component React dapp with global state.",source:"@site/wallet/tutorials/react-dapp-global-state.md",sourceDirName:"tutorials",slug:"/tutorials/react-dapp-global-state",permalink:"/zs/snaps-jsx/wallet/tutorials/react-dapp-global-state",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/tutorials/react-dapp-global-state.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Create a multi-component React dapp with global state.",toc_max_heading_level:4,sidebar_position:2}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Set up the project",id:"1-set-up-the-project",level:3},{value:"Styling",id:"styling",level:4},{value:"Optional: Linting with ESLint",id:"optional-linting-with-eslint",level:4},{value:"Project structure",id:"project-structure",level:4},{value:"2. Build the context provider",id:"2-build-the-context-provider",level:3},{value:"3. Wrap components with the context provider",id:"3-wrap-components-with-the-context-provider",level:3},{value:"4. Connect to MetaMask in the navigation",id:"4-connect-to-metamask-in-the-navigation",level:3},{value:"5. Display MetaMask data",id:"5-display-metamask-data",level:3},{value:"6. Show MetaMask errors in the footer",id:"6-show-metamask-errors-in-the-footer",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-a-react-dapp-with-global-state",children:"Create a React dapp with global state"}),"\n",(0,s.jsxs)(t.p,{children:["This tutorial walks you through integrating a React dapp with MetaMask.\nThe dapp has multiple components, so requires managing global state.\nYou'll use the ",(0,s.jsx)(t.a,{href:"https://v3.vitejs.dev/guide",children:"Vite"})," build tool with React and TypeScript to create\nthe dapp."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["We recommend first ",(0,s.jsx)(t.a,{href:"/zs/snaps-jsx/wallet/tutorials/react-dapp-local-state",children:"creating a React dapp with local state"}),".\nThis tutorial is a follow-up to that tutorial."]})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/zs/snaps-jsx/wallet/tutorials/react-dapp-local-state",children:"previous tutorial"})," walks you through creating a dapp that connects\nto MetaMask and handles account, balance, and network changes with a single component.\nIn real world use cases, a dapp might need to respond to state changes in different components."]}),"\n",(0,s.jsxs)(t.p,{children:["In this tutorial, you'll move that state and its relevant functions into\n",(0,s.jsx)(t.a,{href:"https://react.dev/reference/react/useContext",children:"React context"}),", creating a\n",(0,s.jsx)(t.a,{href:"https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components",children:"global state"}),"\nso other components and UI can affect it and get MetaMask wallet updates."]}),"\n",(0,s.jsx)(t.p,{children:"This tutorial also provides a few best practices for a clean code base, since you'll have multiple\ncomponents and a slightly more complex file structure."}),"\n",(0,s.jsx)(t.admonition,{title:"Project source code",type:"info",children:(0,s.jsxs)(t.p,{children:["You can see the source code for the\n",(0,s.jsx)(t.a,{href:"https://github.com/MetaMask/react-dapp-tutorial/tree/global-state-start",children:"starting point"})," and\n",(0,s.jsx)(t.a,{href:"https://github.com/MetaMask/react-dapp-tutorial/tree/global-state-final",children:"final state"})," of this dapp."]})}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://nodejs.org/",children:"Node.js"})," version 18+"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"npm"})," version 9+"]}),"\n",(0,s.jsxs)(t.li,{children:["A text editor (for example, ",(0,s.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"VS Code"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.a,{href:"https://metamask.io/download",children:"MetaMask extension"})," installed"]}),"\n",(0,s.jsx)(t.li,{children:"Basic knowledge of TypeScript, React and React Hooks"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(t.h3,{id:"1-set-up-the-project",children:"1. Set up the project"}),"\n",(0,s.jsxs)(t.p,{children:["Clone the ",(0,s.jsx)(t.a,{href:"https://github.com/MetaMask/react-dapp-tutorial",children:(0,s.jsx)(t.code,{children:"react-dapp-tutorial"})})," GitHub repository\non GitHub by running the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/MetaMask/react-dapp-tutorial.git\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Checkout the ",(0,s.jsx)(t.code,{children:"global-state-start"})," branch:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cd react-dapp-tutorial && git checkout global-state-start\n"})}),"\n",(0,s.jsx)(t.p,{children:"Install the node module dependencies:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install\n"})}),"\n",(0,s.jsx)(t.p,{children:"Open the project in a text editor."}),"\n",(0,s.jsx)(t.admonition,{title:"tip",type:"note",children:(0,s.jsxs)(t.p,{children:["If you use VS Code, you can run the command ",(0,s.jsx)(t.code,{children:"code ."})," to open the project."]})}),"\n",(0,s.jsxs)(t.p,{children:["This is a working React dapp, but it's wiped out the code from the previous tutorial's\n",(0,s.jsx)(t.a,{href:"https://github.com/MetaMask/react-dapp-tutorial/blob/local-state-final/src/App.tsx",children:(0,s.jsx)(t.code,{children:"App.tsx"})})," file."]}),"\n",(0,s.jsxs)(t.p,{children:["Run the dapp using the command ",(0,s.jsx)(t.code,{children:"npx vite"}),".\nThe starting point looks like the following:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(94252).A+"",width:"1516",height:"1280"})}),"\n",(0,s.jsx)(t.p,{children:"There are three components, each with static text: navigation (with a logo area and connect button),\ndisplay (main content area), and footer.\nYou'll use the footer to show any MetaMask errors."}),"\n",(0,s.jsxs)(t.p,{children:["Before you start, comment out or remove the ",(0,s.jsx)(t.code,{children:"border"})," CSS selector, as it's only used as a visual aid.\nRemove the following line from each component style sheet:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",metastring:'title="Display.module.css | MetaMaskError.module.css | Navigation.module.css"',children:"// border: 1px solid rgb(...);\n"})}),"\n",(0,s.jsx)(t.h4,{id:"styling",children:"Styling"}),"\n",(0,s.jsxs)(t.p,{children:["This dapp has Vite's typical ",(0,s.jsx)(t.code,{children:"App.css"})," and ",(0,s.jsx)(t.code,{children:"index.css"})," files removed, and uses a modular approach to CSS."]}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.code,{children:"/src"})," directory, ",(0,s.jsx)(t.code,{children:"App.global.css"})," contains styles for the entire dapp (not specific to a\nsingle component), and styles you might want to reuse (such as buttons)."]}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.code,{children:"/src"})," directory, ",(0,s.jsx)(t.code,{children:"App.module.css"})," contains styles specific to ",(0,s.jsx)(t.code,{children:"App.tsx"}),", your dapp's\ncontainer component.\nIt uses the ",(0,s.jsx)(t.code,{children:"appContainer"})," class, which sets up a\n",(0,s.jsx)(t.a,{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox",children:"Flexbox"})," to define the ",(0,s.jsx)(t.code,{children:"display"})," type\n(",(0,s.jsx)(t.code,{children:"flex"}),") and the ",(0,s.jsx)(t.code,{children:"flex-direction"})," (",(0,s.jsx)(t.code,{children:"column"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["Using Flexbox here ensures that any child ",(0,s.jsx)(t.code,{children:"div"}),"s are laid out in a single-column layout (vertically)."]}),"\n",(0,s.jsxs)(t.p,{children:["Finally, the ",(0,s.jsx)(t.code,{children:"/src/components"})," directory has subdirectories for ",(0,s.jsx)(t.code,{children:"Display"}),", ",(0,s.jsx)(t.code,{children:"Navigation"}),", and ",(0,s.jsx)(t.code,{children:"MetaMaskError"}),".\nEach subdirectory contains a corresponding component file and CSS file.\nEach component is a\n",(0,s.jsx)(t.a,{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-basics-and-terminology",children:"flex-items"}),"\nwithin a\n",(0,s.jsx)(t.a,{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties",children:"flex-container"}),",\nstacked in a vertical column with the navigation and footer (",(0,s.jsx)(t.code,{children:"MetaMaskError"}),") being of fixed height\nand the middle component (",(0,s.jsx)(t.code,{children:"Display"}),") taking up the remaining vertical space."]}),"\n",(0,s.jsx)(t.h4,{id:"optional-linting-with-eslint",children:"Optional: Linting with ESLint"}),"\n",(0,s.jsx)(t.p,{children:"This dapp uses a standard ESLint configuration to keep the code consistent.\nThere are two ways to use ESLint:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Run ",(0,s.jsx)(t.code,{children:"npm run lint"})," or ",(0,s.jsx)(t.code,{children:"npm run lint:fix"})," from the command line.\nThe former displays all the linting errors, and the latter updates your code to fix linting\nerrors where possible."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Set up your IDE to show linting errors and automatically fix them on save.\nFor example, in VS Code, you can create or update the file at ",(0,s.jsx)(t.code,{children:".vscode/settings.json"})," in the\nroot of the project with the following settings:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="settings.json"',children:'{\n  "eslint.format.enable": true,\n  "eslint.packageManager": "npm",\n  "editor.codeActionsOnSave": {\n    "source.fixAll.eslint": true\n  },\n  "eslint.codeActionsOnSave.mode": "all"\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"project-structure",children:"Project structure"}),"\n",(0,s.jsxs)(t.p,{children:["The following is a tree representation of the dapp's ",(0,s.jsx)(t.code,{children:"/src"})," directory:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 assets\n\u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u2514\u2500\u2500 Display\n\u2502   \u2502   |   \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   |   \u2514\u2500\u2500 Display.module.css\n\u2502   \u2502   |   \u2514\u2500\u2500 Display.tsx\n\u2502   \u2502   \u251c\u2500\u2500 MetaMaskError\n\u2502   \u2502   |   \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   |   \u2514\u2500\u2500 MetaMaskError.module.css\n\u2502   \u2502   |   \u2514\u2500\u2500 MetaMaskError.tsx\n\u2502   \u2502   \u251c\u2500\u2500\u2500 Navigation\n\u2502   \u2502   |   \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   |   \u2514\u2500\u2500 Navigation.module.css\n\u2502   \u2502   |   \u2514\u2500\u2500 Navigation.tsx\n\u2502   \u251c\u2500\u2500 hooks\n\u2502   \u2502   \u251c\u2500\u2500 useMetaMask.tsx\n\u2502   \u251c\u2500\u2500 utils\n\u2502   \u2502   \u2514\u2500\u2500 index.tsx\n\u251c\u2500\u2500 App.global.css\n\u251c\u2500\u2500 App.module.css\n\u251c\u2500\u2500 App.tsx\n\u251c\u2500\u2500 main.tsx\n\u251c\u2500\u2500 vite-env.d.ts\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Instead of a single component, there's a ",(0,s.jsx)(t.code,{children:"src/components"})," directory with UI and functionality\ndistributed into multiple components.\nYou'll modify the dapp's state in this directory and make it available to the rest of the dapp using\na ",(0,s.jsx)(t.a,{href:"https://react.dev/reference/react/useContext",children:"context provider"}),".\nThis provider will sit in the ",(0,s.jsx)(t.code,{children:"src/App.tsx"})," file and wrap the three child components."]}),"\n",(0,s.jsxs)(t.p,{children:["The child components will have access to the global state and the functions that modify the global state.\nThis ensures that any change to the ",(0,s.jsx)(t.code,{children:"wallet"})," (",(0,s.jsx)(t.code,{children:"address"}),", ",(0,s.jsx)(t.code,{children:"balance"}),", and ",(0,s.jsx)(t.code,{children:"chainId"}),"), or the global\nstate's properties and functions (",(0,s.jsx)(t.code,{children:"hasProvider"}),", ",(0,s.jsx)(t.code,{children:"error"}),", ",(0,s.jsx)(t.code,{children:"errorMessage"}),", and ",(0,s.jsx)(t.code,{children:"isConnecting"}),") will\nbe accessible by re-rendering those child components."]}),"\n",(0,s.jsx)(t.p,{children:"The following graphic shows how the context provider wraps its child components, providing access to\nthe state modifier functions and the actual state itself.\nSince React uses a one-way data flow, any change to the data gets re-rendered in those components automatically."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(96903).A+"",width:"1516",height:"1280"})}),"\n",(0,s.jsx)(t.h3,{id:"2-build-the-context-provider",children:"2. Build the context provider"}),"\n",(0,s.jsxs)(t.p,{children:["In this step, you'll create a context called ",(0,s.jsx)(t.code,{children:"MetaMaskContext"})," and a provider component called\n",(0,s.jsx)(t.code,{children:"MetaMaskContextProvider"})," in the ",(0,s.jsx)(t.code,{children:"/src/hooks/useMetaMask.tsx"})," file."]}),"\n",(0,s.jsxs)(t.p,{children:["This provider component will use similar ",(0,s.jsx)(t.code,{children:"useState"})," and ",(0,s.jsx)(t.code,{children:"useEffect"})," hooks with some changes from\nthe previous tutorial's local state component to make it more DRY (don't repeat yourself)."]}),"\n",(0,s.jsxs)(t.p,{children:["It will also have similar ",(0,s.jsx)(t.code,{children:"updateWallet"}),", ",(0,s.jsx)(t.code,{children:"connectMetaMask"}),", and ",(0,s.jsx)(t.code,{children:"clearError"})," functions, all of\nwhich do their part to connect to MetaMask or update the MetaMask state."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"MetaMaskContext"})," will return a ",(0,s.jsx)(t.code,{children:"MetaMaskContext.Provider"}),", which takes a value of type\n",(0,s.jsx)(t.code,{children:"MetaMaskContextData"}),", and supplies that to its children."]}),"\n",(0,s.jsxs)(t.p,{children:["You'll export a React hook called ",(0,s.jsx)(t.code,{children:"useMetaMask"}),", which uses your ",(0,s.jsx)(t.code,{children:"MetaMaskContext"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Update ",(0,s.jsx)(t.code,{children:"/src/hooks/useMetaMask.tsx"})," with the following:"]}),"\n",(0,s.jsx)(t.admonition,{title:"Read the comments",type:"caution",children:(0,s.jsx)(t.p,{children:"The following code contains comments describing advanced React patterns and how MetaMask state is managed."})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'title="useMetaMask.tsx"',children:'/* eslint-disable @typescript-eslint/no-explicit-any */\nimport {\n  useState,\n  useEffect,\n  createContext,\n  PropsWithChildren,\n  useContext,\n  useCallback,\n} from "react";\n\nimport detectEthereumProvider from "@metamask/detect-provider";\nimport { formatBalance } from "~/utils";\n\ninterface WalletState {\n  accounts: any[];\n  balance: string;\n  chainId: string;\n}\n\ninterface MetaMaskContextData {\n  wallet: WalletState;\n  hasProvider: boolean | null;\n  error: boolean;\n  errorMessage: string;\n  isConnecting: boolean;\n  connectMetaMask: () => void;\n  clearError: () => void;\n}\n\nconst disconnectedState: WalletState = {\n  accounts: [],\n  balance: "",\n  chainId: "",\n};\n\nconst MetaMaskContext = createContext<MetaMaskContextData>(\n  {} as MetaMaskContextData\n);\n\nexport const MetaMaskContextProvider = ({ children }: PropsWithChildren) => {\n  const [hasProvider, setHasProvider] = useState<boolean | null>(null);\n\n  const [isConnecting, setIsConnecting] = useState(false);\n\n  const [errorMessage, setErrorMessage] = useState("");\n  const clearError = () => setErrorMessage("");\n\n  const [wallet, setWallet] = useState(disconnectedState);\n  // useCallback ensures that you don\'t uselessly recreate the _updateWallet function on every render.\n  const _updateWallet = useCallback(async (providedAccounts?: any) => {\n    const accounts =\n      providedAccounts ||\n      (await window.ethereum.request({ method: "eth_accounts" }));\n\n    if (accounts.length === 0) {\n      // If there are no accounts, then the user is disconnected.\n      setWallet(disconnectedState);\n      return;\n    }\n\n    const balance = formatBalance(\n      await window.ethereum.request({\n        method: "eth_getBalance",\n        params: [accounts[0], "latest"],\n      })\n    );\n    const chainId = await window.ethereum.request({\n      method: "eth_chainId",\n    });\n\n    setWallet({ accounts, balance, chainId });\n  }, []);\n\n  const updateWalletAndAccounts = useCallback(\n    () => _updateWallet(),\n    [_updateWallet]\n  );\n  const updateWallet = useCallback(\n    (accounts: any) => _updateWallet(accounts),\n    [_updateWallet]\n  );\n\n  /**\n   * This logic checks if MetaMask is installed. If it is, some event handlers are set up to update\n   * the wallet state when MetaMask changes. The function returned by useEffect is used as a\n   * "cleanup"; it removes the event handlers whenever the MetaMaskProvider is unmounted.\n   */\n  useEffect(() => {\n    const getProvider = async () => {\n      const provider = await detectEthereumProvider({ silent: true });\n      setHasProvider(Boolean(provider));\n\n      if (provider) {\n        updateWalletAndAccounts();\n        window.ethereum.on("accountsChanged", updateWallet);\n        window.ethereum.on("chainChanged", updateWalletAndAccounts);\n      }\n    };\n\n    getProvider();\n\n    return () => {\n      window.ethereum?.removeListener("accountsChanged", updateWallet);\n      window.ethereum?.removeListener(\n        "chainChanged",\n        updateWalletAndAccounts\n      );\n    };\n  }, [updateWallet, updateWalletAndAccounts]);\n\n  const connectMetaMask = async () => {\n    setIsConnecting(true);\n\n    try {\n      const accounts = await window.ethereum.request({\n        method: "eth_requestAccounts",\n      });\n      clearError();\n      updateWallet(accounts);\n    } catch (err: any) {\n      setErrorMessage(err.message);\n    }\n    setIsConnecting(false);\n  };\n\n  return (\n    <MetaMaskContext.Provider\n      value={{\n        wallet,\n        hasProvider,\n        error: !!errorMessage,\n        errorMessage,\n        isConnecting,\n        connectMetaMask,\n        clearError,\n      }}\n    >\n      {children}\n    </MetaMaskContext.Provider>\n  );\n};\n\nexport const useMetaMask = () => {\n  const context = useContext(MetaMaskContext);\n  if (context === undefined) {\n    throw new Error(\n      "useMetaMask must be used within a MetaMaskContextProvider"\n    );\n  }\n  return context;\n};\n'})}),"\n",(0,s.jsxs)(t.p,{children:["With this context provider in place, you can update ",(0,s.jsx)(t.code,{children:"/src/App.tsx"})," to include the provider and wrap\nit around the three components."]}),"\n",(0,s.jsxs)(t.p,{children:["Notice the use of ",(0,s.jsx)(t.code,{children:"~/utils"})," to import the utility functions."]}),"\n",(0,s.jsxs)(t.admonition,{title:"vite-tsconfig-paths",type:"note",children:[(0,s.jsxs)(t.p,{children:["This dapp is configured to use ",(0,s.jsx)(t.code,{children:"vite-tsconfig-paths"}),", allowing it to load modules with locations\nspecified by the ",(0,s.jsx)(t.code,{children:"compilerOptions.paths"})," object in ",(0,s.jsx)(t.code,{children:"tsconfig.json"}),".\nThe path corresponding to the ",(0,s.jsx)(t.code,{children:"./src/*"})," directory is represented by the ",(0,s.jsx)(t.code,{children:"~/*"})," symbol.\nThere's also a reference to ",(0,s.jsx)(t.code,{children:"./tsconfig.node.json"})," in the ",(0,s.jsx)(t.code,{children:"reference"}),"'s array objects that correspond\nto ",(0,s.jsx)(t.code,{children:"path"}),"."]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"vite.config.ts"})," imports ",(0,s.jsx)(t.code,{children:"tsconfigPaths"})," from ",(0,s.jsx)(t.code,{children:"vite-tsconfig-paths"})," and adds it to the ",(0,s.jsx)(t.code,{children:"plugins"})," array."]}),(0,s.jsxs)(t.p,{children:["See more information about ",(0,s.jsx)(t.a,{href:"https://github.com/aleclarson/vite-tsconfig-paths",children:(0,s.jsx)(t.code,{children:"vite-tsconfig-paths"})}),"."]})]}),"\n",(0,s.jsx)(t.h3,{id:"3-wrap-components-with-the-context-provider",children:"3. Wrap components with the context provider"}),"\n",(0,s.jsxs)(t.p,{children:["In this step, you'll import the ",(0,s.jsx)(t.code,{children:"MetaMaskContextProvider"})," in ",(0,s.jsx)(t.code,{children:"/src/App.tsx"})," and wrap that component\naround the existing ",(0,s.jsx)(t.code,{children:"Display"}),", ",(0,s.jsx)(t.code,{children:"Navigation"}),", and ",(0,s.jsx)(t.code,{children:"MetaMaskError"})," components."]}),"\n",(0,s.jsxs)(t.p,{children:["Update ",(0,s.jsx)(t.code,{children:"/src/App.tsx"})," to the following:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'import "./App.global.css";\nimport styles from "./App.module.css";\n\nimport { Navigation } from "./components/Navigation";\nimport { Display } from "./components/Display";\nimport { MetaMaskError } from "./components/MetaMaskError";\nimport { MetaMaskContextProvider } from "./hooks/useMetaMask";\n\nexport const App = () => {\n  return (\n    <MetaMaskContextProvider>\n      <div className={styles.appContainer}>\n        <Navigation />\n        <Display />\n        <MetaMaskError />\n      </div>\n    </MetaMaskContextProvider>\n  );\n};\n'})}),"\n",(0,s.jsxs)(t.p,{children:["With ",(0,s.jsx)(t.code,{children:"App.tsx"})," updated, you can update the ",(0,s.jsx)(t.code,{children:"Display"}),", ",(0,s.jsx)(t.code,{children:"Navigation"}),", and ",(0,s.jsx)(t.code,{children:"MetaMaskError"})," components,\neach of which will use the ",(0,s.jsx)(t.code,{children:"useMetaMask"})," hook to display the state or invoke functions that modify state."]}),"\n",(0,s.jsx)(t.h3,{id:"4-connect-to-metamask-in-the-navigation",children:"4. Connect to MetaMask in the navigation"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Navigation"})," component will connect to MetaMask using conditional rendering to show an\n",(0,s.jsx)(t.strong,{children:"Install MetaMask"})," or ",(0,s.jsx)(t.strong,{children:"Connect MetaMask"})," button or, once connected, display your wallet address\nin a hypertext link that connects to ",(0,s.jsx)(t.a,{href:"https://etherscan.io",children:"Etherscan"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Update ",(0,s.jsx)(t.code,{children:"/src/components/Navigation/Navigation.tsx"})," to the following:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'title="Navigation.tsx"',children:'import { useMetaMask } from "~/hooks/useMetaMask";\nimport { formatAddress } from "~/utils";\nimport styles from "./Navigation.module.css";\n\nexport const Navigation = () => {\n  const { wallet, hasProvider, isConnecting, connectMetaMask } =\n    useMetaMask();\n\n  return (\n    <div className={styles.navigation}>\n      <div className={styles.flexContainer}>\n        <div className={styles.leftNav}>Vite + React & MetaMask</div>\n        <div className={styles.rightNav}>\n          {!hasProvider && (\n            <a href="https://metamask.io" target="_blank">Install MetaMask</a>\n          )}\n          {window.ethereum?.isMetaMask &&\n            wallet.accounts.length < 1 && (\n              <button disabled={isConnecting} onClick={connectMetaMask}>\n                Connect MetaMask\n              </button>\n            )}\n          {hasProvider && wallet.accounts.length > 0 && (\n            <a\n              className="text_link tooltip-bottom"\n              href={`https://etherscan.io/address/${wallet.accounts[0]}`}\n              target="_blank"\n              data-tooltip="Open in Block Explorer"\n            >\n              {formatAddress(wallet.accounts[0])}\n            </a>\n          )}\n        </div>\n      </div>\n    </div>\n  );\n};\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Notice how ",(0,s.jsx)(t.code,{children:"useMetaMask"})," de-structures its return value to get the items within ",(0,s.jsx)(t.code,{children:"MetaMaskContextData"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Also, the ",(0,s.jsx)(t.code,{children:"formatAddress"})," function formats the wallet address for display purposes:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"{\n  formatAddress(wallet.accounts[0]);\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This function doesn't exist in the ",(0,s.jsx)(t.code,{children:"@utils"})," file yet, so you'll need to add it.\nUpdate ",(0,s.jsx)(t.code,{children:"/src/utils/index.tsx"})," to the following:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="utils/index.ts"',children:"export const formatBalance = (rawBalance: string) => {\n  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);\n  return balance;\n};\n\nexport const formatChainAsNum = (chainIdHex: string) => {\n  const chainIdNum = parseInt(chainIdHex);\n  return chainIdNum;\n};\n\nexport const formatAddress = (addr: string) => {\n  return `${addr.substring(0, 8)}...`;\n};\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This should address any build errors in your ",(0,s.jsx)(t.code,{children:"Navigation"})," component."]}),"\n",(0,s.jsxs)(t.p,{children:["Other than using the new styling, the only thing this dapp has done differently than the local-state\ntutorial is display the user's ",(0,s.jsx)(t.code,{children:"address"})," formatted inside a link once they're connected.\nNow that you have a place for connecting and showing the address, you could build out an entire\nprofile component (side quest)."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(44414).A+"",width:"1516",height:"1280"})}),"\n",(0,s.jsx)(t.h3,{id:"5-display-metamask-data",children:"5. Display MetaMask data"}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.code,{children:"Display"})," component, you won't call any functions that modify state; you'll read from\n",(0,s.jsx)(t.code,{children:"MetaMaskData"}),", a simple update."]}),"\n",(0,s.jsxs)(t.p,{children:["Update ",(0,s.jsx)(t.code,{children:"/src/components/Display/Display.tsx"})," to the following:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'title="Display.tsx"',children:'import { useMetaMask } from "~/hooks/useMetaMask";\nimport { formatChainAsNum } from "~/utils";\nimport styles from "./Display.module.css";\n\nexport const Display = () => {\n  const { wallet } = useMetaMask();\n\n  return (\n    <div className={styles.display}>\n      {wallet.accounts.length > 0 && (\n        <>\n          <div>Wallet Accounts: {wallet.accounts[0]}</div>\n          <div>Wallet Balance: {wallet.balance}</div>\n          <div>Hex ChainId: {wallet.chainId}</div>\n          <div>Numeric ChainId: {formatChainAsNum(wallet.chainId)}</div>\n        </>\n      )}\n    </div>\n  );\n};\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Notice how ",(0,s.jsx)(t.code,{children:"useMetaMask"})," de-structures its return value to get only the ",(0,s.jsx)(t.code,{children:"wallet"})," data:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const { wallet } = useMetaMask();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["At this point, you can display ",(0,s.jsx)(t.code,{children:"account"}),", ",(0,s.jsx)(t.code,{children:"balance"}),", and ",(0,s.jsx)(t.code,{children:"chainId"})," in the ",(0,s.jsx)(t.code,{children:"Display"})," component:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(27505).A+"",width:"1516",height:"1280"})}),"\n",(0,s.jsx)(t.h3,{id:"6-show-metamask-errors-in-the-footer",children:"6. Show MetaMask errors in the footer"}),"\n",(0,s.jsxs)(t.p,{children:["If MetaMask errors or the user rejects a connection, you can display that error in the footer, or\n",(0,s.jsx)(t.code,{children:"MetaMaskError"})," component."]}),"\n",(0,s.jsxs)(t.p,{children:["Update ",(0,s.jsx)(t.code,{children:"/src/components/MetaMaskError/MetaMaskError.tsx"})," to the following:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'title="MetaMaskError.tsx"',children:'import { useMetaMask } from "~/hooks/useMetaMask";\nimport styles from "./MetaMaskError.module.css";\n\nexport const MetaMaskError = () => {\n  const { error, errorMessage, clearError } = useMetaMask();\n  return (\n    <div\n      className={styles.metaMaskError}\n      style={error ? { backgroundColor: "brown" } : {}}\n    >\n      {error && (\n        <div onClick={clearError}>\n          <strong>Error:</strong> {errorMessage}\n        </div>\n      )}\n    </div>\n  );\n};\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Notice how ",(0,s.jsx)(t.code,{children:"useMetaMask"})," de-structures its return value to get only the ",(0,s.jsx)(t.code,{children:"error"}),", ",(0,s.jsx)(t.code,{children:"errorMessage"}),", and\n",(0,s.jsx)(t.code,{children:"clearError"})," data:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const { error, errorMessage, clearError } = useMetaMask();\n"})}),"\n",(0,s.jsx)(t.p,{children:"When you generate an error by cancelling the connection to MetaMask, this shows up in the footer.\nThe background temporarily turns a dark red color:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(17288).A+"",width:"1516",height:"1280"})}),"\n",(0,s.jsx)(t.p,{children:"In this tutorial's dapp, you can dismiss any MetaMask error displayed in the footer by selecting it.\nIn a real-world dapp, the best UI/UX for error dismissing would be a component that displays in a\nmodal or overlay and provides an obvious dismiss button."}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(t.p,{children:"You've successfully converted a single component dapp with local state to a multiple component dapp\nwith global state, using React context and provider.\nYou can modify the dapp's global state using functions and data that, when used anywhere in the dapp,\nwill show up-to-date data associated with your MetaMask wallet."}),"\n",(0,s.jsxs)(t.p,{children:["You can see the ",(0,s.jsx)(t.a,{href:"https://github.com/MetaMask/react-dapp-tutorial/tree/global-state-final",children:"source code"}),"\nfor the final state of this dapp tutorial."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},94252:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pt2-01-3c2f19aa1cdbeb15eab76717dc49ce0c.png"},96903:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pt2-02-1cc67378fe36943534741cd4f8b131bd.png"},44414:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pt2-03-e8b080de2656acae1f64606002a6efa7.png"},27505:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pt2-04-5acbfcc3f3ba213bae6a9b341522eb9b.png"},17288:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pt2-05-d0ee9f90adc6b7d693bf11ff700196fe.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(96540);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);