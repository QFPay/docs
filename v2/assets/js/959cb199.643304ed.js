"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[3184],{2812:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var t=i(74848),r=i(28453),s=i(28774);const a={},d="App call App Android SDK",c={id:"in-store/pos-api/app-call-app",title:"App call App Android SDK",description:"Introduction",source:"@site/docs/02-in-store/04-pos-api/01-app-call-app.md",sourceDirName:"02-in-store/04-pos-api",slug:"/in-store/pos-api/app-call-app",permalink:"/docs/v2/docs/in-store/pos-api/app-call-app",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"ECR integration technical specification",permalink:"/docs/v2/docs/in-store/pos-api/ECR"},next:{title:"Online Shop",permalink:"/docs/v2/docs/category/online-shop"}},l={},h=[{value:"Introduction",id:"introduction",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Add Permissions",id:"add-permissions",level:3},{value:"Add Jar Package Dependency",id:"add-jar-package-dependency",level:3},{value:"Config Target Application Id",id:"config-target-application-id",level:3},{value:"Add Proguard Rule",id:"add-proguard-rule",level:3},{value:"Third-party Interface Invoke Sample",id:"third-party-interface-invoke-sample",level:2},{value:"Collection",id:"collection",level:3},{value:"Refund",id:"refund",level:3},{value:"Query Multiple Transaction",id:"query-multiple-transaction",level:3},{value:"Query Transaction Details",id:"query-transaction-details",level:3},{value:"View Transaction Summary",id:"view-transaction-summary",level:3},{value:"Query Transaction Channel Configuration(Deprecated)",id:"query-transaction-channel-configurationdeprecated",level:3},{value:"Query User Configuration Information",id:"query-user-configuration-information",level:3},{value:"Pre-authorization Transaction Deduction",id:"pre-authorization-transaction-deduction",level:3},{value:"Pre-authorization Transaction Cancel",id:"pre-authorization-transaction-cancel",level:3},{value:"Pre-authorization Transaction List",id:"pre-authorization-transaction-list",level:3},{value:"Pre-authorization Transaction Detail",id:"pre-authorization-transaction-detail",level:3},{value:"Card Refund",id:"card-refund",level:3},{value:"Query Multiple Card Transactions",id:"query-multiple-card-transactions",level:3},{value:"Query Card Transaction Details",id:"query-card-transaction-details",level:3},{value:"Card Adjust",id:"card-adjust",level:3},{value:"Card Settle",id:"card-settle",level:3},{value:"Appendix",id:"appendix",level:2},{value:"Transaction Information Field Description",id:"transaction-information-field-description",level:3},{value:"Channel Information Field Description",id:"channel-information-field-description",level:2},{value:"Transaction Status Field Description",id:"transaction-status-field-description",level:3},{value:"Result Code Description",id:"result-code-description",level:3}];function o(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"app-call-app-android-sdk",children:"App call App Android SDK"}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"HaoJin is a mobile phone software that provides aggregate collection services for merchants. This document describes the interface calls that HaoJin is open to, and third-party applications can implements the collection function through these interfaces.\nHaoJin supports below third-party functions:"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Collection, Refund, Query Multiple Transaction Records, Query Transaction Details."}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"View Transaction Summary, Query Transaction Channel Configuration."}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Sale/Void/Query/Adjust Endpoints for card."}),"\n"]}),"\n",(0,t.jsxs)(s.A,{href:"/img/android/architecture__diagram.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Introduction",src:i(57427).A+"",width:"856",height:"379"})]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,t.jsx)(n.h3,{id:"add-permissions",children:"Add Permissions"}),"\n",(0,t.jsx)(n.p,{children:"Add the following code to the AndroidManifest.xml file.\nNote: In order to ensure that you can get permission, please install the haojin\napplication first."}),"\n",(0,t.jsxs)(s.A,{href:"/img/android/add__permission.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Add Permissions",src:i(19539).A+"",width:"1013",height:"50"})]}),"\n",(0,t.jsx)(n.h3,{id:"add-jar-package-dependency",children:"Add Jar Package Dependency"}),"\n",(0,t.jsx)(n.p,{children:"Integrated the qfpay_haojin_api_xxx.jar file in the third party application."}),"\n",(0,t.jsxs)(s.A,{href:"/img/android/package__dependency.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Add Jar Package Dependency",src:i(49808).A+"",width:"735",height:"71"})]}),"\n",(0,t.jsx)(n.h3,{id:"config-target-application-id",children:"Config Target Application Id"}),"\n",(0,t.jsxs)(s.A,{href:"/img/android/config__appid.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Config Target Application Id",src:i(73079).A+"",width:"994",height:"51"})]}),"\n",(0,t.jsx)(n.h3,{id:"add-proguard-rule",children:"Add Proguard Rule"}),"\n",(0,t.jsx)(n.p,{children:"Add follow code to the proguard-rules.pro file."}),"\n",(0,t.jsxs)(s.A,{href:"/img/android/proguard__rule.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Add Proguard Rule",src:i(31273).A+"",width:"969",height:"101"})]}),"\n",(0,t.jsx)(n.h2,{id:"third-party-interface-invoke-sample",children:"Third-party Interface Invoke Sample"}),"\n",(0,t.jsx)(n.h3,{id:"collection",children:"Collection"}),"\n",(0,t.jsx)(n.p,{children:"Calling a collection request:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/invoke__collection.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Collection",src:i(66815).A+"",width:"1129",height:"903"})]}),"\n",(0,t.jsx)(n.h3,{id:"refund",children:"Refund"}),"\n",(0,t.jsx)(n.p,{children:"Calling a refund request:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/invoke__refund.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Refund",src:i(36861).A+"",width:"1093",height:"151"})]}),"\n",(0,t.jsx)(n.p,{children:"Parse the return value:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/parse__refund.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Refund",src:i(77496).A+"",width:"1125",height:"658"})]}),"\n",(0,t.jsx)(n.h3,{id:"query-multiple-transaction",children:"Query Multiple Transaction"}),"\n",(0,t.jsx)(n.p,{children:"Calling a query request:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/multiple__query.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Query Multiple Transaction",src:i(44635).A+"",width:"1115",height:"402"})]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)("br",{}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Check the supported channels.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.li,{children:["Only support querying of two transaction types (payment, refund)",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.li,{children:["Querying by time period has higher priority than querying by month.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.li,{children:['The time format is "yyyy-MM-dd HH:mm',":ss",'"',(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.li,{children:['The month format is "yyyyMM"',(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.li,{children:["Split page number starts from one.",(0,t.jsx)("br",{})]}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"Parse the return value:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/parse__multiple__query.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Query Multiple Transaction",src:i(6970).A+"",width:"1077",height:"659"})]}),"\n",(0,t.jsx)(n.h3,{id:"query-transaction-details",children:"Query Transaction Details"}),"\n",(0,t.jsx)(n.p,{children:"Calling a query request:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/query__details.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Query Transaction Details",src:i(82157).A+"",width:"1030",height:"91"})]}),"\n",(0,t.jsx)(n.p,{children:"Parse the return value:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/parse__query__details.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Query Transaction Details",src:i(40942).A+"",width:"1113",height:"712"})]}),"\n",(0,t.jsx)(n.h3,{id:"view-transaction-summary",children:"View Transaction Summary"}),"\n",(0,t.jsx)(n.p,{children:"Calling a view transaction summary request:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/view__summary.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"View Transaction Summary",src:i(71798).A+"",width:"1013",height:"91"})]}),"\n",(0,t.jsx)(n.p,{children:"Parse the return value:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/parse__view__summary.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"View Transaction Summary",src:i(10895).A+"",width:"1117",height:"344"})]}),"\n",(0,t.jsx)(n.h3,{id:"query-transaction-channel-configurationdeprecated",children:"Query Transaction Channel Configuration(Deprecated)"}),"\n",(0,t.jsxs)(n.p,{children:["This interface has been marked as deprecated and can be replaced with the GetUserConfig interface. See ",(0,t.jsx)(n.a,{href:"#query-user-configuration-information",children:"Query User Configuration Information"})," for details. ",(0,t.jsx)("br",{}),"\nCalling a Query transaction channel configuration request:"]}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/query__channel__config.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Query Transaction Channel Configuration(Deprecated)",src:i(66446).A+"",width:"1062",height:"100"})]}),"\n",(0,t.jsx)(n.p,{children:"Parse the return value:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/parse__query__channel__config.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Query Transaction Channel Configuration(Deprecated)",src:i(10685).A+"",width:"1115",height:"655"})]}),"\n",(0,t.jsx)(n.h3,{id:"query-user-configuration-information",children:"Query User Configuration Information"}),"\n",(0,t.jsx)(n.p,{children:"Call a query user configuration information request:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/quey__user__info.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Query User Configuration Information",src:i(96492).A+"",width:"952",height:"92"})]}),"\n",(0,t.jsx)(n.p,{children:"Parse the return value:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/parse__query__user__info.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Query User Configuration Information",src:i(5989).A+"",width:"1006",height:"456"})]}),"\n",(0,t.jsx)(n.h3,{id:"pre-authorization-transaction-deduction",children:"Pre-authorization Transaction Deduction"}),"\n",(0,t.jsx)(n.p,{children:"Call a pre-authorization transaction deduction request:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/pre-aut__deduct.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Pre-authorization Transaction Deduction",src:i(48576).A+"",width:"990",height:"247"})]}),"\n",(0,t.jsx)(n.p,{children:"Parse the return value:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/parse__pre-aut__deduct.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Pre-authorization Transaction Deduction",src:i(18653).A+"",width:"1001",height:"513"})]}),"\n",(0,t.jsx)(n.h3,{id:"pre-authorization-transaction-cancel",children:"Pre-authorization Transaction Cancel"}),"\n",(0,t.jsx)(n.p,{children:"Call pre-authorization transaction cancel request:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/pre-aut__cancel.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Pre-authorization Transaction Cancel",src:i(1487).A+"",width:"993",height:"251"})]}),"\n",(0,t.jsx)(n.p,{children:"Parse the return value:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/parse__pre-aut__cancel.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Pre-authorization Transaction Cancel",src:i(13666).A+"",width:"996",height:"504"})]}),"\n",(0,t.jsx)(n.h3,{id:"pre-authorization-transaction-list",children:"Pre-authorization Transaction List"}),"\n",(0,t.jsx)(n.p,{children:"Call pre-authorization transaction list request:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/pre-aut__list.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Pre-authorization Transaction List",src:i(13045).A+"",width:"1010",height:"360"})]}),"\n",(0,t.jsx)(n.p,{children:"Parse the return value:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/parse__pre-aut__list.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Pre-authorization Transaction List",src:i(25352).A+"",width:"1003",height:"454"})]}),"\n",(0,t.jsx)(n.h3,{id:"pre-authorization-transaction-detail",children:"Pre-authorization Transaction Detail"}),"\n",(0,t.jsx)(n.p,{children:"Call pre-authorization transaction detail request:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/pre-aut__detail.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Pre-authorization Transaction Detail",src:i(85686).A+"",width:"992",height:"301"})]}),"\n",(0,t.jsx)(n.p,{children:"Parse the return value:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/parse__pre-aut__detail.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Pre-authorization Transaction Detail",src:i(93599).A+"",width:"1004",height:"449"})]}),"\n",(0,t.jsx)(n.h3,{id:"card-refund",children:"Card Refund"}),"\n",(0,t.jsx)(n.p,{children:"Calling a refund request:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/card__refund.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Card Refund",src:i(24415).A+"",width:"1117",height:"189"})]}),"\n",(0,t.jsx)(n.p,{children:"Parse the return value:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/parse__card__refund.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Card Refund",src:i(87088).A+"",width:"1116",height:"656"})]}),"\n",(0,t.jsx)(n.h3,{id:"query-multiple-card-transactions",children:"Query Multiple Card Transactions"}),"\n",(0,t.jsx)(n.p,{children:"Calling a query request:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/multiple__card__query.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Query Multiple Card Transactions",src:i(9879).A+"",width:"1069",height:"96"})]}),"\n",(0,t.jsx)(n.p,{children:"Parse the return value:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/parse__multiple__card__query.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Query Multiple Card Transactions",src:i(94602).A+"",width:"1003",height:"763"})]}),"\n",(0,t.jsx)(n.h3,{id:"query-card-transaction-details",children:"Query Card Transaction Details"}),"\n",(0,t.jsx)(n.p,{children:"Calling a query request:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/query__card__details.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Query Card Transaction Details",src:i(67193).A+"",width:"994",height:"100"})]}),"\n",(0,t.jsx)(n.p,{children:"Parse the return value:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/parse__query__card__details.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Query Card Transaction Details",src:i(82750).A+"",width:"1005",height:"352"})]}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/parse__query__card__details2.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Query Card Transaction Details",src:i(20110).A+"",width:"1008",height:"356"})]}),"\n",(0,t.jsx)(n.h3,{id:"card-adjust",children:"Card Adjust"}),"\n",(0,t.jsx)(n.p,{children:"Calling an adjust request:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/card__adjust.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Card Adjust",src:i(86276).A+"",width:"1000",height:"201"})]}),"\n",(0,t.jsx)(n.p,{children:"Parse the return value:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/parse__card__adjust.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Card Adjust",src:i(4479).A+"",width:"1007",height:"713"})]}),"\n",(0,t.jsx)(n.h3,{id:"card-settle",children:"Card Settle"}),"\n",(0,t.jsx)(n.p,{children:"Calling a settle request:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/card__settle.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Card Settle",src:i(90560).A+"",width:"981",height:"200"})]}),"\n",(0,t.jsx)(n.p,{children:"Parse the return value:"}),"\n",(0,t.jsxs)(s.A,{href:"@site/static/img/android/parse__card__settle.png",target:"_blank",children:[" ",(0,t.jsx)(n.img,{alt:"Card Settle",src:i(18983).A+"",width:"1006",height:"555"})]}),"\n",(0,t.jsx)(n.h2,{id:"appendix",children:"Appendix"}),"\n",(0,t.jsx)(n.h3,{id:"transaction-information-field-description",children:"Transaction Information Field Description"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"M/O"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"id"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"M"}),(0,t.jsx)(n.td,{children:"Transaction idendity number"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"amt"}),(0,t.jsx)(n.td,{children:"Long"}),(0,t.jsx)(n.td,{children:"M"}),(0,t.jsx)(n.td,{children:"Transaction Amount"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"time"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"M"}),(0,t.jsxs)(n.td,{children:["Transaction time yyy-MM-dd HH:mm",":ss"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"channel"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"M"}),(0,t.jsx)(n.td,{children:"Transaction channel like weixin, alipay"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"status"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"M"}),(0,t.jsx)(n.td,{children:"Transaction status"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"M"}),(0,t.jsx)(n.td,{children:"Transaction type, payment or refund"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"originId"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"Original transaction id, mandatory if the transaction is refund"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mchntName"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"M"}),(0,t.jsx)(n.td,{children:"Sore name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"remarks"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"Transaction remarks"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"confirmCode"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"Transaction confirmation code"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"operatorAccount"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"M"}),(0,t.jsx)(n.td,{children:"Operator name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"appCode"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"Application code (swipe card)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"customerId"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"Idendity of customer wallet (pre-authorization)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"customerAccount"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"Account of customer wallet (pre-authorization)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"completeTransId"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsx)(n.td,{children:"Newly generated transaction id when the pre-authorization transaction is completed (pre-authorization)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"completeTime"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"O"}),(0,t.jsxs)(n.td,{children:["Complete time when the pre-authorization transaction is completed yyyy-MM-dd HH:mm",":ss"," (pre-authorization)"]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"channel-information-field-description",children:"Channel Information Field Description"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"M/O"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"M"}),(0,t.jsx)(n.td,{children:"Channel name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"desc"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"M"}),(0,t.jsx)(n.td,{children:"Channel description"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"transaction-status-field-description",children:"Transaction Status Field Description"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Transaction Status"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Normal transaction"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-1/-2"}),(0,t.jsx)(n.td,{children:"Waiting for payment"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-3"}),(0,t.jsx)(n.td,{children:"Failed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Reversal"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Void"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"Refund"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"Partial Refund"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"Pre-authorization Frozen"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"Pre-authorization Unfrozen"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"7"}),(0,t.jsx)(n.td,{children:"Pre-authorization Completed"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"result-code-description",children:"Result Code Description"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Result Code"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"-1"}),(0,t.jsx)(n.td,{children:"Unknown error"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Success"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"100"}),(0,t.jsx)(n.td,{children:"Client error"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"101"}),(0,t.jsx)(n.td,{children:"Amount error"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"102"}),(0,t.jsx)(n.td,{children:"AppId is empty"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"103"}),(0,t.jsx)(n.td,{children:"Order id is empty"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"104"}),(0,t.jsx)(n.td,{children:"Other parameter is empty"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"105"}),(0,t.jsx)(n.td,{children:"User cancel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"106"}),(0,t.jsx)(n.td,{children:"Network error"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"107"}),(0,t.jsx)(n.td,{children:"User not logged in"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"108"}),(0,t.jsx)(n.td,{children:"Application not installed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"109"}),(0,t.jsx)(n.td,{children:"Launch App failed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"110"}),(0,t.jsx)(n.td,{children:"Non-support API invoke"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"111"}),(0,t.jsx)(n.td,{children:"Time period error"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"112"}),(0,t.jsx)(n.td,{children:"Cross-month query not allowed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"113"}),(0,t.jsx)(n.td,{children:"Failed to get config info"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"114"}),(0,t.jsx)(n.td,{children:"Card adjust failed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"115"}),(0,t.jsx)(n.td,{children:"Device does not support card swiping"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"116"}),(0,t.jsx)(n.td,{children:"Password input error"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"200"}),(0,t.jsx)(n.td,{children:"Server error"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"201"}),(0,t.jsx)(n.td,{children:"Order id does not exist"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"202"}),(0,t.jsx)(n.td,{children:"Transaction Failed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"203"}),(0,t.jsx)(n.td,{children:"Insufficient account balance"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"204"}),(0,t.jsx)(n.td,{children:"Transaction is confirming"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"205"}),(0,t.jsx)(n.td,{children:"Login status expired"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"206"}),(0,t.jsx)(n.td,{children:"Refund is confirming"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"207"}),(0,t.jsx)(n.td,{children:"Refund Failed"})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},19539:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/add__permission-9881c9d1b6c9c27ec83ce8c736219606.png"},57427:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/architecture__diagram-36d1c22ea0bf6adf51603315e43fe8a5.png"},86276:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/card__adjust-b56e2fa7a7363e43312d8d2848cb8607.png"},24415:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/card__refund-9248695f74d7df4e508247ee7d9657f4.png"},90560:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/card__settle-c9e8fd2d149a7dd73c75c808920cde4c.png"},73079:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/config__appid-facacd84f2d78904b9aa37766b58a6df.png"},66815:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/invoke__collection-d516b11ca2cc85540ad7859f27b28656.png"},36861:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/invoke__refund-4dbae389f4f28a6e70253d6fdc7ec0a2.png"},9879:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/multiple__card__query-b752cc17b2d89b622871722129cc5ca7.png"},44635:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/multiple__query-f4d266cfb77ea1c3e10e2494be6dac7c.png"},49808:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/package__dependency-3c804d7c157f04c94088aa06d79c7c85.png"},4479:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/parse__card__adjust-d201b6ab0ca5b867632cb4524c853a41.png"},87088:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/parse__card__refund-0abf6efff692791927c23eff04b5da48.png"},18983:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/parse__card__settle-c4ed798431b329e19b2f41dd00b1dc0d.png"},94602:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/parse__multiple__card__query-2d96d1eee380b34499e0a064a801791c.png"},6970:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/parse__multiple__query-a5a69f9642de2447d8d81305094ea800.png"},13666:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/parse__pre-aut__cancel-1c5c0d76bb5aea29cec51b92f3a51c73.png"},18653:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/parse__pre-aut__deduct-49475e688931a1c3fe4c3958749e7917.png"},93599:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/parse__pre-aut__detail-385a12d08de2069e54ae152f451800c6.png"},25352:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/parse__pre-aut__list-839175b77836eeda09e323f64801da98.png"},82750:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/parse__query__card__details-4e3559700f2be0d694612e9e971478f7.png"},20110:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/parse__query__card__details2-8cb5273684686b1fd7f6dd4d09f43282.png"},10685:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/parse__query__channel__config-f5e60635aea55de17eff75554dd9e6fa.png"},40942:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/parse__query__details-d32ceced1ae9dc9d786a9e7b4c619827.png"},5989:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/parse__query__user__info-7025f561aa2cce73db3909c5be559c52.png"},77496:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/parse__refund-0a981d435c925d67a0638a0f08be3a85.png"},10895:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/parse__view__summary-7a93758df743a831b3fe8492d08e6e33.png"},1487:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/pre-aut__cancel-aea6643e7338a9c874d734999af43217.png"},48576:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/pre-aut__deduct-7fbf9fa605e1b952ccb2c83b0c02faea.png"},85686:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/pre-aut__detail-d11108bc20cde02c57a26171909acb85.png"},13045:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/pre-aut__list-172a19d7cc57f1ed70e1ba851d2abf3c.png"},31273:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/proguard__rule-1233860018018f1dbf825e72f0158bf1.png"},67193:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/query__card__details-565e3f2c372e2f022b05ae241e0ebc09.png"},66446:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/query__channel__config-4885d4c6c1c146ebf8e4ebbf16680852.png"},82157:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/query__details-25a590fb56618d332d378b63f9bd4526.png"},96492:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/quey__user__info-f8c6d7371020a9ec836fff0609e6ab48.png"},71798:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/view__summary-f824d2ac2b989805c60a0adef2e70d9c.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var t=i(96540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);