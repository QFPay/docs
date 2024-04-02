"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[1581],{53631:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var s=r(74848),t=r(28453);r(11470),r(19365),r(28774);const l={},i="\u7ebf\u4e0a\u9884\u6388\u6743\u652f\u4ed8API",d={id:"online-shop/online-pre-authorisation",title:"\u7ebf\u4e0a\u9884\u6388\u6743\u652f\u4ed8API",description:"- \u7ebf\u4e0a\u9884\u6388\u6743\u652f\u4ed8API",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/03-online-shop/05-online-pre-authorisation.md",sourceDirName:"03-online-shop",slug:"/online-shop/online-pre-authorisation",permalink:"/docs/v2/zh-Hans/docs/online-shop/online-pre-authorisation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"\u94b1\u65b9\u7ed3\u8d26\u9875\u9762\u670d\u52a1",permalink:"/docs/v2/zh-Hans/docs/online-shop/checkout"},next:{title:"\u94b1\u65b9Element SDK",permalink:"/docs/v2/zh-Hans/docs/online-shop/paymentelement"}},c={},a=[{value:"\u5e38\u7528API",id:"\u5e38\u7528api",level:2},{value:"Creating and capturing payments",id:"creating-and-capturing-payments",level:2},{value:"\u7b2c\u4e00\u6b65: \u5275\u5efa\u9884\u6388\u6743\u652f\u4ed8\u8a02\u55ae",id:"\u7b2c\u4e00\u6b65-\u5275\u5efa\u9884\u6388\u6743\u652f\u4ed8\u8a02\u55ae",level:3},{value:"\u7b2c\u4e8c\u6b65: \u9884\u6388\u6743\u652f\u4ed8\u6263\u6b3e",id:"\u7b2c\u4e8c\u6b65-\u9884\u6388\u6743\u652f\u4ed8\u6263\u6b3e",level:3},{value:"\u9884\u6388\u6743 \uff08<code>PRE-AUTHORISED</code>\uff09\u652f\u4ed8\u91d1\u989d\u89e3\u51bb",id:"\u9884\u6388\u6743-pre-authorised\u652f\u4ed8\u91d1\u989d\u89e3\u51bb",level:2},{value:"\u5df2\u6263\u6b3e\u9884\u6388\u6743\u4ea4\u6613 (<code>CAPTURED</code>) \u9000\u6b3e",id:"\u5df2\u6263\u6b3e\u9884\u6388\u6743\u4ea4\u6613-captured-\u9000\u6b3e",level:2},{value:"\u5f02\u6b65\u901a\u77e5",id:"\u5f02\u6b65\u901a\u77e5",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u7ebf\u4e0a\u9884\u6388\u6743\u652f\u4ed8api",children:"\u7ebf\u4e0a\u9884\u6388\u6743\u652f\u4ed8API"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#%E7%BA%BF%E4%B8%8A%E9%A2%84%E6%8E%88%E6%9D%83%E6%94%AF%E4%BB%98api",children:"\u7ebf\u4e0a\u9884\u6388\u6743\u652f\u4ed8API"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#%E5%B8%B8%E7%94%A8api",children:"\u5e38\u7528API"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#creating-and-capturing-payments",children:"Creating and capturing payments"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#%E7%AC%AC%E4%B8%80%E6%AD%A5-%E5%89%B5%E5%BB%BA%E9%A2%84%E6%8E%88%E6%9D%83%E6%94%AF%E4%BB%98%E8%A8%82%E5%96%AE",children:"\u7b2c\u4e00\u6b65: \u5275\u5efa\u9884\u6388\u6743\u652f\u4ed8\u8a02\u55ae"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#%E7%AC%AC%E4%BA%8C%E6%AD%A5-%E9%A2%84%E6%8E%88%E6%9D%83%E6%94%AF%E4%BB%98%E6%89%A3%E6%AC%BE",children:"\u7b2c\u4e8c\u6b65: \u9884\u6388\u6743\u652f\u4ed8\u6263\u6b3e"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"#%E9%A2%84%E6%8E%88%E6%9D%83-pre-authorised%E6%94%AF%E4%BB%98%E9%87%91%E9%A2%9D%E8%A7%A3%E5%86%BB",children:["\u9884\u6388\u6743 \uff08",(0,s.jsx)(n.code,{children:"PRE-AUTHORISED"}),"\uff09\u652f\u4ed8\u91d1\u989d\u89e3\u51bb"]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"#%E5%B7%B2%E6%89%A3%E6%AC%BE%E9%A2%84%E6%8E%88%E6%9D%83%E4%BA%A4%E6%98%93-captured-%E9%80%80%E6%AC%BE",children:["\u5df2\u6263\u6b3e\u9884\u6388\u6743\u4ea4\u6613 (",(0,s.jsx)(n.code,{children:"CAPTURED"}),") \u9000\u6b3e"]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#%E5%BC%82%E6%AD%A5%E9%80%9A%E7%9F%A5",children:"\u5f02\u6b65\u901a\u77e5"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5e38\u7528api",children:"\u5e38\u7528API"}),"\n",(0,s.jsxs)(n.p,{children:["\u5bf9\u63a5\u5f00\u53d1\u73af\u5883\u7684\u5e38\u89c4\u6307\u5f15\u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"../preparation/introduction",children:"https://sdk.qfapi.com/#introduction"})]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u958b\u59cb\u5c0d\u63a5\u524d\uff0c\u5efa\u8b70\u5148\u53c3\u8003\u4ee5\u4e0b\u5167\u5bb9\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"API\u51ed\u636e\uff1a\u5728\u5c0d\u63a5\u8fc7\u7a0b\u4e2d\uff0c\u60a8\u5c06\u9700\u8981\u4f7f\u7528\u76f8\u5e94\u7684API\u51ed\u636e\u6765\u8fdb\u884c\u9a8c\u8bc1\u548c\u6388\u6743\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6d4b\u8bd5\u73af\u5883\uff1a\u4e3a\u4e86\u786e\u4fdd\u987a\u5229\u7684\u5c0d\u63a5\u548c\u5f00\u53d1\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u6d4b\u8bd5\u73af\u5883\uff0c\u4f9b\u60a8\u8fdb\u884c\u6d4b\u8bd5\u548c\u8c03\u8bd5\u3002"}),"\n",(0,s.jsx)(n.li,{children:"API\u8bf7\u6c42\u7b7e\u540d\u751f\u6210\uff1a\u4e3a\u4e86\u786e\u4fdd\u8bf7\u6c42\u7684\u5b89\u5168\u6027\u548c\u5b8c\u6574\u6027\uff0c\u60a8\u9700\u8981\u751f\u6210\u6b63\u786e\u7684API\u8bf7\u6c42\u7b7e\u540d\u3002\u8be6\u7ec6\u7684\u7b7e\u540d\u751f\u6210\u65b9\u6cd5\u5c06\u5728\u6587\u6863\u4e2d\u63d0\u4f9b\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5e38\u89c1\u9519\u8bef\u4ee3\u7801\uff1a\u5728\u5bf9\u63a5\u8fc7\u7a0b\u4e2d\uff0c\u4e86\u89e3\u5e38\u89c1\u7684\u9519\u8bef\u4ee3\u7801\u548c\u5bf9\u5e94\u7684\u542b\u4e49\u5c06\u6709\u52a9\u4e8e\u60a8\u66f4\u597d\u5730\u8bca\u65ad\u548c\u89e3\u51b3\u95ee\u9898\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u4e3a\u9884\u6388\u6743\u652f\u4ed8\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u5e38\u7528API\u63a5\u53e3\u4f9b\u60a8\u53c2\u8003\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../common-api/transaction-enquiry",children:"\u4ea4\u6613\u67e5\u8be2"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../common-api/refunds",children:"\u4ea4\u6613\u9000\u6b3e"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"creating-and-capturing-payments",children:"Creating and capturing payments"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://www.plantuml.com/plantuml/png/XOynJWKX441xJZ6r2HUmCDzu0HihOp61mIM1WSpE57fwTv4biJ0_eHZ8UpouxOgYLelRSYIWslKB8kr1SjVSsBq_V83tJ_0gz6owDSdV51-X2tcSUpn1m33uFzmmNx2hoIc5t-b_z8sJ48s0pN72SAnafG3MPgoEcn8KIWejhOBRhVSc2Xr5CvOhw8WZd8Qxo54xlhOExjU5AcRE_0dSs8VfpVU0M_Aw-dPKhPOV",alt:"Pre-authorisation payment flow"})}),"\n",(0,s.jsx)(n.h3,{id:"\u7b2c\u4e00\u6b65-\u5275\u5efa\u9884\u6388\u6743\u652f\u4ed8\u8a02\u55ae",children:"\u7b2c\u4e00\u6b65: \u5275\u5efa\u9884\u6388\u6743\u652f\u4ed8\u8a02\u55ae"}),"\n",(0,s.jsx)(n.p,{children:"\u9884\u6388\u6743\u6b65\u9aa4\u9700\u8981\u4f7f\u7528\u652f\u4ed8\u5143\u7d20\u7ec4\u4ef6 (Payment Element) \u6765\u5b8c\u6210\u3002\u6709\u5173\u5c0d\u63a5\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003\u652f\u4ed8\u5143\u7d20\u6587\u6863\u4e2d\u76f8\u5e94\u7684\u7ae0\u8282\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u7b2c\u4e8c\u6b65-\u9884\u6388\u6743\u652f\u4ed8\u6263\u6b3e",children:"\u7b2c\u4e8c\u6b65: \u9884\u6388\u6743\u652f\u4ed8\u6263\u6b3e"}),"\n",(0,s.jsx)(n.p,{children:"\u6263\u53d6\u5ba2\u6237\u5728\u9884\u6388\u6743\u4ea4\u6613\u4e2d\u6388\u6743\u7684\u91d1\u989d"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"URL\u4f4d\u5740"})," :   /trade/v1/authtrade"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8bf7\u6c42\u65b9\u6cd5"})," : POST"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"HTTP \u6807\u5934"}),":"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"HTTP \u6807\u5934"}),(0,s.jsx)(n.th,{children:"\u5fc5\u586b"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"X-QF-APPCODE"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{children:"app code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"X-QF-SIGN"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{children:"app key"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})," :"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53c2\u6570"}),(0,s.jsx)(n.th,{children:"\u5fc5\u586b"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"txamt"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{children:"\u6263\u6b3e\u91d1\u989d"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"txcurrcd"}),(0,s.jsx)(n.td,{children:"\u5426"}),(0,s.jsx)(n.td,{children:"\u6263\u6b3e\u5e01\u79cd"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mchid"}),(0,s.jsx)(n.td,{children:"\u5426"}),(0,s.jsx)(n.td,{children:"\u5546\u6237\u7f16\u53f7\uff08\u53ea\u9002\u7528\u4e8e\u4e2a\u522b\u6e20\u9053\u5546\u6237\uff09"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"syssn"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{children:"\u9884\u6388\u6743\u4ea4\u6613\u552f\u4e00\u8ba2\u5355\u53f7"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u56de\u5e94"})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n"sysdtm": "2024-02-26 15:04:12",\n"paydtm": "2024-02-26 15:04:12",\n"udid": "qiantai2",\n"txcurrcd": "HKD",\n"txdtm": "2024-02-26 07:04:11",\n"txamt": "500",\n"resperr": "\u4ea4\u6613\u6210\u529f",\n"respmsg": "Capture received",\n"out_trade_no": "",\n"syssn": "20240226180500020000014116",\n"orig_syssn": "20240226180500020000014079",\n"respcd": "0000",\n"chnlsn": "",\n"cardcd": ""\n}\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"\u9884\u6388\u6743-pre-authorised\u652f\u4ed8\u91d1\u989d\u89e3\u51bb",children:["\u9884\u6388\u6743 \uff08",(0,s.jsx)(n.code,{children:"PRE-AUTHORISED"}),"\uff09\u652f\u4ed8\u91d1\u989d\u89e3\u51bb"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5728\u4ea4\u6613\u4e2d\uff0c\u53ea\u6709\u672a\u6263\u6b3e\u7684\u91d1\u989d\uff08\u9884\u6388\u6743\u91d1\u989d \u51cf\u53bb \u5df2\u6263\u6b3e\u603b\u91d1\u989d\uff09\u53ef\u4ee5\u88ab\u89e3\u9664\u51bb\u7ed3\uff08\u9000\u8fd8\u7ed9\u5ba2\u6237\uff09\u3002\u6b64\u64cd\u4f5c\u53ea\u80fd\u6267\u884c\u4e00\u6b21\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"URL\u4f4d\u5740"})," :   /trade/v1/unfreeze"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8bf7\u6c42\u65b9\u6cd5"})," : POST"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"HTTP \u6807\u5934"}),":"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"HTTP \u6807\u5934"}),(0,s.jsx)(n.th,{children:"\u5fc5\u586b"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"X-QF-APPCODE"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{children:"app code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"X-QF-SIGN"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{children:"app key"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})," :"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53c2\u6570"}),(0,s.jsx)(n.th,{children:"\u5fc5\u586b"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"txamt"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{children:"\u89e3\u51bb\u91d1\u989d"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"txdtm"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{children:"\u89e3\u51bb\u65f6\u95f4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"syssn"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{children:"\u9884\u6388\u6743\u4ea4\u6613\u552f\u4e00\u8ba2\u5355\u53f7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"out_trade_no"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{children:"\u9884\u6388\u6743\u4ea4\u6613\u5546\u6237\u8ba2\u5355\u53f7"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mchid"}),(0,s.jsx)(n.td,{children:"\u5426"}),(0,s.jsx)(n.td,{children:"\u5546\u6237\u7f16\u53f7\uff08\u53ea\u9002\u7528\u4e8e\u4e2a\u522b\u6e20\u9053\u5546\u6237\uff09"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u56de\u5e94"})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n"sysdtm": "2024-02-26 17:17:05",\n"paydtm": "2024-02-26 17:17:06",\n"udid": "qiantai2",\n"txcurrcd": "HKD",\n"txdtm": "2024-02-26 09:17:05",\n"txamt": "2000",\n"resperr": "\u4ea4\u6613\u6210\u529f",\n"respmsg": "Void received",\n"out_trade_no": "",\n"syssn": "20240226180500020000014222",\n"orig_syssn": "20240226180500020000014220",\n"respcd": "0000",\n"chnlsn": "",\n"cardcd": ""\n}\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"\u5df2\u6263\u6b3e\u9884\u6388\u6743\u4ea4\u6613-captured-\u9000\u6b3e",children:["\u5df2\u6263\u6b3e\u9884\u6388\u6743\u4ea4\u6613 (",(0,s.jsx)(n.code,{children:"CAPTURED"}),") \u9000\u6b3e"]}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u5173\u5bf9\u63a5\u8bf7\u53c2\u8003\u6587\u6863\u4e2d\u7684\u300c\u5e38\u7528API\u300d\u90e8\u5206\u3002\u8bf7\u6ce8\u610f\uff0c\u9000\u6b3e\u4ea4\u6613\u4e2d\u4f7f\u7528\u7684\u552f\u4e00\u8ba2\u5355\u53f7\uff08syssn\uff09\u5e94\u4e0e/authtrade\u8bf7\u6c42\u8fd4\u56de\u7684\u8ba2\u5355\u53f7\u5bf9\u5e94\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5f02\u6b65\u901a\u77e5",children:"\u5f02\u6b65\u901a\u77e5"}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u822c\u901a\u77e5\u89c4\u5219\u9002\u7528\u3002\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u8003\u6587\u6863\u4e2d\u7684\u5f02\u6b65\u901a\u77e5\u90e8\u5206 (../common-api/asynchronous-notification)"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u4ee5\u4e0b\u64cd\u4f5c\u6210\u529f\u6267\u884c\u540e\uff0c\u60a8\u5c06\u4f1a\u6536\u5230\u6536\u5230\u901a\u77e5\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u9884\u6388\u6743\u4ea4\u6613\u6263\u6b3e"}),"\n",(0,s.jsx)(n.li,{children:"\u89e3\u51bb\u8d44\u91d1"}),"\n",(0,s.jsx)(n.li,{children:"\u9000\u6b3e"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e9b\u901a\u77e5\u5c06\u91c7\u7528\u4ee5\u4e0b\u76f8\u540c\u7684\u683c\u5f0f\u3002\u5bf9\u4e8e\u4e0d\u540c\u7684\u901a\u77e5\uff0c\u5b57\u6bb5 ",(0,s.jsx)(n.code,{children:"notify_type"})," \u7684\u503c\u5c06\u4e0d\u540c\u3002"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u64cd\u4f5c\uff08\u6210\u529f\uff09"}),(0,s.jsxs)(n.th,{children:[(0,s.jsx)(n.code,{children:"notify_type"})," \u503c"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u9884\u6388\u6743\u4ea4\u6613\u6263\u6b3e"}),(0,s.jsx)(n.td,{children:"payment"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u89e3\u51bb\u8d44\u91d1"}),(0,s.jsx)(n.td,{children:"unfreeze"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u9000\u6b3e"}),(0,s.jsx)(n.td,{children:"refund"})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "status": "1",\n  "pay_type": "800101",\n  "sysdtm": "2020-05-14 12:32:56",\n  "paydtm": "2020-05-14 12:33:56",\n  "goods_name": "",\n  "txcurrcd": "HKD",\n  "txdtm": "2020-05-14 12:32:56",\n  "mchid": "",\n  "txamt": "10",\n  "exchange_rate": "",\n  "chnlsn2": "",\n  "out_trade_no": "YEPE7WTW46NVU30JW5N90H7DHD94N56B",\n  "syssn": "20200514000300020093755455",\n  "cash_fee_type": "",\n  "cancel": "0",\n  "respcd": "0000",\n  "goods_info": "",\n  "cash_fee": "0",\n  "notify_type": "payment",\n  "chnlsn": "",\n  "cardcd": ""\n}\n'})})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var s=r(34164);const t={tabItem:"tabItem_Ymn6"};var l=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>y});var s=r(96540),t=r(34164),l=r(23104),i=r(56347),d=r(205),c=r(57485),a=r(31682),h=r(89466);function o(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return o(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function x(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,l=u(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[a,o]=j({queryString:r,groupId:t}),[p,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,h.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:t}),f=(()=>{const e=a??p;return x({value:e,tabValues:l})?e:null})();(0,d.A)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),m(e)}),[o,m,l]),tabValues:l}}var m=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var E=r(74848);function b(e){let{className:n,block:r,selectedValue:s,selectValue:i,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.a_)(),h=e=>{const n=e.currentTarget,r=c.indexOf(n),t=d[r].value;t!==s&&(a(n),i(t))},o=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,E.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:d.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,E.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:o,onClick:h,...l,className:(0,t.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:t}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,E.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function A(e){const n=p(e);return(0,E.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,E.jsx)(b,{...e,...n}),(0,E.jsx)(g,{...e,...n})]})}function y(e){const n=(0,m.A)();return(0,E.jsx)(A,{...e,children:o(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var s=r(96540);const t={},l=s.createContext(t);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);