"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[972],{97068:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var n=l(74848),s=l(28453);l(11470),l(19365),l(28774);const r={},d="\u62a5\u5173API",i={id:"customs declaration",title:"\u62a5\u5173API",description:"\u62a5\u5173 API \u81ea\u52a8\u5c06\u5fae\u4fe1/\u652f\u4ed8\u5b9d\u7684\u652f\u4ed8\u6570\u636e\u53d1\u9001\u7ed9\u6d77\u5173\u4ee5\u7b80\u5316\u6e05\u5173\u6d41\u7a0b, \u4e3a\u8de8\u5883\u7535\u5546\u8282\u7701\u65f6\u95f4.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/05-customs declaration.md",sourceDirName:".",slug:"/customs declaration",permalink:"/zh-Hans/docs/customs declaration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"Payment Element SDK API",permalink:"/zh-Hans/docs/common-api/payment-intent"},next:{title:"FAQs",permalink:"/zh-Hans/docs/FAQ"}},c={},h=[{value:"\u63a8\u9001\u62a5\u5173",id:"\u63a8\u9001\u62a5\u5173",level:2},{value:"HTTP\u8bf7\u6c42",id:"http\u8bf7\u6c42",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570-1",level:3},{value:"\u54cd\u5e94\u53c2\u6570",id:"\u54cd\u5e94\u53c2\u6570",level:3},{value:"\u67e5\u8be2\u62a5\u5173",id:"\u67e5\u8be2\u62a5\u5173",level:2},{value:"HTTP\u8bf7\u6c42",id:"http\u8bf7\u6c42-1",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570-2",level:3},{value:"\u54cd\u5e94\u53c2\u6570",id:"\u54cd\u5e94\u53c2\u6570-1",level:3},{value:"\u91cd\u65b0\u62a5\u5173",id:"\u91cd\u65b0\u62a5\u5173",level:2},{value:"HTTP\u8bf7\u6c42",id:"http\u8bf7\u6c42-2",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570-3",level:3},{value:"\u54cd\u5e94\u53c2\u6570",id:"\u54cd\u5e94\u53c2\u6570-2",level:3}];function x(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u62a5\u5173api",children:"\u62a5\u5173API"}),"\n",(0,n.jsx)(t.p,{children:"\u62a5\u5173 API \u81ea\u52a8\u5c06\u5fae\u4fe1/\u652f\u4ed8\u5b9d\u7684\u652f\u4ed8\u6570\u636e\u53d1\u9001\u7ed9\u6d77\u5173\u4ee5\u7b80\u5316\u6e05\u5173\u6d41\u7a0b, \u4e3a\u8de8\u5883\u7535\u5546\u8282\u7701\u65f6\u95f4."}),"\n",(0,n.jsx)(t.h2,{id:"\u63a8\u9001\u62a5\u5173",children:"\u63a8\u9001\u62a5\u5173"}),"\n",(0,n.jsx)(t.h3,{id:"http\u8bf7\u6c42",children:"HTTP\u8bf7\u6c42"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"POST ../custom/v1/declare"})}),"\n",(0,n.jsx)(t.h3,{id:"\u8bf7\u6c42\u53c2\u6570",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7f16\u7801"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u662f\u5426\u5fc5\u987b"}),(0,n.jsx)(t.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"trade_type"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,n.jsx)(t.td,{children:"String(8)"}),(0,n.jsx)(t.td,{children:"\u5fae\u4fe1\u6216\u652f\u4ed8\u5b9d"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"syssn"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,n.jsx)(t.td,{children:"String(32)"}),(0,n.jsx)(t.td,{children:"QFPay \u4ea4\u6613\u7801"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"customs"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,n.jsx)(t.td,{children:"String(20)"}),(0,n.jsx)(t.td,{children:"\u7533\u62a5\u7684\u76ee\u6807\u6d77\u5173 \u793a\u4f8b\uff1aSHANGHAI_ZS"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"mch_customs_no"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,n.jsx)(t.td,{children:"String(20)"}),(0,n.jsx)(t.td,{children:"\u5546\u6237\u7684\u6d77\u5173\u6ce8\u518c\u7801"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"action_type"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsx)(t.td,{children:"String(256)"}),(0,n.jsxs)(t.td,{children:["\u7533\u62a5\u7c7b\u578b. \u53ea\u6709\u5728 ",(0,n.jsx)(t.code,{children:"trade_type"})," \u662f ",(0,n.jsx)(t.code,{children:"wechat"}),' \u65f6\u751f\u6548. "ADD" - \u65b0\u7533\u8bf7, "MODIFY" - \u7f16\u8f91\u5df2\u7533\u8bf7\u7684\u62a5\u5173']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"mch_customs_name"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsx)(t.td,{children:"String(256)"}),(0,n.jsxs)(t.td,{children:["\u5546\u6237\u5728\u6d77\u5173\u767b\u8bb0\u7684\u540d\u79f0. \u5728 ",(0,n.jsx)(t.code,{children:"trade_type"})," \u662f ",(0,n.jsx)(t.code,{children:"alipay"})," \u65f6\u5fc5\u987b\u63d0\u4ea4 \u793a\u4f8b: jwyhanguo_card"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"out_request_no"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsx)(t.td,{children:"String(32)"}),(0,n.jsxs)(t.td,{children:["\u5546\u6237\u8ba2\u5355\u53f7\u7801, \u5728",(0,n.jsx)(t.code,{children:"trade_type"}),"\u662f ",(0,n.jsx)(t.code,{children:"alipay"})," \u65f6\u5fc5\u987b\u63d0\u4ea4. \u793a\u4f8b: 15725904083420588032"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"amount"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsx)(t.td,{children:"String(20)"}),(0,n.jsxs)(t.td,{children:["\u7533\u62a5\u91d1\u989d. \u53ea\u6709\u5728 ",(0,n.jsx)(t.code,{children:"trade_type"})," \u662f ",(0,n.jsx)(t.code,{children:"alipay"})," \u65f6\u5fc5\u987b\u63d0\u4ea4. \u793a\u4f8b: 2.00"]})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["\u5982\u679c\u62c6\u5206\u6216\u7f16\u8f91\u7533\u8bf7, \u9700\u8981\u4fee\u6539\u5982\u4e0b\u5b57\u6bb5: ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(t.h3,{id:"\u8bf7\u6c42\u53c2\u6570-1",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7f16\u7801"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u662f\u5426\u5fc5\u987b"}),(0,n.jsx)(t.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"sub_order_no"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C"}),(0,n.jsx)(t.td,{children:"String(64)"}),(0,n.jsx)(t.td,{children:"\u5546\u6237\u5b50\u8ba2\u5355\u53f7\u7801, \u5982\u679c\u662f\u4e00\u4e2a\u62c6\u5206\u8bf7\u6c42\u5219\u5fc5\u987b\u63d0\u4ea4. \u793a\u4f8b\uff1a1111960490"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"fee_type"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C"}),(0,n.jsx)(t.td,{children:"String(8)"}),(0,n.jsxs)(t.td,{children:["\u8d27\u5e01. \u5728 ",(0,n.jsx)(t.code,{children:"trade_type"})," \u662f ",(0,n.jsx)(t.code,{children:"wechat"})," \u65f6\u5fc5\u987b\u63d0\u4ea4, \u53ea\u80fd\u662fCNY"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"order_fee"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C"}),(0,n.jsx)(t.td,{children:"String(8)"}),(0,n.jsx)(t.td,{children:"\u5b50\u8ba2\u5355\u7684\u91d1\u989d (\u4ee5 0.01 CNY\u4e3a\u5355\u4f4d). \u4e0d\u80fd\u8d85\u8fc7\u539f\u8ba2\u5355\u91d1\u989d, \u8ba2\u5355\u8d39\u7528=\u8fd0\u8f93\u8d39\u7528 + \u4ea7\u54c1\u8d39\u7528. \u82e5\u6709\u62c6\u5206\u8ba2\u5355\u5219\u9700\u8981\u586b\u5199 \u793a\u4f8b: 888"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"product_fee"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C"}),(0,n.jsx)(t.td,{children:"String(8)"}),(0,n.jsx)(t.td,{children:"\u4ea7\u54c1\u4ef7\u683c (\u4ee5 0.01 CNY\u4e3a\u5355\u4f4d). \u82e5\u6709\u62c6\u5206\u8ba2\u5355\u5219\u9700\u8981\u586b\u5199 \u793a\u4f8b: 888"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"transport_fee"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"C"}),(0,n.jsx)(t.td,{children:"String(8)"}),(0,n.jsx)(t.td,{children:"\u7269\u6d41\u8d39 (\u4ee5 0.01 CNY\u4e3a\u5355\u4f4d). \u82e5\u6709\u62c6\u5206\u8ba2\u5355\u5219\u9700\u8981\u586b\u5199 \u793a\u4f8b: 888"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"\u54cd\u5e94\u53c2\u6570",children:"\u54cd\u5e94\u53c2\u6570"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7f16\u7801"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u662f\u5426\u5fc5\u987b"}),(0,n.jsx)(t.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"syssn"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{children:"String(40)"}),(0,n.jsx)(t.td,{children:"QFPay \u4ea4\u6613\u8ba2\u5355\u53f7"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"respcd"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{children:"String(4)"}),(0,n.jsxs)(t.td,{children:["0000 = \u7533\u62a5\u6210\u529f. ",(0,n.jsx)("br",{})," 1143/1145 = \u5546\u6237\u9700\u8981\u6301\u7eed\u67e5\u8be2\u4ea4\u6613\u7ed3\u679c ",(0,n.jsx)("br",{})," \u6240\u6709\u5176\u4ed6\u7684\u8fd4\u56de\u7801\u8868\u660e\u4ea4\u6613\u5931\u8d25.\u8bf7\u53c2\u9605 ",(0,n.jsx)(t.a,{href:"./preparation/paycode#%E4%BA%A4%E6%98%93%E7%8A%B6%E6%80%81%E7%A0%81",children:"\u652f\u4ed8\u72b6\u6001\u7801"})," \u83b7\u5f97\u5b8c\u6574\u8fd4\u56de\u7c7b\u578b\u5217\u8868"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"resperr"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{children:"String(128)"}),(0,n.jsx)(t.td,{children:"\u4fe1\u606f\u63cf\u8ff0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"respmsg"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{children:"String(128)"}),(0,n.jsx)(t.td,{children:"\u5176\u4ed6\u4fe1\u606f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"verify_department"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u8ba4\u8bc1\u673a\u6784"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"verify_department_trade_id"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"\u8ba4\u8bc1\u673a\u6784\u7684\u4ea4\u6613\u53f7"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\u67e5\u8be2\u62a5\u5173",children:"\u67e5\u8be2\u62a5\u5173"}),"\n",(0,n.jsx)(t.p,{children:"\u5546\u6237\u901a\u8fc7QFPay \u4ea4\u6613\u8ba2\u5355\u53f7\u67e5\u8be2\u7533\u62a5\u72b6\u6001"}),"\n",(0,n.jsx)(t.h3,{id:"http\u8bf7\u6c42-1",children:"HTTP\u8bf7\u6c42"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"POST/GET ../custom/v1/query"})}),"\n",(0,n.jsx)(t.h3,{id:"\u8bf7\u6c42\u53c2\u6570-2",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7f16\u7801"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u662f\u5426\u5fc5\u987b"}),(0,n.jsx)(t.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"trade_type"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,n.jsx)(t.td,{children:"String(8)"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"weixin"})," \u6216\u8005 ",(0,n.jsx)(t.code,{children:"alipay"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"customs"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,n.jsx)(t.td,{children:"String(20)"}),(0,n.jsx)(t.td,{children:"\u7533\u62a5\u7684\u76ee\u6807\u6d77\u5173 \u793a\u4f8b\uff1aSHANGHAI_ZS"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"syssn"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,n.jsx)(t.td,{children:"String(32)"}),(0,n.jsx)(t.td,{children:"QFPay \u4ea4\u6613\u8ba2\u5355\u53f7"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"sub_order_no"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsx)(t.td,{children:"String(40)"}),(0,n.jsx)(t.td,{children:"\u5546\u6237\u5b50\u8ba2\u5355\u53f7\u7801, \u5982\u679c\u662f\u4e00\u4e2a\u62c6\u5206\u8bf7\u6c42\u5219\u5fc5\u987b\u63d0\u4ea4. \u793a\u4f8b\uff1a1111960490"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"\u54cd\u5e94\u53c2\u6570-1",children:"\u54cd\u5e94\u53c2\u6570"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7f16\u7801"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u662f\u5426\u5fc5\u987b"}),(0,n.jsx)(t.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"syssn"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{children:"String(40)"}),(0,n.jsx)(t.td,{children:"QFPay \u4ea4\u6613\u8ba2\u5355\u53f7"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"respcd"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{children:"String(4)"}),(0,n.jsxs)(t.td,{children:["0000 = \u7533\u62a5\u6210\u529f. ",(0,n.jsx)("br",{})," 1143/1145 = \u5546\u6237\u9700\u8981\u6301\u7eed\u67e5\u8be2\u4ea4\u6613\u7ed3\u679c ",(0,n.jsx)("br",{})," \u6240\u6709\u5176\u4ed6\u7684\u8fd4\u56de\u7801\u8868\u660e\u4ea4\u6613\u5931\u8d25.\u8bf7\u53c2\u9605 ",(0,n.jsx)(t.a,{href:"./preparation/paycode#%E4%BA%A4%E6%98%93%E7%8A%B6%E6%80%81%E7%A0%81",children:"\u652f\u4ed8\u72b6\u6001\u7801"})," \u83b7\u5f97\u5b8c\u6574\u8fd4\u56de\u7c7b\u578b\u5217\u8868"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"resperr"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{children:"String(128)"}),(0,n.jsx)(t.td,{children:"\u4fe1\u606f\u63cf\u8ff0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"respmsg"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{children:"String(128)"}),(0,n.jsx)(t.td,{children:"\u5176\u4ed6\u4fe1\u606f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"data"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:'\u6d77\u5173\u7533\u62a5\u8be6\u60c5 [{"resperr" : "", "errmsg" : null, "sub_order_no" : "15752730835729139712", "verify_department" : "OTHERS", "verify_department_trade_id" : "4200000459201911265585026208"}]'})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\u91cd\u65b0\u62a5\u5173",children:"\u91cd\u65b0\u62a5\u5173"}),"\n",(0,n.jsx)(t.p,{children:"If additional order information has been submitted to the customs but is lost in the electronic port, the customs declaration re-push API can be used to push the information to the customs again."}),"\n",(0,n.jsx)(t.h3,{id:"http\u8bf7\u6c42-2",children:"HTTP\u8bf7\u6c42"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"POST ../custom/v1/redeclare"})}),"\n",(0,n.jsx)(t.h3,{id:"\u8bf7\u6c42\u53c2\u6570-3",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u8bf7\u6c42\u53c2\u6570"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u662f\u5426\u5fc5\u987b"}),(0,n.jsx)(t.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"trade_type"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,n.jsx)(t.td,{children:"String(8)"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"weixin"})," \u6216\u8005 ",(0,n.jsx)(t.code,{children:"alipay"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"customs"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,n.jsx)(t.td,{children:"String(20)"}),(0,n.jsx)(t.td,{children:"\u7533\u62a5\u7684\u76ee\u6807\u6d77\u5173 \u793a\u4f8b\uff1aSHANGHAI_ZS"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"syssn"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,n.jsx)(t.td,{children:"String(32)"}),(0,n.jsx)(t.td,{children:"QFPay \u4ea4\u6613\u8ba2\u5355\u53f7"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"mch_customs_no"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Y"}),(0,n.jsx)(t.td,{children:"String(20)"}),(0,n.jsx)(t.td,{children:"\u5546\u6237\u7684\u6d77\u5173\u6ce8\u518c\u7801, \u793a\u4f8b: 110084111"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"sub_order_no"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"N"}),(0,n.jsx)(t.td,{children:"String(40)"}),(0,n.jsx)(t.td,{children:"\u5546\u6237\u5b50\u8ba2\u5355\u53f7\u7801, \u5982\u679c\u662f\u4e00\u4e2a\u62c6\u5206\u8bf7\u6c42\u5219\u5fc5\u987b\u63d0\u4ea4. \u793a\u4f8b\uff1a1111960490"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"\u54cd\u5e94\u53c2\u6570-2",children:"\u54cd\u5e94\u53c2\u6570"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u8bf7\u6c42\u53c2\u6570"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"\u662f\u5426\u5fc5\u987b"}),(0,n.jsx)(t.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,n.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"syssn"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{children:"String(40)"}),(0,n.jsx)(t.td,{children:"QFPay \u4ea4\u6613\u8ba2\u5355\u53f7"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"respcd"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{children:"String(4)"}),(0,n.jsxs)(t.td,{children:["0000 = \u7533\u62a5\u6210\u529f. ",(0,n.jsx)("br",{})," 1143/1145 = \u5546\u6237\u9700\u8981\u6301\u7eed\u67e5\u8be2\u4ea4\u6613\u7ed3\u679c ",(0,n.jsx)("br",{})," \u6240\u6709\u5176\u4ed6\u7684\u8fd4\u56de\u7801\u8868\u660e\u4ea4\u6613\u5931\u8d25.\u8bf7\u53c2\u9605 ",(0,n.jsx)(t.a,{href:"./preparation/paycode#%E4%BA%A4%E6%98%93%E7%8A%B6%E6%80%81%E7%A0%81",children:"\u652f\u4ed8\u72b6\u6001\u7801"})," \u83b7\u5f97\u5b8c\u6574\u8fd4\u56de\u7c7b\u578b\u5217\u8868"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"resperr"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{children:"String(128)"}),(0,n.jsx)(t.td,{children:"\u4fe1\u606f\u63cf\u8ff0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"respmsg"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{children:"String(128)"}),(0,n.jsx)(t.td,{children:"\u5176\u4ed6\u4fe1\u606f"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,l)=>{l.d(t,{A:()=>d});l(96540);var n=l(34164);const s={tabItem:"tabItem_Ymn6"};var r=l(74848);function d(e){let{children:t,hidden:l,className:d}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:l,children:t})}},11470:(e,t,l)=>{l.d(t,{A:()=>v});var n=l(96540),s=l(34164),r=l(23104),d=l(56347),i=l(205),c=l(57485),h=l(31682),x=l(89466);function a(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function j(e){const{values:t,children:l}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return a(e).map((e=>{let{props:{value:t,label:l,attributes:n,default:s}}=e;return{value:t,label:l,attributes:n,default:s}}))}(l);return function(e){const t=(0,h.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,l])}function o(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:l}=e;const s=(0,d.W6)(),r=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:t,groupId:l});return[(0,c.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function f(e){const{defaultValue:t,queryString:l=!1,groupId:s}=e,r=j(e),[d,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!o({value:t,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=l.find((e=>e.default))??l[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[h,a]=u({queryString:l,groupId:s}),[f,y]=function(e){let{groupId:t}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,x.Dv)(l);return[s,(0,n.useCallback)((e=>{l&&r.set(e)}),[l,r])]}({groupId:s}),g=(()=>{const e=h??f;return o({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{g&&c(g)}),[g]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!o({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),a(e),y(e)}),[a,y,r]),tabValues:r}}var y=l(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=l(74848);function A(e){let{className:t,block:l,selectedValue:n,selectValue:d,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,r.a_)(),x=e=>{const t=e.currentTarget,l=c.indexOf(t),s=i[l].value;s!==n&&(h(t),d(s))},a=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const l=c.indexOf(e.currentTarget)+1;t=c[l]??c[0];break}case"ArrowLeft":{const l=c.indexOf(e.currentTarget)-1;t=c[l]??c[c.length-1];break}}t?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":l},t),children:i.map((e=>{let{value:t,label:l,attributes:r}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:a,onClick:x,...r,className:(0,s.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":n===t}),children:l??t},t)}))})}function b(e){let{lazy:t,children:l,selectedValue:s}=e;const r=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function m(e){const t=f(e);return(0,p.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,p.jsx)(A,{...e,...t}),(0,p.jsx)(b,{...e,...t})]})}function v(e){const t=(0,y.A)();return(0,p.jsx)(m,{...e,children:a(e.children)},String(t))}},28453:(e,t,l)=>{l.d(t,{R:()=>d,x:()=>i});var n=l(96540);const s={},r=n.createContext(s);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);