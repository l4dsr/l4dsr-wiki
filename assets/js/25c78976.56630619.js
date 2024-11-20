"use strict";(self.webpackChunkl_4_dsr_wiki=self.webpackChunkl_4_dsr_wiki||[]).push([[2088],{669:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var n=i(4848),s=i(8453);const l={sidebar_position:6},o="Linux Setup",r={id:"tutorials/welcome/linux",title:"Linux Setup",description:"Method 1 (easy way, directly in the bat)",source:"@site/docs/tutorials/welcome/linux.mdx",sourceDirName:"tutorials/welcome",slug:"/tutorials/welcome/linux",permalink:"/l4dsr-wiki/docs/tutorials/welcome/linux",draft:!1,unlisted:!1,editUrl:"https://github.com/l4dsr/l4dsr-wiki/tree/master/packages/create-docusaurus/templates/shared/docs/tutorials/welcome/linux.mdx",tags:[],version:"current",lastUpdatedBy:"Skytis",lastUpdatedAt:173208222e4,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u2328 Keybinds",permalink:"/l4dsr-wiki/docs/tutorials/welcome/keybinds"},next:{title:"Left 4 Dead 2",permalink:"/l4dsr-wiki/docs/category/left-4-dead-2"}},d={},a=[{value:"Method 1 (easy way, directly in the bat)",id:"method-1-easy-way-directly-in-the-bat",level:2},{value:"Steps",id:"steps",level:3},{value:"Method 2 (complicated way, SteamTinkerLaunch)",id:"method-2-complicated-way-steamtinkerlaunch",level:2},{value:"Steps",id:"steps-1",level:3},{value:"Credits",id:"credits",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"linux-setup",children:"Linux Setup"}),"\n",(0,n.jsx)(t.h2,{id:"method-1-easy-way-directly-in-the-bat",children:"Method 1 (easy way, directly in the bat)"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Use this method unless you have a specific reason not to"})}),"\n",(0,n.jsx)(t.p,{children:"Tested by Osku on Ubuntu 22.04 (Wayland) on 2024-11-08\r\nTested by Skytis on Kubuntu 24.04 LTS (x11) on 2024-11-08 with Proton 9.0-3\r\nTested by Skytis on Kubuntu 24.10 (Wayland) (clean install) on 2024-11-08 with Proton Experimental"}),"\n",(0,n.jsx)(t.p,{children:"Note: Skytis tried this previously (around July/August 2024) with aciidz' assistance and couldn't get it to work. Osku tried this on 2024-11-08 and it worked. Skytis tried it again the same day and it also worked for him. No idea why"}),"\n",(0,n.jsx)(t.h3,{id:"steps",children:"Steps"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Acquire L4D2 2000 [link to Discord/source], unzip somewhere"}),"\n",(0,n.jsx)(t.li,{children:"Acquire LiveSplit, unzip somewhere"}),"\n",(0,n.jsxs)(t.li,{children:["Edit the ",(0,n.jsx)(t.code,{children:"Start L4D2.2000.bat"})," to add LiveSplit to it","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:['In this example you have a folder called "Games" which has the folders "L4D2 2.0.0.0" (this contains ',(0,n.jsx)(t.code,{children:"Start L4D2.2000.bat"}),') and "livesplit" (this contains ',(0,n.jsx)(t.code,{children:"LiveSplit.exe"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add these lines (adjust according to your folder structure/LiveSplit location)","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"cd .."})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"cd .."})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"start livesplit\\Livesplit.exe"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Add ",(0,n.jsx)(t.code,{children:"Start L4D2.2000.bat"})," as Non-Steam game to Steam","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Add some other .exe then edit it to point to the .bat since you can't add the .bat directly"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Under Compatibility force a specific compatibility tool select a Proton version (I used 9.0-3)"}),"\n",(0,n.jsx)(t.li,{children:"Launch the bat-Steam-game"}),"\n",(0,n.jsx)(t.li,{children:"Wait for the game and LiveSplit to start"}),"\n",(0,n.jsxs)(t.li,{children:["Verify that SST works (check for the console output or see if sst commands can be autocompleted)","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If it crashes or SST doesn't work, use SST v0.5, newer versions don't work (or at least v0.8)","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://dl.mikes.software/sst/",children:"https://dl.mikes.software/sst/"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Configure LiveSplit and verify that it works"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"method-2-complicated-way-steamtinkerlaunch",children:"Method 2 (complicated way, SteamTinkerLaunch)"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Use this method if method 2 doesn't work or if you know what you're doing and want to tinker with more stuff"})}),"\n",(0,n.jsx)(t.p,{children:"Tested by Skytis on Kubuntu 24.04 LTS (x11) on 2024-11-02 with the latest versions of STL and pacstall available and proton-9.0-3c (via STL)"}),"\n",(0,n.jsx)(t.h3,{id:"steps-1",children:"Steps"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Acquire L4D2 2000 [link to Discord/source], unzip somewhere"}),"\n",(0,n.jsx)(t.li,{children:"Acquire LiveSplit, unzip somewhere"}),"\n",(0,n.jsxs)(t.li,{children:["Install SteamTinkerLaunch ",(0,n.jsx)(t.a,{href:"https://github.com/sonic2kk/steamtinkerlaunch",children:"https://github.com/sonic2kk/steamtinkerlaunch"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["It is not available via a native repository for (K)ubuntu. Install ",(0,n.jsx)(t.a,{href:"https://github.com/pacstall/pacstall",children:"https://github.com/pacstall/pacstall"})," and then run ",(0,n.jsx)(t.code,{children:"pacstall -I steamtinkerlaunch-git"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"UPPER CASE i (for install), NOT LOWER CASE L"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Add STL as compatibility tool ",(0,n.jsx)(t.a,{href:"https://github.com/sonic2kk/steamtinkerlaunch/wiki/Steam-Compatibility-Tool",children:"https://github.com/sonic2kk/steamtinkerlaunch/wiki/Steam-Compatibility-Tool"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Should just need to run ",(0,n.jsx)(t.code,{children:"steamtinkerlaunch compat add"})]}),"\n",(0,n.jsx)(t.li,{children:"Restart Steam"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Add ",(0,n.jsx)(t.code,{children:"Start L4D2.2000.bat"})," as Non-Steam game to Steam","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Add some other .exe then edit it to point to the .bat since you can't add the .bat directly"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Under Compatibility force a specific compatibility tool: Steam Tinker Launch"}),"\n",(0,n.jsx)(t.li,{children:"Launch the bat-Steam-game"}),"\n",(0,n.jsxs)(t.li,{children:["In the STL window click the ",(0,n.jsx)(t.code,{children:"MAIN MENU"})," button (you have 2s to do this, then the game is automatically launched)"]}),"\n",(0,n.jsxs)(t.li,{children:["Click on ",(0,n.jsx)(t.code,{children:"GAME MENU"})]}),"\n",(0,n.jsxs)(t.li,{children:["Turn on ",(0,n.jsx)(t.code,{children:"Use custom command"})]}),"\n",(0,n.jsx)(t.li,{children:"Custom command: Select your LiveSplit.exe"}),"\n",(0,n.jsxs)(t.li,{children:["Enable ",(0,n.jsx)(t.code,{children:"Fork custom command"})]}),"\n",(0,n.jsxs)(t.li,{children:["Disable ",(0,n.jsx)(t.code,{children:"Use Steam Linux Runtime with Custom Command"})]}),"\n",(0,n.jsxs)(t.li,{children:["Enable ",(0,n.jsx)(t.code,{children:"Inject custom command"})]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.code,{children:"SAVE AND PLAY"})]}),"\n",(0,n.jsx)(t.li,{children:"Wait for the game and LiveSplit to start"}),"\n",(0,n.jsxs)(t.li,{children:["Verify that SST works (check for the console output or see if sst commands can be autocompleted)","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If it crashes, use SST v0.5, newer versions don't work (or at least v0.8)","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://dl.mikes.software/sst/",children:"https://dl.mikes.software/sst/"})}),"\n",(0,n.jsx)(t.li,{children:"Place the .dll in the SST folder"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Configure LiveSplit and verify that it works","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Skytis had it already set up before from testing other stuff, so if weird stuff happens to you when configuring, maybe launch LiveSplit by itself to configure it"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Notes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"If you quit the game first, LiveSplit freezes. You can just stop it via Steam"}),"\n",(0,n.jsx)(t.li,{children:"If you quit LiveSplit first, then the game, everything should properly be shut down"}),"\n",(0,n.jsxs)(t.li,{children:["If you launch the bat-Steam-game and you don't get the STL launch dialog (where you can go to ",(0,n.jsx)(t.code,{children:"MAIN MENU"}),"), close LiveSplit and the game, then start ",(0,n.jsx)(t.code,{children:"Steam Tinker Launch (Settings)"})," to edit stuff. It should have automatically selected the game you last launched (so the bat-Steam-game)"]}),"\n",(0,n.jsx)(t.li,{children:"Fonts don't work correctly, so stuff looks a little weird"}),"\n",(0,n.jsx)(t.li,{children:"Sometimes LiveSplit doesn't start. No clue why"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"credits",children:"Credits"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://grapefruit.neocities.org/stuff/livesplit_proton",children:"https://grapefruit.neocities.org/stuff/livesplit_proton"})," - Figuring out how to get autosplitters working with Proton via STL"]}),"\n",(0,n.jsxs)(t.li,{children:["Zephyr - sending ",(0,n.jsx)(t.a,{href:"https://grapefruit.neocities.org/stuff/livesplit_proton",children:"https://grapefruit.neocities.org/stuff/livesplit_proton"})," to Skytis"]}),"\n",(0,n.jsx)(t.li,{children:"Skytis - Figuring the STL stuff out for Left 4 Dead 2, writing this guide"}),"\n",(0,n.jsx)(t.li,{children:"aciidz - Info that newer SST doesn't work on Linux, emotional support"}),"\n",(0,n.jsx)(t.li,{children:"Osku - Testing method 1, making Skytis retest method 1"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>r});var n=i(6540);const s={},l=n.createContext(s);function o(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);