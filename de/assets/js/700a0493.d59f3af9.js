"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[701],{31323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var s=n(85893),o=n(11151);const i={sidebar_position:1},d="Mod Buttons",r={id:"creating-blueprint-mods/mod-setup-buttons",title:"Mod Buttons",description:"- Create a String Variable called ModButtons in your ModActor, In the properties panel change the following to the 9 squares in a box",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/creating-blueprint-mods/mod-setup-buttons.mdx",sourceDirName:"creating-blueprint-mods",slug:"/creating-blueprint-mods/mod-setup-buttons",permalink:"/de/docs/creating-blueprint-mods/mod-setup-buttons",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/creating-blueprint-mods/mod-setup-buttons.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Setting Up A Basic Mod",permalink:"/de/docs/creating-blueprint-mods/mod-setup-1"},next:{title:"Publishing Your Mod",permalink:"/de/docs/category/publishing-your-mod"}},c={},a=[{value:"Basic Example Of ModButtons &amp; PrintToModLoader",id:"basic-example-of-modbuttons--printtomodloader",level:3}];function l(e){const t={code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"mod-buttons",children:"Mod Buttons"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Create a String Variable called ModButtons in your ModActor, In the properties panel change the following to the 9 squares in a box"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ModButtonsArray",src:n(91773).Z+"",width:"468",height:"476"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Create a new custom event called ",(0,s.jsx)(t.code,{children:"ModMenuButtonPressed"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ModMenuButtonPressed",src:n(48645).Z+"",width:"304",height:"127"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Under the newly created event, Add a input variable that is a ",(0,s.jsx)(t.code,{children:"Integer"})," named ",(0,s.jsx)(t.code,{children:"Index"})," ",(0,s.jsx)(t.img,{alt:"ModMenuInt",src:n(81222).Z+"",width:"489",height:"368"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Next add a ",(0,s.jsx)(t.code,{children:"Switch on Int"})," action, connected to the ",(0,s.jsx)(t.code,{children:"ModMenuButtonPressed"})," event."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["For every single button you wish to have, you will add a pin to this ",(0,s.jsx)(t.code,{children:"Switch On Int"})]}),"\n",(0,s.jsxs)(t.li,{children:["Your pin's must match up to ",(0,s.jsx)(t.code,{children:"ModButtons String Array"})," ",(0,s.jsx)(t.img,{alt:"ModButtonSwitchOnInt",src:n(36079).Z+"",width:"806",height:"247"})]}),"\n",(0,s.jsxs)(t.li,{children:["When a ",(0,s.jsx)(t.code,{children:"ModButton"})," is clicked, it will send a Execute signal, through which every integer is connected to it."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"basic-example-of-modbuttons--printtomodloader",children:"Basic Example Of ModButtons & PrintToModLoader"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Example",src:n(67376).Z+"",width:"1134",height:"543"})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},91773:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ModButtonsArray-05d42c5c76e9911b061f93f92ff67a7c.png"},48645:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ModMenuButtonPressed-785a0e8a070d103ed02f1f4f83223825.png"},36079:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ModSwitchOnEvent-69bb2aeb1551a0cd531f8db1fa160d88.png"},81222:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/MonMenuButtonPRessedInt-aaedc8521031257bafc9b9543e0cc1a4.png"},67376:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/example-bef74471c445053a22ec678e8506a8bc.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>d});var s=n(67294);const o={},i=s.createContext(o);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);