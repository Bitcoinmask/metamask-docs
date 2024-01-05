"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_label:"Android",sidebar_position:2,toc_max_heading_level:4,description:"Set up the SDK in your Android dapp.",tags:["Android SDK"]},i="Use MetaMask SDK with Android",l={unversionedId:"how-to/connect/set-up-sdk/mobile/android",id:"how-to/connect/set-up-sdk/mobile/android",title:"Use MetaMask SDK with Android",description:"Set up the SDK in your Android dapp.",source:"@site/wallet/how-to/connect/set-up-sdk/mobile/android.md",sourceDirName:"how-to/connect/set-up-sdk/mobile",slug:"/how-to/connect/set-up-sdk/mobile/android",permalink:"/snaps-homepages/wallet/how-to/connect/set-up-sdk/mobile/android",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/set-up-sdk/mobile/android.md",tags:[{label:"Android SDK",permalink:"/snaps-homepages/wallet/tags/android-sdk"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Android",sidebar_position:2,toc_max_heading_level:4,description:"Set up the SDK in your Android dapp.",tags:["Android SDK"]},sidebar:"walletSidebar",previous:{title:"iOS",permalink:"/snaps-homepages/wallet/how-to/connect/set-up-sdk/mobile/ios"},next:{title:"Detect MetaMask",permalink:"/snaps-homepages/wallet/how-to/connect/detect-metamask"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Connect your dapp",id:"3-connect-your-dapp",level:3},{value:"3.1. Use the provider object directly",id:"31-use-the-provider-object-directly",level:4},{value:"3.2. Use a ViewModel",id:"32-use-a-viewmodel",level:4},{value:"4. Call methods",id:"4-call-methods",level:3},{value:"Example: Get account balance",id:"example-get-account-balance",level:4},{value:"Example: Sign message",id:"example-sign-message",level:4},{value:"Example: Send transaction",id:"example-send-transaction",level:4},{value:"Example: Switch chain",id:"example-switch-chain",level:4},{value:"Example",id:"example",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-metamask-sdk-with-android"},"Use MetaMask SDK with Android"),(0,r.kt)("p",null,"Import ",(0,r.kt)("a",{parentName:"p",href:"/snaps-homepages/wallet/concepts/sdk/"},"MetaMask SDK")," into your native Android dapp to enable\nyour users to easily connect with their MetaMask Mobile wallet."),(0,r.kt)("admonition",{title:"See also",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/snaps-homepages/wallet/concepts/sdk/android"},"Android SDK architecture")))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MetaMask Mobile version 7.6.0 or later installed on your target device (that is, a physical\ndevice or emulator).\nYou can install MetaMask Mobile from ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=io.metamask"},"Google Play"),",\nor clone and compile MetaMask Mobile from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-mobile"},"source"),"\nand build to your target device.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Android SDK version 23 or later."))),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,r.kt)("p",null,"To add the SDK from Maven Central as a dependency to your project, in your ",(0,r.kt)("inlineCode",{parentName:"p"},"app/build.gradle")," file,\nadd the following entry to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle",metastring:'title="build.gradle"',title:'"build.gradle"'},"dependencies {\n    implementation 'io.metamask.androidsdk:metamask-android-sdk:0.2.1'\n}\n")),(0,r.kt)("p",null,"Then, sync your project with the Gradle settings.\nOnce the syncing completes, you can set up the rest of your project."),(0,r.kt)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,r.kt)("p",null,"Import the SDK by adding the following line to the top of your project file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"import io.metamask.androidsdk.Ethereum\n")),(0,r.kt)("h3",{id:"3-connect-your-dapp"},"3. Connect your dapp"),(0,r.kt)("p",null,"You can connect your dapp to MetaMask in one of two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#31-use-the-provider-object-directly"},"Use the ",(0,r.kt)("inlineCode",{parentName:"a"},"ethereum")," provider object directly"),".\nWe recommend using this method in a pure model layer."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#32-use-a-viewmodel"},"Use a ViewModel")," that injects the ",(0,r.kt)("inlineCode",{parentName:"li"},"ethereum")," provider object.\nWe recommend using this method at the app level, because it provides a single instance that\nsurvives configuration changes and can be shared across all views.")),(0,r.kt)("admonition",{title:"Logging",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"By default, MetaMask logs three SDK events: ",(0,r.kt)("inlineCode",{parentName:"p"},"connection_request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"connected"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"disconnected"),".\nThis allows MetaMask to monitor any SDK connection issues.\nTo disable this, set ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum.enableDebug = false"),".")),(0,r.kt)("h4",{id:"31-use-the-provider-object-directly"},"3.1. Use the provider object directly"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," provider object directly to connect your dapp to MetaMask by adding the following\ncode to your project file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@AndroidEntryPoint\nclass SomeModel(private val repository: ApplicationRepository) {\n    val ethereum = Ethereum(context)\n    \n    val dapp = Dapp("Droid Dapp", "https://droiddapp.com")\n\n    // This is the same as calling eth_requestAccounts\n    ethereum.connect(dapp) { result ->\n        if (result is RequestError) {\n            Log.e(TAG, "Ethereum connection error: ${result.message}")\n        } else {\n            Log.d(TAG, "Ethereum connection result: $result")\n        }\n    }\n}\n')),(0,r.kt)("h4",{id:"32-use-a-viewmodel"},"3.2. Use a ViewModel"),(0,r.kt)("p",null,"To connect your dapp to MetaMask using a ViewModel, create a ViewModel that injects the\n",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," provider object, then add wrapper functions for each Ethereum method you wish to call."),(0,r.kt)("p",null,"You can use a dependency manager such as ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/training/dependency-injection/hilt-android"},"Hilt"),"\nto initialize the ViewModel and maintain its state across configuration changes.\nIf you use Hilt, your setup might look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="EthereumViewModel.kt"',title:'"EthereumViewModel.kt"'},"@HiltViewModel\nclass EthereumViewModel @Inject constructor(\n        private val ethereum: Ethereum\n): ViewModel() {\n\n  val ethereumState = MediatorLiveData<EthereumState>().apply {\n    addSource(ethereum.ethereumState) { newEthereumState ->\n      value = newEthereumState\n    }\n  }\n\n  // Wrapper function to connect the dapp\n  fun connect(dapp: Dapp, callback: ((Any?) -> Unit)?) {\n    ethereum.connect(dapp, callback)\n  }\n  \n  // Wrapper function call all RPC methods\n  fun sendRequest(request: EthereumRequest, callback: ((Any?) -> Unit)?) {\n    ethereum.sendRequest(request, callback)\n  }\n}\n")),(0,r.kt)("p",null,"To use the ViewModel, add the following code to your project file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val ethereumViewModel: EthereumViewModel by viewModels()\n\nval dapp = Dapp("Droid Dapp", "https://droiddapp.com")\n\n// This is the same as calling eth_requestAccounts\nethereum.connect(dapp) { result ->\n    if (result is RequestError) {\n        Log.e(TAG, "Ethereum connection error: ${result.message}")\n    } else {\n        Log.d(TAG, "Ethereum connection result: $result")\n    }\n}\n')),(0,r.kt)("p",null,"See the example dapp's\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-android-sdk/blob/main/app/src/main/java/com/metamask/dapp/EthereumViewModel.kt"},(0,r.kt)("inlineCode",{parentName:"a"},"EthereumViewModel.kt")),"\nfile for more information."),(0,r.kt)("h3",{id:"4-call-methods"},"4. Call methods"),(0,r.kt)("p",null,"You can now call any ",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/json-rpc-api"},"JSON-RPC API method")," using\n",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum.sendRequest()"),"."),(0,r.kt)("h4",{id:"example-get-account-balance"},"Example: Get account balance"),(0,r.kt)("p",null,"The following example gets the user's account balance by calling\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_getBalance"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getBalance")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'var balance: String? = null\n\n// Create parameters\nval params: List<String> = listOf(\n    ethereum.selectedAddress,\n    "latest" // "latest", "earliest" or "pending" (optional)\n    )\n\n// Create request\nval getBalanceRequest = EthereumRequest(\n    method = EthereumMethod.ETHGETBALANCE.value,\n    params = params\n)\n\n// Make request\nethereum.sendRequest(getBalanceRequest) { result ->\n    if (result is RequestError) {\n        // handle error\n    } else {\n        balance = result\n    }\n}\n')),(0,r.kt)("h4",{id:"example-sign-message"},"Example: Sign message"),(0,r.kt)("p",null,"The following example requests the user sign a message by calling\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_signTypedData_v4"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val message = "{\\"domain\\":{\\"chainId\\":\\"${ethereum.chainId}\\",\\"name\\":\\"Ether Mail\\",\\"verifyingContract\\":\\"0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC\\",\\"version\\":\\"1\\"},\\"message\\":{\\"contents\\":\\"Hello, Busa!\\",\\"from\\":{\\"name\\":\\"Kinno\\",\\"wallets\\":[\\"0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826\\",\\"0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF\\"]},\\"to\\":[{\\"name\\":\\"Busa\\",\\"wallets\\":[\\"0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB\\",\\"0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57\\",\\"0xB0B0b0b0b0b0B000000000000000000000000000\\"]}]},\\"primaryType\\":\\"Mail\\",\\"types\\":{\\"EIP712Domain\\":[{\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"version\\",\\"type\\":\\"string\\"},{\\"name\\":\\"chainId\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"verifyingContract\\",\\"type\\":\\"address\\"}],\\"Group\\":[{\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"members\\",\\"type\\":\\"Person[]\\"}],\\"Mail\\":[{\\"name\\":\\"from\\",\\"type\\":\\"Person\\"},{\\"name\\":\\"to\\",\\"type\\":\\"Person[]\\"},{\\"name\\":\\"contents\\",\\"type\\":\\"string\\"}],\\"Person\\":[{\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"wallets\\",\\"type\\":\\"address[]\\"}]}}"\n\nval from = ethereum.selectedAddress\nval params: List<String> = listOf(from, message)\n\nval signRequest = EthereumRequest(\n    method = EthereumMethod.ETH_SIGN_TYPED_DATA_V4.value,\n    params = params\n)\n\nethereum.sendRequest(signRequest) { result ->\n    if (result is RequestError) {\n        Log.e(TAG, "Ethereum sign error: ${result.message}")\n    } else {\n        Log.d(TAG, "Ethereum sign result: $result")\n    }\n}\n')),(0,r.kt)("h4",{id:"example-send-transaction"},"Example: Send transaction"),(0,r.kt)("p",null,"The following example sends a transaction by calling\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/eth_sendTransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Create parameters\nval from = ethereum.selectedAddress\nval to = "0x0000000000000000000000000000000000000000"\nval amount = "0x01"\nval params: Map<String, Any> = mapOf(\n    "from" to from,\n    "to" to to,\n    "amount" to amount\n)\n\n// Create request\nval transactionRequest = EthereumRequest(\n    method = EthereumMethod.ETH_SEND_TRANSACTION.value,\n    params = listOf(params)\n)\n\n// Make a transaction request\nethereum.sendRequest(transactionRequest) { result ->\n    if (result is RequestError) {\n        // handle error\n    } else {\n        Log.d(TAG, "Ethereum transaction result: $result")\n    }\n}\n')),(0,r.kt)("h4",{id:"example-switch-chain"},"Example: Switch chain"),(0,r.kt)("p",null,"The following example switches to a new Ethereum chain by calling\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_switchethereumchain"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_switchEthereumChain"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_addethereumchain"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun switchChain(\n    chainId: String,\n    onSuccess: (message: String) -> Unit,\n    onError: (message: String, action: (() -> Unit)?) -> Unit\n) {\n    val switchChainParams: Map<String, String> = mapOf("chainId" to chainId)\n    val switchChainRequest = EthereumRequest(\n        method = EthereumMethod.SWITCH_ETHEREUM_CHAIN.value,\n        params = listOf(switchChainParams)\n    )\n\n    ethereum.sendRequest(switchChainRequest) { result ->\n        if (result is RequestError) {\n            if (result.code == ErrorType.UNRECOGNIZED_CHAIN_ID.code || result.code == ErrorType.SERVER_ERROR.code) {\n                val message = "${Network.chainNameFor(chainId)} ($chainId) has not been added to your MetaMask wallet. Add chain?"\n\n                val action: () -> Unit = {\n                    addEthereumChain(\n                        chainId,\n                        onSuccess = { result ->\n                            onSuccess(result)\n                        },\n                        onError = { error ->\n                            onError(error, null)\n                        }\n                    )\n                }\n                onError(message, action)\n            } else {\n                onError("Switch chain error: ${result.message}", null)\n            }\n        } else {\n            onSuccess("Successfully switched to ${Network.chainNameFor(chainId)} ($chainId)")\n        }\n    }\n}\n\nprivate fun addEthereumChain(\n    chainId: String,\n    onSuccess: (message: String) -> Unit,\n    onError: (message: String) -> Unit\n) {\n    Logger.log("Adding chainId: $chainId")\n\n    val addChainParams: Map<String, Any> = mapOf(\n        "chainId" to chainId,\n        "chainName" to Network.chainNameFor(chainId),\n        "rpcUrls" to Network.rpcUrls(Network.fromChainId(chainId))\n    )\n    val addChainRequest = EthereumRequest(\n        method = EthereumMethod.ADD_ETHEREUM_CHAIN.value,\n        params = listOf(addChainParams)\n    )\n\n    ethereum.sendRequest(addChainRequest) { result ->\n        if (result is RequestError) {\n            onError("Add chain error: ${result.message}")\n        } else {\n            if (chainId == ethereum.chainId) {\n                onSuccess("Successfully switched to ${Network.chainNameFor(chainId)} ($chainId)")\n            } else {\n                onSuccess("Successfully added ${Network.chainNameFor(chainId)} ($chainId)")\n            }\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-android-sdk/tree/main/app"},"example Android dapp")," in\nthe Android SDK GitHub repository for more information."))}u.isMDXComponent=!0}}]);