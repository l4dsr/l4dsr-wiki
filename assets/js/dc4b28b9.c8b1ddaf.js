"use strict";(self.webpackChunkl_4_dsr_wiki=self.webpackChunkl_4_dsr_wiki||[]).push([[639],{3747:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=o(4848),r=o(8453),s=o(7717);const t={},d="Demos",l={id:"tutorials/welcome/demos",title:"Demos",description:"What are demos?",source:"@site/docs/tutorials/welcome/demos.mdx",sourceDirName:"tutorials/welcome",slug:"/tutorials/welcome/demos",permalink:"/l4dsr-wiki/docs/tutorials/welcome/demos",draft:!1,unlisted:!1,editUrl:"https://github.com/l4dsr/l4dsr-wiki/tree/master/packages/create-docusaurus/templates/shared/docs/tutorials/welcome/demos.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Setup",permalink:"/l4dsr-wiki/docs/tutorials/welcome/Basic Setup"},next:{title:"Left 4 Dead 2",permalink:"/l4dsr-wiki/docs/category/left-4-dead-2"}},a={},c=[{value:"What are demos?",id:"what-are-demos",level:2},{value:"Demo recording basics",id:"demo-recording-basics",level:2},{value:"SST",id:"sst",level:2},{value:"Suggested practices/binds/methods",id:"suggested-practicesbindsmethods",level:2},{value:"Where do demos record to, and how do I include them in a submission?",id:"where-do-demos-record-to-and-how-do-i-include-them-in-a-submission",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"demos",children:"Demos"}),"\n","\n",(0,i.jsx)(n.h2,{id:"what-are-demos",children:"What are demos?"}),"\n",(0,i.jsxs)(n.p,{children:["Demos are a lightweight in-game recording of your inputs and information your game receives from the server. They can be played back ingame, or parsed with external tools to assist in verification. Demos are ",(0,i.jsx)(n.strong,{children:"ONLY"})," recorded while loaded into a level, they do not record while on the main menu as there is no game server running."]}),"\n",(0,i.jsx)(n.admonition,{title:"Video Tutorial",type:"info",children:(0,i.jsx)(s.Yu,{youTubeId:"eBsnp7pES1M"})}),"\n",(0,i.jsx)(n.h2,{id:"demo-recording-basics",children:"Demo recording basics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To record a demo, write ",(0,i.jsx)(n.code,{children:"record speedrun"})," in the developer console while in-game. If ",(0,i.jsx)(n.a,{href:"https://mikes.software/sst",children:"SST"})," is installed, it can also be done from the main menu (other demo recording differences related to SST are listed ",(0,i.jsx)(n.a,{href:"#sst",children:"below"}),").","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Demo recording must begin before the intro cutscene begins at the start of the run in order for the run to be valid. Make sure to start recording before loading the first map of the run (either from the main menu or in-game) or restart the campaign after starting the recording."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["One demo will be recorded for each map, and the game will automatically continue to record demos through level transitions and votes to restart/change campaigns. The first demo will be named ",(0,i.jsx)(n.code,{children:"speedrun"}),", the second one ",(0,i.jsx)(n.code,{children:"speedrun_2"}),", then ",(0,i.jsx)(n.code,{children:"speedrun_3"}),", etc etc."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"If you stop and restart demo recording with the same demo name, the demo number/counter will reset, and it will automatically overwrite existing demo files."})}),"\n",(0,i.jsxs)(n.li,{children:["If you run the ",(0,i.jsx)(n.code,{children:"record"})," command while demos are already recording, it will be ignored and the console will print ",(0,i.jsx)(n.code,{children:"Already recording."})]}),"\n",(0,i.jsxs)(n.li,{children:["To stop recording demos, simply type ",(0,i.jsx)(n.code,{children:"stop"})," in the console."]}),"\n",(0,i.jsxs)(n.li,{children:["Demos can be watched by using the playdemo command in the console, or by pressing Shift and F2 to open ",(0,i.jsx)(n.code,{children:"demoui"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sst",children:"SST"}),"\n",(0,i.jsxs)(n.p,{children:["Recording demos changes slightly depending on whether you are using ",(0,i.jsx)(n.a,{href:"https://mikes.software/sst",children:"SST"})," or not. I'll briefly explain the differences:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Without SST:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"record"})," and ",(0,i.jsx)(n.code,{children:"stop"})," commands ",(0,i.jsx)(n.strong,{children:"only work when you are loaded into a level"})]}),"\n",(0,i.jsxs)(n.li,{children:["Demo recording will stop any time you leave the game (go to the main menu, use ",(0,i.jsx)(n.code,{children:"disconnect"})," command, etc)."]}),"\n",(0,i.jsx)(n.li,{children:"Demo recording will silently fail if attempting to record to a folder that doesn't exist."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"With SST:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"record"})," and ",(0,i.jsx)(n.code,{children:"stop"})," commands ",(0,i.jsx)(n.strong,{children:"work from the main menu"})]}),"\n",(0,i.jsxs)(n.li,{children:["Once demo recording begins, it will continue to record demos upon loading into a new server even if you go to the main menu, disconnect, etc. It will only stop if you run ",(0,i.jsx)(n.code,{children:"stop"})," command, or close the game."]}),"\n",(0,i.jsx)(n.li,{children:"Attempting to record to a nonexistent folder will produce a warning in the console."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"SST comes prepackaged with our old version game downloads, so you only need to manually install it if you intend to run on Newest and want to take advantage of the extra features."})}),"\n",(0,i.jsx)(n.admonition,{title:"WARNING",type:"caution",children:(0,i.jsxs)(n.p,{children:["Currently if you want to run multi-campaign categories which involve disconnecting to the main menu at any point during the run and/or use the ",(0,i.jsx)(n.code,{children:"map"})," command to switch campaigns (L4D1 Original Campaigns, L4D2 All Campaigns Legacy), ",(0,i.jsx)(n.strong,{children:"you will need SST to be installed in order to have a valid run"}),", as demos need to be recorded for the entire duration you are ingame, which is not possible to achieve without SST due to the fact that demo recording is normally interrupted any time you go to the main menu."]})}),"\n",(0,i.jsx)(n.h2,{id:"suggested-practicesbindsmethods",children:"Suggested practices/binds/methods"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Put ",(0,i.jsx)(n.code,{children:"record speedrun"})," in your ",(0,i.jsx)(n.code,{children:"autoexec.cfg"})," (located in left4dead2/cfg) - ",(0,i.jsx)(n.strong,{children:"this will require SST to be loaded automatically in order for it to work."})," This will automatically queue demo recording to start upon loading into the map."]}),"\n",(0,i.jsxs)(n.li,{children:["Have a general bind for recording demos. For example, ",(0,i.jsx)(n.code,{children:'bind backspace "record speedrun"'})," - this is redundant if you put ",(0,i.jsx)(n.code,{children:"record speedrun"})," in your autoexec and don't ever intentionally run ",(0,i.jsx)(n.code,{children:"stop"})," while playing."]}),"\n",(0,i.jsxs)(n.li,{children:["Have another bind that calls a restart vote and also restarts demo recording.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For example, ",(0,i.jsx)(n.code,{children:'bind 0 "stop; callvote restartgame; record speedrun"'})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"This way, when doing attempts, it should be pretty much impossible to fail to record demos."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"where-do-demos-record-to-and-how-do-i-include-them-in-a-submission",children:"Where do demos record to, and how do I include them in a submission?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Demos record to the lowercased ",(0,i.jsx)(n.code,{children:"left4dead2"})," folder (or ",(0,i.jsx)(n.code,{children:"left4dead"})," in the case of L4D1) which can be found in your game files.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can specify a subdirectory but the folder must already be created for it to work."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["When you finish a run, put the demos into a zip file (7z/rar is also fine) and upload them to a permanent file host (such as Google Drive), ",(0,i.jsx)(n.strong,{children:"make sure the file/link is openable by anyone"}),", and put the link in the description of your run on speedrun.com when you submit."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);