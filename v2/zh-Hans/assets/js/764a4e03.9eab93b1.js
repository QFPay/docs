"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[231],{91534:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var n=t(74848),s=t(28453);t(11470),t(19365),t(28774);const d={},l="Web\u652f\u4ed8",i={id:"online-shop/web-payment",title:"Web\u652f\u4ed8",description:"\u7b80\u4ecb",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/03-online-shop/07-web-payment.md",sourceDirName:"03-online-shop",slug:"/online-shop/web-payment",permalink:"/docs/v2/zh-Hans/docs/online-shop/web-payment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"WAP\u652f\u4ed8",permalink:"/docs/v2/zh-Hans/docs/online-shop/wap-payment"},next:{title:"In-App \u652f\u4ed8",permalink:"/docs/v2/zh-Hans/docs/online-shop/in-app-payment"}},c={},a=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"HTTP \u8bf7\u6c42",id:"http-\u8bf7\u6c42",level:2},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:3},{value:"\u54cd\u5e94\u53c2\u6570",id:"\u54cd\u5e94\u53c2\u6570",level:3}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"web\u652f\u4ed8",children:"Web\u652f\u4ed8"}),"\n",(0,n.jsx)(r.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,n.jsxs)(r.p,{children:["\u5ba2\u6237\u4f7f\u7528WEB\u652f\u4ed8\u5728\u5546\u6237\u7684\u7f51\u7ad9\u4e0a\u8d2d\u4e70\u7269\u54c1, \u7528\u6237\u626b\u63cf\u4e8c\u7ef4\u7801\u652f\u4ed8, \u786e\u8ba4\u603b\u91d1\u989d\u5e76\u652f\u4ed8\u3002\u6700\u540e, ",(0,n.jsx)(r.code,{children:"return_url"})," \u53c2\u6570\u5c06\u5ba2\u6237\u91cd\u5b9a\u5411\u5230\u5546\u6237\u9009\u5b9a\u7684\u9875\u9762\u3002\u6240\u9009\u7684\u652f\u4ed8\u94b1\u5305\u5c06\u4ece\u5ba2\u6237\u94b1\u5305\u4e2d\u4ee5HKD\u8ba1\u4ef7\u5b9e\u65f6\u6263\u53d6\u652f\u4ed8\u7684\u91d1\u989d, \u94b1\u65b9\u5c06\u4f1a\u4ee5HKD\u8ba1\u4ef7\u5411\u5546\u6237\u7ed3\u7b97\u4ed8\u6b3e\u91d1\u989d."]}),"\n",(0,n.jsx)(r.h2,{id:"http-\u8bf7\u6c42",children:"HTTP \u8bf7\u6c42"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"POST ../trade/v1/payment"})," ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"\u652f\u4ed8\u7c7b\u578b"}),(0,n.jsx)(r.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"801514"}),(0,n.jsxs)(r.td,{children:["\u652f\u4ed8\u5b9d\u7ebf\u4e0aWEB\u652f\u4ed8 (\u9999\u6e2f\u5546\u6236), \u8be6\u60c5\u8bf7\u53c2\u9605",(0,n.jsx)(r.a,{href:"./alipay/alipay-online-payments",children:"\u652f\u4ed8\u5b9d\u7ebf\u4e0aWEB\u652f\u4ed8"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"800714"}),(0,n.jsx)(r.td,{children:"\u94f6\u8054\u4e91\u95ea\u4ed8 PC-Web Payment (\u9999\u6e2f\u5546\u6237)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"805814"}),(0,n.jsx)(r.td,{children:"PayMe \u7ebf\u4e0aWEB\u652f\u4ed8 (\u9999\u6e2f\u5546\u6236)"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"\u8bf7\u6c42\u53c2\u6570",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(r.th,{children:"\u53c2\u6570\u7f16\u7801"}),(0,n.jsx)(r.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,n.jsx)(r.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,n.jsx)(r.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u8ba2\u5355\u652f\u4ed8\u91d1\u989d"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"txamt"})}),(0,n.jsx)(r.td,{children:"\u662f"}),(0,n.jsx)(r.td,{children:"Int(11)"}),(0,n.jsx)(r.td,{children:"\u4ee5\u5f53\u524d\u8d27\u5e01\u6700\u5c0f\u8ba1\u91cf\u5355\u4f4d\u8ba1\u7b97\uff0c\u53ea\u5141\u8bb8\u6574\u6570\u7c7b\u578b (i.e. 100 = $1)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u5e01\u79cd"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"txcurrcd"})}),(0,n.jsx)(r.td,{children:"\u662f"}),(0,n.jsx)(r.td,{children:"String(3)"}),(0,n.jsx)(r.td,{children:"\u4ea4\u6613\u5e01\u79cd, \u8bf7\u67e5\u770b[\u5e01\u79cd]../preparation/paycode#\u652f\u4ed8\u5e01\u79cd)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Payment type"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"pay_type"})}),(0,n.jsx)(r.td,{children:"\u662f"}),(0,n.jsx)(r.td,{children:"String(6)"}),(0,n.jsx)(r.td,{children:"e.g.  PayMe \u7ebf\u4e0aWEB\u652f\u4ed8 = 805814"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u5916\u90e8\u8ba2\u5355\u53f7"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"out_trade_no"})}),(0,n.jsx)(r.td,{children:"\u662f"}),(0,n.jsx)(r.td,{children:"String(128)"}),(0,n.jsx)(r.td,{children:"\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u8ba2\u5355\u53f7\uff0c\u5728\u540c\u4e00\u5546\u6237\u8d26\u6237\u4e2d\u7684\u6bcf\u7b14\u4ea4\u6613\u548c\u9000\u6b3e\u8bf7\u6c42\u8be5\u53c2\u6570\u503c\u552f\u4e00"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u8bf7\u6c42\u4ea4\u6613\u65f6\u95f4"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"txdtm"})}),(0,n.jsx)(r.td,{children:"\u662f"}),(0,n.jsx)(r.td,{children:"String(20)"}),(0,n.jsxs)(r.td,{children:["\u683c\u5f0f\uff1ayyyy-MM-dd HH:mm",":ss"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u4ea4\u6613\u5230\u671f\u65f6\u95f4"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"expired_time"})}),(0,n.jsxs)(r.td,{children:["No",(0,n.jsx)("br",{})," (\u4ec5\u9650\u6b63\u626b\u652f\u4ed8)"]}),(0,n.jsx)(r.td,{children:"String(3)"}),(0,n.jsx)(r.td,{children:"\u4ee5\u5206\u949f\u4e3a\u8ba1\u65f6\u7684\u4e8c\u7ef4\u7801\u8fc7\u671f\u65f6\u95f4,\u9ed8\u8ba4\u7684\u8fc7\u671f\u65f6\u95f4\u662f30\u5206\u949f. \u8be5\u53c2\u6570\u53ef\u4ee5\u88ab\u624b\u52a8\u8bbe\u7f6e\u4e3a\u6700\u5c0f5\u5206\u949f,\u6700\u5927120\u5206\u949f"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u5546\u54c1\u540d\u79f0\u6807\u8bc6"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"goods_name"})}),(0,n.jsx)(r.td,{children:"\u5426"}),(0,n.jsx)(r.td,{children:"String(64)"}),(0,n.jsxs)(r.td,{children:["\u5546\u54c1\u540d\u79f0 / \u6807\u8bc6: \u4e0d\u80fd\u8d85\u8fc720\u4e2a\u5b57\u6bcd\u6570\u5b57\u6216\u5305\u542b\u7279\u6b8a\u5b57\u7b26\u3002 APP\u652f\u4ed8\u4e0d\u80fd\u4e3a\u7a7a\u3002 \u5982\u679c\u53c2\u6570\u662f\u6c49\u5b57\uff0c\u5219\u9700\u8981\u4f7f\u7528",(0,n.jsx)(r.strong,{children:"UTF-8"}),"\u7f16\u7801\u3002"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u5b50\u5546\u6237\u53f7"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"mchid"})}),(0,n.jsx)(r.td,{children:"\u5426"}),(0,n.jsx)(r.td,{children:"String(16)"}),(0,n.jsx)(r.td,{children:"\u6807\u8bc6\u5b50\u5546\u6237\u8eab\u4efd\uff0c\u7531\u94b1\u65b9\u5206\u914d\uff08\u6e20\u9053\u7cfb\u7edf\u540e\u53f0\u67e5\u770b\u5bf9\u5e94\u5546\u6237(\u975e\u4e1a\u52a1\u5458)\u5b50\u5546\u6237\u53f7\uff0c\u88ab\u89c6\u4e3a\u5bf9\u5e94\u5546\u6237\u7684\u4ea4\u6613\uff09"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u65f6\u533a"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"txzone"})}),(0,n.jsx)(r.td,{children:"\u5426"}),(0,n.jsx)(r.td,{children:"String(5)"}),(0,n.jsx)(r.td,{children:"\u7528\u4e8e\u8bb0\u5f55\u672c\u5730\u4e0b\u5355\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a\u5317\u4eac\u65f6\u95f4+0800"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u8bbe\u5907\u552f\u4e00id"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"udid"})}),(0,n.jsx)(r.td,{children:"\u5426"}),(0,n.jsx)(r.td,{children:"String(40)"}),(0,n.jsx)(r.td,{children:"\u552f\u4e00\u7684\u8bbe\u5907ID,\u663e\u793a\u5728\u5546\u6237\u7ba1\u7406\u540e\u53f0\u4e0a."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u91cd\u5b9aURL"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"return_url"})}),(0,n.jsx)(r.td,{children:"\u5426"}),(0,n.jsx)(r.td,{children:"String(512)"}),(0,n.jsx)(r.td,{children:"\u7528\u6237\u5728\u652f\u4ed8\u5b8c\u6210\u540e\uff0c\u88ab\u91cd\u5b9a\u5411\u7684URL"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"\u54cd\u5e94\u53c2\u6570",children:"\u54cd\u5e94\u53c2\u6570"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(r.th,{children:"\u53c2\u6570\u7f16\u7801"}),(0,n.jsx)(r.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,n.jsx)(r.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u652f\u4ed8\u7c7b\u578b"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"pay_type"})}),(0,n.jsx)(r.td,{children:"String(6)"}),(0,n.jsx)(r.td,{children:"e.g. PayMe \u7ebf\u4e0aWEB\u652f\u4ed8 = 805814"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u7cfb\u7edf\u4ea4\u6613\u65f6\u95f4"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"sysdtm"})}),(0,n.jsx)(r.td,{children:"String(20)"}),(0,n.jsxs)(r.td,{children:["\u683c\u5f0f\uff1aYYYY-MM-DD hh:mm",":ss"," ",(0,n.jsx)("br",{})," \u8fd9\u4e2a\u53c2\u6570\u503c\u88ab\u7528\u4f5c\u7ed3\u7b97\u622a\u6b62\u65f6\u95f4"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u8bf7\u6c42\u4ea4\u6613\u65f6\u95f4"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"txdtm"})}),(0,n.jsx)(r.td,{children:"String(20)"}),(0,n.jsxs)(r.td,{children:["\u683c\u5f0f\uff1aYYYY-MM-DD hh:mm",":ss"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u4fe1\u606f\u63cf\u8ff0"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"resperr"})}),(0,n.jsx)(r.td,{children:"String(128)"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u8ba2\u5355\u652f\u4ed8\u91d1\u989d"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"txamt"})}),(0,n.jsx)(r.td,{children:"Int(11)"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u8c03\u8bd5\u4fe1\u606f"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"respmsg"})}),(0,n.jsx)(r.td,{children:"String(128)"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u5916\u90e8\u8ba2\u5355\u53f7"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"out_trade_no"})}),(0,n.jsx)(r.td,{children:"String(128)"}),(0,n.jsx)(r.td,{children:"\u5916\u90e8\u8ba2\u5355\u53f7"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u94b1\u65b9\u8ba2\u5355\u53f7"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"syssn"})}),(0,n.jsx)(r.td,{children:"String(40)"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u8fd4\u56de\u7801"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"respcd"})}),(0,n.jsx)(r.td,{children:"String(4)"}),(0,n.jsxs)(r.td,{children:["0000 = \u8bf7\u6c42\u6210\u529f. ",(0,n.jsx)("br",{})," 1143/1145 = \u5546\u6237\u9700\u8981\u6301\u7eed\u67e5\u8be2\u4ea4\u6613\u7ed3\u679c ",(0,n.jsx)("br",{})," \u6240\u6709\u5176\u4ed6\u7684\u8fd4\u56de\u7801\u8868\u660e\u4ea4\u6613\u5931\u8d25.\u8bf7\u53c2\u9605 ",(0,n.jsx)(r.a,{href:"../preparation/paycode#%E4%BA%A4%E6%98%93%E7%8A%B6%E6%80%81%E7%A0%81",children:"\u652f\u4ed8\u72b6\u6001\u7801"})," \u83b7\u5f97\u5b8c\u6574\u8fd4\u56de\u7c7b\u578b\u5217\u8868"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"\u652f\u4ed8URL"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"pay_url"})}),(0,n.jsx)(r.td,{children:"String(512)"}),(0,n.jsx)(r.td,{children:"\u5728\u684c\u9762\u9875\u9762\u4e2d\u751f\u6210\u4e8c\u7ef4\u7801"})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>l});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var d=t(74848);function l(e){let{children:r,hidden:t,className:l}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>S});var n=t(96540),s=t(34164),d=t(23104),l=t(56347),i=t(205),c=t(57485),a=t(31682),h=t(89466);function o(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return o(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,a.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function u(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function j(e){let{queryString:r=!1,groupId:t}=e;const s=(0,l.W6)(),d=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c.aZ)(d),(0,n.useCallback)((e=>{if(!d)return;const r=new URLSearchParams(s.location.search);r.set(d,e),s.replace({...s.location,search:r.toString()})}),[d,s])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,d=x(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:d}))),[a,o]=j({queryString:t,groupId:s}),[p,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,d]=(0,h.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&d.set(e)}),[t,d])]}({groupId:s}),m=(()=>{const e=a??p;return u({value:e,tabValues:d})?e:null})();(0,i.A)((()=>{m&&c(m)}),[m]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),b(e)}),[o,b,d]),tabValues:d}}var b=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function y(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,d.a_)(),h=e=>{const r=e.currentTarget,t=c.indexOf(r),s=i[t].value;s!==n&&(a(r),l(s))},o=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:d}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:o,onClick:h,...d,className:(0,s.A)("tabs__item",m.tabItem,d?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:s}=e;const d=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=d.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:d.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function g(e){const r=p(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,f.jsx)(y,{...e,...r}),(0,f.jsx)(v,{...e,...r})]})}function S(e){const r=(0,b.A)();return(0,f.jsx)(g,{...e,children:o(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>i});var n=t(96540);const s={},d=n.createContext(s);function l(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);