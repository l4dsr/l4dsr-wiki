"use strict";(self.webpackChunkl_4_dsr_wiki=self.webpackChunkl_4_dsr_wiki||[]).push([[4200],{6772:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=o(4848),n=o(8453);const s={sidebar_position:2},r="\ud83c\udf64 The shrimple way",a={id:"knowledgebase/contribute/easy-way",title:"\ud83c\udf64 The shrimple way",description:"Regardless of which way you choose, there are two things you need to do first either way.",source:"@site/docs/knowledgebase/contribute/easy-way.mdx",sourceDirName:"knowledgebase/contribute",slug:"/knowledgebase/contribute/easy-way",permalink:"/l4dsr-wiki/docs/knowledgebase/contribute/easy-way",draft:!1,unlisted:!1,editUrl:"https://github.com/l4dsr/l4dsr-wiki/tree/master/packages/create-docusaurus/templates/shared/docs/knowledgebase/contribute/easy-way.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"knowledgebaseSidebar",previous:{title:"\ud83c\udf3f Choose your own adventure",permalink:"/l4dsr-wiki/docs/knowledgebase/contribute/intro"},next:{title:"\u2328 The hackerman way",permalink:"/l4dsr-wiki/docs/knowledgebase/contribute/hard-way"}},h={},l=[{value:"Forking the repository",id:"forking-the-repository",level:2},{value:"Making your changes",id:"making-your-changes",level:2},{value:"Submitting your changes",id:"submitting-your-changes",level:2},{value:"Committing to your fork",id:"committing-to-your-fork",level:3},{value:"Creating a Pull Request",id:"creating-a-pull-request",level:3},{value:"Syncing your repo once changes are merged",id:"syncing-your-repo-once-changes-are-merged",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"-the-shrimple-way",children:"\ud83c\udf64 The shrimple way"}),"\n",(0,i.jsx)(t.p,{children:"Regardless of which way you choose, there are two things you need to do first either way."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a ",(0,i.jsx)(t.a,{href:"https://github.com",children:"GitHub"})," account"]}),"\n",(0,i.jsxs)(t.li,{children:["Fork the ",(0,i.jsx)(t.a,{href:"https://github.com/l4dsr/l4dsr-wiki",children:"Wiki's GitHub repository"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'Creating a GitHub account should be fairly straight forward, so I won\'t walk you through it here. The more pressing question is "wtf is that nonsense written in the second bullet point up there?"'}),"\n",(0,i.jsx)(t.p,{children:"The general workflow for making contributions on GitHub looks like this."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'You create a copy of the original repository under your own account (This is called "forking" that repository)'}),"\n",(0,i.jsx)(t.li,{children:'You make changes to your own copy (This is your "fork")'}),"\n",(0,i.jsx)(t.li,{children:'You then push those changes back to original repository via something called a "Pull Request" (We\'ll talk more about what that means later)'}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"forking-the-repository",children:"Forking the repository"}),"\n",(0,i.jsx)(t.p,{children:"Creating your own fork of a repository on GitHub is actually very easy. On any repository in the top right there is a row of buttons, of which, you guessed it, you'll want to press the 'Fork' button."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(2903).A+"",width:"1626",height:"244"})}),"\n",(0,i.jsx)(t.p,{children:"This will take you to a new screen where you can change the name and description if you like."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(2767).A+"",width:"743",height:"554"})}),"\n",(0,i.jsxs)(t.p,{children:["You'll probably want to leave the checkbox labeled 'Copy the ",(0,i.jsx)(t.code,{children:"master"})," branch only' ticked, but you are doing no harm either way. Unticking it just means that you're also copying over any other branches we may have made that you probably don't need."]}),"\n",(0,i.jsx)(t.p,{children:"Once you've hit that green button then badabing badaboom, you just forked the L4DSR Wiki, and you're ready to make some changes!"}),"\n",(0,i.jsx)(t.h2,{id:"making-your-changes",children:"Making your changes"}),"\n",(0,i.jsxs)(t.p,{children:["I'm gonna show you a little magic trick. Click on the URL bar at the top of your browser. The URL should look something like ",(0,i.jsx)(t.code,{children:"https://github.com/<yourname>/l4dsr-wiki"})," Now, change the ",(0,i.jsx)(t.code,{children:".com"})," to ",(0,i.jsx)(t.code,{children:".dev"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:o(8539).A+"",width:"287",height:"45"})," ",(0,i.jsx)(t.img,{src:o(4869).A+"",width:"281",height:"41"})]}),"\n",(0,i.jsxs)(t.p,{children:["This will open up a fancy text editor, letting you make your changes directly in the browser. All the markdown files that contain the text within the wiki are located in the ",(0,i.jsx)(t.code,{children:"docs"})," directory."]}),"\n",(0,i.jsxs)(t.admonition,{title:"side note",type:"info",children:[(0,i.jsxs)(t.p,{children:["Chances are that files that end with ",(0,i.jsx)(t.code,{children:".mdx"})," won't get any nice color highlighting. You can fix this by opening a file that ends with ",(0,i.jsx)(t.code,{children:".mdx"}),", look in the bottom right where you'll likely find \"Plain Text\" and click on it. This'll open up a command palette at the top where you can change what language the editor should treat this file as.\r\n",(0,i.jsx)(t.img,{src:o(2488).A+"",width:"1022",height:"512"})]}),(0,i.jsxs)(t.p,{children:['Choose "Configure File Association for \'.mdx\'..." and then type in and choose "Markdown".\r\n',(0,i.jsx)(t.img,{src:o(9943).A+"",width:"658",height:"115"})]}),(0,i.jsx)(t.p,{children:"You may need to close and reopen the file to see any change."})]}),"\n",(0,i.jsx)(t.p,{children:"As you're making changes, you'll notice a number appear next to this weird little icon in the left hand side bar. This is the source control tab and lets you use Git directly from within the text editor."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(4354).A+"",width:"49",height:"49"})}),"\n",(0,i.jsx)(t.p,{children:"Clicking on it will change the file browser to show only the files that you have made changes to. You can even click on any file to see a visualization of exactly what you've changed in the file."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(2076).A+"",width:"1832",height:"461"})}),"\n",(0,i.jsxs)(t.admonition,{title:"side note",type:"note",children:[(0,i.jsx)(t.p,{children:'If you want to, you can split your changes into multiple different commits by clicking on the little "+" next to the file name in the list. This will add that file to the "staging area", where the next time you click on the big commit button, it will only commit those files you\'ve chosen and leave all the other files alone.'}),(0,i.jsx)(t.p,{children:"This is not necessary, but can be useful if you're working on multiple things simultaneously and want to keep your commit history neatly organized."})]}),"\n",(0,i.jsx)(t.h2,{id:"submitting-your-changes",children:"Submitting your changes"}),"\n",(0,i.jsx)(t.p,{children:"Submitting your changes is a two-step process."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'Save and record the changes you\'ve made to your own repository (in programmer jargon, "commit" the changes to your "fork").'}),"\n",(0,i.jsx)(t.li,{children:'Create a "Pull Request" from your repository onto the original repository.'}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"committing-to-your-fork",children:"Committing to your fork"}),"\n",(0,i.jsxs)(t.p,{children:['In order to record the changes in your own repository, all you need to do is press the big green "Commit & Push"',(0,i.jsx)(t.sup,{children:(0,i.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," button. You can also add a message to your commit, where you can describe the changes you've made."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(80).A+"",width:"1341",height:"421"})}),"\n",(0,i.jsxs)(t.p,{children:["Once you've done that, you can double check that it actually went through by going to ",(0,i.jsx)(t.code,{children:"github.com/<yourname>/l4dsr-wiki/commits/main"}),", which will show you a history of every commit ever made to the repository, including the ones that were made on the main repository before you created your fork."]}),"\n",(0,i.jsx)(t.h3,{id:"creating-a-pull-request",children:"Creating a Pull Request"}),"\n",(0,i.jsxs)(t.p,{children:["Home stretch! This is the final step in the process. The pull request is now the formal step where you make a ",(0,i.jsx)(t.strong,{children:"request"})," to the maintainer of the main repository to ",(0,i.jsx)(t.strong,{children:"pull"})," the changes you've made on your fork onto the main repository."]}),"\n",(0,i.jsxs)(t.p,{children:["To open a pull request, go to the main page of your repository (",(0,i.jsx)(t.code,{children:"github.com/<yourname>/l4dsr-wiki"}),') and check to see if this bar shows up that reads "This branch is ',(0,i.jsx)(t.code,{children:"xyz"})," commit(s) ahead of l4dsr",":master","\". If you don't see this, that means that you haven't made a commit to your own repository yet."]}),"\n",(0,i.jsx)(t.p,{children:'Click on the dropdown labeled "Contribute" and then on "Open pull request".'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(3089).A+"",width:"1270",height:"449"})}),"\n",(0,i.jsx)(t.p,{children:"This will take you to the final page, where you can edit the title of the pull request or add extra comments if you'd like. Then all that's left is to click the big green button labeled \"Create pull request\""}),"\n",(0,i.jsx)(t.p,{children:"The main repository will do some automatic checks to see if the site will compile properly. If any checks fail, that's usually a skill issue on my end, so you don't need to worry that you actually broke something."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Congratulations!"}),' You just submitted your changes to the wiki! Now you can sit back, scroll back to the top and wonder how I can justify calling this the "shrimple way" when there is so much goddamn text like what the hell i just want to edit some text on a goddamn wiki']}),"\n",(0,i.jsx)(t.h2,{id:"syncing-your-repo-once-changes-are-merged",children:"Syncing your repo once changes are merged"}),"\n",(0,i.jsx)(t.p,{children:"So, once your pull request is merged, your repo will fall out of sync with the main repo."}),"\n",(0,i.jsx)(t.p,{children:"For example, it'll say something like this:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(5397).A+"",width:"932",height:"284"})}),"\n",(0,i.jsx)(t.p,{children:"There are a variety of ways to resolve this, but it's simplest to do this through GitHub."}),"\n",(0,i.jsxs)(t.p,{children:["First, click the dropdown. You now have two choices. In most cases, assuming everything you have on the branch has been merged into the main repo, it is preferred (and safe) to click ",(0,i.jsx)(t.code,{children:"Discard x commit(s)"}),". If you have work you want to preserve, you should click ",(0,i.jsx)(t.code,{children:"Update branch"})," instead."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(2805).A+"",width:"264",height:"408"})}),"\n",(0,i.jsxs)(t.p,{children:["The reason that ",(0,i.jsx)(t.code,{children:"Discard x commit(s)"})," is preferred is that it avoids creating ugly merge commits that ultimately serve no logical purpose for a fork."]}),"\n",(0,i.jsx)(t.admonition,{title:"todo",type:"caution",children:(0,i.jsx)(t.p,{children:"explain how to work in branches (should probably put this under the making your changes section idk)"})}),"\n","\n",(0,i.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(t.p,{children:["The reason it's labeled as doing 2 things is because Git usually gives you a lot of optional intermediary steps before you actually record your changes to your repository. It usually goes from your local changes -> Staging area -> Commit -> Push. For our purposes though, we don't need 15 billion different steps to double check that our changes didn't break anything. ",(0,i.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},80:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/ghcommithist-2cff3d78cb7bdc2c051b3a07f758952e.jpg"},2767:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/ghconfirmfork-32d7eb8bbcb13eae0c96385b358ed85f.jpg"},2903:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/ghfork-8d216258e56c0942d95a4fe219272ccf.jpg"},3089:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/ghopenpr-786af7c1552e0cb0a93bc27dd44cfb8a.jpg"},5397:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/ghoutofsync-dd7f0c184352c55ac0af937d565553d3.jpg"},2805:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/ghsyncfork-984cd5bcd9bc9808ef8aa70b498af327.jpg"},8539:(e,t,o)=>{o.d(t,{A:()=>i});const i="data:image/jpeg;base64,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"},4869:(e,t,o)=>{o.d(t,{A:()=>i});const i="data:image/jpeg;base64,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"},2488:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/mdxlang1-12e86d42b5181e28d72f35d87e48e4e9.jpg"},9943:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/mdxlang2-80d69d16bc33cb79eaecb2ab2a24245f.jpg"},4354:(e,t,o)=>{o.d(t,{A:()=>i});const i="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAxADEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD81KKKvaJpUmu61YabCypNeTx26M/3QzMFBPtzXYk5OyMW7K7KNFeo6z8P/Cc9p4ktNBvtXOteHonmuW1COMW9ysbiOTywvzIcnIDE5HFebQWFzdQzTQ2800UIzLJGhZUHqxHT8akZXq7ov/IYsP8ArvH/AOhCqVXdF/5DFh/13j/9CFMRyVFFFQM6CnwzPbypLG7RyIwZXU4Kkcgg+tMq7oukz69rFjpttt+0Xk6W8e84G52CjJ9MmtI3bSW4na2p6d8RPGmq3vw48LyvJBHPr0U8mqTwW0cUl4YpysfmOqgtgAd+eprrPhv/AGtrXhjwpP4W8QR6LpuiuRrVk29TLI0hYsVVSJ98fAXnGMU6TxDBofgy60DwfqEcmveEI5nur6+0qJvtEXnfvRAzl9oVn5BUFsDB4r2HwvYy6pLpljquqwW0jhY57+aEiNWxyxSFD1PZV9PrX1mQZL/bNap7/LCGrdr73skuuz+4+fzbMlltKLcbuV1b7r+nT7z4z8c24h8WarJFp0+l2c11LLbW1xCYmSIuSo2npgYrO0X/AJDFh/13j/8AQhX2j8aPhjZyX/iLwrcut6+n3U1tBeGPY3mIxVZAMnbnHIyeDjmvi7Rf+QxYf9d4/wD0IVjnmR/2NKnyT56c1eLtZ6W3XzRvl2Zf2gqinHlnB2a3X9aM5KiiivlT2joKltbqWxuobi3kaGeFxJHIhwVYHII9waioq9tUI7vxD8YdW8QaXe2Z07SNOl1DH2++0+zEVxeAEHEjZPBYAnaBk1698NfjVpGpaXaRareQ6dqlsFVzcttjl29HDHjnHIJHNfM1Fe/k+dYjJa0qtBJqWjT2fb0t0PKzDLaOZUlTq6W2a/rqfVHxq/aE0/UrrW9Rs7q1vdc1aaWYrYEmCFpCSzbsngZOBknpn1r5k0X/AJDFh/13j/8AQhVKrui/8hiw/wCu8f8A6EKnNs4r5vUjKqlGMVaKWyRWBwFPAxkoNtyd23uzkqKKK+fPUOgoooqwCiiigAq7ov8AyGLD/rvH/wChCiigRyVFFFQM/9k="},2076:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/vscsourcecontrol-742c642609120eb884b936b058224b38.jpg"},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var i=o(6540);const n={},s=i.createContext(n);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);