"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[4935],{34388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=n(74848),s=n(28453);n(11470),n(19365),n(28774);const i={},a="Web Payment",d={id:"online-shop/web-payment",title:"Web Payment",description:"Introduction",source:"@site/docs/03-online-shop/07-web-payment.md",sourceDirName:"03-online-shop",slug:"/online-shop/web-payment",permalink:"/docs/v2/docs/online-shop/web-payment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"WAP Payment",permalink:"/docs/v2/docs/online-shop/wap-payment"},next:{title:"In App Payment",permalink:"/docs/v2/docs/online-shop/in-app-payment"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"HTTP Request",id:"http-request",level:2},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"web-payment",children:"Web Payment"}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(t.p,{children:["Customers make purchases on a merchant website with Web Payment methods. The user scans the displayed QR code to pay, confirms the total amount and makes the payment. Finally the customer can be redirected to a selected page on the merchant's website using the ",(0,r.jsx)(t.code,{children:"return_url"})," parameter. The selected wallet will deduct the payment amount from the consumer's wallet in real-time in HKD and QFPay settles the payment amount to merchants in HKD."]}),"\n",(0,r.jsx)(t.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"POST ../trade/v1/payment"})," ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"PayType"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"801514"}),(0,r.jsxs)(t.td,{children:["Alipay Online WEB Payment (HK Merchants), details please refer to ",(0,r.jsx)(t.a,{href:"./alipay/alipay-online-payments",children:"Alipay Online Payments"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"800714"}),(0,r.jsx)(t.td,{children:"UNIONPAY PC-Web Payment (HK Merchants)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"805814"}),(0,r.jsx)(t.td,{children:"PayMe Online WEB (in browser Chrome etc.) Payment (HK Merchants)"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter name"}),(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Mandatory"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Payment amount"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"txamt"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"Int(11)"}),(0,r.jsx)(t.td,{children:"Amount of the transaction. Unit in cents (i.e. 100 = $1)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Currency"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"txcurrcd"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String(3)"}),(0,r.jsxs)(t.td,{children:["Transaction currency. View the ",(0,r.jsx)(t.a,{href:"../preparation/paycode#currencies",children:"Currencies"})," table for a complete list of available currencies"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Payment type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pay_type"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String(6)"}),(0,r.jsx)(t.td,{children:"e.g. PayMe Web Payment = 805814"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"API Order Number"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"out_trade_no"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsx)(t.td,{children:"External transaction number / Merchant platform transaction number: This parameter must be unique for each payment and refund request under the same merchant account in the system."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Request transaction time"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"txdtm"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"String(20)"}),(0,r.jsxs)(t.td,{children:["Transaction time format\uff1a",(0,r.jsx)("br",{})," YYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Order expiration time"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"expired_time"})}),(0,r.jsxs)(t.td,{children:["No",(0,r.jsx)("br",{})," (MPM only)"]}),(0,r.jsx)(t.td,{children:"String(3)"}),(0,r.jsx)(t.td,{children:"QRC expiration time in unit minutes. The default expiration time is 30 minutes. The parameter can manually be adjusted to a minimum of 5 minutes, and up to a maximum of 120 minutes."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Product name identification"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"goods_name"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"String(64)"}),(0,r.jsxs)(t.td,{children:["Goods Name / Marking: Cannot exceed 20 alphanumeric or contain special characters. Cannot be empty for app payment. Parameter needs to be ",(0,r.jsx)(t.strong,{children:"UTF-8"})," encoded if it is written in Chinese characters."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"QF Pay merchant number"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"mchid"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"String(16)"}),(0,r.jsx)(t.td,{children:"May or may not be given to merchant. If MCHID is given, it is mandatory to provide the MCHID .On the contrary, if MCHID is not provided, merchants shall not pass the MCHID field in the API request."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Time zone"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"txzone"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"String(5)"}),(0,r.jsx)(t.td,{children:"Transaction Time zone: Record of the transaction in local time, default time zone is Beijing time UTC+8 (+0800)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Device ID"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"udid"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"String(40)"}),(0,r.jsx)(t.td,{children:"Unique transaction device ID. Is displayed on the merchant portal."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Redirect URL"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"return_url"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"String(512)"}),(0,r.jsx)(t.td,{children:"URL that the user will be redirected to when the payment finishes."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter name"}),(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Payment type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pay_type"})}),(0,r.jsx)(t.td,{children:"String(6)"}),(0,r.jsx)(t.td,{children:"e.g. PayMe Web Payment = 805814"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"System transaction time"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"sysdtm"})}),(0,r.jsx)(t.td,{children:"String(20)"}),(0,r.jsxs)(t.td,{children:["Format\uff1aYYYY-MM-DD hh:mm",":ss"," ",(0,r.jsx)("br",{})," This parameter value is used as the cut-off time for settlements."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Request transaction time"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"txdtm"})}),(0,r.jsx)(t.td,{children:"String(20)"}),(0,r.jsxs)(t.td,{children:["Format\uff1aYYYY-MM-DD hh:mm",":ss"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Response message"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"resperr"})}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Payment amount"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"txamt"})}),(0,r.jsx)(t.td,{children:"Int(11)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Other message information"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"respmsg"})}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"External transaction number"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"out_trade_no"})}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsx)(t.td,{children:"External transaction number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"QFPay transaction number"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"syssn"})}),(0,r.jsx)(t.td,{children:"String(40)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Return code"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"respcd"})}),(0,r.jsx)(t.td,{children:"String(4)"}),(0,r.jsxs)(t.td,{children:["0000 = Request successful. ",(0,r.jsx)("br",{})," 1143/1145 = merchants are required to continue to query the transaction result. ",(0,r.jsx)("br",{})," All other return codes indicate transaction failure. Please refer to the page ",(0,r.jsx)(t.a,{href:"../preparation/paycode#transaction-status-codes",children:"Transaction Status Codes"})," for a complete list of response codes."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Payment URL"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pay_url"})}),(0,r.jsx)(t.td,{children:"String(512)"}),(0,r.jsx)(t.td,{children:"generate QR code in Desktop web"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>P});var r=n(96540),s=n(34164),i=n(23104),a=n(56347),d=n(205),c=n(57485),l=n(31682),o=n(89466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=u(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,h]=j({queryString:n,groupId:s}),[m,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),b=(()=>{const e=l??m;return x({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{b&&c(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),p(e)}),[h,p,i]),tabValues:i}}var p=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),o=e=>{const t=e.currentTarget,n=c.indexOf(t),s=d[n].value;s!==r&&(l(t),a(s))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:d.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:o,...i,className:(0,s.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,f.jsx)(y,{...e,...t}),(0,f.jsx)(g,{...e,...t})]})}function P(e){const t=(0,p.A)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);