(()=>{"use strict";var e,a,d,f,c,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var d=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(d.exports,d,d.exports,r),d.loaded=!0,d.exports}r.m=b,e=[],r.O=(a,d,f,c)=>{if(!d){var b=1/0;for(i=0;i<e.length;i++){d=e[i][0],f=e[i][1],c=e[i][2];for(var t=!0,o=0;o<d.length;o++)(!1&c||b>=c)&&Object.keys(r.O).every((e=>r.O[e](d[o])))?d.splice(o--,1):(t=!1,c<b&&(b=c));if(t){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[d,f,c]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var b={};a=a||[null,d({}),d([]),d(d)];for(var t=2&f&&e;"object"==typeof t&&!~a.indexOf(t);t=d(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(c,b),c},r.d=(e,a)=>{for(var d in a)r.o(a,d)&&!r.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,d)=>(r.f[d](e,a),a)),[])),r.u=e=>"assets/js/"+({40:"8145e54e",53:"935f2afb",167:"486ba757",393:"2ea5006c",866:"2078f753",1038:"c423245b",1342:"6bd0212d",1360:"6fe50d13",1452:"389220b7",1473:"cbae4fa5",1507:"4dd0955d",1542:"eb5ec3d6",1687:"8267a4cd",2124:"88fb5f9d",2133:"1847eb93",2257:"95c87532",2419:"7c5954e6",2472:"ce634f1e",2741:"c3be8443",2744:"f4fa537f",2794:"577b8b2a",2841:"56abd40c",2928:"d2011f4f",2998:"909d3e79",3116:"8224eaba",3237:"1df93b7f",3271:"ee615a06",3414:"09070e4b",3457:"9efa0a54",3520:"cc7fb5a4",3696:"015fe5e8",3805:"91efdb01",3845:"fc9c3721",4151:"ff576332",4359:"3d0ce9fc",4467:"ab8b636d",4507:"129514b0",4647:"7d0c4826",4657:"b099eb42",4957:"2150471b",5209:"1a5cfe2b",5412:"7d4adaa7",5473:"f5000f06",5576:"3d86cae6",5709:"8ec30cb2",5764:"66cf4c41",5861:"4c16b207",6026:"cd0345b9",6142:"93c5753b",6147:"c455d87c",6181:"8d63df11",6250:"2b6d957d",6254:"05e0cb61",6423:"77a46a80",6655:"70334ba8",6752:"be5df1d1",6754:"cfc76383",6854:"25dd8fd2",6942:"5806c6d0",7050:"11b7fc92",7266:"5e56b9d4",7280:"acd7a159",7291:"25998a60",7416:"6483afbc",7455:"27d52537",7655:"2dae0086",7795:"fb7421df",7918:"17896441",7920:"1a4e3797",8114:"8d9a344b",8162:"50dc8f0c",8301:"4ad67257",8358:"bf7ad130",8360:"95ed0894",8439:"3ba19fe4",8613:"8d4eac50",8669:"56aa118c",8742:"6ebf937c",8761:"89733dc6",8778:"b91521d0",8931:"cf946124",9038:"cc6a76b5",9057:"94590018",9196:"e8fb5fdf",9326:"aa5390bf",9514:"1be78505",9565:"f3f094fb",9738:"0075ad58",9817:"14eb3368",9880:"3ca17c24"}[e]||e)+"."+{40:"5ca7bedb",53:"7f22d960",167:"00eae6d5",393:"394c9c44",866:"f1621296",1038:"22af41e0",1342:"3365a6ca",1360:"d4393f81",1426:"a06dec65",1452:"2fe2156e",1473:"a5e51473",1507:"ea1a4a2d",1542:"9d701bf4",1687:"ebb5fbc9",2124:"26687218",2133:"2d04d93b",2257:"01261c1e",2419:"a22e4084",2472:"e5aff036",2741:"be2d10b7",2744:"af7328de",2794:"c9840aef",2841:"b5965a76",2928:"dce44a4b",2998:"9f69b044",3116:"97666dd4",3237:"dab1b257",3271:"9f4674e4",3414:"1f4c9aa4",3457:"63953be5",3520:"fdd67fb3",3696:"479ef892",3805:"12be140b",3845:"8c046273",4151:"288ca680",4225:"1bfd0c4e",4359:"dbc7cfad",4467:"c19b76de",4507:"eaed07ee",4647:"939a3b20",4657:"5455053c",4957:"63f92c90",4972:"e49176b8",5209:"e60b9a20",5412:"118b68a9",5473:"7537ed42",5576:"b9a28084",5709:"af37469b",5764:"caced367",5861:"be8064aa",6026:"aa02d127",6142:"fa2e8fee",6147:"ffbc31d9",6181:"3a4cef72",6250:"bcf352ac",6254:"57a53e82",6423:"d2e429c4",6655:"3345f2a9",6752:"4407532c",6754:"7ed0b7c0",6854:"bef04edf",6942:"514abee5",6945:"07888cb2",7050:"147f213f",7266:"521cf327",7280:"593df299",7291:"8fda8feb",7416:"7e357cdd",7455:"d94fb920",7655:"49635326",7795:"e958f0f3",7918:"4e0e07ce",7920:"80eb6d43",8114:"04a84e50",8162:"6601e409",8301:"cf9d089d",8358:"306e4145",8360:"685bfb40",8439:"6bce9320",8613:"23ddfda0",8669:"d657d635",8685:"19ce8911",8742:"a2f2f292",8761:"b21ab82c",8778:"8bf7c69c",8894:"814fc599",8931:"99dd3f7c",9038:"ad5af46e",9057:"c94d3d96",9196:"4f7218d5",9326:"be9767c9",9514:"b19465c4",9565:"b0866084",9738:"41d38fa9",9817:"a6edc89f",9880:"2d571b04",9984:"b36559b0"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},c="metamask-docs:",r.l=(e,a,d,b)=>{if(f[e])f[e].push(a);else{var t,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var s=n[i];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==c+d){t=s;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",c+d),t.src=e),f[e]=[a];var l=(a,d)=>{t.onerror=t.onload=null,clearTimeout(u);var c=f[e];if(delete f[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((e=>e(d))),a)return a(d)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/zs/working-with-snaps/",r.gca=function(e){return e={17896441:"7918",94590018:"9057","8145e54e":"40","935f2afb":"53","486ba757":"167","2ea5006c":"393","2078f753":"866",c423245b:"1038","6bd0212d":"1342","6fe50d13":"1360","389220b7":"1452",cbae4fa5:"1473","4dd0955d":"1507",eb5ec3d6:"1542","8267a4cd":"1687","88fb5f9d":"2124","1847eb93":"2133","95c87532":"2257","7c5954e6":"2419",ce634f1e:"2472",c3be8443:"2741",f4fa537f:"2744","577b8b2a":"2794","56abd40c":"2841",d2011f4f:"2928","909d3e79":"2998","8224eaba":"3116","1df93b7f":"3237",ee615a06:"3271","09070e4b":"3414","9efa0a54":"3457",cc7fb5a4:"3520","015fe5e8":"3696","91efdb01":"3805",fc9c3721:"3845",ff576332:"4151","3d0ce9fc":"4359",ab8b636d:"4467","129514b0":"4507","7d0c4826":"4647",b099eb42:"4657","2150471b":"4957","1a5cfe2b":"5209","7d4adaa7":"5412",f5000f06:"5473","3d86cae6":"5576","8ec30cb2":"5709","66cf4c41":"5764","4c16b207":"5861",cd0345b9:"6026","93c5753b":"6142",c455d87c:"6147","8d63df11":"6181","2b6d957d":"6250","05e0cb61":"6254","77a46a80":"6423","70334ba8":"6655",be5df1d1:"6752",cfc76383:"6754","25dd8fd2":"6854","5806c6d0":"6942","11b7fc92":"7050","5e56b9d4":"7266",acd7a159:"7280","25998a60":"7291","6483afbc":"7416","27d52537":"7455","2dae0086":"7655",fb7421df:"7795","1a4e3797":"7920","8d9a344b":"8114","50dc8f0c":"8162","4ad67257":"8301",bf7ad130:"8358","95ed0894":"8360","3ba19fe4":"8439","8d4eac50":"8613","56aa118c":"8669","6ebf937c":"8742","89733dc6":"8761",b91521d0:"8778",cf946124:"8931",cc6a76b5:"9038",e8fb5fdf:"9196",aa5390bf:"9326","1be78505":"9514",f3f094fb:"9565","0075ad58":"9738","14eb3368":"9817","3ca17c24":"9880"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,d)=>{var f=r.o(e,a)?e[a]:void 0;if(0!==f)if(f)d.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var c=new Promise(((d,c)=>f=e[a]=[d,c]));d.push(f[2]=c);var b=r.p+r.u(a),t=new Error;r.l(b,(d=>{if(r.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var c=d&&("load"===d.type?"missing":d.type),b=d&&d.target&&d.target.src;t.message="Loading chunk "+a+" failed.\n("+c+": "+b+")",t.name="ChunkLoadError",t.type=c,t.request=b,f[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,d)=>{var f,c,b=d[0],t=d[1],o=d[2],n=0;if(b.some((a=>0!==e[a]))){for(f in t)r.o(t,f)&&(r.m[f]=t[f]);if(o)var i=o(r)}for(a&&a(d);n<b.length;n++)c=b[n],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},d=self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();