"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[8440],{71991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var l=n(74848),r=n(28453),s=(n(11470),n(19365),n(28774));const i={},d="\u652f\u4ed8\u5b9d\u9884\u6388\u6743\u6263\u6b3e",c={id:"online-shop/alipay/alipay-pre-authorization",title:"\u652f\u4ed8\u5b9d\u9884\u6388\u6743\u6263\u6b3e",description:"\u8d44\u91d1\u6388\u6743\u51bb\u7ed3",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03-online-shop/07-alipay/03-alipay-pre-authorization.md",sourceDirName:"03-online-shop/07-alipay",slug:"/online-shop/alipay/alipay-pre-authorization",permalink:"/docs/v2/zh/docs/online-shop/alipay/alipay-pre-authorization",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{}},a={},h=[{value:"\u8d44\u91d1\u6388\u6743\u51bb\u7ed3",id:"\u8d44\u91d1\u6388\u6743\u51bb\u7ed3",level:2},{value:"HTTP\u8bf7\u6c42",id:"http\u8bf7\u6c42",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:3},{value:"\u54cd\u5e94\u53c2\u6570",id:"\u54cd\u5e94\u53c2\u6570",level:3},{value:"\u8d44\u91d1\u6388\u6743\u64a4\u9500",id:"\u8d44\u91d1\u6388\u6743\u64a4\u9500",level:2},{value:"HTTP\u8bf7\u6c42",id:"http\u8bf7\u6c42-1",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570-1",level:2},{value:"\u54cd\u5e94\u53c2\u6570",id:"\u54cd\u5e94\u53c2\u6570-1",level:3},{value:"\u6388\u6743\u51bb\u7ed3\u8f6c\u6263\u6b3e",id:"\u6388\u6743\u51bb\u7ed3\u8f6c\u6263\u6b3e",level:2},{value:"HTTP\u8bf7\u6c42",id:"http\u8bf7\u6c42-2",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570-2",level:3},{value:"Response Parameters",id:"response-parameters",level:3}];function x(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"\u652f\u4ed8\u5b9d\u9884\u6388\u6743\u6263\u6b3e",children:"\u652f\u4ed8\u5b9d\u9884\u6388\u6743\u6263\u6b3e"}),"\n",(0,l.jsx)(t.h2,{id:"\u8d44\u91d1\u6388\u6743\u51bb\u7ed3",children:"\u8d44\u91d1\u6388\u6743\u51bb\u7ed3"}),"\n",(0,l.jsxs)(t.p,{children:["\u652f\u4ed8\u5b9d\u9884\u6388\u6743\u76ee\u524d\u4ec5\u652f\u6301\u8d44\u91d1\u6388\u6743\uff0c\u6682\u4e0d\u652f\u6301\u4fe1\u7528\u6388\u6743\uff1b\u8ba2\u5355\u9ed8\u8ba415\u5206\u949f\u5931\u6548; \u5982\u9047\u5e01\u79cd\u6821\u9a8c\u95ee\u9898\u8bf7\u54a8\u8be2\u6280\u672f\u4eba\u5458\u6216\u53d1\u90ae\u4ef6\u5230",(0,l.jsx)(t.em,{children:(0,l.jsx)(t.a,{href:"mailto:technical.support@qfpay.com",children:"technical.support@qfpay.com"})}),"\u83b7\u53d6\u652f\u6301\uff1b\u5f53\u8d44\u91d1\u6388\u6743\u53d1\u751f\u4e4b\u540e\u4e00\u6bb5\u65f6\u95f4\u5185\uff0c\u7531\u4e8e\u4e70\u5bb6\u6216\u8005\u5546\u5bb6\u7b49\u5176\u4ed6\u539f\u56e0\u9700\u8981\u8981\u89e3\u51bb\u8d44\u91d1\uff0c\u5546\u5bb6\u53ef\u901a\u8fc7\u3010\u8ba2\u5355\u9000\u6b3e\u3011\u5c06\u6388\u6743\u8d44\u91d1\u8fdb\u884c\u89e3\u51bb\uff0c\u6536\u5230\u89e3\u51bb\u8bf7\u6c42\u5e76\u9a8c\u8bc1\u6210\u529f\u540e\uff0c\u51bb\u7ed3\u8d44\u91d1\u6309\u539f\u8def\u8fdb\u884c\u89e3\u51bb. \u6b64\u5916, \u5546\u5bb6\u53ef\u4ee5\u53d1\u8d77\u672c\u5206\u6216\u5168\u90e8\u51bb\u7ed3\u8d44\u91d1\u7684\u8f6c\u8d26, \u4ee5\u4fbf\u6536\u53d6\u672a\u7ed3\u5ba2\u6237\u53d1\u7968\u7684\u8d44\u91d1."]}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsx)(t.p,{children:"\u76ee\u524d\u652f\u4ed8\u5b9d\u9884\u6388\u6743\u6263\u6b3e\u652f\u6301\u5e01\u79cd\uff1aHKD,USD,AUD,NZD,THB,PHP,MYR"})}),"\n",(0,l.jsx)(s.A,{to:"/img/alipay_preauth_process.jpg",target:"_blank",children:(0,l.jsx)(t.img,{alt:"Alipay Pre-Auth process-flow",src:n(18669).A+"",width:"935",height:"861"})}),"\n",(0,l.jsx)(t.h3,{id:"http\u8bf7\u6c42",children:"HTTP\u8bf7\u6c42"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"POST ../trade/v1/payment"})," ",(0,l.jsx)("br",{})]}),"\n",(0,l.jsxs)(t.p,{children:["\u4ece\u5982\u4e0b\u8868\u683c\u4e2d\u6839\u636e\u60a8\u7684\u7ed3\u7b97\u573a\u666f\u9009\u62e9 ",(0,l.jsx)(t.code,{children:"pay_type"}),"."]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"\u652f\u4ed8\u7c7b\u578b"}),(0,l.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"801801"}),(0,l.jsx)(t.td,{children:"Alipay Pre-Authorization in-store QRC Payment - Consumer Present Mode (CPM)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"801808"}),(0,l.jsx)(t.td,{children:"Alipay Pre-Authorization in-store QRC Payment - Merchant Present Mode (MPM)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"801810"}),(0,l.jsx)(t.td,{children:"Alipay Pre-Authorization in-APP Payment"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"801814"}),(0,l.jsx)(t.td,{children:"Alipay Pre-Authorization Online Payment"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"\u8bf7\u6c42\u53c2\u6570",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-plaintext",children:"\nRequest Body:\n\n{\n  goods_name=goodcode1&mchid=R1zQrTdJnn&out_trade_no=alipay201909261129164551bcdd40&pay_type=801802&txamt=1&txcurrcd=USD&txdtm=2019-09-26 11:29:16&txzone=+0800\n}\n\n"})}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'{\n  "pay_type": "801802", \n  "sysdtm": "2019-09-26 11:29:18", \n  "paydtm": "2019-09-26 11:29:19", \n  "txdtm": "2019-09-26 11:29:16", \n  "udid": "qiantai2", \n  "txcurrcd": "USD", \n  "txamt": "1", \n  "resperr": "Network busy, don\'t worry, we are fixing it (1297)", \n  "respmsg": "\u9884\u6388\u6743\u53d1\u7801\u53c2\u6570\u5f02\u5e38\u6216\u53c2\u6570\u7f3a\u5931", \n  "out_trade_no": "alipay201909261129164551bcdd40", \n  "syssn": "20190926000200020016004244", \n  "respcd": "1297", \n  "chnlsn": "", \n  "cardcd": ""\n}\n'})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter code"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,l.jsx)(t.th,{children:"Parameter type"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Public payment parameter"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,l.jsx)(t.td,{children:"\u2014"}),(0,l.jsx)(t.td,{children:"\u2014"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Alipay openid"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"openid"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,l.jsx)(t.td,{children:"String(64)"}),(0,l.jsx)(t.td,{children:"Corresponding to the APP authorization method."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Alipay payment code"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"auth_code"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,l.jsx)(t.td,{children:"String(128)"}),(0,l.jsxs)(t.td,{children:["Specifies the authorization code for scanning a barcode/QR Code. The ",(0,l.jsx)(t.code,{children:"auth_code"})," returned is unique in each authorization. Each ",(0,l.jsx)(t.code,{children:"auth_code"})," can only be used once and will automatically expire. For testing CPM with Alipay and WeChat Pay the auth_code can be extracted by any QRC reader or manually found in the consumer wallet below the barcode."]})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"\u54cd\u5e94\u53c2\u6570",children:"\u54cd\u5e94\u53c2\u6570"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter code"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Second parameter code"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter type"}),(0,l.jsx)(t.th,{children:"Parameter name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Public response parameters"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,l.jsx)(t.td,{children:"\u2014"}),(0,l.jsx)(t.td,{children:"\u2014"})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"\u8d44\u91d1\u6388\u6743\u64a4\u9500",children:"\u8d44\u91d1\u6388\u6743\u64a4\u9500"}),"\n",(0,l.jsxs)(t.p,{children:["Only calls ",(0,l.jsx)(t.code,{children:"alipay.fund.auth.operation.cancel"})," when the merchant\u2019s system encounters timeout and has to stop the subsequent processes, or when the pre-auth result is unknown. If you want to perform a similar task for normal pre-auth (freezing) transactions, please call ",(0,l.jsx)(t.code,{children:"alipay.fund.auth.order.unfreeze"}),". After submitting the fund authorization call ",(0,l.jsx)(t.strong,{children:"Order Inquiry"}),", and there is no clear authorization result and then call ",(0,l.jsx)(t.strong,{children:"Fund Authorization Cancellation"}),"."]}),"\n",(0,l.jsx)(t.h3,{id:"http\u8bf7\u6c42-1",children:"HTTP\u8bf7\u6c42"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:"POST ../trade/v1/reversal"})}),"\n",(0,l.jsx)(t.h2,{id:"\u8bf7\u6c42\u53c2\u6570-1",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter code"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,l.jsx)(t.th,{children:"Parameter type"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Merchant ID"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"mchid"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsx)(t.td,{children:"The unique merchant ID is created by QF Pay during the merchant onboarding process."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"QF Pay transaction number"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"syssn"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsx)(t.td,{children:"Multiple entries are separated by English commas"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"External transaction number"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"out_trade_no"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsx)(t.td,{children:"e.g. Developer platform order number"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Transaction amount"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txamt"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,l.jsx)(t.td,{children:"Int"}),(0,l.jsx)(t.td,{children:"Whether to pass this parameter depends on the payment channel, Alipay and WeChat Pay do not need to submit this information"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Transaction request time"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txdtm"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsxs)(t.td,{children:["Format: YYYY-MM-dd hh:mm",":ss"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Unique device id"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"udid"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Time zone"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txzone"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsx)(t.td,{children:"Used to record the local order time. The default is Beijing time GMT+8 (+0800)"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"\u54cd\u5e94\u53c2\u6570-1",children:"\u54cd\u5e94\u53c2\u6570"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter code"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"syssn"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(40)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"QF Pay transaction number"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"orig_syssn"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(40)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"External transaction number"}),(0,l.jsx)(t.td,{children:"Developer platform transaction number"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txdtm"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(20)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Time of the transaction request"}),(0,l.jsxs)(t.td,{children:["Format: YYYY-MM-dd hh:mm",":ss"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txamt"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Int(11)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Order payment amount"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"sysdtm"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(20)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"System trading time"}),(0,l.jsxs)(t.td,{children:["Format: YYYY-MM-dd hh:mm",":ss"," ",(0,l.jsx)("br",{})," This parameter value is used as the cut-off time for settlements."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"respcd"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(4)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Return code"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"respmsg"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(128)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Information description"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"resperr"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(128)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Description error"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"cardcd"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Card number"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txcurrcd"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(3)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Currency"}),(0,l.jsxs)(t.td,{children:["Transaction currency. View the ",(0,l.jsx)(t.a,{href:"../../preparation/paycode#currencies",children:"Currencies"})," table for a complete list of available currencies"]})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-plaintext",children:"\nRequest Body:\n\n{\n  mchid=R1zQrTd***&syssn=20190722000300020081074842\n}\n\n"})}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'{\n  "respmsg": "", \n  "resperr": "\u8bf7\u6c42\u6210\u529f",\n  "respcd": "0000",\n  "syssn": "20190722000302320081074842",\n  "sysdtm": "2019-07-22 15:20:54",\n  "txamt": "10",\n  "txdtm": "2019-07-22 15:20:54",\n  "cardcd": "",\n  "txcurrcd": "HKD",\n  "orig_syssn": "20190722000300020081074842",\n  "respmsg": ""\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"\u6388\u6743\u51bb\u7ed3\u8f6c\u6263\u6b3e",children:"\u6388\u6743\u51bb\u7ed3\u8f6c\u6263\u6b3e"}),"\n",(0,l.jsx)(t.h3,{id:"http\u8bf7\u6c42-2",children:"HTTP\u8bf7\u6c42"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:"POST ../trade/v1/authtrade"})}),"\n",(0,l.jsx)(t.h3,{id:"\u8bf7\u6c42\u53c2\u6570-2",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter code"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Mandatory"}),(0,l.jsx)(t.th,{children:"Parameter type"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Merchant ID"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"mchid"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsx)(t.td,{children:"The unique merchant ID is created by QF Pay during the merchant onboarding process."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"QF Pay transaction number"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"syssn"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsx)(t.td,{children:"Fund authorization number"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"External transaction number"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"out_trade_no"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsx)(t.td,{children:"Developer platform transaction number"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Transaction amount"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txamt"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,l.jsx)(t.td,{children:"int"}),(0,l.jsx)(t.td,{children:"The actual amount of consumption, the maximum deduction amount cannot exceed the fozen funds"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Transaction request time"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txdtm"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsxs)(t.td,{children:["Format: YYYY-MM-DD hh:mm",":ss"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Device ID"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"udid"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsx)(t.td,{children:"Must be unique"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Time zone"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txzone"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsx)(t.td,{children:"Used to record the local order time. The default is Beijing time GMT+8 (+0800)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Redirect URL"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"return_url"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"No"}),(0,l.jsx)(t.td,{children:"String"}),(0,l.jsxs)(t.td,{children:["Redirect to address after successful payment. Mandatory parameter to submit for GrabPay Online. Alipay WAP restricts the ",(0,l.jsx)(t.code,{children:"return_url"})," to maximum 200 characters."]})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter code"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"syssn"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(40)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"QF Pay Transaction number"}),(0,l.jsx)(t.td,{children:"This number is being used when freezing funds, detucting money from the frozen amount as well as unfreezing funds."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"orig_syssn"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(40)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"External transaction number"}),(0,l.jsx)(t.td,{children:"Developer platform transaction number"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txdtm"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(20)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Transaction request time"}),(0,l.jsxs)(t.td,{children:["Format: YYYY-MM-DD hh:mm",":ss"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txamt"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Int(11)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Transaction amount"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"sysdtm"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(20)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"System transaction time"}),(0,l.jsxs)(t.td,{children:["Format: YYYY-MM-DD hh:mm",":ss"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"respcd"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(4)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Return code"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"respmsg"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(128)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Information description"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"resperr"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String(128)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Description error"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"cardcd"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Card number"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"txcurrcd"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Currency"}),(0,l.jsxs)(t.td,{children:["Transaction currency. View the ",(0,l.jsx)(t.a,{href:"../../preparation/paycode#%E6%94%AF%E4%BB%98%E7%B1%BB%E5%9E%8B",children:"Currencies"})," table for a complete list of available currencies"]})]})]})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-plaintext",children:"\nRequest Body:\n\n{\n  mchid=R1zQrTd***&syssn=20190722000300020081074842&out_trade_no=alipay201909271528139576015cbf&txamt=1&txdtm=2019-09-27 15:28:13&txzone=+0800\n}\n\n"})}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'{\n  "respmsg": "", \n  "resperr": "\u8bf7\u6c42\u6210\u529f",\n  "respcd": "0000",\n  "syssn": "20190722000302320081074842",\n  "sysdtm": "2019-07-22 15:20:54",\n  "txamt": "10",\n  "txdtm": "2019-07-22 15:20:54",\n  "cardcd": "",\n  "txcurrcd": "HKD",\n  "orig_syssn": 20190722000300020081074842\n}\n'})})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var l=n(34164);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>v});var l=n(96540),r=n(34164),s=n(23104),i=n(56347),d=n(205),c=n(57485),a=n(31682),h=n(89466);function x(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function o(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return x(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}(n);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function j(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,l.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=o(e),[i,c]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:s}))),[a,x]=u({queryString:n,groupId:r}),[y,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,h.Dv)(n);return[r,(0,l.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),m=(()=>{const e=a??y;return j({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{m&&c(m)}),[m]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!j({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),x(e),f(e)}),[x,f,s]),tabValues:s}}var f=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function p(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,s.a_)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),r=d[n].value;r!==l&&(a(t),i(r))},x=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:d.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>c.push(e),onKeyDown:x,onClick:h,...s,className:(0,r.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function A(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function b(e){const t=y(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,g.jsx)(p,{...e,...t}),(0,g.jsx)(A,{...e,...t})]})}function v(e){const t=(0,f.A)();return(0,g.jsx)(b,{...e,children:x(e.children)},String(t))}},18669:(e,t,n)=>{n.d(t,{A:()=>l});const l=n.p+"assets/images/alipay_preauth_process-7d37b713314f9f9cb3cb9ec527f2c5b5.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var l=n(96540);const r={},s=l.createContext(r);function i(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);