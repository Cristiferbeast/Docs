"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8906],{1115:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>h,toc:()=>x});var t=n(5893),i=n(1151),o=n(2091),r=n(80),d=n(4866),l=n(5162);const c={sidebar_position:1},a="Setting Up A Basic Mod",h={id:"creating-blueprint-mods/mod-setup-1",title:"Setting Up A Basic Mod",description:"Where we left off would be Double-clicking Pal.uproject, You should see this screen",source:"@site/docs/creating-blueprint-mods/mod-setup-1.mdx",sourceDirName:"creating-blueprint-mods",slug:"/creating-blueprint-mods/mod-setup-1",permalink:"/fr/docs/creating-blueprint-mods/mod-setup-1",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/creating-blueprint-mods/mod-setup-1.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Creating A Blueprint Mod",permalink:"/fr/docs/category/creating-a-blueprint-mod"},next:{title:"Mod Buttons",permalink:"/fr/docs/creating-blueprint-mods/mod-setup-buttons"}},u={},x=[{value:"<MdInstallDesktop></MdInstallDesktop> ModActor Setup",id:"-modactor-setup",level:2},{value:"<MdEvent></MdEvent> ModActor Events",id:"-modactor-events",level:2},{value:"ModActor Variables",id:"modactor-variables",level:2}];function j(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"setting-up-a-basic-mod",children:"Setting Up A Basic Mod"}),"\n",(0,t.jsxs)(s.p,{children:["Where we left off would be Double-clicking ",(0,t.jsx)(s.code,{children:"Pal.uproject"}),", You should see this screen\r\n",(0,t.jsx)(s.img,{alt:"PDKNewProject",src:n(5260).Z+"",width:"1920",height:"1048"})]}),"\n","\n",(0,t.jsxs)(s.h2,{id:"-modactor-setup",children:[(0,t.jsx)(r.RUY,{})," ModActor Setup"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["In your ",(0,t.jsx)(s.code,{children:"Content Browser"})," If there isn't a Folder ( ",(0,t.jsx)(o.$nz,{})," ) named ",(0,t.jsx)(s.code,{children:"Content"})," make one."]}),"\n",(0,t.jsxs)(s.li,{children:["In ",(0,t.jsx)(s.code,{children:"Content"})," make a Folder ( ",(0,t.jsx)(o.$nz,{})," ) called ",(0,t.jsx)(s.code,{children:"Mods"})," This is where any mod we make will be at."]}),"\n",(0,t.jsxs)(s.li,{children:["Your folder structure should look similar below. (",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"Ignoring dabzQOL and dabzReflex"})}),") ",(0,t.jsx)(s.img,{alt:"NewModStruct",src:n(9933).Z+"",width:"538",height:"234"})]}),"\n",(0,t.jsxs)(s.li,{children:["Create a Folder ( ",(0,t.jsx)(o.$nz,{})," )in ",(0,t.jsx)(s.code,{children:"Mods"})," with the name you want your Mod's Pak file to be called. (In this case, I'll be using ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.em,{children:"dabzReflex"})}),")"]}),"\n",(0,t.jsxs)(s.li,{children:["In that Folder ( ",(0,t.jsx)(o.$nz,{})," ), We will be creating a new ",(0,t.jsx)(s.code,{children:"Blueprint Class"})," that is a ",(0,t.jsx)(s.code,{children:"Actor"}),". It will be called ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"ModActor"})})," ",(0,t.jsx)(s.img,{alt:"NewModActor",src:n(9721).Z+"",width:"616",height:"747"})]}),"\n",(0,t.jsxs)(s.li,{children:["Now your Content Browser should look like so, next double-click your ",(0,t.jsx)(s.code,{children:"ModActor"})," and make sure you are on the ",(0,t.jsx)(s.code,{children:"Event Graph"})," tab ",(0,t.jsx)(s.img,{alt:"NewActorMade",src:n(9595).Z+"",width:"720",height:"238"})]}),"\n",(0,t.jsx)(s.li,{children:"Now your ModActor is technically setup, there is some more information to know about it below though."}),"\n"]}),"\n",(0,t.jsxs)(s.h2,{id:"-modactor-events",children:[(0,t.jsx)(r.mbS,{})," ModActor Events"]}),"\n","\n","\n",(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(l.Z,{value:"usedevents",label:"Used Events",attributes:{className:"usedevents"},default:!0,children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"PreBeginPlay"})})," - This event is too early to use to initialize your mod. ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"(Only Works In ModActor)"})})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"PostBeginPlay"})})," - This event is fired when the Player Controller Begin Play is called ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"(Only Works In ModActor)"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The suggested event to use for initializing most things in your mod."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"Event Tick"})})," - This event is fired every single tick.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"This is commonly used if you need a event that is updating every single game tick"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"PrintToModLoader"})})," - Allows the ability to log to UE4SS Console through a blueprint. ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"(Only Works In ModActor)"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["To use this event, Create a ",(0,t.jsx)(s.code,{children:"Custom Event"})," in your ",(0,t.jsx)(s.code,{children:"ModActor"})," called ",(0,t.jsx)(s.code,{children:"PrintToModLoader"})," exactly."]}),"\n",(0,t.jsxs)(s.li,{children:["Add a initial String variable to this event, called ",(0,t.jsx)(s.code,{children:"Message"}),". Leave the event alone now."]}),"\n",(0,t.jsxs)(s.li,{children:["You can now call a new function called ",(0,t.jsx)(s.code,{children:"Print To Mod Loader"})," anywhere."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"ModMenuButtonPressed"})})," - Used to enable ModButtons in UE4SS's mod list area. ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"(Only Works In ModActor)"})})," ",(0,t.jsx)(s.a,{href:"./mod-setup-buttons",children:"ModButtons Tutorial"})]}),"\n"]})}),(0,t.jsxs)(l.Z,{value:"unusedevents",label:"Unused Events",attributes:{className:"unusedevents"},children:[(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"EventBeginPlay"})})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"EventActorBeginOverlap"})})}),"\n"]}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"ModActorEvents",src:n(5931).Z+"",width:"716",height:"581"})})]})]}),"\n",(0,t.jsx)(s.h2,{id:"modactor-variables",children:"ModActor Variables"}),"\n",(0,t.jsxs)(s.admonition,{type:"tip",children:[(0,t.jsx)(s.p,{children:"ModActor variables are used to display information about your mod in UE4SS's loaded mod category."}),(0,t.jsx)(s.p,{children:"They are simply just variables added to your blueprint, that are not used by your Blueprint, they are only used by UE4SS."}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"ModActorVars",src:n(5650).Z+"",width:"374",height:"220"})}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"ModActorVarsSetup",src:n(1754).Z+"",width:"444",height:"217"})})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"ModAuthor"})})," - Shows a Author in UE4SS Mods panel"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"ModDescription"})})," - Shows a Description in UE4SS Mods Panel"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"ModVersion"})})," - Shows a Version in UE4SS Mods Panel"]}),"\n"]})]})}function m(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},9933:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/ContentBrowserNewMod-f26aa46be4c2453963c1e8d50731fdea.png"},5931:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/ModActorEvents-440be08b0f7ef85567759b92dc5dbae9.png"},9595:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/ModActorMade-c6e33e74d0062364995acd1607f58c45.png"},5650:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/ModActorVariables-0c03b4b678e3c6fce1be35c7da8e078d.png"},1754:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/ModActorVariablesWorking-013a84ffa3a06bd95344528ce25cc476.png"},9721:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/NewModActor-a569132f8f307f54f5dbd43d0faa989e.png"},5260:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/NewPMKInstance-a94408301a3a545ab83858b84c297654.png"}}]);