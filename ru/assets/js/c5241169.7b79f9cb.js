"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2416],{63412:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>N,contentTitle:()=>T,default:()=>C,frontMatter:()=>E,metadata:()=>V,toc:()=>P});var s=t(74848),r=t(28453),o=t(98027),i=t(59879),l=t(96540),a=t(34164),d=t(23104),c=t(56347),u=t(205),h=t(57485),m=t(31682),p=t(89466);function x(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return x(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,m.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function j(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const s=(0,c.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,h.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=b(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[a,d]=g({queryString:t,groupId:s}),[c,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,p.Dv)(t);return[s,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),m=(()=>{const e=a??c;return j({value:e,tabValues:r})?e:null})();(0,u.A)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!j({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),h(e)}),[d,h,r]),tabValues:r}}var v=t(92303);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,d.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==r&&(c(n),o(s))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:h,onClick:u,...o,className:(0,a.A)("tabs__item",w.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function M(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function A(e){const n=f(e);return(0,s.jsxs)("div",{className:(0,a.A)("tabs-container",w.tabList),children:[(0,s.jsx)(y,{...e,...n}),(0,s.jsx)(M,{...e,...n})]})}function k(e){const n=(0,v.A)();return(0,s.jsx)(A,{...e,children:x(e.children)},String(n))}const S={tabItem:"tabItem_Ymn6"};function I(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(S.tabItem,r),hidden:t,children:n})}const E={sidebar_position:1},T="Setting Up A Basic Mod",V={id:"creating-blueprint-mods/mod-setup-1",title:"Setting Up A Basic Mod",description:"Where we left off would be Double-clicking Pal.uproject, You should see this screen",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/creating-blueprint-mods/mod-setup-1.mdx",sourceDirName:"creating-blueprint-mods",slug:"/creating-blueprint-mods/mod-setup-1",permalink:"/ru/docs/creating-blueprint-mods/mod-setup-1",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/creating-blueprint-mods/mod-setup-1.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Creating A Blueprint Mod",permalink:"/ru/docs/category/creating-a-blueprint-mod"},next:{title:"Mod Buttons",permalink:"/ru/docs/creating-blueprint-mods/mod-setup-buttons"}},N={},P=[{value:"<MdInstallDesktop></MdInstallDesktop> ModActor Setup",id:"-modactor-setup",level:2},{value:"<MdEvent></MdEvent> ModActor Events",id:"-modactor-events",level:2},{value:"ModActor Variables",id:"modactor-variables",level:2}];function B(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"setting-up-a-basic-mod",children:"Setting Up A Basic Mod"}),"\n",(0,s.jsxs)(n.p,{children:["Where we left off would be Double-clicking ",(0,s.jsx)(n.code,{children:"Pal.uproject"}),", You should see this screen\r\n",(0,s.jsx)(n.img,{alt:"PDKNewProject",src:t(73102).A+"",width:"1920",height:"1048"})]}),"\n","\n",(0,s.jsxs)(n.h2,{id:"-modactor-setup",children:[(0,s.jsx)(i.$ho,{})," ModActor Setup"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In your ",(0,s.jsx)(n.code,{children:"Content Browser"})," If there isn't a Folder ( ",(0,s.jsx)(o.M1W,{})," ) named ",(0,s.jsx)(n.code,{children:"Content"})," make one."]}),"\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.code,{children:"Content"})," make a Folder ( ",(0,s.jsx)(o.M1W,{})," ) called ",(0,s.jsx)(n.code,{children:"Mods"})," This is where any mod we make will be at."]}),"\n",(0,s.jsxs)(n.li,{children:["Your folder structure should look similar below. (",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Ignoring dabzQOL and dabzReflex"})}),") ",(0,s.jsx)(n.img,{alt:"NewModStruct",src:t(58398).A+"",width:"538",height:"234"})]}),"\n",(0,s.jsxs)(n.li,{children:["Create a Folder ( ",(0,s.jsx)(o.M1W,{})," )in ",(0,s.jsx)(n.code,{children:"Mods"})," with the name you want your Mod's Pak file to be called. (In this case, I'll be using ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.em,{children:"dabzReflex"})}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["In that Folder ( ",(0,s.jsx)(o.M1W,{})," ), We will be creating a new ",(0,s.jsx)(n.code,{children:"Blueprint Class"})," that is a ",(0,s.jsx)(n.code,{children:"Actor"}),". It will be called ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"ModActor"})})," ",(0,s.jsx)(n.img,{alt:"NewModActor",src:t(2828).A+"",width:"616",height:"747"})]}),"\n",(0,s.jsxs)(n.li,{children:["Now your Content Browser should look like so, next double-click your ",(0,s.jsx)(n.code,{children:"ModActor"})," and make sure you are on the ",(0,s.jsx)(n.code,{children:"Event Graph"})," tab ",(0,s.jsx)(n.img,{alt:"NewActorMade",src:t(83801).A+"",width:"720",height:"238"})]}),"\n",(0,s.jsx)(n.li,{children:"Now your ModActor is technically setup, there is some more information to know about it below though."}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"-modactor-events",children:[(0,s.jsx)(i.GUB,{})," ModActor Events"]}),"\n","\n","\n",(0,s.jsxs)(k,{children:[(0,s.jsx)(I,{value:"usedevents",label:"Used Events",attributes:{className:"usedevents"},default:!0,children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"PreBeginPlay"})})," - This event is too early to use to initialize your mod. ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"(Only Works In ModActor)"})})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"PostBeginPlay"})})," - This event is fired when the Player Controller Begin Play is called ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"(Only Works In ModActor)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The suggested event to use for initializing most things in your mod."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Event Tick"})})," - This event is fired every single tick.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This is commonly used if you need a event that is updating every single game tick"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"PrintToModLoader"})})," - Allows the ability to log to UE4SS Console through a blueprint. ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"(Only Works In ModActor)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["To use this event, Create a ",(0,s.jsx)(n.code,{children:"Custom Event"})," in your ",(0,s.jsx)(n.code,{children:"ModActor"})," called ",(0,s.jsx)(n.code,{children:"PrintToModLoader"})," exactly."]}),"\n",(0,s.jsxs)(n.li,{children:["Add a initial String variable to this event, called ",(0,s.jsx)(n.code,{children:"Message"}),". Leave the event alone now."]}),"\n",(0,s.jsxs)(n.li,{children:["You can now call a new function called ",(0,s.jsx)(n.code,{children:"Print To Mod Loader"})," anywhere."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"ModMenuButtonPressed"})})," - Used to enable ModButtons in UE4SS's mod list area. ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"(Only Works In ModActor)"})})," ",(0,s.jsx)(n.a,{href:"./mod-setup-buttons",children:"ModButtons Tutorial"})]}),"\n"]})}),(0,s.jsxs)(I,{value:"unusedevents",label:"Unused Events",attributes:{className:"unusedevents"},children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"EventBeginPlay"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"EventActorBeginOverlap"})})}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ModActorEvents",src:t(32641).A+"",width:"716",height:"581"})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"modactor-variables",children:"ModActor Variables"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"ModActor variables are used to display information about your mod in UE4SS's loaded mod category."}),(0,s.jsx)(n.p,{children:"They are simply just variables added to your blueprint, that are not used by your Blueprint, they are only used by UE4SS."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ModActorVars",src:t(17935).A+"",width:"374",height:"220"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ModActorVarsSetup",src:t(67526).A+"",width:"444",height:"217"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"ModAuthor"})})," - Shows a Author in UE4SS Mods panel"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"ModDescription"})})," - Shows a Description in UE4SS Mods Panel"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"ModVersion"})})," - Shows a Version in UE4SS Mods Panel"]}),"\n"]})]})}function C(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(B,{...e})}):B(e)}},58398:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/ContentBrowserNewMod-f26aa46be4c2453963c1e8d50731fdea.png"},32641:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/ModActorEvents-440be08b0f7ef85567759b92dc5dbae9.png"},83801:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/ModActorMade-c6e33e74d0062364995acd1607f58c45.png"},17935:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/ModActorVariables-0c03b4b678e3c6fce1be35c7da8e078d.png"},67526:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/ModActorVariablesWorking-013a84ffa3a06bd95344528ce25cc476.png"},2828:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/NewModActor-a569132f8f307f54f5dbd43d0faa989e.png"},73102:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/NewPMKInstance-a94408301a3a545ab83858b84c297654.png"}}]);