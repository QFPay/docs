"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[6246],{6331:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var d=r(74848),n=r(28453);const i={},c="Merchant data file specification",s={id:"cdi/merchant-data-file-specification",title:"Merchant data file specification",description:"Data file naming",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/07-cdi/merchant-data-file-specification.md",sourceDirName:"07-cdi",slug:"/cdi/merchant-data-file-specification",permalink:"/docs/v2/zh-Hans/docs/cdi/merchant-data-file-specification",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},a=[{value:"Data file naming",id:"data-file-naming",level:2},{value:"File Content",id:"file-content",level:2},{value:"Record type",id:"record-type",level:3},{value:"record type 02 - Data record",id:"record-type-02---data-record",level:3},{value:"record type 99 - trailer record",id:"record-type-99---trailer-record",level:3},{value:"Samples of data files",id:"samples-of-data-files",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"merchant-data-file-specification",children:"Merchant data file specification"}),"\n",(0,d.jsx)(t.h2,{id:"data-file-naming",children:"Data file naming"}),"\n",(0,d.jsx)(t.p,{children:"merchant-V02-{MID}-{generation_timestamp}.csv"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"MID"}),": Merchant ID"]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:"generation_timestamp"}),": Unix timestamp of the file generation, e.g. 1587657600000 refers to 24th April 2020 00:00:00"]}),"\n",(0,d.jsx)(t.h2,{id:"file-content",children:"File Content"}),"\n",(0,d.jsx)(t.h3,{id:"record-type",children:"Record type"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Record type"}),(0,d.jsx)(t.th,{children:"description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"00"}),(0,d.jsx)(t.td,{children:"header record (optional)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"01"}),(0,d.jsx)(t.td,{children:"data header"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"02"}),(0,d.jsx)(t.td,{children:"data records"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"99"}),(0,d.jsx)(t.td,{children:"tailer record"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"record-type-02---data-record",children:"record type 02 - Data record"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field No"}),(0,d.jsx)(t.th,{children:"description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1"}),(0,d.jsx)(t.td,{children:"record type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"2"}),(0,d.jsx)(t.td,{children:"ID"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"3"}),(0,d.jsx)(t.td,{children:"Name"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"4"}),(0,d.jsx)(t.td,{children:"Role, e.g. merchant, store, etc"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"5"}),(0,d.jsx)(t.td,{children:"Address"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"6"}),(0,d.jsx)(t.td,{children:"Onboard date - format in YYYY-MM-DD"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"7"}),(0,d.jsx)(t.td,{children:"(Reserved)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"8"}),(0,d.jsx)(t.td,{children:"(Reserved)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"9"}),(0,d.jsx)(t.td,{children:"(Reserved)"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"record-type-99---trailer-record",children:"record type 99 - trailer record"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Field No"}),(0,d.jsx)(t.th,{children:"description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"1"}),(0,d.jsx)(t.td,{children:"record type"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"2"}),(0,d.jsx)(t.td,{children:"no. of data rows"})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"samples-of-data-files",children:"Samples of data files"}),"\n",(0,d.jsx)(t.p,{children:"(privately shared)"})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>s});var d=r(96540);const n={},i=d.createContext(n);function c(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);