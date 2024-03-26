"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[9905],{35633:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(74848),s=r(28453);r(11470),r(19365),r(28774);const i={},d="WAP Payment",a={id:"online-shop/wap-payment",title:"WAP Payment",description:"Introduction",source:"@site/docs/03-online-shop/06-wap-payment.md",sourceDirName:"03-online-shop",slug:"/online-shop/wap-payment",permalink:"/docs/v2/docs/online-shop/wap-payment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"Visa / Mastercard Online Payments",permalink:"/docs/v2/docs/online-shop/visa-master-online-payment"},next:{title:"Web Payment",permalink:"/docs/v2/docs/online-shop/web-payment"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"HTTP Request",id:"http-request",level:2},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"wap-payment",children:"WAP Payment"}),"\n",(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"WAP Payment or H5 Payment enables merchants to call up digital wallet module in mobile browser Chrome etc. to collect payment."}),"\n",(0,n.jsx)(t.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"POST ../trade/v1/payment"})," ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(t.p,{children:["you can find the different digital wallets ",(0,n.jsx)(t.code,{children:"pay_type"})," from the table below."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"PayType"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"800212"}),(0,n.jsxs)(t.td,{children:["WeChat H5 Payment, details please refer to ",(0,n.jsx)(t.a,{href:"./wechat/wechat-pay-h5",children:"WeChat Pay H5 (in mobile browser)"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"801512"}),(0,n.jsxs)(t.td,{children:["Alipay Hong Kong WAP payment, details please refer to ",(0,n.jsx)(t.a,{href:"./alipay/alipay-service-window-h5",children:"Alipay Service Window H5"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"800712"}),(0,n.jsx)(t.td,{children:"UNIONPAY WAP Payment"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"805812"}),(0,n.jsx)(t.td,{children:"PayMe Online WAP Payment"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter name"}),(0,n.jsx)(t.th,{children:"Parameter code"}),(0,n.jsx)(t.th,{children:"Mandatory"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Payment amount"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"txamt"})}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"Int(11)"}),(0,n.jsx)(t.td,{children:"Amount of the transaction. Unit in cents (i.e. 100 = $1)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Currency"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"txcurrcd"})}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"String(3)"}),(0,n.jsxs)(t.td,{children:["Transaction currency. View the ",(0,n.jsx)(t.a,{href:"../preparation/paycode#currencies",children:"Currencies"})," table for a complete list of available currencies"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Payment type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"pay_type"})}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"String(6)"}),(0,n.jsx)(t.td,{children:"e.g. PayMe WAP Payment = 805812"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"API Order Number"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"out_trade_no"})}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"String(128)"}),(0,n.jsx)(t.td,{children:"External transaction number / Merchant platform transaction number: This parameter must be unique for each payment and refund request under the same merchant account in the system."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Request transaction time"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"txdtm"})}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"String(20)"}),(0,n.jsxs)(t.td,{children:["Transaction time format\uff1a",(0,n.jsx)("br",{})," YYYY-MM-DD hh:mm",":ss"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Product name identification"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"goods_name"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"String(64)"}),(0,n.jsxs)(t.td,{children:["Goods Name / Marking: Cannot exceed 20 alphanumeric or contain special characters. Cannot be empty for app payment. Parameter needs to be ",(0,n.jsx)(t.strong,{children:"UTF-8"})," encoded if it is written in Chinese characters."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"QF Pay merchant number"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"mchid"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"String(16)"}),(0,n.jsx)(t.td,{children:"May or may not be given to merchant. If MCHID is given, it is mandatory to provide the MCHID .On the contrary, if MCHID is not provided, merchants shall not pass the MCHID field in the API request."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Time zone"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"txzone"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"String(5)"}),(0,n.jsx)(t.td,{children:"Transaction Time zone: Record of the transaction in local time, default time zone is Beijing time UTC+8 (+0800)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Device ID"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"udid"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"String(40)"}),(0,n.jsx)(t.td,{children:"Unique transaction device ID. Is displayed on the merchant portal."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Redirect URL"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"return_url"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"String(255)"}),(0,n.jsx)(t.td,{children:"URL that the user will be redirected to when the payment finishes."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Notification URL"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"notify_url"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"String(255)"}),(0,n.jsx)(t.td,{children:"URL that the merchant will receive notification when the payment finishes."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter name"}),(0,n.jsx)(t.th,{children:"Parameter code"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Payment type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"pay_type"})}),(0,n.jsx)(t.td,{children:"String(6)"}),(0,n.jsx)(t.td,{children:"e.g. PayMe Wap Payment"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"System transaction time"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"sysdtm"})}),(0,n.jsx)(t.td,{children:"String(20)"}),(0,n.jsxs)(t.td,{children:["Format\uff1aYYYY-MM-DD hh:mm",":ss"," ",(0,n.jsx)("br",{})," This parameter value is used as the cut-off time for settlements."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Request transaction time"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"txdtm"})}),(0,n.jsx)(t.td,{children:"String(20)"}),(0,n.jsxs)(t.td,{children:["Format\uff1aYYYY-MM-DD hh:mm",":ss"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Response message"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"resperr"})}),(0,n.jsx)(t.td,{children:"String(128)"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Payment amount"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"txamt"})}),(0,n.jsx)(t.td,{children:"Int(11)"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Other message information"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"respmsg"})}),(0,n.jsx)(t.td,{children:"String(128)"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"External transaction number"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"out_trade_no"})}),(0,n.jsx)(t.td,{children:"String(128)"}),(0,n.jsx)(t.td,{children:"External transaction number"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"QFPay transaction number"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"syssn"})}),(0,n.jsx)(t.td,{children:"String(40)"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Return code"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"respcd"})}),(0,n.jsx)(t.td,{children:"String(4)"}),(0,n.jsxs)(t.td,{children:["0000 = Request successful. ",(0,n.jsx)("br",{})," 1143/1145 = merchants are required to continue to query the transaction result. ",(0,n.jsx)("br",{})," All other return codes indicate transaction failure. Please refer to the page ",(0,n.jsx)(t.a,{href:"../preparation/paycode#transaction-status-codes",children:"Transaction Status Codes"})," for a complete list of response codes."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Payment URL"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"pay_url"})}),(0,n.jsx)(t.td,{children:"String(512)"}),(0,n.jsx)(t.td,{children:"generate QR code in Desktop web; redirect URL in WAP"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>P});var n=r(96540),s=r(34164),i=r(23104),d=r(56347),a=r(205),c=r(57485),l=r(31682),o=r(89466);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const s=(0,d.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=u(e),[d,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,h]=j({queryString:r,groupId:s}),[m,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),f=(()=>{const e=l??m;return x({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{f&&c(f)}),[f]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),p(e)}),[h,p,i]),tabValues:i}}var p=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(74848);function b(e){let{className:t,block:r,selectedValue:n,selectValue:d,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),o=e=>{const t=e.currentTarget,r=c.indexOf(t),s=a[r].value;s!==n&&(l(t),d(s))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:h,onClick:o,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,y.jsx)(b,{...e,...t}),(0,y.jsx)(v,{...e,...t})]})}function P(e){const t=(0,p.A)();return(0,y.jsx)(g,{...e,children:h(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>a});var n=r(96540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);