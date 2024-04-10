"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[3503],{91379:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(74848),r=t(28453);const o={},a="FAQs",c={id:"FAQ",title:"FAQs",description:"Q1. In provided test account credentials which one is the partner or the merchant identifier?",source:"@site/docs/06-FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/docs/FAQ",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"Customs Declaration",permalink:"/docs/customs declaration"}},i={},d=[];function l(e){const n={a:"a",blockquote:"blockquote",h1:"h1",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"faqs",children:"FAQs"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q1. In provided test account credentials which one is the partner or the merchant identifier?"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A1. If you're an agent which provides payment services for merchants; X-QF-APPCODE and ClientKey are the partner while MCHID is the merchant identifier.\nIf you're a merchant then X-QF-APPCODE and ClientKey are merchant identifier and MCHID is not provided."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q2. Can I use given (Test/Production) account in another country?"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A2. No. An (Test/Production) account is country specific."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q3. How can I test a transaction?"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A3. Since test environment is a replica of production you can use production wallets to test transactions. If you need any assistance please contact tech support."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Q4. I receive a ",(0,s.jsx)("code",{children:"1143/1145"})," response code, what should I do next?"]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A4. It's advised to keep querying transaction status. If partner/merchant wants to process as binary status (success/fail), can mark the transaction as failed and upon a successful asynchronous notifications can apply for refund at backend."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q5. There is no specific title for the payment method I want to integrate, what should I do?"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["A5. You should use ",(0,s.jsx)(n.a,{href:"./preparation/paycode#api-endpoint-for-payments",children:"Public Payment Parameters"})," and check the special cases in Notes section at the end of the ",(0,s.jsx)(n.a,{href:"./preparation/paycode#payment-codes",children:"Payment Codes"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q6. Can I refund a transaction made n day(s) ago?"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A6.\tOnly if the total transaction of the day is equal or greater than the refund amount you can refund."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q7. Do you transfer funds to our bank account when we test transactions in the sandbox environment?"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A7. There are no settlements possible in the sandbox environment. Please make sure that you refund test transactions immediately after testing."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Q8. Can I use my overseas Alipay wallet to pay?"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A8. No, currently only real-name identified Alipay wallets which belong to Mainland Chinese citizens can be used to conduct cross-border transactions."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(96540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);