"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9311],{885:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var o=s(5893),t=s(1151);const d={sidebar_position:3},i="Exporting & Modifying 3D Assets",r={id:"asset-swapping/ExportingModifying3DAssets",title:"Exporting & Modifying 3D Assets",description:"This guide is written by KURAMAAA0",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/asset-swapping/ExportingModifying3DAssets.md",sourceDirName:"asset-swapping",slug:"/asset-swapping/ExportingModifying3DAssets",permalink:"/uk/docs/asset-swapping/ExportingModifying3DAssets",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/asset-swapping/ExportingModifying3DAssets.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Starting out",permalink:"/uk/docs/asset-swapping/StartingOut"},next:{title:"Exporting & Replacing 3D Assets",permalink:"/uk/docs/asset-swapping/ExportingReplacing3DAssets"}},a={},l=[{value:"Finding and exporting 3D models of Pals",id:"finding-and-exporting-3d-models-of-pals",level:2},{value:"To find the Code Name of any Pal, click <strong>HERE</strong> and search for your wanted pal.",id:"to-find-the-code-name-of-any-pal-click-here-and-search-for-your-wanted-pal",level:4},{value:"Importing the 3D models in Blender",id:"importing-the-3d-models-in-blender",level:2},{value:"Modifying the 3D models in Blender",id:"modifying-the-3d-models-in-blender",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"exporting--modifying-3d-assets",children:"Exporting & Modifying 3D Assets"}),"\n",(0,o.jsxs)(n.p,{children:["This guide is written by ",(0,o.jsx)(n.a,{href:"https://github.com/KURAMAAA0/PalModding",children:"KURAMAAA0"})]}),"\n",(0,o.jsx)(n.p,{children:"In this section, you'll learn how to find the right files to export in order to modify 3D assets. You will not be taught how to use Blender."}),"\n",(0,o.jsx)(n.h2,{id:"finding-and-exporting-3d-models-of-pals",children:"Finding and exporting 3D models of Pals"}),"\n",(0,o.jsxs)(n.p,{children:["If you want to find a Pal 3D model, press ",(0,o.jsx)(n.code,{children:"Control + Shift + F"})," in FModel, or click ",(0,o.jsx)(n.code,{children:"Package -> Search"}),", then search for ",(0,o.jsx)(n.code,{children:"SK_<PalCodeName>"})," (Replace <PalCodeName> Being your Pals name)"]}),"\n",(0,o.jsxs)(n.h4,{id:"to-find-the-code-name-of-any-pal-click-here-and-search-for-your-wanted-pal",children:["To find the Code Name of any Pal, click ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://github.com/KURAMAAA0/PalModding/blob/main/PalNamesCodeNames.txt",title:"HERE",children:"HERE"})})," and search for your wanted pal."]}),"\n",(0,o.jsxs)(n.p,{children:["Double-click on the first result, should be the one ",(0,o.jsx)(n.strong,{children:"without"})," _",(0,o.jsx)(n.code,{children:"Skeleton"})," at the end."]}),"\n",(0,o.jsxs)(n.p,{children:["Then go up one folder, meaning you shoud click on ",(0,o.jsx)(n.code,{children:"Folders"})," at the top."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/6c0d144c-5a52-465b-8d76-f404d6ab3474",alt:"FMODEL2"})}),"\n",(0,o.jsxs)(n.p,{children:["Right-click on your Pal's folder, click save Folder's Packages ",(0,o.jsx)(n.strong,{children:"Textures"})," (.png)\r\nRight-click on your Pal's folder, click save Folder's Packages ",(0,o.jsx)(n.strong,{children:"Models"})," (.psk)\r\nNow you can go ahead and open ",(0,o.jsx)(n.strong,{children:"Blender"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"importing-the-3d-models-in-blender",children:"Importing the 3D models in Blender"}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.p,{children:"Make sure you either scale the armature and model down by 0.01 after import, or while exporting, scale should be set 0.1."}),(0,o.jsxs)(n.p,{children:["Make sure you are also disabling ",(0,o.jsx)(n.code,{children:"Add Leaf Bones"})," on export."]}),(0,o.jsxs)(n.p,{children:["The armature name should be Armature\r\n",(0,o.jsx)(n.img,{alt:"Armature",src:s(823).Z+"",width:"121",height:"46"})]})]}),"\n",(0,o.jsxs)(n.p,{children:["In Blender, click on ",(0,o.jsx)(n.code,{children:"File -> Import -> Unreal PSK (.psk/.pskx)"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/98e6e332-75d2-4c60-ad49-d557459ce8d4",alt:"BLENDER1"})}),"\n",(0,o.jsxs)(n.p,{children:["Go to the output folder you set when changing FModel's settings, ",(0,o.jsx)(n.code,{children:"Output -> Exports"})," go through the folders until you find the ",(0,o.jsx)(n.code,{children:"SK_PalCodeName.psk"})," file and import it.\r\nThe textures should be in the same folder as the .psk, apply them to the Pal model if you don't want to replace it, otherwise ignore.\r\nWe'll make ",(0,o.jsx)(n.code,{children:"Depresso"})," (code name: ",(0,o.jsx)(n.code,{children:"NegativeKoala"}),") into a completely sleep-deprived ",(0,o.jsx)(n.code,{children:"Depresso"})," by editing his model.\r\nWe will also change his textures, go to ",(0,o.jsx)(n.strong,{children:"this section"})," if you want to learn how to replace/edit images (same process as replacing/editing textures)."]}),"\n",(0,o.jsx)(n.h2,{id:"modifying-the-3d-models-in-blender",children:"Modifying the 3D models in Blender"}),"\n",(0,o.jsxs)(n.p,{children:["If you only want to modify your Pal 3D model, you can keep the model present in the viewport and do the modifications directly on it.\r\nIf your model has a black background for his eyes and mouth, select the texture(s) with the issue, go to the ",(0,o.jsx)(n.strong,{children:"Shader Editor"}),", plug the ",(0,o.jsx)(n.strong,{children:"Alpha"})," channel of the texture into the ",(0,o.jsx)(n.strong,{children:"Alpha"})," property of the Principled BSDF."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/c988b8db-3d1a-48ed-b597-8beda449cfb8",alt:"BLENDERSHADER1"})}),"\n",(0,o.jsxs)(n.p,{children:["Then in the Material Properties tab change the ",(0,o.jsx)(n.code,{children:"Blend Mode"})," to ",(0,o.jsx)(n.code,{children:"Alpha Blend"})," and the ",(0,o.jsx)(n.code,{children:"Shadow Mode"})," to ",(0,o.jsx)(n.code,{children:"None"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/41e5a112-f107-468d-b69b-e38b9a36bfce",alt:"BLENDERSHADER2"})}),"\n",(0,o.jsx)(n.p,{children:"Your Pal should now be fixed and working!"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/d0b93d38-ea6d-4a27-9ac4-14beab123f1f",alt:"BLENDERSHADER3"})}),"\n",(0,o.jsxs)(n.p,{children:["Here's the poorly made ",(0,o.jsx)(n.code,{children:"Sleep Deprived Depresso"}),", as well as his textures changed."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/3cd4b1f6-17d9-4160-8c04-d0acc640ce92",alt:"BLENDER3"})}),"\n",(0,o.jsxs)(n.p,{children:["To export, simply go to ",(0,o.jsx)(n.code,{children:"File > Export > FBX (.fbx)"})," and choose where you want to export it."]}),"\n",(0,o.jsxs)(n.p,{children:["Let's proceed with the final step, ",(0,o.jsx)(n.a,{href:"https://github.com/KURAMAAA0/PalModding/blob/main/Assset%20Swap%20Guide/PackagingInUE5.md",children:"packaging the file in UE5 to get a mod file!"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},823:(e,n,s)=>{s.d(n,{Z:()=>o});const o="data:image/png;base64,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"},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>i});var o=s(7294);const t={},d=o.createContext(t);function i(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);