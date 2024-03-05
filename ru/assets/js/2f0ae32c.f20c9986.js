"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3149],{98464:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>h,toc:()=>g});var t=i(85893),o=i(11151);const l={btn:"btn_JQqO","btn-hover-out":"btn-hover-out_iYUA","btn-hover-in":"btn-hover-in_HPLa"};var r=i(8704);function s(e){let{text:n,url:i}=e;return(0,t.jsxs)("a",{className:l.btn,href:i,children:[(0,t.jsx)(r.Miv,{size:20})," ",n]})}var d=i(52091);const a={sidebar_position:2},c="PDK Setup & Config - Part 2",h={id:"palworld-modding-kit/install-part-2",title:"PDK Setup & Config - Part 2",description:"With the prerequisites out of the way, we are ready to download the sdk.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/palworld-modding-kit/install-part-2.mdx",sourceDirName:"palworld-modding-kit",slug:"/palworld-modding-kit/install-part-2",permalink:"/ru/docs/palworld-modding-kit/install-part-2",draft:!1,unlisted:!1,editUrl:"https://github.com/PalworldModding/Docs/docs/palworld-modding-kit/install-part-2.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prerequisites - Part 1",permalink:"/ru/docs/palworld-modding-kit/install-part-1"},next:{title:"Launching The PDK - Part 3",permalink:"/ru/docs/palworld-modding-kit/launching-the-pdk"}},u={},g=[{value:"Repository Setup",id:"repository-setup",level:2},{value:"Cloning from git",id:"cloning-from-git",level:3},{value:"Downloading a zip",id:"downloading-a-zip",level:3},{value:"Checking",id:"checking",level:3},{value:"Wwise integration",id:"wwise-integration",level:2},{value:"Finished",id:"finished",level:3},{value:"Changing build tools from VS 2019 to VS 2022",id:"changing-build-tools-from-vs-2019-to-vs-2022",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Details:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"pdk-setup--config---part-2",children:"PDK Setup & Config - Part 2"}),"\n",(0,t.jsx)(n.p,{children:"With the prerequisites out of the way, we are ready to download the sdk."}),"\n",(0,t.jsx)(n.h2,{id:"repository-setup",children:"Repository Setup"}),"\n",(0,t.jsx)(n.p,{children:"There are two ways to set up the repository:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cloning from git"}),"\n",(0,t.jsx)(n.li,{children:"Downloading a zip"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Cloning from git has the advantage of easier updates, but requires knowledge of git. This guide will explore both options."}),"\n",(0,t.jsx)(n.h3,{id:"cloning-from-git",children:"Cloning from git"}),"\n",(0,t.jsxs)(n.p,{children:["To clone the repository from git, use this link: ",(0,t.jsx)(n.a,{href:"https://github.com/localcc/PalworldModdingKit",children:"https://github.com/localcc/PalworldModdingKit"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.code,{children:"git clone"})," run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Git"',children:"git clone https://github.com/localcc/PalworldModdingKit\n"})}),"\n",(0,t.jsx)(n.h3,{id:"downloading-a-zip",children:"Downloading a zip"}),"\n",(0,t.jsx)(n.p,{children:"If you're not using git, you can download the zip using the button below:"}),"\n","\n",(0,t.jsx)(s,{text:"Download PDK",url:"https://github.com/localcc/PalworldModdingKit/archive/HEAD.zip"}),"\n",(0,t.jsx)(n.p,{children:"After downloading the zip file, unpack it."}),"\n",(0,t.jsx)(n.h3,{id:"checking",children:"Checking"}),"\n",(0,t.jsx)(n.p,{children:"After downloading the repo, you should see the following file structure:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Repo Structure",src:i(14329).Z+"",width:"616",height:"313"})}),"\n",(0,t.jsx)(n.h2,{id:"wwise-integration",children:"Wwise integration"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Before continuing to open the sdk in unreal, we must integrate Wwise manually. This is because the Wwise version that the game uses, is not officially compatible with the engine version, so we have to manually copy it over."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Open the directory you downloaded offline installation files for Wwise in ( ",(0,t.jsx)(n.a,{href:"./install-part-1#finished",children:"Back at the end of Part1"})," ), you should see the following structure:"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Offline installation files structure",src:i(86644).Z+"",width:"619",height:"251"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Unpack the ",(0,t.jsx)(n.code,{children:"Unreal.5.0.tar.xz"})," archive."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"You might need to do it twice, first time you unpack it, you might get a .tar file, unpack that one too."})}),"\n","\n","\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy over the unpacked ",(0,t.jsx)(n.code,{children:"Wwise"})," Folder ( ",(0,t.jsx)(d.$nz,{})," ) into the ",(0,t.jsx)(n.code,{children:"Plugins"})," folder of the Palworld Modding Kit."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Almost done with Wwise integration, now we just need to copy over the needed dlls."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.code,{children:"Plugins\\Wwise"})," Folder ( ",(0,t.jsx)(d.$nz,{})," ) inside the Palworld Modding Kit, and create a ",(0,t.jsx)(n.code,{children:"ThirdParty"})," folder there."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Now go to the Folder ( ",(0,t.jsx)(d.$nz,{})," ) where you installed the Wwise SDK"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"This is not the folder where you installed the integration files, but the folder where you installed the SDK"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",metastring:'title="Default Wwise SDK Path"',children:"C:\\Program Files (x86)\\Audiokinetic\\Wwise 2021.1.11.7933\\SDK\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Inside of this Folder ( ",(0,t.jsx)(d.$nz,{})," ), select:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Win32_vc170"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"x64_vc170"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"include"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy over the Folders ( ",(0,t.jsx)(d.$nz,{})," ) listed above to the ",(0,t.jsx)(n.code,{children:"ThirdParty"})," folder you created earlier."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["After copying over those folders, make sure to duplicate the ",(0,t.jsx)(n.code,{children:"vc170"})," folders as ",(0,t.jsx)(n.code,{children:"vc160"})," also, so the structure will look as follows:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"VC160 Copies",src:i(99002).Z+"",width:"688",height:"289"})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"If you continue without the following change, you will have to click OK on a dialog box that says Wwise is not compatible with the current Unreal Engine version every time you load up the editor."}),(0,t.jsxs)(n.p,{children:["To fix this, navigate to ",(0,t.jsx)(n.code,{children:"Plugins\\Wwise"})," and open ",(0,t.jsx)(n.code,{children:"Wwise.uplugin"})," with any text editor or ide."]}),(0,t.jsxs)(n.p,{children:["Then change the entry ",(0,t.jsx)(n.code,{children:'"EngineVersion" : "5.0.0",'})," to ",(0,t.jsx)(n.code,{children:'"EngineVersion" : "5.1",'}),"."]})]}),"\n",(0,t.jsx)(n.h3,{id:"finished",children:"Finished"}),"\n",(0,t.jsx)(n.p,{children:"Yay! Now we are done with integrating wwise!"}),"\n",(0,t.jsx)(n.h2,{id:"changing-build-tools-from-vs-2019-to-vs-2022",children:"Changing build tools from VS 2019 to VS 2022"}),"\n",(0,t.jsx)(n.p,{children:"In Unreal Engine 5.1, by default, Visual Studio 2019 build tools will be used if they are installed."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"The below changes should only be made if Visual Studio 2019 is installed alongside Visual Studio 2022."})}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsxs)("summary",{children:['If you don\'t see "Unreal Engine" in ',(0,t.jsx)(n.code,{children:"%APPDATA%"})]}),(0,t.jsx)("div",{children:(0,t.jsxs)(n.p,{children:['If you don\'t see "Unreal Engine" in ',(0,t.jsx)(n.code,{children:"%APPDATA%"})," that means you haven't launched Unreal Engine before",(0,t.jsx)("br",{}),"\r\nGo to ",(0,t.jsx)(n.code,{children:"Epic Games Launcher -> Unreal Engine -> Library 0 >"}),' Click "Launch" on the Unreal Engine version that you\'ve downloaded (5.1.x).',(0,t.jsx)("br",{}),"\r\n",(0,t.jsx)(n.img,{alt:"UnrealEditorLaunchFirst",src:i(68455).Z+"",width:"859",height:"422"}),(0,t.jsx)("br",{}),"\r\nLet it load until you see the creation of a new project screen then close it and continue with the guide.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsxs)(n.p,{children:["To change this, navigate to ",(0,t.jsx)(n.code,{children:"%APPDATA%\\Unreal Engine\\UnrealBuildTool"})," and open ",(0,t.jsx)(n.code,{children:"BuildConfiguration.xml"})," with your favorite XML editor."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",metastring:'title="Initial Configuration"',children:'<?xml version="1.0" encoding="utf-8" ?>\r\n<Configuration xmlns="https://www.unrealengine.com/BuildConfiguration">\r\n</Configuration>\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",metastring:'title="Updated it to look like so:"',children:'<?xml version="1.0" encoding="utf-8" ?>\r\n<Configuration xmlns="https://www.unrealengine.com/BuildConfiguration">\r\n    <VCProjectFileGenerator>\r\n        <Version>VisualStudio2022</Version>\r\n    </VCProjectFileGenerator>\r\n    <WindowsPlatform>\r\n        <Compiler>VisualStudio2022</Compiler>\r\n    </WindowsPlatform>\r\n</Configuration>\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Congratulations on making it through the configuration!"})})]})}function x(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},68455:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/LaunchUnrealEditor-a26da6df568b960b2ad6d228c9eabc51.png"},14329:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/RepoStructure-dcfaf07a05580ea70c5ad18386a93c93.png"},99002:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Vc160Incident-054e21043204202ca971f56a4fda2a74.png"},86644:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/WwiseOfflineIntegrationStructure-1b825135256c41fd6e5a95eab6c7c039.png"}}]);