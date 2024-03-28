"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[3285],{23668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var r=n(74848),d=n(28453),i=(n(11470),n(19365),n(28774));const s={},l="\u5fae\u4fe1JSAPI\u652f\u4ed8(\u5fae\u4fe1\u6d4f\u89c8\u5668)",c={id:"online-shop/wechat/wechat-pay-jsapi",title:"\u5fae\u4fe1JSAPI\u652f\u4ed8(\u5fae\u4fe1\u6d4f\u89c8\u5668)",description:"WeChat JSAPI process-flow",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03-online-shop/06-wechat/02-wechat-pay-jsapi.md",sourceDirName:"03-online-shop/06-wechat",slug:"/online-shop/wechat/wechat-pay-jsapi",permalink:"/docs/v2/zh/docs/online-shop/wechat/wechat-pay-jsapi",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"\u5fae\u4fe1\u626b\u7801\u652f\u4ed8",permalink:"/docs/v2/zh/docs/online-shop/wechat/wechat-web-qrc-payments"},next:{title:"\u5fae\u4fe1H5\u652f\u4ed8\uff08\u7b2c\u4e09\u65b9\u6d4f\u89c8\u5668\uff09",permalink:"/docs/v2/zh/docs/online-shop/wechat/wechat-pay-h5"}},a={},h=[{value:"\u83b7\u53d6\u5fae\u4fe1oauth_code",id:"\u83b7\u53d6\u5fae\u4fe1oauth_code",level:2},{value:"HTTP\u8bf7\u6c42",id:"http\u8bf7\u6c42",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:3},{value:"\u83b7\u53d6\u5fae\u4fe1openid",id:"\u83b7\u53d6\u5fae\u4fe1openid",level:2},{value:"HTTP\u8bf7\u6c42",id:"http\u8bf7\u6c42-1",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570-1",level:3},{value:"\u54cd\u5e94\u53c2\u6570",id:"\u54cd\u5e94\u53c2\u6570",level:3},{value:"\u5fae\u4fe1\u7533\u8bf7\u652f\u4ed8",id:"\u5fae\u4fe1\u7533\u8bf7\u652f\u4ed8",level:2},{value:"HTTP \u8bf7\u6c42",id:"http-\u8bf7\u6c42",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570-2",level:3},{value:"\u54cd\u5e94\u53c2\u6570",id:"\u54cd\u5e94\u53c2\u6570-1",level:3},{value:"\u8c03\u7528\u5fae\u4fe1\u652f\u4ed8\u6a21\u5757",id:"\u8c03\u7528\u5fae\u4fe1\u652f\u4ed8\u6a21\u5757",level:2},{value:"HTTP \u8bf7\u6c42",id:"http-\u8bf7\u6c42-1",level:3},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570-3",level:3}];function o(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u5fae\u4fe1jsapi\u652f\u4ed8\u5fae\u4fe1\u6d4f\u89c8\u5668",children:"\u5fae\u4fe1JSAPI\u652f\u4ed8(\u5fae\u4fe1\u6d4f\u89c8\u5668)"}),"\n",(0,r.jsx)(i.A,{href:"/img/wechat_jsapi_process.jpg",target:"_blank",children:(0,r.jsx)(t.img,{alt:"WeChat JSAPI process-flow",src:n(85627).A+"",width:"1414",height:"780"})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"\u516c\u4f17\u53f7\u652f\u4ed8\u5fc5\u987b\u4ece\u5fae\u4fe1\u5e94\u7528\u5185\u6d4f\u89c8\u5668\u53d1\u8d77\u3002 \u5b83\u4eec\u65e0\u6cd5\u4ece\u5176\u4ed6\u6d4f\u89c8\u5668\uff08\u4f8b\u5982 Chrome \u6216 Safari\uff09\u542f\u52a8\u3002"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"JSAPI \u652f\u4ed8\u7c7b\u578b"})}),"\n",(0,r.jsxs)(t.p,{children:["Note: \u52a0\u62ff\u5927\u5730\u533a\u7684\u5546\u6237\uff0c\u8bf7\u53c2\u9605",(0,r.jsx)(t.a,{href:"../alipay/alipay-online-payments",children:"\u6b64"}),"\u90e8\u5206\u4e86\u89e3\u652f\u4ed8\u8bf7\u6c42\u548c\u54cd\u5e94\u53c2\u6570\uff0c\u5176\u4e2d\u201cpay_type\u201d\u4e3a800207\u3002",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(t.p,{children:"JSAPI \u652f\u4ed8\u6709\u4e24\u79cd\u4e0d\u540c\u7684\u5b9e\u73b0\u65b9\u6cd5\u3002"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"1. \u62e5\u6709\u5b9e\u540d\u8ba4\u8bc1\u7684\u516c\u4f17\u53f7JSAPI\u652f\u4ed8"})}),"\n",(0,r.jsxs)(t.p,{children:["\u5bf9\u4e8e\u8fd9\u79cd\u96c6\u6210\uff0c\u5546\u6237\u9700\u8981\u5728\u5fae\u4fe1\u4e0a\u6ce8\u518c\u81ea\u5df1\u7684\u516c\u4f17\u53f7\uff0c\u6211\u4eec\u4f1a\u5c06\u516c\u4f17\u53f7\u4e0e\u5546\u6237\u7684QF Pay\u652f\u4ed8\u8d26\u6237\u7ed1\u5b9a\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5546\u5bb6\u53ef\u4ee5\u521b\u5efa\u548c\u53d1\u5e03\u81ea\u5df1\u7684\u5185\u5bb9\u3001\u8bbf\u95ee\u5ba2\u6237\u4fe1\u606f\u5e76\u6536\u96c6\u81ea\u5df1\u7684\u5173\u6ce8\u8005\u3002 \u9009\u62e9\u8be5\u5b9e\u73b0\u65b9\u5f0f\u65f6\uff0c\u5546\u6237\u9700\u8981\u83b7\u53d6\u201coauth_code\u201d\u3001\u7528\u6237\u201copenid\u201d\uff0c\u5e76\u901a\u8fc7",(0,r.jsx)(i.A,{href:"https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_1",children:"\u5b98\u65b9\u5fae\u4fe1\u5e73\u53f0"}),"\u89e6\u53d1\u5fae\u4fe1\u652f\u4ed8\u3002 \u5546\u6237\u53ea\u9700\u53c2\u8003QF Pay",(0,r.jsx)(t.a,{href:"../../common-api/transaction-enquiry",children:"\u4ea4\u6613\u67e5\u8be2API\u63a5\u53e3"}),"\u5373\u53ef\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 1:"})," \u5f00\u53d1\u8005\u5728\u5fae\u4fe1\u516c\u4f17\u53f7\u5e73\u53f0\u5b8c\u6210\u5b9e\u540d\u8ba4\u8bc1\u540e\uff0c\u5373\u53ef\u4f7f\u7528\u5fae\u4fe1\u516c\u4f17\u53f7\u652f\u4ed8\u3002 \u8ba4\u8bc1\u5b8c\u6210\u540e\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u83b7\u5f97\u8ba4\u8bc1\u516c\u4f17\u8d26\u53f7\u7684openid\u53c2\u6570\u3002 \u8bf7\u53c2\u8003\u5b98\u65b9",(0,r.jsx)(t.a,{href:"https://developers.weixin.qq.com/doc/offiaccount/en/Getting_Started/Overview.html",children:"\u5fae\u4fe1\u6587\u6863"}),"\uff0c\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 2:"})," \u901a\u8fc7\u63d0\u4f9b\u6307\u5b9a\u7684",(0,r.jsx)(t.code,{children:"openid"}),"\u8bf7\u6c42QFPAY\u8ba2\u5355\u652f\u4ed8\u63a5\u53e3",(0,r.jsx)(t.code,{children:"/trade/v1/ payment"}),"\u5e76\u8fd4\u56de",(0,r.jsx)(t.code,{children:"pay_params"}),"\u6570\u636e\uff0c\u5177\u4f53\u8bf4\u660e\u8bf7\u53c2\u8003 ",(0,r.jsx)(t.a,{href:"../../preparation/paycode#%E6%94%AF%E4%BB%98API%E7%AB%AF%E7%82%B9",children:"\u652f\u4ed8API\u7aef\u70b9"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 3:"})," \u5546\u6237\u8ba4\u8bc1\u7533\u8bf7\u65f6\u6253\u5f00JSAPI\u652f\u4ed8\u6388\u6743\u76ee\u5f55\u53d1\u8d77\u652f\u4ed8\u3002 \u66f4\u591a\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,r.jsx)(t.a,{href:"https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6",children:"\u5fae\u4fe1\u652f\u4ed8\u5b98\u65b9\u6587\u6863"}),"."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"2. \u672a\u62e5\u6709\u5b9e\u540d\u8ba4\u8bc1\u7684\u516c\u4f17\u53f7JSAPI\u652f\u4ed8"})}),"\n",(0,r.jsx)(t.p,{children:"\u5bf9\u4e8e\u6b64\u7c7b\u652f\u4ed8\uff0c\u5546\u6237\u53ef\u4ee5\u57fa\u4e8eQF Pay\u7684\u516c\u4f17\u53f7\u8fdb\u884c\u3002 \u6b64\u6574\u5408\u4ec5\u9002\u7528\u4e8e\u4f7f\u7528\u95f4\u63a5\u7ed3\u7b97\u9009\u9879\uff08\u5373\u7531 QFPay \u63d0\u4f9b\u7ed3\u7b97\uff09\u7684\u5546\u6237\u3002 \u5bf9\u4e8e\u6b64\u5b9e\u73b0\uff0c\u5546\u6237\u5e94\u4f7f\u7528 QFPay \u7684 API \u83b7\u53d6\u201coauth_code\u201d\u3001\u7528\u6237\u201copenid\u201d\u5e76\u89e6\u53d1\u5fae\u4fe1\u652f\u4ed8\uff0c\u5982\u4e0b\u6240\u8ff0\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u83b7\u53d6\u5fae\u4fe1oauth_code",children:"\u83b7\u53d6\u5fae\u4fe1oauth_code"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-plaintext",children:"GET WeChat oauth_code request:\n\n{\n  https://openapi-test.qfpay.com/tool/v1/get_weixin_oauth_code?app_code=5D81D64E602043F7AF51CEXXXXXXXXXX&sign=F4D8FB00894F213993B33116BC1B4E10&redirect_uri=https://sdk.qfapi.com\n}\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import hashlib\nimport requests\nfrom flask import Flask, redirect\nfrom flask import request\nimport json\nimport random\nimport datetime\nimport string\nimport urllib\nimport urllib.parse\n\n# Enter Client Credentials\nenvironment = \'https://test-openapi-hk.qfapi.com\'\napp_code = "******"\nclient_key = "******"\n\n# Create MD5 signature \ndef make_req_sign(data, key):\n    keys = list(data.keys())\n    keys.sort()\n    p = []\n    for k in keys: \n        v = data[k]\n        p.append(\'%s=%s\'%(k,v))\n    unsign_str = (\'&\'.join(p) + key).encode("utf-8")\n    s = hashlib.md5(unsign_str).hexdigest()\n    return s.upper()\n\ndef get_out_code():\n    # Body payload\n    redirect_uri = \'http://49ae4dbd47a6.ngrok.io/getcode\'  \n    data = {\'app_code\': app_code, \'redirect_uri\': redirect_uri}   \n    sign = make_req_sign(data, client_key)\n    \n    return environment+"/tool/v1/get_weixin_oauth_code?app_code="+app_code+"&sign="+sign+"&redirect_uri="+redirect_uri #+"&mchid="+mchid\n'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Redirect to URL after the GET oauth_code request has been successful:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "http://xg.fshop.top/index.php/wap/pay/wxredirect?showwxpaytitle=1&code=011QipnO1yMIla1VJdoO1FUrnO1Qipnv"\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"http\u8bf7\u6c42",children:"HTTP\u8bf7\u6c42"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET ../tool/v1/get_weixin_oauth_code"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"app_code"})," \u548c ",(0,r.jsx)(t.code,{children:"sign"})," \u90fd\u5fc5\u987b\u4f5c\u4e3a\u53c2\u6570\u63d0\u4ea4\uff0c\u800c\u4e0d\u662f\u5728 http \u6807\u5934\u4e2d\u63d0\u4ea4\u3002 \u8be5URL\u8bf7\u6c42\u5fc5\u987b\u5728\u5fae\u4fe1\u73af\u5883\u4e2d\u53d1\u9001\u3002 \u6bcf\u6b21\u53d1\u8d77\u652f\u4ed8\u90fd\u9700\u8981\u91cd\u65b0\u83b7\u53d6\u5fae\u4fe1",(0,r.jsx)(t.code,{children:"oauth_code"}),"\u548c",(0,r.jsx)(t.code,{children:"openid"}),"\u3002"]}),"\n",(0,r.jsx)(t.h3,{id:"\u8bf7\u6c42\u53c2\u6570",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c3\u6578\u540d\u7a31"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c3\u6578\u7de8\u78bc"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u662f\u5426\u5fc5\u586b"}),(0,r.jsx)(t.th,{children:"\u53c3\u6578\u985e\u578b"}),(0,r.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u5f00\u53d1\u8005ID"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"app_code"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,r.jsx)(t.td,{children:"String(32)"}),(0,r.jsx)(t.td,{children:"app_code\u7531QFPay\u5206\u914d\u7ed9\u5408\u4f5c\u4f19\u4f34"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u56de\u8c03\u5730\u5740"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"redirect_uri"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,r.jsx)(t.td,{children:"String(512)"}),(0,r.jsx)(t.td,{children:"\u8bf7\u6c42\u6210\u529f\u540e\uff0c\u7528\u6237\u5c06\u88ab\u91cd\u5b9a\u5411\u5230\u56de\u8c03\u5730\u5740"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u5546\u6236ID"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"mchid"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"}),(0,r.jsx)(t.td,{children:"String(16)"}),(0,r.jsx)(t.td,{children:"\u201cmchid\u201d\u662fQFPay\u4e3a\u6bcf\u4e2a\u5546\u6237\u5206\u914d\u7684\u552f\u4e00\u6807\u8bc6"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u7c3d\u540d"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"sign"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"\u6839\u636e\u7edf\u4e00\u6846\u67b6\u83b7\u5f97\u7684\u7b7e\u540d"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u83b7\u53d6\u5fae\u4fe1openid",children:"\u83b7\u53d6\u5fae\u4fe1openid"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-plaintext",children:"\nHTTP Request:\n\n{\n  https://openapi.qfpay.com/tool/v1/get_weixin_openid?code=011QipnO1yMIla1VJdoO1FUrnO1Qipnv\n}\n\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'def get_open_id(data):\n    \n    try:\n        r = requests.get(environment+"/tool/v1/get_weixin_openid",params=data,headers={\'X-QF-APPCODE\':app_code,\'X-QF-SIGN\':make_req_sign(data, client_key)})\n        print (r.request.url)\n        print (r.content)\n        if r.json()["respcd"]=="0000":\n            return r.json()["openid"]\n        else:\n            pass\n    except:\n        print("An exception occurred")\n'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"The above command returns JSON structured like this:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "resperr": "",\n  "respcd": 0000,\n  "respmsg": "",\n  "openid": "oo3Lss8d0hLOuyTuSJMVwLTk68JE"\n}\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["\u6bcf\u6b21\u8c03\u7528\u652f\u4ed8\u63a5\u53e3\u90fd\u5fc5\u987b\u83b7\u53d6\u65b0\u7684",(0,r.jsx)(t.code,{children:"oauth_code"}),"\u548c",(0,r.jsx)(t.code,{children:"openid"}),"\u3002 \u4e3a\u4e86\u8bf7\u6c42\u201copenid\u201d\uff0c\u5fc5\u987b\u5728 http \u6807\u5934\u4e2d\u63d0\u4ea4\u201cX-QF-APPCODE\u201d\u548c\u201cX-QF-SIGN\u201d\u3002"]})}),"\n",(0,r.jsx)(t.h3,{id:"http\u8bf7\u6c42-1",children:"HTTP\u8bf7\u6c42"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET ../tool/v1/get_weixin_openid"})}),"\n",(0,r.jsx)(t.h3,{id:"\u8bf7\u6c42\u53c2\u6570-1",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u4e8c\u7ea7\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(t.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,r.jsx)(t.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u5fae\u4fe1 oauth_code"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"code"})}),(0,r.jsx)(t.td,{children:"\u662f"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsxs)(t.td,{children:["\u8be5\u4ee3\u7801\u7531 ",(0,r.jsx)(t.a,{href:"#%E8%8E%B7%E5%8F%96%E5%BE%AE%E4%BF%A1oauth_code",children:"GET oauth_code \u8bf7\u6c42"})," \u8fd4\u56de\u3002 \u5b83\u662f\u552f\u4e00\u7684\uff0c\u53ea\u80fd\u4f7f\u7528\u4e00\u6b21\u3002"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u5546\u6237ID"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"mchid"})}),(0,r.jsx)(t.td,{children:"\u5426"}),(0,r.jsx)(t.td,{children:"String(16)"}),(0,r.jsx)(t.td,{children:"\u201cmchid\u201d\u662fQFPay\u4e3a\u6bcf\u4e2a\u5546\u6237\u5206\u914d\u7684\u552f\u4e00\u6807\u8bc6"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"\u54cd\u5e94\u53c2\u6570",children:"\u54cd\u5e94\u53c2\u6570"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u4e8c\u7ea7\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(t.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u53c2\u6570\u540d\u5b57"}),(0,r.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"openid"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{children:"String(64)"}),(0,r.jsx)(t.td,{children:"\u5fae\u4fe1 openid"}),(0,r.jsx)(t.td,{children:"\u6bcf\u4e2a\u5fae\u4fe1\u7528\u6237\u90fd\u4f1a\u5206\u914d\u4e00\u4e2a\u552f\u4e00\u7684openid"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"\u5fae\u4fe1\u7533\u8bf7\u652f\u4ed8",children:"\u5fae\u4fe1\u7533\u8bf7\u652f\u4ed8"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-plaintext",children:"\u6709\u5173\u4ee3\u7801\u8bf4\u660e\uff0c\u8bf7\u9009\u62e9\u5e26\u6709\u4ee5\u4e0b\u9009\u9879\u5361\u7684 Python\u3002\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'def payment(openid):\n    # Create parameter values for data payload\n    current_time = datetime.datetime.now().replace(microsecond=0)                                \n    # Body payload\n    txamt = \'1\' #In USD,EUR,etc. Cent\n    txcurrcd = \'THB\'\n    pay_type = \'800207\' \n    letters = string.digits   \n    out_trade_no = \'\'.join(random.choice(letters) for i in range(20)) \n    txdtm = current_time\n    key = client_key\n    \n    \n    data = {\'txamt\': txamt, \'txcurrcd\': txcurrcd, \'pay_type\': pay_type, \'out_trade_no\': out_trade_no, \'txdtm\': txdtm, \'sub_openid\':openid}    \n    \n    try:\n        r = requests.post(environment+"/trade/v1/payment",params=data,headers={\'X-QF-APPCODE\':app_code,\'X-QF-SIGN\':make_req_sign(data, key)})\n        if r.json()["respcd"]=="0000":\n            \n            return r.json()[\'pay_params\']\n        else:\n            pass\n    except:\n        print("An exception occurred")\n    \n    \napp = Flask(__name__)\n\n@app.route("/payment",methods=[\'GET\', \'POST\'])\ndef api_payment():\n    \n    if "MichroMessenger" in request.headers.get(\'User-Agent\'):  #get an oauth_code\n        print (get_out_code())\n        return redirect(get_out_code(), code=302)    \n    \n@app.route("/getcode",methods=[\'GET\', \'POST\'])\ndef api_get_code():      \n    print ("------------------------------------")\n    print (request.args)                      \n    print (request.args.get("code"))\n    code = request.args.get(\'code\')\n    print (code)\n    if code != "":    # user returned with oauth_code      \n        \n        sub_openid=get_open_id({"code": code})  # get open id using oauth_code\n        param=payment(sub_openid)   # payment request to QFPay\n        \n        # add necessary parameters and redirect\n        param["mchntnm"]="Pet Shop"\n        param["txamt"]="1"\n        param["currency"]="THB"\n        param["redirect_url"]="www.example.com"\n        return redirect("https://o2-th.qfapi.com/q/direct?"+urllib.parse.urlencode(param), code=302)             # direct user"""\n    else:\n        print("unable to obtain code")\n        return     \n\nif __name__ == \'__main__\':\n    app.run(host="127.0.0.1",port = 80)\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u5546\u6237\u53ef\u9009\u62e9\u5f00\u901a\u5fae\u4fe1\u5b9e\u540d\u8ba4\u8bc1\u3002 \u76ee\u524d\u5b9e\u540d\u8ba4\u8bc1\u4ec5\u9002\u7528\u4e8e\u4e2d\u56fd\u5927\u9646\u516c\u6c11\uff0c\u5305\u62ec\u771f\u5b9e\u59d3\u540d\u548c\u8eab\u4efd\u8bc1\u53f7\u7801\u3002 \u5982\u679c\u63d0\u4f9b\u8eab\u4efd\u8bc1\u660e\uff0c\u4ed8\u6b3e\u4eba\u7684\u94b1\u5305\u4fe1\u606f\uff08\u4f8b\u5982\u8fde\u63a5\u7684\u94f6\u884c\u5361\uff09\u5fc5\u987b\u4e0e\u5546\u5bb6\u63d0\u4f9b\u7684\u6570\u636e\u76f8\u540c\u3002 \u5982\u679c\u5ba2\u6237\u5c1a\u672a\u5c06\u5fae\u4fe1\u8d26\u6237\u7ed1\u5b9a\u94f6\u884c\u5361\uff0c\u4ecd\u53ef\u8fdb\u884c\u4ed8\u6b3e\u3002"}),"\n",(0,r.jsx)(t.h3,{id:"http-\u8bf7\u6c42",children:"HTTP \u8bf7\u6c42"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"POST ../trade/v1/payment"})," ",(0,r.jsx)(t.code,{children:"PayType: 800207"})]}),"\n",(0,r.jsx)(t.h3,{id:"\u8bf7\u6c42\u53c2\u6570-2",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u540d\u5b57"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u662f\u5426\u5fc5\u586b"}),(0,r.jsx)(t.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u516c\u5171\u652f\u4ed8\u53c2\u6570"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u8bf7\u53c2\u9605\u6709\u5173\u4ea4\u6613\u7684\u901a\u7528\u6587\u6863"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u5fae\u4fe1\u6388\u6743\u7801"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"sub_openid"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsxs)(t.td,{children:["\u5fae\u4fe1 OpenID. \u8bf7\u53c2\u9605 ",(0,r.jsx)(t.strong,{children:"GET openid"})," \u6587\u6863"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u6307\u5b9a\u4ed8\u6b3e\u65b9\u5f0f"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"limit_pay"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"\u7528\u4e8e\u9650\u5236\u4fe1\u7528\u5361\u4ea4\u6613"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u6269\u5c55\u5ba2\u6237\u4fe1\u606f"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"extend_info"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u5426"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsxs)(t.td,{children:["\u5b9e\u540d\u5ba2\u6237\u8eab\u4efd\u8bc6\u522b\u3002 \u8be5\u53c2\u6570\u76ee\u524d\u4ec5\u9002\u7528\u4e8e\u4e2d\u56fd\u5927\u9646\u516c\u6c11\uff0c\u5e76\u4e14\u9700\u8981\u9488\u5bf9\u6240\u9009\u7684",(0,r.jsx)(t.a,{href:"../../preparation/paycode#%E6%94%AF%E4%BB%98%E7%B1%BB%E5%9E%8B",children:"PayType"}),"\u4f7f\u7528\u5fae\u4fe1\u663e\u5f0f\u6fc0\u6d3b\u3002 \u53c2\u6570\u201cuser_creid\u201d\u4e2d\u5305\u542b\u6d88\u8d39\u8005\u7684",(0,r.jsx)(t.strong,{children:"\u8eab\u4efd\u8bc1\u53f7\u7801"}),"\uff0c\u201cuser_truename\u201d\u4e2d\u5fc5\u987b\u63d0\u4f9b\u7f16\u7801\u5f62\u5f0f\u6216\u6c49\u5b57\u4e66\u5199\u7684\u4ed8\u6b3e\u4eba",(0,r.jsx)(t.strong,{children:"\u771f\u5b9e\u59d3\u540d"}),'\u3002 \u4e00\u4e2a\u4f8b\u5b50\u5982\u4e0b\u6240\u793a\uff1b extend_info = \'{"user_creid":"430067798868676871","user_truename":"\\\\u5c0f\\\\u6797"}\'']})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"\u54cd\u5e94\u53c2\u6570-1",children:"\u54cd\u5e94\u53c2\u6570"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u4e8c\u7ea7\u53c2\u6570\u7f16\u7801"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53c2\u6570\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u53c2\u6570\u540d\u5b57"}),(0,r.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"pay_params"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"appId"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"String(16)"}),(0,r.jsx)(t.td,{children:"\u516c\u4f17\u53f7id"}),(0,r.jsx)(t.td,{children:"App ID\u7531\u5f00\u53d1\u8005\u5728\u5fae\u4fe1\u5f00\u53d1\u8005\u5e73\u53f0\u6ce8\u518c\u5c0f\u7a0b\u5e8f\u540e\u7531\u817e\u8baf\u63d0\u4f9b"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"timeStamp"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"String(32)"}),(0,r.jsx)(t.td,{children:"\u65f6\u95f4\u6233"}),(0,r.jsx)(t.td,{children:"\u5f53\u524d\u65f6\u95f4"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"nonceStr"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"String(32)"}),(0,r.jsx)(t.td,{children:"\u968f\u673a\u5b57\u7b26\u4e32"}),(0,r.jsx)(t.td,{children:"\u4e0d\u8d85\u8fc732\u4f4d\u7684\u968f\u673a\u5b57\u7b26\u4e32"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"package"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"String(128)"}),(0,r.jsx)(t.td,{children:"\u4ea4\u6613\u660e\u7ec6"}),(0,r.jsxs)(t.td,{children:["\u63a5\u53e3\u8fd4\u56de\u7684",(0,r.jsx)(t.code,{children:"prepay_id"}),"\u53c2\u6570\u503c\u683c\u5f0f\u4e3a\uff1aprepay_id=**"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"signType"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"String(32)"}),(0,r.jsx)(t.td,{children:"\u7b7e\u540d\u65b9\u6cd5"}),(0,r.jsx)(t.td,{children:"\u7b7e\u540d\u65b9\u6cd5, \u9ed8\u8ba4\uff1aMD5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"paySign"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"String(64)"}),(0,r.jsx)(t.td,{children:"\u7b7e\u540d"}),(0,r.jsx)(t.td,{children:"\u7b7e\u540d\u65b9\u6cd5, \u7b7e\u540d\uff1aMD5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u516c\u5171\u54cd\u5e94\u53c2\u6570"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"}),(0,r.jsx)(t.td,{children:"\u2014"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"txcurrcd"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"String(3)"}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["\u4ea4\u6613\u8d27\u5e01\u3002 \u67e5\u770b",(0,r.jsx)(t.a,{href:"../../preparation/paycode#%E6%94%AF%E4%BB%98%E5%B8%81%E7%A7%8D",children:"\u8d27\u5e01"})," \u8868\u4ee5\u83b7\u53d6\u53ef\u7528\u8d27\u5e01\u7684\u5b8c\u6574\u5217\u8868"]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u8c03\u7528\u5fae\u4fe1\u652f\u4ed8\u6a21\u5757",children:"\u8c03\u7528\u5fae\u4fe1\u652f\u4ed8\u6a21\u5757"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["\u76f4\u63a5\u5411\u63a5\u53e3\u63d0\u4ea4\u76f8\u5173\u53c2\u6570\uff0c\u6b64\u6b65\u9aa4\u65e0\u9700\u5728HTTP header\u4e2d\u5b9a\u4e49",(0,r.jsx)(t.code,{children:"X-QF-APPCODE"}),"\u6216",(0,r.jsx)(t.code,{children:"X-QF-SIGN"}),"\u3002"]})}),"\n",(0,r.jsx)(t.h3,{id:"http-\u8bf7\u6c42-1",children:"HTTP \u8bf7\u6c42"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET https://o2.qfpay.com/q/direct"})}),"\n",(0,r.jsx)(t.h3,{id:"\u8bf7\u6c42\u53c2\u6570-3",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,r.jsx)(t.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,r.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"mchntnm"})}),(0,r.jsx)(t.td,{children:"\u662f"}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsxs)(t.td,{children:["\u81ea\u5b9a\u4e49\u4f01\u4e1a\u540d\u79f0\u3002 \u5982\u679c\u53c2\u6570\u662f\u6c49\u5b57\uff0c\u5219\u9700\u8981",(0,r.jsx)(t.strong,{children:"UTF-8"}),"\u7f16\u7801"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"txamt"})}),(0,r.jsx)(t.td,{children:"\u662f"}),(0,r.jsx)(t.td,{children:"Int(11)"}),(0,r.jsx)(t.td,{children:"\u91d1\u989d"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"currency"})}),(0,r.jsx)(t.td,{children:"\u662f"}),(0,r.jsx)(t.td,{children:"String(3)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"goods_name"})}),(0,r.jsx)(t.td,{children:"\u5426"}),(0,r.jsx)(t.td,{children:"String(64)"}),(0,r.jsxs)(t.td,{children:["\u5b9a\u5236\u5546\u54c1\u540d\u79f0\u3002 \u5982\u679c\u53c2\u6570\u662f\u6c49\u5b57\uff0c\u5219\u9700\u8981",(0,r.jsx)(t.strong,{children:"UTF-8"}),"\u7f16\u7801"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"redirect_url"})}),(0,r.jsx)(t.td,{children:"\u662f"}),(0,r.jsx)(t.td,{children:"String(512)"}),(0,r.jsxs)(t.td,{children:["\u4ed8\u6b3e\u5b8c\u6210\u540e\u91cd\u5b9a\u5411 URL\u3002 ",(0,r.jsx)(t.strong,{children:"urlencode"})," \u5904\u7406\u8be5\u53c2\u6570"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"package"})}),(0,r.jsx)(t.td,{children:"\u662f"}),(0,r.jsx)(t.td,{children:"String(128)"}),(0,r.jsx)(t.td,{children:"\u5fae\u4fe1\u8c03\u7528\u652f\u4ed8\u63a5\u53e3\u540e\u8fd4\u56de\u53c2\u6570"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"timeStamp"})}),(0,r.jsx)(t.td,{children:"\u662f"}),(0,r.jsx)(t.td,{children:"String(32)"}),(0,r.jsx)(t.td,{children:"\u5fae\u4fe1\u8c03\u7528\u652f\u4ed8\u63a5\u53e3\u540e\u8fd4\u56de\u53c2\u6570"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"signType"})}),(0,r.jsx)(t.td,{children:"\u662f"}),(0,r.jsx)(t.td,{children:"String(32)"}),(0,r.jsx)(t.td,{children:"\u5fae\u4fe1\u8c03\u7528\u652f\u4ed8\u63a5\u53e3\u540e\u8fd4\u56de\u53c2\u6570"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"paySign"})}),(0,r.jsx)(t.td,{children:"\u662f"}),(0,r.jsx)(t.td,{children:"String(64)"}),(0,r.jsx)(t.td,{children:"\u5fae\u4fe1\u8c03\u7528\u652f\u4ed8\u63a5\u53e3\u540e\u8fd4\u56de\u53c2\u6570"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"appId"})}),(0,r.jsx)(t.td,{children:"\u662f"}),(0,r.jsx)(t.td,{children:"String(16)"}),(0,r.jsx)(t.td,{children:"\u5fae\u4fe1\u8c03\u7528\u652f\u4ed8\u63a5\u53e3\u540e\u8fd4\u56de\u53c2\u6570"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"nonceStr"})}),(0,r.jsx)(t.td,{children:"\u662f"}),(0,r.jsx)(t.td,{children:"String(32)"}),(0,r.jsx)(t.td,{children:"\u5fae\u4fe1\u8c03\u7528\u652f\u4ed8\u63a5\u53e3\u540e\u8fd4\u56de\u53c2\u6570"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const d={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(d.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>b});var r=n(96540),d=n(34164),i=n(23104),s=n(56347),l=n(205),c=n(57485),a=n(31682),h=n(89466);function o(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return o(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:d}}=e;return{value:t,label:n,attributes:r,default:d}}))}(n);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function j(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const d=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(d.location.search);t.set(i,e),d.replace({...d.location,search:t.toString()})}),[i,d])]}function u(e){const{defaultValue:t,queryString:n=!1,groupId:d}=e,i=x(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[a,o]=p({queryString:n,groupId:d}),[u,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[d,i]=(0,h.Dv)(n);return[d,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:d}),y=(()=>{const e=a??u;return j({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{y&&c(y)}),[y]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),g(e)}),[o,g,i]),tabValues:i}}var g=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function m(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.a_)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),d=l[n].value;d!==r&&(a(t),s(d))},o=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:o,onClick:h,...i,className:(0,d.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function _(e){let{lazy:t,children:n,selectedValue:d}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===d));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==d})))})}function A(e){const t=u(e);return(0,f.jsxs)("div",{className:(0,d.A)("tabs-container",y.tabList),children:[(0,f.jsx)(m,{...e,...t}),(0,f.jsx)(_,{...e,...t})]})}function b(e){const t=(0,g.A)();return(0,f.jsx)(A,{...e,children:o(e.children)},String(t))}},85627:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/wechat_jsapi_process-c66ac2b5003793d764fc381851054d0e.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const d={},i=r.createContext(d);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);