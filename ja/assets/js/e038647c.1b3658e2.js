"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5071],{72420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var i=n(85893),o=n(11151);const s={sidebar_position:7},a="Moar Digging",r={id:"lua-modding/more-digging",title:"Moar Digging",description:"Dig it uh oh oh, dig it",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/lua-modding/more-digging.mdx",sourceDirName:"lua-modding",slug:"/lua-modding/more-digging",permalink:"/ja/docs/lua-modding/more-digging",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/lua-modding/more-digging.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Digging 101",permalink:"/ja/docs/lua-modding/digging-101"},next:{title:"Config Files",permalink:"/ja/docs/lua-modding/config-files"}},l={},h=[{value:"Dig it uh oh oh, dig it",id:"dig-it-uh-oh-oh-dig-it",level:3},{value:"All On Your Own",id:"all-on-your-own",level:3},{value:"Instances in Live View",id:"instances-in-live-view",level:3}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"moar-digging",children:"Moar Digging"}),"\n",(0,i.jsx)(t.h3,{id:"dig-it-uh-oh-oh-dig-it",children:(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=GLsCR2RMBak",children:"Dig it uh oh oh, dig it"})}),"\n",(0,i.jsx)(t.p,{children:"Alright Caveman, here's your task:"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Find out how to increase the Palbox build area with a script. Technically you can do this with PalGameSettings but I'm not talking about that, I'm talking about changing it in memory after the box has been placed."})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"I'll give you some slight guidance:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Get in a world, place down a palbox, start searching through live view for relevant ",(0,i.jsx)(t.strong,{children:"classes"}),". Remember, we want the box itself, that's going to be an object, which is an instance of a ",(0,i.jsx)(t.strong,{children:"class"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Once you think you might have an idea, right-click the search box and check ",(0,i.jsx)(t.code,{children:"Instances only"}),". Make sure your search is narrowed down, and then try placing a palbox down while watching the object list. If you're on the right track, you'll see some new objects appear as they get created in game."]}),"\n",(0,i.jsxs)(t.li,{children:["Once you think you've found the relevant objects, I want you to create a script that uses ",(0,i.jsx)(t.code,{children:"NotifyOnNewObject"})," to print ",(0,i.jsx)(t.code,{children:'"found a base"'})," when a new base object is created."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If you want to try and work it out on your own, you can start digging and come back if you get stuck. I'll leave a few hints here to help you get there without completely giving it away, but again, the more you can figure out on your own, the better off you'll be for your own mods!"}),"\n",(0,i.jsx)(t.h3,{id:"all-on-your-own",children:"All On Your Own"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Hint 1: I'm lost on what I should search for"})}),(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"This is your first taste of \"not everything is named in a logical way\". But we're looking for the palbox, so why not just try searching for that and seeing what comes up? You won't find exactly what you're looking for, but by looking at some of the results, you might get ideas for other things to search..."}),"\n"]})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Hint 2: Give me a little more please"})}),(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Alright so if you noticed ",(0,i.jsx)(t.code,{children:"PalBoxBase"})," that might have given you the idea to search for ",(0,i.jsx)(t.code,{children:"Base"}),". If you did, great! You were on the right track. If not, give that a shot and see what pops up. The next thing is to search through the ",(0,i.jsx)(t.code,{children:"Base"})," results and see if there's anything relevant..."]}),"\n"]})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Hint 3: Just tell me already.."})}),(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["The particular object we want to search for is ",(0,i.jsx)(t.code,{children:"PalBaseCampModel"})]}),"\n"]})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Hint 4: I think I know the class, but I'm stuck on how to write the script"})}),(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Alright so lets pull up the class of whatever we want to notify on in Live View so we can get the path...\r\nIt should be something along the lines of ",(0,i.jsx)(t.code,{children:"/Script/Pal.<some_class>"}),". That's what we're going to notify on. Since this one is a Script, we can do this without a ",(0,i.jsx)(t.code,{children:"RegisterHook"})," initializer. Something like:"]}),"\n"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:'NotifyOnNewObject("/Script/Pal.<some_class>", function()\r\n    -- do your stuff here\r\nend)\n'})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Sanity check code"})}),(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Alright, hopefully you were able to find ",(0,i.jsx)(t.code,{children:"PalBaseCampModel"})," and come up with something similar to the following code:"]}),"\n"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:'NotifyOnNewObject("/Script/Pal.PalBaseCampModel", function()\r\n    print("found a base")\r\nend)\n'})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["Once you have a basic script that prints ",(0,i.jsx)(t.code,{children:"found a base"})," for both existing bases on login and anytime you place a new base, you're ready to move on! If you made it here, great job! This is the power of ",(0,i.jsx)(t.code,{children:"NotifyOnNewObject"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Now that we can detect the placement of new bases, lets dig into the parameters of the base model and try changing them. We'll start by sanity-testing in Live View and then move to the Lua implementation afterwards."}),"\n",(0,i.jsx)(t.h3,{id:"instances-in-live-view",children:"Instances in Live View"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["In Live View turn on ",(0,i.jsx)(t.code,{children:"Instances only"})," and search for your ",(0,i.jsx)(t.code,{children:"PalBaseCampModel"}),". Assuming you have one placed, you should find an object that is ",(0,i.jsx)(t.code,{children:"PalBaseCampModel_<numbers>"}),". This is the actual model instance of the base camp you placed!"]}),"\n",(0,i.jsxs)(t.p,{children:["Click on that and you should see a bunch of parameters pop up in the bottom. This lets you view the realtime params of the model, as well as ",(0,i.jsx)(t.em,{children:"edit"})," them. This is great for testing what exactly does what before you go through the trouble of doing it all programmatically. Normally you'd have to search through all the params to find what you want, but in this case I'll just tell you we want the ",(0,i.jsx)(t.code,{children:"AreaRange"})," (its pretty obvious anyways)."]}),"\n",(0,i.jsxs)(t.p,{children:["If you right-click that value in live view, you can click ",(0,i.jsx)(t.code,{children:"Edit Value"}),". This lets you edit the actual param in memory. Lets try expanding our base to ",(0,i.jsx)(t.code,{children:"5000.0"}),". Click apply and go out to the blue ring. You'll notice the ring hasn't actually changed ",(0,i.jsx)("sup",{children:(0,i.jsx)("sub",{children:"(don't get me started on this, that's a lesson for another day)"})})," but if you go outside of it, the base info is still there, and you can still build base stuff!"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Live View, with the Base Camp Model selected and the dialogue box open from right-clicking the AreaRange value",src:n(29759).Z+"",width:"1257",height:"759"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h1,{id:"back-to-the-lua",children:"Back to the Lua"}),"\n",(0,i.jsxs)(t.p,{children:["Now, lets try to do that with a script so that we can change the range of all bases. Try your best to get there on your own, and come back ",(0,i.jsx)(t.em,{children:"when"})," you get stuck. Note the italics. Double-check your work by inspecting the object in LiveView...not everything is always as straightforward as you expect. Make sure to check the sanity check code before you move on!"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Hint 1: Not sure how to get the base object.."})}),(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"The first parameter of the callback is the UObject itself. Grab that from the params like you would a RegisterHook and then try changing the value"}),"\n"]})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Hint 2: Pretty sure I have the right code, but the AreaRange isn't actually changing"})}),(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["You're experiencing the joy of working during runtime. ",(0,i.jsx)(t.code,{children:"NotifyOnNewObject"})," triggers when the object is created...there's a good chance you are writing the value before it's properly initialized, resulting in it getting overwritten by the default value. Add a ",(0,i.jsx)(t.code,{children:"ExecuteWithDelay(10000, ...)"})," to delay things a bit before you go changing values."]}),"\n"]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("b",{children:"Sanity check code"})}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:'NotifyOnNewObject("/Script/Pal.PalBaseCampModel", function(base_model)\r\n    print("found a base model, waiting for it to finish initializing")\r\n    ExecuteWithDelay(10000, function()\r\n        base_model.AreaRange = 6000.0\r\n        print("changed a bases range")\r\n    end)\r\nend)\n'})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:[(0,i.jsxs)(t.strong,{children:["Why no ",(0,i.jsx)(t.code,{children:":get()"})," here?"]}),(0,i.jsx)(t.br,{}),"\n","With ",(0,i.jsx)(t.code,{children:"NotifyOnNewObject"}),", we're getting the object itself, not a parameter. No ",(0,i.jsx)(t.code,{children:":get()"})," needed!"]})}),"\n",(0,i.jsx)(t.p,{children:"If everything is set up right, you should be able to place a new base and it'll automatically update to the new setting. Nice job!"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["Remember to untick ",(0,i.jsx)(t.code,{children:"Instances only"})," when you're done looking at object instances!"]})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},29759:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/live_view_area_range-bc6904ebf8aac79b0ca850731bd42a01.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(67294);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);