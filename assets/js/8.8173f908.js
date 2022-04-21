(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{781:function(t,a,s){t.exports=s.p+"assets/img/01.3a36bf84.png"},782:function(t,a,s){t.exports=s.p+"assets/img/02.61169145.png"},783:function(t,a,s){t.exports=s.p+"assets/img/03.02e514ec.png"},813:function(t,a,s){"use strict";s.r(a);var e=s(74),l=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"本地项目上传gitlab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地项目上传gitlab"}},[t._v("#")]),t._v(" 本地项目上传GitLab")]),t._v(" "),e("blockquote",[e("p",[t._v("创建人：刘崛雄")]),t._v(" "),e("p",[t._v("创建日期：2022.04.20")]),t._v(" "),e("p",[t._v("最近更新日期：2022.04.20")])]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("项目代码上传，通常分两类情况：")]),t._v(" "),e("ul",[e("li",[t._v("情况一：项目在本地从零开发，未commit或者pull过任何Git版本,需要将自己本地的项目上传到GitLab新建的项目中。")]),t._v(" "),e("li",[t._v("情况二：项目是从远端clone到本地进行开发的，需要将该项目更新回远端GitLab项目中")])]),t._v(" "),e("p",[t._v("本操作针对"),e("strong",[t._v("情况一")])]),t._v(" "),e("h2",{attrs:{id:"步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),e("h3",{attrs:{id:"在gitlab上新建git仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在gitlab上新建git仓库"}},[t._v("#")]),t._v(" 在GitLab上新建Git仓库")]),t._v(" "),e("p",[e("img",{attrs:{src:s(781),alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(782),alt:""}})]),t._v(" "),e("p",[t._v("点击创建完成之后，生成空的项目仓库。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(783),alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("至此，GitLab上的步骤告一段落。")])]),t._v(" "),e("h2",{attrs:{id:"建立本地git仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立本地git仓库"}},[t._v("#")]),t._v(" 建立本地Git仓库")]),t._v(" "),e("p",[t._v("在本地项目根目录中执行Gti命令行：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("初始化本地仓库")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init  //初始化本地仓库\n")])])])]),t._v(" "),e("li",[e("p",[t._v("将本地项目的所有文件添加到暂存区")]),t._v(" "),e("p",[t._v("小数点 “"),e("strong",[t._v(".")]),t._v("” 表示添加文件夹下的所有文件；也可以将 “.” 换成具体的文件名")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("   //将本地项目的所有文件添加到暂存区\n")])])])]),t._v(" "),e("li",[e("p",[t._v("将暂存区的文件提交到本地仓库,并添加说明信息")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"说明信息"')]),t._v("   \n")])])]),e("p",[t._v("首次使用git提交代码，需要先配置项目的user.name 和 user.email")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.name “刘某某”\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.email “liuxxx@xx.cn”\n")])])]),e("p",[t._v("若是配置全局，执行")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name “刘某某”\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email “liuxxx@xx.cn”\n")])])])]),t._v(" "),e("li",[e("p",[t._v("查看已配置信息")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("//查看仓库级的 config，命令：\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config –local --l\n//查看全局级的 config，命令：\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config –global --l\n")])])])])]),t._v(" "),e("p",[e("strong",[t._v("至此，本地项目提交到本地仓库完成。")])]),t._v(" "),e("h2",{attrs:{id:"本地仓库代码推送到gitlab远端仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地仓库代码推送到gitlab远端仓库"}},[t._v("#")]),t._v(" 本地仓库代码推送到GitLab远端仓库")]),t._v(" "),e("p",[t._v("本地项目根目录中执行Gti命令行")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("建立本地仓库和远端GitLab仓库的关联关系")]),t._v(" "),e("ul",[e("li",[t._v("执行"),e("code",[t._v("git remote")]),t._v("相关命令行：")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin  https://gitlab*********************.git\n")])])]),e("ul",[e("li",[t._v("若出现错误，例如：fatal:remote origin already exists等，可执行如下命令清除关联关系")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" origin\n")])])]),e("ul",[e("li",[t._v("查看建立的关联关系")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n")])])])]),t._v(" "),e("li",[e("p",[t._v("本地仓库上传到 GitLab 远端仓库")]),t._v(" "),e("ul",[e("li",[t._v("获取远程库与本地同步合并")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull --rebase origin master\n")])])]),e("blockquote",[e("p",[e("font",{attrs:{color:"DF0101"}},[e("strong",[t._v("注意")])]),t._v("：如果远程库"),e("font",{attrs:{color:"DF0101"}},[e("strong",[t._v("不为空")])]),t._v("必须做这一步，否则后面的提交会失败；")],1),t._v(" "),e("p",[e("strong",[t._v("原因")]),t._v("：GitLab中的 README.md 文件不在本地仓库中，可以通过该命令进行代码合并。")])]),t._v(" "),e("ul",[e("li",[t._v("把当前分支 master 推送到远程")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])])]),e("p",[t._v("执行完之后，如果无错误就上传成功了。")])])]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/c74ae40b5127",target:"_blank",rel:"noopener noreferrer"}},[t._v("本地项目代码上传到远端GitLab仓库"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/Fooo/p/13952941.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("本地项目如何上传到gitlab "),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/qq_26383975/article/details/119215405",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用vscode中使用git提交代码到gitLab"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=l.exports}}]);