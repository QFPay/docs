"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[7172],{2769:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var a=t(74848),s=t(28453);const d={},i="CDI Integration",r={id:"cdi/integration",title:"CDI Integration",description:"Overview of the QFPay's CDI data consent & request flow",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/07-cdi/integration.md",sourceDirName:"07-cdi",slug:"/cdi/integration",permalink:"/docs/v2/zh-Hans/docs/cdi/integration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},o={},c=[{value:"Overview of the QFPay&#39;s CDI data consent &amp; request flow",id:"overview-of-the-qfpays-cdi-data-consent--request-flow",level:2},{value:"Onboarding",id:"onboarding",level:2},{value:"Consent Request",id:"consent-request",level:2},{value:"Auth Code",id:"auth-code",level:2},{value:"download a Auth Code",id:"download-a-auth-code",level:3},{value:"Data request",id:"data-request",level:2},{value:"Data access info",id:"data-access-info",level:2},{value:"using SFTP",id:"using-sftp",level:3},{value:"prerequisite",id:"prerequisite",level:4},{value:"access info example",id:"access-info-example",level:4},{value:"using CDI Proxy",id:"using-cdi-proxy",level:3},{value:"access info example",id:"access-info-example-1",level:4},{value:"last file indicator",id:"last-file-indicator",level:3},{value:"Error codes",id:"error-codes",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"cdi-integration",children:"CDI Integration"}),"\n",(0,a.jsx)(n.h2,{id:"overview-of-the-qfpays-cdi-data-consent--request-flow",children:"Overview of the QFPay's CDI data consent & request flow"}),"\n",(0,a.jsx)(n.mermaid,{value:"sequenceDiagram\n  autonumber\n  participant dc as Data consumer\n  participant cdi as CDI\n  participant dp as Data provider\n  participant dgen as Data Generator\n\n  note left of dc: Consent request\n  dc->>cdi: send a consent request with Auth Code\n  dp->>cdi: poll a consent request\n  dp->>cdi: approve the consent\n\n  dc->>cdi: poll consent state & acknowledge consent update\n  \n  loop Data request\n    note left of dc: Data request\n    dc->>cdi: send a data request\n\n    dp->>cdi: poll the data request\n    dp->>cdi: approve the data request\n    dc->>cdi: poll & acknowledge data request state\n\n    note left of dc: Data sharing\n\n    dp->>dgen: submit a data request job\n    dgen--\x3e>dp: notifition: data file(s)\n    \n    dp->>dc: share data file to secure store (CDI proxy / SFTP)\n    dp->>cdi: share access info\n    dc->>cdi: poll data access info\n    dc->>dc: download data file\n  end\n"}),"\n",(0,a.jsx)(n.h2,{id:"onboarding",children:"Onboarding"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Data Consumer setup by providing Consumer"}),"\n",(0,a.jsx)(n.li,{children:"Consider protocol for data file transfer, e.g. SFTP / HTTP"}),"\n",(0,a.jsx)(n.li,{children:"Consider maximum file size limitation for data file transfer"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"consent-request",children:"Consent Request"}),"\n",(0,a.jsx)(n.p,{children:"Sample payload of Consent"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "consentId": "0152120c-490a-4225-90b5-f9e0c6968dc8",\n    "type": "ConsentTypeSignedDocNotRequired",\n    "dataConsumerId": "DC-SIM-001",\n    "dataConsumerName": "simulator-c",\n    "dataProviderId": "QFPAYHFL1004DP",\n    "dataProviderName": "QFPay Haojin Finte",\n    "scope": {\n        "scopeType": "DataScopeTypeDateRange",\n        "startDate": "2020-05-01",\n        "endDate": "2024-10-30"\n    },\n    "hashKey": "8eccd695d4a3d5ab4b23ca06f480fffbb4e0d86b291263151e01d184f9554f3d",\n    "status": "ConsentSubmitted",\n    "expireTime": 1790132798,\n    "private": {\n        "id": "dbd609d0-d6b8-417d-b970-b8d928127eb8",\n        "dataOwnerId": "1be5bb65-5e23-4e17-905b-30cd84ebafe1",\n        "dataOwnerName": "Shop One",\n        "consentFileList": [],\n        "purposePrivate": "please fill the auth code",\n        "secret": "5acf403de24cb97858c00f1860dbb747",\n        "brNo" : "HKG:12345678",\n        "dataOwnerReference": "1",\n        "createTime": {\n            "t": 1673245657,\n            "humanT": "2023-01-09 14:27:36"\n        },\n        "updateTime": {\n            "t": 1673245657,\n            "humanT": "2023-01-09 14:27:36"\n        }\n    },\n    "createTime": {\n        "t": 1673245657,\n        "humanT": "2023-01-09 14:27:36"\n    },\n    "updateTime": {\n        "t": 1673245657,\n        "humanT": "2023-01-09 14:27:36"\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"auth-code",children:"Auth Code"}),"\n",(0,a.jsx)(n.p,{children:"The authorization code (Auth Code) has been adapted to the data owner's authorization of data sharing consent and identification."}),"\n",(0,a.jsx)(n.p,{children:"Auth Code can be retrieved in QFPay merchant portal (MMS) anytime. It enables data owners to commit their consent confirmation online, to benefit from the full digital wordflow over the CDI and flexibility of Data Consent without a traditional phone call, or identification document check."}),"\n",(0,a.jsx)(n.p,{children:"Data Consumer can submit the Auth Code via Consent request payload as below"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "public": {\n    ...\n  },\n  "private": {\n    "dataOwnerId": "DO_001",\n    "purposePrivate": "JNS76EAJ", <--- Auth Code\n    "consentFileList": [\n      ...\n    ]\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"download-a-auth-code",children:"download a Auth Code"}),"\n",(0,a.jsx)(n.p,{children:"Data owner should login to QFPay merchant portal (MMS) to get the Auth Code. Please below the steps to get the Auth Code."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://cdn.qfpay.com.hk/user_guide/Auth%20Code%20user%20guide.pdf",children:"Steps to get Auth Code"})}),"\n",(0,a.jsx)(n.h2,{id:"data-request",children:"Data request"}),"\n",(0,a.jsx)(n.p,{children:"sample of data request payload"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n\t"private" : {\n\t\t"dataOwnerId": "1be5bb65-5e23-4e17-905b-30cd84ebafe1",\n\t\t"dataOwnerName" : "Shop One",\n\t\t"secret" : "de13f3c14e2cc802ecce638efdad24c4",\n\t\t"brNo" : "HKG:10000003",\n\t\t"id" : "57fe5232-f660-48bd-953e-9d03c84f8106",\n\t\t"createTime" : {\n\t\t\t"t" : 1697773625,\n\t\t\t"humanT" : "2023-10-20 11:47:05"\n\t\t},\n\t\t"updateTime" : {\n\t\t\t"t" : 1697773625,\n\t\t\t"humanT" : "2023-10-20 11:47:05"\n\t\t}\n\t},\n\t"purpose" : "2023-10-2047ac80da953a4519ac7e7003aeb0fb47",\n\t"dataScope" : {\n\t\t"scopeType" : "DataScopeTypeDateRange",\n\t\t"startDate" : "2023-04-23",\n\t\t"endDate" : "2023-10-19"\n\t},\n\t"consentId" : "1ec3e40c-8706-4b23-843e-35d5f7be5782",\n  ...\n}  \n'})}),"\n",(0,a.jsx)(n.h2,{id:"data-access-info",children:"Data access info"}),"\n",(0,a.jsx)(n.h3,{id:"using-sftp",children:"using SFTP"}),"\n",(0,a.jsx)(n.h4,{id:"prerequisite",children:"prerequisite"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"a SSH public key has been add to SFTP server"}),"\n",(0,a.jsx)(n.li,{children:"a SFTP user has been created"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"access-info-example",children:"access info example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "channel": "SFTP",\n  "endPoint": "${SFTP_HOSTNAME}:${SFTP_PORT}",\n  "accessToken": "SFTP_PRIVATE_KEY_NAME",\n  "fileType": "csv",\n  "filePath": "${uploadAbsoluteRemotePath}/${consumerId}/upload/TXN-V02-1130000459-20220401-20230309-1678327514554.csv",\n  "fileHash": "$fileHash"\n}\n\n'})}),"\n",(0,a.jsx)(n.h3,{id:"using-cdi-proxy",children:"using CDI Proxy"}),"\n",(0,a.jsx)(n.h4,{id:"access-info-example-1",children:"access info example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "channel": "HTTPS",\n  "accessToken": "http_basic_authentication_password",\n  "fileType": "csv",\n  "endpointReverseProxy": " https://proxy-dataprovider-preprod.cdi.network/75f45deba96ff1b262b63180cb183ba4/OFPAYHFL1004DP/main data/ACCT12345 /data file 001.csv",\n  "fileHash": "$fileHash",\n  ...\n}\n\n'})}),"\n",(0,a.jsx)(n.h3,{id:"last-file-indicator",children:"last file indicator"}),"\n",(0,a.jsxs)(n.p,{children:["The last file ",(0,a.jsx)(n.code,{children:'"filePath": "/upload/completed.csv"'})," is not physically exist. It indicates all data has been uploaded."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "channel": "SFTP",\n    "endPoint": "${SFTP_HOSTNAME}:${SFTP_PORT}",\n    "accessToken": "SFTP_PRIVATE_KEY_NAME",\n    "fileType": "csv",\n    "filePath": "/upload/completed.csv",\n    "fileHash": "$fileHash"\n  }\n'})}),"\n",(0,a.jsx)(n.h2,{id:"error-codes",children:"Error codes"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"rejectReasonCode"}),(0,a.jsx)(n.th,{children:"rejectReasonDetail [^1] & description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"DataRequestRejectReasonInvalidConsent"}),(0,a.jsx)(n.td,{children:"INVALID_CONSENT"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"DataRequestRejectReasonInvalidScope"}),(0,a.jsx)(n.td,{children:"INVALID_DATE_RANGE"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"DataRequestRejectReasonCustomerNotFound"}),(0,a.jsx)(n.td,{children:"CUSTOMER_NOT_FOUND"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"DataRequestRejectReasonInvalidHashKeyOfRequestPrivate"}),(0,a.jsx)(n.td,{children:"FILE_CHECKSUM_FAILED"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"DataRequestRejectReasonInvalidPurpose"}),(0,a.jsx)(n.td,{children:"INVALID_PURPOSE_VALUE"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"DataRequestRejectReasonOthers"}),(0,a.jsx)(n.td,{children:"[^NO_DATA] - No data found from the data request scope OTHER_REASON"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"ConsentRejectReasonInvalidSignature"}),(0,a.jsx)(n.td,{children:"INVALID_SIGNATURE"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"ConsentRejectReasonInvalidExpireTime"}),(0,a.jsx)(n.td,{children:"INVALID_EXPIRE_TIME"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"ConsentRejectReasonInvalidScope"}),(0,a.jsx)(n.td,{children:"INVALID_DATE_RANGE"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"ConsentRejectReasonCustomerNotFound"}),(0,a.jsx)(n.td,{children:"CUSTOMER_NOT_FOUND"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"ConsentRejectReasonInvalidHashKey"}),(0,a.jsx)(n.td,{children:"FILE_CHECKSUM_FAILED"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"ConsentRejectReasonInvalidPurpose"}),(0,a.jsx)(n.td,{children:"INVALID_PURPOSE_VALUE"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"ConsentRejectReasonOthers"}),(0,a.jsxs)(n.td,{children:["OTHER_REASON",(0,a.jsx)("br",{}),"INFO_MISMATCH - BR/CI & Company name not match",(0,a.jsx)("br",{}),"BR_NOT_FOUND",(0,a.jsx)("br",{}),"CI_NOT_FOUND",(0,a.jsx)("br",{}),"INVALID_INFO - some data is invalid / auth code is invalid",(0,a.jsx)("br",{}),"MISSING_INFO - some data is missing"]})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"[^1] example of explicit value in rejectReasonDetail:"}),"\n",(0,a.jsx)(n.p,{children:"[^NO_DATA] No data found from the data request scope"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(96540);const s={},d=a.createContext(s);function i(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);