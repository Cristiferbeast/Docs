"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6860],{88628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(85893),o=n(11151),s=n(52091);const i={sidebar_position:3},l="Lua Mod Structure",c={id:"lua-modding/lua-mod-structure",title:"Lua Mod Structure",description:"Now that we have our tools set up, to create a lua mod, we need to head into Mods folder of our workspace.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/lua-modding/lua-mod-structure.mdx",sourceDirName:"lua-modding",slug:"/lua-modding/lua-mod-structure",permalink:"/uk/docs/lua-modding/lua-mod-structure",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/lua-modding/lua-mod-structure.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Lua Modding Tools",permalink:"/uk/docs/lua-modding/lua-modding-tools"},next:{title:"UE4SS Function Overview",permalink:"/uk/docs/lua-modding/ue4ss-functions"}},a={},u=[];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"lua-mod-structure",children:"Lua Mod Structure"}),"\n",(0,r.jsxs)(t.p,{children:["Now that we have our tools set up, to create a lua mod, we need to head into ",(0,r.jsx)(t.code,{children:"Mods"})," folder of our workspace."]}),"\n",(0,r.jsxs)(t.p,{children:["In that folder, let's create a new folder called ",(0,r.jsx)(t.code,{children:"TestLuaInteropMod"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"In this folder create:"}),"\n","\n","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(s.pPO,{})," File ",(0,r.jsx)(t.code,{children:"enabled.txt"})," - this file is used to tell ue4ss that your mod should be enabled"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(s.$nz,{})," Folder ",(0,r.jsx)(t.code,{children:"Scripts"})," - this will store all our lua scripts of the mod"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Open the ",(0,r.jsx)(t.code,{children:"Scripts"})," folder, and create a ",(0,r.jsx)(t.code,{children:"main.lua"})," file. This file will be the entrypoint of our mod, and we will do all of our logic here."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"You can have your scripts spread over multiple files, an example will be covered later in the tutorial"})}),"\n",(0,r.jsx)(t.p,{children:"Your folder structure should now look like this:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Mod Structure",src:n(90555).Z+"",width:"251",height:"97"})}),"\n",(0,r.jsxs)(t.p,{children:["Now open the ",(0,r.jsx)(t.code,{children:"main.lua"})," file, and let's actually write some code!"]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},90555:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}},25054:(e,t,n)=>{n.d(t,{w_:()=>f});var r=n(67294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(o),i=["attr","size","title"];function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return e&&e.map(((e,t)=>r.createElement(e.tag,u({key:t},e.attr),p(e.child))))}function f(e){return t=>r.createElement(A,c({attr:u({},e.attr)},t),p(e.child))}function A(e){var t=t=>{var n,{attr:o,size:s,title:a}=e,d=l(e,i),p=s||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,d,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return void 0!==s?r.createElement(s.Consumer,null,(e=>t(e))):t(o)}}}]);