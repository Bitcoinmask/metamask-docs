"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1266],{94563:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>u});var a=s(74848),r=s(28453),i=s(40267),l=s(19365);const t={sidebar_label:"Options",sidebar_position:1,toc_max_heading_level:4,description:"See the Snaps CLI options reference."},c="Snaps configuration options",d={id:"reference/cli/options",title:"Snaps configuration options",description:"See the Snaps CLI options reference.",source:"@site/snaps/reference/cli/options.md",sourceDirName:"reference/cli",slug:"/reference/cli/options",permalink:"/zs/snaps-jsx/snaps/reference/cli/options",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/cli/options.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Options",sidebar_position:1,toc_max_heading_level:4,description:"See the Snaps CLI options reference."},sidebar:"snapsSidebar",previous:{title:"Snaps command line",permalink:"/zs/snaps-jsx/snaps/reference/cli"},next:{title:"Subcommands",permalink:"/zs/snaps-jsx/snaps/reference/cli/subcommands"}},o={},u=[{value:"<code>bundler</code>",id:"bundler",level:3},{value:"<code>customizeWebpackConfig</code>",id:"customizewebpackconfig",level:3},{value:"<code>environment</code>",id:"environment",level:3},{value:"<code>evaluate</code>",id:"evaluate",level:3},{value:"<code>experimental</code>",id:"experimental",level:3},{value:"<code>experimental.wasm</code>",id:"experimentalwasm",level:4},{value:"<code>features</code>",id:"features",level:3},{value:"<code>features.images</code>",id:"featuresimages",level:4},{value:"<code>input</code>",id:"input",level:3},{value:"<code>manifest</code>",id:"manifest",level:3},{value:"<code>manifest.path</code>",id:"manifestpath",level:4},{value:"<code>manifest.update</code>",id:"manifestupdate",level:4},{value:"<code>output</code>",id:"output",level:3},{value:"<code>output.clean</code>",id:"outputclean",level:4},{value:"<code>output.filename</code>",id:"outputfilename",level:4},{value:"<code>output.minimize</code>",id:"outputminimize",level:4},{value:"<code>output.path</code>",id:"outputpath",level:4},{value:"<code>polyfills</code>",id:"polyfills",level:3},{value:"<code>server</code>",id:"server",level:3},{value:"<code>server.enabled</code>",id:"serverenabled",level:4},{value:"<code>server.port</code>",id:"serverport",level:4},{value:"<code>server.root</code>",id:"serverroot",level:4},{value:"<code>sourceMap</code>",id:"sourcemap",level:3},{value:"<code>stats</code>",id:"stats",level:3},{value:"<code>stats.buffer</code>",id:"statsbuffer",level:4},{value:"<code>stats.builtIns</code>",id:"statsbuiltins",level:4},{value:"<code>stats.verbose</code>",id:"statsverbose",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"snaps-configuration-options",children:"Snaps configuration options"}),"\n",(0,a.jsxs)(n.p,{children:["This reference describes the syntax of the Snaps command line interface (CLI) configuration options.\nYou can specify these options in the\n",(0,a.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/learn/about-snaps/files#configuration-file",children:"configuration file"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"bundler",children:(0,a.jsx)(n.code,{children:"bundler"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"bundler: <BUNDLER>,\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'bundler: "webpack",\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The bundler to use.\nThe options are ",(0,a.jsx)(n.code,{children:'"webpack"'})," and ",(0,a.jsx)(n.code,{children:'"browserify"'}),".\nThe default is ",(0,a.jsx)(n.code,{children:'"webpack"'}),"."]}),"\n",(0,a.jsx)(n.admonition,{title:"important",type:"caution",children:(0,a.jsxs)(n.p,{children:["We recommend using the Webpack bundler.\nThe Browserify-based configuration is deprecated and will be removed in the future.\nThis reference describes the configuration options for Webpack.\nFor Browserify, see the\n",(0,a.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/455366f19281801ed4220431100e45237dd5cf1e/packages/snaps-cli#legacy-options",children:"legacy options"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"customizewebpackconfig",children:(0,a.jsx)(n.code,{children:"customizeWebpackConfig"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"customizeWebpackConfig: <FUNCTION>,\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"customizeWebpackConfig: (config) =>\n  merge(config, {\n    plugins: [\n      // Add a plugin.\n    ],\n    module: {\n      rules: [\n        // Add a loader.\n      ],\n    },\n  }),\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"A function that customizes the Webpack configuration.\nFor example, you can use this option to add a Webpack plugin, provide a polyfill, or add a loader."}),"\n",(0,a.jsxs)(n.p,{children:["The function should receive the Webpack configuration object and return the modified configuration object.\nFor convenience, the Snaps CLI exports a ",(0,a.jsx)(n.code,{children:"merge"})," function that you can use to merge the\nconfiguration object with the\n",(0,a.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/blob/main/packages/snaps-cli/src/webpack/config.ts",children:"default Webpack configuration"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"environment",children:(0,a.jsx)(n.code,{children:"environment"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"environment: <ENVIRONMENT>,\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"environment: {\n  SNAP_ENV: process.env.SNAP_ENV,\n  PUBLIC_KEY: process.env.PUBLIC_KEY,\n},\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The environment configuration.\nYou can use this to ",(0,a.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/how-to/use-environment-variables",children:"set environment variables for the Snap"}),",\nwhich can be accessed using ",(0,a.jsx)(n.code,{children:"process.env"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"evaluate",children:(0,a.jsx)(n.code,{children:"evaluate"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"evaluate: <BOOLEAN>,\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"evaluate: true,\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables evaluating the bundle.\nWhen set to ",(0,a.jsx)(n.code,{children:"true"}),", the bundle is checked for compatibility issues with the Snaps runtime.\nIf there are any issues, the CLI exits with an error."]}),"\n",(0,a.jsx)(n.h3,{id:"experimental",children:(0,a.jsx)(n.code,{children:"experimental"})}),"\n",(0,a.jsx)(n.p,{children:"Experimental features."}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"These features are not stable, and might change in the future."})}),"\n",(0,a.jsx)(n.h4,{id:"experimentalwasm",children:(0,a.jsx)(n.code,{children:"experimental.wasm"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"experimental: {\n  wasm: <BOOLEAN>,\n},\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"experimental: {\n  wasm: true,\n},\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables WebAssembly support.\nWhen set to ",(0,a.jsx)(n.code,{children:"true"}),", WebAssembly files can be imported in the Snap.\nFor example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import program from "./program.wasm";\n\n// Program is initialized synchronously.\n// ...\n'})}),"\n",(0,a.jsx)(n.h3,{id:"features",children:(0,a.jsx)(n.code,{children:"features"})}),"\n",(0,a.jsx)(n.h4,{id:"featuresimages",children:(0,a.jsx)(n.code,{children:"features.images"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"features: {\n  images: <BOOLEAN>,\n},\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"features: {\n  images: false,\n},\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables ",(0,a.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/features/custom-ui/#image",children:"image support"}),".\nThe default is ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"input",children:(0,a.jsx)(n.code,{children:"input"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"input: <FILE>,\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'input: "src/index.js",\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The entry point of the Snap.\nThis is the file that will be bundled.\nThe default is ",(0,a.jsx)(n.code,{children:'"src/index.js"'}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"manifest",children:(0,a.jsx)(n.code,{children:"manifest"})}),"\n",(0,a.jsxs)(n.p,{children:["The Snap ",(0,a.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/learn/about-snaps/files#manifest-file",children:"manifest file"})," configuration."]}),"\n",(0,a.jsx)(n.h4,{id:"manifestpath",children:(0,a.jsx)(n.code,{children:"manifest.path"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"manifest: {\n  path: <FILE>,\n},\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'manifest: {\n  path: "snap.manifest.json",\n},\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Path to the Snap manifest file.\nThe default is ",(0,a.jsx)(n.code,{children:'"snap.manifest.json"'}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"manifestupdate",children:(0,a.jsx)(n.code,{children:"manifest.update"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"manifest: {\n  update: <BOOLEAN>,\n},\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"manifest: {\n  update: false,\n},\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables updating the manifest file with the bundle shasum, and making any other possible updates.\nIf set to ",(0,a.jsx)(n.code,{children:"false"}),", the manifest is not updated, and an error is thrown if the manifest is not up-to-date.\nThe default is ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"output",children:(0,a.jsx)(n.code,{children:"output"})}),"\n",(0,a.jsx)(n.p,{children:"The output configuration."}),"\n",(0,a.jsx)(n.h4,{id:"outputclean",children:(0,a.jsx)(n.code,{children:"output.clean"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"output: {\n  clean: <BOOLEAN>,\n},\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"output: {\n  clean: true,\n},\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables cleaning the output directory before building.\nThe default is ",(0,a.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"outputfilename",children:(0,a.jsx)(n.code,{children:"output.filename"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"output: {\n  filename: <FILE>,\n},\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'output: {\n  filename: "bundle.js",\n},\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The output filename.\nThe default is ",(0,a.jsx)(n.code,{children:'"bundle.js"'}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"outputminimize",children:(0,a.jsx)(n.code,{children:"output.minimize"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"output: {\n  minimize: <BOOLEAN>,\n},\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"output: {\n  minimize: false,\n},\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables minimizing the bundle.\nMinimizing the bundle removes comments and whitespace, mangles variable names, and performs other optimizations.\nThe default is ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"outputpath",children:(0,a.jsx)(n.code,{children:"output.path"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"output: {\n  path: <DIRECTORY>,\n},\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'output: {\n  path: "dist",\n},\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Path to the output directory.\nThe default is ",(0,a.jsx)(n.code,{children:'"dist"'}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"polyfills",children:(0,a.jsx)(n.code,{children:"polyfills"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"polyfills: <BOOLEAN|OBJECT>\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"polyfills: {\n  buffer: true,\n  crypto: true,\n  path: true,\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables providing polyfills for Node.js built-in modules.\nIf set to ",(0,a.jsx)(n.code,{children:"true"}),", all available polyfills are provided.\nThe default is ",(0,a.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["You can also set this option to an object with specific polyfills set to ",(0,a.jsx)(n.code,{children:"true"}),".\nSee ",(0,a.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/blob/51a1d04ea50c5c286262df1959ef0b1ced84b6e2/packages/snaps-cli/src/config.ts#L383-L416",children:"the list of available polyfills"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"server",children:(0,a.jsx)(n.code,{children:"server"})}),"\n",(0,a.jsxs)(n.p,{children:["The development server configuration.\nThe development server is used to test the Snap during development, using the\n",(0,a.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/cli/subcommands#w-watch",children:(0,a.jsx)(n.code,{children:"watch"})})," and ",(0,a.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/cli/subcommands#s-serve",children:(0,a.jsx)(n.code,{children:"serve"})})," subcommands."]}),"\n",(0,a.jsx)(n.h4,{id:"serverenabled",children:(0,a.jsx)(n.code,{children:"server.enabled"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"server: {\n  enabled: <BOOLEAN>,\n},\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"server: {\n  enabled: false,\n},\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Enables or disables the development server."}),"\n",(0,a.jsx)(n.h4,{id:"serverport",children:(0,a.jsx)(n.code,{children:"server.port"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"server: {\n  port: <PORT>,\n},\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"server: {\n  port: 9000,\n},\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The port to run the development server on.\nIf set to ",(0,a.jsx)(n.code,{children:"0"}),", a random port is used.\nThe default is ",(0,a.jsx)(n.code,{children:"8081"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"serverroot",children:(0,a.jsx)(n.code,{children:"server.root"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"server: {\n  root: <DIRECTORY>,\n},\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'server: {\n  root: "snap",\n},\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"The root directory of the development server.\nThis is the directory that is served by the development server.\nThe default is the current working directory."}),"\n",(0,a.jsx)(n.h3,{id:"sourcemap",children:(0,a.jsx)(n.code,{children:"sourceMap"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'sourceMap: <BOOLEAN|"inline">,\n'})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'sourceMap: "inline",\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables generating a source map.\nIf set to ",(0,a.jsx)(n.code,{children:'"inline"'}),", the source map is inlined in the bundle.\nIf set to ",(0,a.jsx)(n.code,{children:"true"})," or not specified, it is written to a separate file.\nThe default is ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"stats",children:(0,a.jsx)(n.code,{children:"stats"})}),"\n",(0,a.jsx)(n.p,{children:"The stats configuration, which controls the log output of the CLI."}),"\n",(0,a.jsx)(n.h4,{id:"statsbuffer",children:(0,a.jsx)(n.code,{children:"stats.buffer"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"stats: {\n  buffer: <BOOLEAN>,\n},\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"stats: {\n  buffer: false,\n},\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables showing a warning if the ",(0,a.jsx)(n.code,{children:"Buffer"})," global is used but not provided.\nThe ",(0,a.jsx)(n.code,{children:"Buffer"})," global is not available in the Snaps runtime by default.\nTo use ",(0,a.jsx)(n.code,{children:"Buffer"}),", set ",(0,a.jsx)(n.a,{href:"#polyfills",children:(0,a.jsx)(n.code,{children:"polyfills"})})," to ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The default is ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"statsbuiltins",children:(0,a.jsx)(n.code,{children:"stats.builtIns"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"stats: {\n  builtIns: <false|IGNORE_LIST>,\n},\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"stats: {\n  builtIns: {\n    ignore: [\n      // Built-in modules to ignore.\n    ],\n  },\n},\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Enables or disables checking for missing built-in modules."}),"\n",(0,a.jsxs)(n.p,{children:["Not specifying this option, or specifying an ignore list, enables checking for missing built-in modules.\nWhen enabled, the CLI shows a warning if a built-in is used but not provided.\nThe Snaps CLI does not support Node.js built-ins out of the box.\nTo use built-ins, set ",(0,a.jsx)(n.a,{href:"#polyfills",children:(0,a.jsx)(n.code,{children:"polyfills"})})," to ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"You can specify a list of built-ins to ignore when checking for missing built-ins.\nThis is useful if the built-in is not actually used in the Snap, but is added by a dependency."}),"\n",(0,a.jsx)(n.p,{children:"The default is an empty ignore list."}),"\n",(0,a.jsx)(n.h4,{id:"statsverbose",children:(0,a.jsx)(n.code,{children:"stats.verbose"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(l.A,{value:"Syntax",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"stats: {\n  verbose: <BOOLEAN>,\n},\n"})})}),(0,a.jsx)(l.A,{value:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"stats: {\n  verbose: true,\n},\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables verbose logging.\nIf set to ",(0,a.jsx)(n.code,{children:"true"}),", the CLI logs more information.\nThe default is ",(0,a.jsx)(n.code,{children:"false"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>l});s(96540);var a=s(18215);const r={tabItem:"tabItem_Ymn6"};var i=s(74848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:s,children:n})}},40267:(e,n,s)=>{s.d(n,{A:()=>N});var a=s(96540),r=s(20053),i=s(23104),l=s(56347),t=s(205),c=s(57485),d=s(31682),o=s(89466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:r}}=e;return{value:n,label:s,attributes:a,default:r}}))}(s);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const r=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=h(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[d,u]=x({queryString:s,groupId:r}),[j,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,o.Dv)(s);return[r,(0,a.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),m=(()=>{const e=d??j;return p({value:e,tabValues:i})?e:null})();(0,t.A)((()=>{m&&c(m)}),[m]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=s(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb",flaskOnly:"flaskOnly_bhbK"};var v=s(74848),b=s(96763);function g(e){let{className:n,block:s,selectedValue:a,selectValue:l,tabValues:t}=e;b.log(t);const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),o=e=>{const n=e.currentTarget,s=c.indexOf(n),r=t[s].value;r!==a&&(d(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:t.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:u,onClick:o,...i,className:(0,r.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function A(e){const n=j(e),s={...n,tabValues:n.tabValues.map(((n,s)=>({...n,attributes:{...n.attributes,className:(0,r.A)(n.attributes?.className,{[m.flaskOnly]:e.children[s]?.props.flaskOnly})}})))};return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,v.jsx)(g,{...s,...e}),(0,v.jsx)(y,{...s,...e})]})}function N(e){const n=(0,f.A)();return(0,v.jsx)(A,{...e,children:u(e.children)},String(n))}},20053:(e,n,s)=>{function a(e){var n,s,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(s=a(e[n]))&&(r&&(r+=" "),r+=s);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}s.d(n,{A:()=>r});const r=function(){for(var e,n,s=0,r="";s<arguments.length;)(e=arguments[s++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var a=s(96540);const r={},i=a.createContext(r);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);