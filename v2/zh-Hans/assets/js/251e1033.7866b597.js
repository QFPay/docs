"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[5619],{71702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var r=t(74848),s=t(28453);const d={},i="Payment Element SDK API",c={id:"common-api/payment-intent",title:"Payment Element SDK API",description:"Create payment intent API",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/04-common-api/06-payment-intent.md",sourceDirName:"04-common-api",slug:"/common-api/payment-intent",permalink:"/docs/v2/zh-Hans/docs/common-api/payment-intent",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"\u8ba2\u5355\u5907\u6ce8",permalink:"/docs/v2/zh-Hans/docs/common-api/transaction-note"},next:{title:"\u62a5\u5173API",permalink:"/docs/v2/zh-Hans/docs/customs declaration"}},l={},h=[{value:"Create payment intent API",id:"create-payment-intent-api",level:2},{value:"Create token intent API",id:"create-token-intent-api",level:2}];function x(e){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"payment-element-sdk-api",children:"Payment Element SDK API"}),"\n",(0,r.jsx)(n.h2,{id:"create-payment-intent-api",children:"Create payment intent API"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"url"}),"     :   /payment_element/v1/create_payment_intent"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"method"}),"  :   POST"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"header"}),":"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Header name"}),(0,r.jsx)(n.th,{children:"Must"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"X-QF-APPCODE"}),(0,r.jsx)(n.td,{children:"Y"}),(0,r.jsx)(n.td,{children:"\u5546\u6236code"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"X-QF-SIGN"}),(0,r.jsx)(n.td,{children:"Y"}),(0,r.jsx)(n.td,{children:"\u5546\u6236 key"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"params"}),"  :"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Must"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"txamt"}),(0,r.jsx)(n.td,{children:"Y"}),(0,r.jsx)(n.td,{children:"\u652f\u4ed8\u91d1\u989d\uff0c\u5355\u4f4d\u5206"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"txcurrcd"}),(0,r.jsx)(n.td,{children:"N"}),(0,r.jsx)(n.td,{children:"\u5e01\u79cd e.g. HKD/ CNY (ISO_4217)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pay_type"}),(0,r.jsx)(n.td,{children:"Y"}),(0,r.jsx)(n.td,{children:"\u652f\u4ed8\u7c7b\u578b e.g. WP credit card: 802801"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"out_trade_no"}),(0,r.jsx)(n.td,{children:"Y"}),(0,r.jsx)(n.td,{children:"\u5916\u90e8\u8ba2\u5355\u53f7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mchid"}),(0,r.jsx)(n.td,{children:"N"}),(0,r.jsx)(n.td,{children:"mchid, \u6e20\u9053\u7528"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"return_url"}),(0,r.jsx)(n.td,{children:"N"}),(0,r.jsx)(n.td,{children:"\u652f\u4ed8\u6210\u529f\u8df3\u8f6c\u9875\u9762"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"failed_url"}),(0,r.jsx)(n.td,{children:"N"}),(0,r.jsx)(n.td,{children:"\u652f\u4ed8\u5931\u8d25\u8df3\u8f6c\u9875\u9762"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"notify_url"}),(0,r.jsx)(n.td,{children:"N"}),(0,r.jsx)(n.td,{children:"\u4ea4\u6613\u901a\u77e5\u53d1\u9001\u5730\u5740"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"response"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "respcd": "0000",\n    "txamt": "123",\n    "txcurrcd": "123",\n    "sysdtm": "2022-11-14 16:15:16",\n    "out_trade_no": "501871840",\n    "payment_intent": "38aec7cef8564f309ea2265a454b8ca5",\n    "intent_expiry": "2022-11-15 12:34:34"\n}\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"create-token-intent-api",children:"Create token intent API"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"url"}),"     :   /payment_element/v1/create_token_intent"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"method"}),"  :   POST"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"header"}),":"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Header name"}),(0,r.jsx)(n.th,{children:"Must"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"X-QF-APPCODE"}),(0,r.jsx)(n.td,{children:"Y"}),(0,r.jsx)(n.td,{children:"\u5546\u6236code"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"X-QF-SIGN"}),(0,r.jsx)(n.td,{children:"Y"}),(0,r.jsx)(n.td,{children:"\u5546\u6236 key"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"params"}),"  :"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Must"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mchid"}),(0,r.jsx)(n.td,{children:"N"}),(0,r.jsx)(n.td,{children:"mchid, \u6e20\u9053\u7528"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"customer_id"}),(0,r.jsx)(n.td,{children:"Y"}),(0,r.jsx)(n.td,{children:"\u9867\u5ba2id"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"token_expiry"}),(0,r.jsx)(n.td,{children:"N"}),(0,r.jsx)(n.td,{children:"token\u5230\u671f\u65e5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"token_reason"}),(0,r.jsx)(n.td,{children:"N"}),(0,r.jsx)(n.td,{children:"token \u5efa\u7acb\u539f\u56e0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"token_reference"}),(0,r.jsx)(n.td,{children:"N"}),(0,r.jsx)(n.td,{children:"token \u53c3\u8003"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"notify_url"}),(0,r.jsx)(n.td,{children:"N"}),(0,r.jsx)(n.td,{children:"\u4ea4\u6613\u901a\u77e5\u53d1\u9001\u5730\u5740"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"response"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "respcd": "0000",\n    "sysdtm": "2022-11-14 16:15:16",\n    "token_intent": "38aec7cef8564f309ea2265a454b8ca5",\n    "intent_expiry": "2022-11-15 12:34:34"\n}\n'})})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(96540);const s={},d=r.createContext(s);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);