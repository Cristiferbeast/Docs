"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6367],{5484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>A,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var i=t(5893),s=t(1151),o=t(2091);const d={sidebar_position:1},a="Creating a Lua Mod",l={id:"lua-interop/creating-a-lua-mod",title:"Creating a Lua Mod",description:"First off, to create a lua mod, we need to head into the dir where we have UE4SS installed, and go inside of the Mods folder.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/lua-interop/creating-a-lua-mod.mdx",sourceDirName:"lua-interop",slug:"/lua-interop/creating-a-lua-mod",permalink:"/uk/docs/lua-interop/creating-a-lua-mod",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/lua-interop/creating-a-lua-mod.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Lua Interop",permalink:"/uk/docs/category/lua-interop"},next:{title:"Hooking functions from Lua",permalink:"/uk/docs/lua-interop/hooking-functions"}},r={},c=[];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"creating-a-lua-mod",children:"Creating a Lua Mod"}),"\n",(0,i.jsxs)(n.p,{children:["First off, to create a lua mod, we need to head into the dir where we have UE4SS installed, and go inside of the ",(0,i.jsx)(n.code,{children:"Mods"})," folder."]}),"\n",(0,i.jsxs)(n.p,{children:["In that folder, let's create a new folder called ",(0,i.jsx)(n.code,{children:"TestLuaInteropMod"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Open this folder, and create:"}),"\n","\n","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(o.pPO,{})," File ",(0,i.jsx)(n.code,{children:"enabled.txt"})," - this file is used to tell ue4ss that your mod should be enabled"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(o.$nz,{})," Folder ",(0,i.jsx)(n.code,{children:"Scripts"})," - this will store all our lua scripts of the mod"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.code,{children:"Scripts"})," folder, and create a ",(0,i.jsx)(n.code,{children:"main.lua"})," file. This file will be the entrypoint of our mod, and we will do all of our logic here."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"You can have your scripts spread over multiple files, but this will not be covered in this tutorial"})}),"\n",(0,i.jsx)(n.p,{children:"Your folder structure should now look like this:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Mod Structure",src:t(5332).Z+"",width:"251",height:"97"})}),"\n",(0,i.jsxs)(n.p,{children:["Now open your ",(0,i.jsx)(n.code,{children:"main.lua"})," file in your favorite code editor, and let's actually write some code!"]})]})}function A(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5332:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/png;base64,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"}}]);